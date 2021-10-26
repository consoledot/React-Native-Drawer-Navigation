import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default function Home() {
  return (
    <View>
      <View>
        <Text>Home is here</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#03cafc",
  },
  text: {
    fontSize: 20,
    color: "#ffffff",
    fontWeight: "800",
  },
});
