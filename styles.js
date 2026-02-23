import { StyleSheet } from "react-native";

const lightColors = {
  background: "#F5F3EE",
  textActive: "#111827",
  textInactive: "#6B7280",
  navBorder: "#DEDAD2",
  indicator: "#111827",
};

const darkColors = {
  background: "#1F2937",
  textActive: "#F9FAFB",
  textInactive: "#9CA3AF",
  navBorder: "#374151",
  indicator: "#F9FAFB",
};

export default function getStyles(isDark) {
  const colors = isDark ? darkColors : lightColors;

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    content: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    bigNumber: {
      fontSize: 160,
      fontWeight: "800",
      color: colors.textActive,
    },
    navBar: {
      flexDirection: "row",
      borderTopWidth: 1,
      borderTopColor: colors.navBorder,
      backgroundColor: colors.background,
      paddingBottom: 18,
      paddingTop: 10,
      paddingHorizontal: 12,
    },
    navItem: {
      flex: 1,
      alignItems: "center",
      gap: 4,
    },
    activeIndicator: {
      width: 6,
      height: 6,
      borderRadius: 3,
      backgroundColor: colors.indicator,
    },
    activeIndicatorHidden: {
      opacity: 0,
    },
    activeIndicatorVisible: {
      opacity: 1,
    },
    navLabel: {
      fontSize: 12,
      fontWeight: "600",
    },
    activeColor: {
      color: colors.textActive,
    },
    inactiveColor: {
      color: colors.textInactive,
    },
    themeToggle: {
      position: "absolute",
      top: 16,
      right: 16,
      padding: 8,
    },
  });
}
