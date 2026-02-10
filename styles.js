import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F3EE",
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  bigNumber: {
    fontSize: 160,
    fontWeight: "800",
    color: "#111827",
  },
  navBar: {
    flexDirection: "row",
    borderTopWidth: 1,
    borderTopColor: "#DEDAD2",
    backgroundColor: "#F5F3EE",
    paddingBottom: 18,
    paddingTop: 10,
    paddingHorizontal: 12,
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    gap: 4,
  },
  navLabel: {
    fontSize: 12,
    fontWeight: "600",
  },
  activeColor: {
    color: "#111827",
  },
  inactiveColor: {
    color: "#6B7280",
  },
});

export default styles;
