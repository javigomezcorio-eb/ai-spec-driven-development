import React, { useState } from "react";
import { SafeAreaView, View, Text, Pressable } from "react-native";
import { Feather, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import styles from "./styles";

export default function App() {
  const [screen, setScreen] = useState(1);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.bigNumber}>{screen}</Text>
      </View>
      <View style={styles.navBar}>
        <Pressable style={styles.navItem} onPress={() => setScreen(1)}>
          <Feather
            name="home"
            size={24}
            color={screen === 1 ? styles.activeColor.color : styles.inactiveColor.color}
          />
          <Text style={[styles.navLabel, screen === 1 ? styles.activeColor : styles.inactiveColor]}>
            Discover
          </Text>
        </Pressable>
        <Pressable style={styles.navItem} onPress={() => setScreen(2)}>
          <Feather
            name="heart"
            size={24}
            color={screen === 2 ? styles.activeColor.color : styles.inactiveColor.color}
          />
          <Text style={[styles.navLabel, screen === 2 ? styles.activeColor : styles.inactiveColor]}>
            Saved
          </Text>
        </Pressable>
        <Pressable style={styles.navItem} onPress={() => setScreen(3)}>
          <MaterialCommunityIcons
            name="ticket-outline"
            size={24}
            color={screen === 3 ? styles.activeColor.color : styles.inactiveColor.color}
          />
          <Text style={[styles.navLabel, screen === 3 ? styles.activeColor : styles.inactiveColor]}>
            Tickets
          </Text>
        </Pressable>
        <Pressable style={styles.navItem} onPress={() => setScreen(4)}>
          <Ionicons
            name="person-outline"
            size={24}
            color={screen === 4 ? styles.activeColor.color : styles.inactiveColor.color}
          />
          <Text style={[styles.navLabel, screen === 4 ? styles.activeColor : styles.inactiveColor]}>
            Account
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
