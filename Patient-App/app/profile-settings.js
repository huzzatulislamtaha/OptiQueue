import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  ScrollView,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { colors, fonts } from "../constants/theme";

export default function ProfileSettings() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");

  const saveProfile = () => {
    Alert.alert(
      "Profile Updated",
      "Your profile information has been saved locally."
    );
  };

  return (
    <View style={styles.screen}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <View style={styles.header}>
          <Pressable
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <Ionicons
              name="arrow-back"
              size={20}
              color={colors.textPrimary}
            />
          </Pressable>

          <View>
            <Text style={styles.title}>Profile Settings</Text>
            <Text style={styles.subtitle}>
              Manage your account details
            </Text>
          </View>
        </View>

        <View style={styles.accountCard}>
          <View style={styles.avatar}>
            <Ionicons name="person" size={25} color={colors.primary} />
          </View>

          <Text style={styles.accountName}>Patient User</Text>
          <Text style={styles.accountType}>Patient Account</Text>
        </View>

        <View style={styles.formCard}>
          <Text style={styles.label}>Full Name</Text>
          <View style={styles.inputBox}>
            <Ionicons
              name="person-outline"
              size={18}
              color={colors.textMuted}
            />
            <TextInput
              value={name}
              onChangeText={setName}
              placeholder="Enter your full name"
              placeholderTextColor={colors.textMuted}
              style={styles.input}
            />
          </View>

          <Text style={styles.label}>Mobile Number</Text>
          <View style={styles.inputBox}>
            <Ionicons
              name="call-outline"
              size={18}
              color={colors.textMuted}
            />
            <TextInput
              value={mobile}
              onChangeText={setMobile}
              placeholder="01XXXXXXXXX"
              placeholderTextColor={colors.textMuted}
              keyboardType="phone-pad"
              style={styles.input}
            />
          </View>

          <Text style={styles.label}>Email</Text>
          <View style={styles.inputBox}>
            <Ionicons
              name="mail-outline"
              size={18}
              color={colors.textMuted}
            />
            <TextInput
              value={email}
              onChangeText={setEmail}
              placeholder="Enter your email"
              placeholderTextColor={colors.textMuted}
              keyboardType="email-address"
              style={styles.input}
            />
          </View>
        </View>

        <Pressable style={styles.saveButton} onPress={saveProfile}>
          <Text style={styles.saveText}>Save Changes</Text>
        </Pressable>

        <Pressable
          style={styles.passwordButton}
          onPress={() =>
            Alert.alert(
              "Change Password",
              "Password management will be connected to the backend later."
            )
          }
        >
          <Ionicons
            name="lock-closed-outline"
            size={18}
            color={colors.primary}
          />
          <Text style={styles.passwordText}>Change Password</Text>
          <Ionicons
            name="chevron-forward"
            size={16}
            color={colors.textMuted}
          />
        </Pressable>
      </ScrollView>
    </View>
  );
}

const styles = {
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },

  content: {
    padding: 18,
    paddingBottom: 30,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 18,
  },

  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 11,
  },

  title: {
    fontSize: 20,
    color: colors.textPrimary,
    fontFamily: fonts.bold,
  },

  subtitle: {
    marginTop: 2,
    fontSize: 10,
    color: colors.textSecondary,
    fontFamily: fonts.regular,
  },

  accountCard: {
    backgroundColor: colors.white,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 22,
    alignItems: "center",
    marginBottom: 16,
  },

  avatar: {
    width: 58,
    height: 58,
    borderRadius: 18,
    backgroundColor: colors.primaryLight,
    alignItems: "center",
    justifyContent: "center",
  },

  accountName: {
    marginTop: 10,
    fontSize: 16,
    color: colors.textPrimary,
    fontFamily: fonts.bold,
  },

  accountType: {
    marginTop: 3,
    fontSize: 10,
    color: colors.textSecondary,
    fontFamily: fonts.regular,
  },

  formCard: {
    backgroundColor: colors.white,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 16,
  },

  label: {
    marginBottom: 7,
    fontSize: 11,
    color: colors.textPrimary,
    fontFamily: fonts.semiBold,
  },

  inputBox: {
    height: 48,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.background,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    marginBottom: 15,
  },

  input: {
    flex: 1,
    marginLeft: 8,
    fontSize: 12,
    color: colors.textPrimary,
    fontFamily: fonts.regular,
  },

  saveButton: {
    height: 50,
    borderRadius: 13,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 16,
  },

  saveText: {
    color: colors.white,
    fontSize: 13,
    fontFamily: fonts.bold,
  },

  passwordButton: {
    height: 54,
    marginTop: 12,
    paddingHorizontal: 14,
    backgroundColor: colors.white,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.border,
    flexDirection: "row",
    alignItems: "center",
  },

  passwordText: {
    flex: 1,
    marginLeft: 9,
    fontSize: 12,
    color: colors.textPrimary,
    fontFamily: fonts.semiBold,
  },
};