import React, { useState } from "react";
import {
  View,
  Button,
  Text,
  Modal,
  FlatList,
  TouchableOpacity,
  TextInput,
} from "react-native";

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
    <View>
      <View>
        <TextInput
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
        {itemList.length > 0 ? (
          <FlatList
            data={itemList}
            keyExtractor={(item) => item.id.toString()}
            renderItem={(data) => (
              <View>
                <Text>{data.item.text}</Text>
                <Button title="X" onPress={() => deleteHandler(data.item.id)} />
              </View>
            )}
          />
        ) : (
          <Text>No Tasks</Text>
        )}
      </View>
    </View>
  );
};
export default TaskList;
