import React from "react";
import { View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createButtonTabNavigator } from "@react-navigation/bottom-tabs";

function Home() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#03cafc",
      }}
    >
      <Text style={{ fontSize: 20, color: "#ffffff", fontWeight: "800" }}>
        Home is here!
      </Text>
    </View>
  );
}

function Contact({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#c203fc",
      }}
    >
      <Text style={{ fontSize: 20, color: "#ffffff", fontWeight: "800" }}>
        Contact is here!
      </Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

function About({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#48d969",
      }}
    >
      <Text style={{ fontSize: 20, color: "#ffffff", fontWeight: "800" }}>
        About is here!
      </Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const Tab = createButtonTabNavigator()

function MyTabs() {
  return (
      <Tab.Navigator initial="Home" tabOptions={{
          activeTintColor:"#e91e63"
      }}>
          <Tab.Screen />
      </Tab.Navigator>
  )
}

export default function TabNavigation() {
  return <View></View>;
}
