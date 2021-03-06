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
  SafeAreaView,
} from "react-native";
import TaskItem from "../TaskItem";

const TaskList = () => {
  const [itemList, setItemList] = useState([]);
  const [itemSelected, setItemSelected] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const [textInput, setTextInput] = useState("");
  const deleteHandler = (id) => {
    setItemSelected({});
    setItemList((items) => items.filter((e) => e.id !== id));
    setModalVisible(!modalVisible);
  };
  const modalHandler = (id) => {
    setItemSelected(itemList.find((e) => e.id === id));
    setModalVisible(!modalVisible);
  };
  return (
    <SafeAreaView>
      <View>
        <View style={styles.container}>
          <TextInput
            s
            style={styles.textInput}
            placeholder="Add Task"
            onChangeText={(text) => setTextInput(text)}
            value={textInput}
          />
          <Button
            title="Add"
            onPress={() => {
              if (textInput !== "") {
                setItemList([
                  ...itemList,
                  { id: Math.random(), text: textInput },
                ]);
                setTextInput("");
              }
            }}
          />
        </View>
        {itemList.length > 0 ? (
          <FlatList
            data={itemList}
            keyExtractor={(item) => item.id.toString()}
            renderItem={(data) => (
              <TaskItem pressHandler={deleteHandler} item={data.item} />
            )}
          />
        ) : (
          <Text style={styles.texAlert}>No Tasks</Text>
        )}
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: "rgba(0,0,0,0.08)",
    justifyContent: "space-between",
    borderRadius: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    padding: 10,
    marginBottom: 10,
    fontWeight: "bold",
    textAlign: "center",
    width: "100%",
    padding: 10,
  },
  button: {
    width: "fit-content",
  },
  texAlert: {
    fontSize: 20,
    fontWeight: "200",
    textAlign: "center",
  },
});
export default TaskList;
