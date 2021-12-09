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

const TaskModal = () => {
  const [itemList, setItemList] = useState([]);
  const [itemSelected, setItemSelected] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
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
      <Modal animationType="slide" visible={modalVisible}>
        <View style={styles.modalTitle}>
          <Text>Confirme su accion</Text>
        </View>
        <View style={styles.modalMessage}>
          <Text>Esta seguro que desea eliminar {itemSelected.value}</Text>
        </View>
        <View style={styles.modalButton}>
          <Button
            title={"CONFIRMAR"}
            onPress={deleteHandler.bind(this, itemSelected.id)}
          />
        </View>
      </Modal>
    </View>
  );
};
export default TaskModal;
