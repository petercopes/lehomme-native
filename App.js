import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import TaskList from "./components/Tasks/TaskList";

export default function App() {
  return (
    <SafeAreaView>
      <TaskList></TaskList>
    </SafeAreaView>
  );
}
