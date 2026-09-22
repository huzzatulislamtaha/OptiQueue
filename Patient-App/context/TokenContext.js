import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { SERVICES, formatToken, formatWait } from '../constants/services';

const TokenContext = createContext(null);

const INITIAL_QUEUES = {
  general: { serving: 21, next: 28 },
  specialist: { serving: 14, next: 22 },
  diagnostic: { serving: 8, next: 11 },
  pharmacy: { serving: 5, next: 7 },
};

function buildNotification(id, icon, title, message) {
  return {
    id,
    icon,
    title,
    message,
    time: 'Just now',
    unread: true,
    createdAt: Date.now(),
  };
}

export function TokenProvider({ children }) {
  const [queues, setQueues] = useState(INITIAL_QUEUES);
  const [activeToken, setActiveToken] = useState(null);
  const [notifications, setNotifications] = useState([
    buildNotification(
      1,
      'pulse',
      'Queue is Live',
      'Real-time queue updates are active.'
    ),
  ]);
  const notifId = useRef(2);
  const prevPosition = useRef(null);
  const notifiedServing = useRef(false);

  const addNotification = useCallback((icon, title, message) => {
    const id = notifId.current++;
    setNotifications((prev) => [
      buildNotification(id, icon, title, message),
      ...prev,
    ]);
  }, []);

  const getService = useCallback(
    (serviceId) => SERVICES.find((s) => s.id === serviceId),
    []
  );

  const getQueueSize = useCallback(
    (serviceId) => {
      const queue = queues[serviceId];
      if (!queue) return 0;
      return Math.max(0, queue.next - queue.serving - 1);
    },
    [queues]
  );

  const getEstimatedWait = useCallback(
    (serviceId, position) => {
      const service = getService(serviceId);
      if (!service || position <= 0) return 'Now';
      return formatWait(position * service.avgMinutes);
    },
    [getService]
  );

  const getServiceStats = useCallback(
    (serviceId) => {
      const service = getService(serviceId);
      const queue = queues[serviceId];
      const waiting = getQueueSize(serviceId);
      const waitMinutes = waiting * (service?.avgMinutes || 4);
      return {
        waiting,
        waitTime: formatWait(waitMinutes),
        serving: queue ? formatToken(service.prefix, queue.serving) : '--',
      };
    },
    [getService, getQueueSize, queues]
  );

  const getTokenPosition = useCallback(
    (token) => {
      if (!token) return 0;
      const queue = queues[token.serviceId];
      if (!queue) return 0;
      return Math.max(0, token.number - queue.serving);
    },
    [queues]
  );

  const getTokenStatus = useCallback(
    (token) => {
      if (!token) return null;
      const position = getTokenPosition(token);
      if (position === 0) return 'serving';
      return 'waiting';
    },
    [getTokenPosition]
  );

  const getLiveQueue = useCallback(
    (serviceId) => {
      const service = getService(serviceId);
      const queue = queues[serviceId];
      if (!service || !queue) return [];

      const items = [];
      for (let n = queue.serving; n < queue.next; n++) {
        const isServing = n === queue.serving;
        const isYou = activeToken?.serviceId === serviceId && activeToken?.number === n;
        items.push({
          token: formatToken(service.prefix, n),
          number: n,
          status: isServing ? 'Serving' : isYou ? 'You' : 'Waiting',
        });
      }
      return items;
    },
    [activeToken, getService, queues]
  );

  const createToken = useCallback(
    (serviceId) => {
      const service = getService(serviceId);
      if (!service) return null;

      const queue = queues[serviceId];
      const number = queue.next;
      const newToken = {
        id: `${serviceId}-${number}`,
        serviceId,
        serviceName: service.title,
        prefix: service.prefix,
        number,
        counter: service.counter,
        createdAt: Date.now(),
      };

      setQueues((prev) => ({
        ...prev,
        [serviceId]: { ...prev[serviceId], next: prev[serviceId].next + 1 },
      }));

      setActiveToken(newToken);
      prevPosition.current = number - queue.serving;
      notifiedServing.current = false;

      const tokenLabel = formatToken(service.prefix, number);
      addNotification(
        'ticket',
        'Token Confirmed',
        `Your token ${tokenLabel} for ${service.title} is ready.`
      );

      return newToken;
    },
    [addNotification, getService, queues]
  );

  const cancelToken = useCallback(() => {
    if (!activeToken) return;

    const tokenLabel = formatToken(activeToken.prefix, activeToken.number);
    setActiveToken(null);
    prevPosition.current = null;
    notifiedServing.current = false;

    addNotification(
      'close-circle',
      'Token Cancelled',
      `Token ${tokenLabel} has been cancelled.`
    );
  }, [activeToken, addNotification]);

  const markAllRead = useCallback(() => {
    setNotifications((prev) =>
      prev.map((n) => ({ ...n, unread: false }))
    );
  }, []);

  const unreadCount = notifications.filter((n) => n.unread).length;

  // Simulate queue advancing every 15 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setQueues((prev) => {
        const next = { ...prev };
        let advanced = false;

        SERVICES.forEach((service) => {
          const queue = next[service.id];
          if (queue.serving < queue.next - 1) {
            next[service.id] = {
              ...queue,
              serving: queue.serving + 1,
            };
            advanced = true;
          }
        });

        if (advanced && activeToken) {
          const servingService = SERVICES.find(
            (s) => s.id === activeToken.serviceId
          );
          const servingQueue = next[activeToken.serviceId];

          if (servingService && servingQueue) {
            const servingLabel = formatToken(
              servingService.prefix,
              servingQueue.serving
            );
            addNotification(
              'person',
              'Now Serving',
              `Currently serving token ${servingLabel} at ${servingService.title}.`
            );
          }
        }

        return next;
      });
    }, 15000);

    return () => clearInterval(interval);
  }, [activeToken, addNotification]);

  // Smart alerts when user's position changes
  useEffect(() => {
    if (!activeToken) return;

    const position = getTokenPosition(activeToken);
    const status = getTokenStatus(activeToken);
    const tokenLabel = formatToken(activeToken.prefix, activeToken.number);

    if (status === 'serving' && !notifiedServing.current) {
      notifiedServing.current = true;
      addNotification(
        'checkmark-circle',
        'Your Turn!',
        `Token ${tokenLabel} — please proceed to ${activeToken.counter}.`
      );
      prevPosition.current = 0;
      return;
    }

    if (
      prevPosition.current !== null &&
      position > 0 &&
      position < prevPosition.current
    ) {
      addNotification(
        'time',
        'Queue Update',
        position <= 2
          ? `Almost your turn! Only ${position} patient${position === 1 ? '' : 's'} ahead.`
          : `${position} patients ahead of you. Est. wait: ${getEstimatedWait(activeToken.serviceId, position)}.`
      );
    }

    prevPosition.current = position;
  }, [queues, activeToken, getTokenPosition, getTokenStatus, getEstimatedWait, addNotification]);

  const value = {
    services: SERVICES,
    queues,
    activeToken,
    notifications,
    unreadCount,
    getService,
    getQueueSize,
    getEstimatedWait,
    getServiceStats,
    getTokenPosition,
    getTokenStatus,
    getLiveQueue,
    createToken,
    cancelToken,
    markAllRead,
  };

  return (
    <TokenContext.Provider value={value}>{children}</TokenContext.Provider>
  );
}

export function useToken() {
  const ctx = useContext(TokenContext);
  if (!ctx) {
    throw new Error('useToken must be used within TokenProvider');
  }
  return ctx;
}
