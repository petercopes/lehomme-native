import React, { useState } from "react";
import {
  View,
  Button,
  Text,
  Modal,
  FlatList,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";
const TaskItem = ({ item, pressHandler }) => {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <Text style={styles.textArea}>{item.text}</Text>
        <Button
          style={styles.button}
          title="X"
          onPress={() => pressHandler(item.id)}
        />
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    backgroundColor: "rgba(0,0,0,0.1)",
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 2,
  },
  textArea: {
    margin: 5,
    fontWeight: 600,
  },
  button: {
    width: "fit-content",
  },
});

export default TaskItem;
