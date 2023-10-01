import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useEffect, useState } from "react";
export default function AddTask({ setTasks, tasks }) {
  const [textInput, setTextInput] = useState("");
  const addTask = () => {
    if (textInput && textInput.trim() !== "") {
      const newTasks = [...tasks, textInput];
      setTasks(newTasks);
      setTextInput("");
      Keyboard.dismiss();
    }
  };

  useEffect(() => {
    (async () => {
      const storage = await AsyncStorage.getItem("tasks");
      if (storage) {
        setTasks(JSON.parse(storage));
      }
    })();
  }, []);
  useEffect(() => {
    (async () => {
      await AsyncStorage.setItem("tasks", JSON.stringify(tasks));
    })();
  }, [tasks]);
  return (
    <View style={styles.bottom}>
      <TextInput
        value={textInput}
        onChangeText={(text) => setTextInput(text)}
        style={[styles.textInput, !textInput && styles.centeredText]}
        placeholder="White a task"
        placeholderTextColor="#C0C0C0"
      />
      <TouchableOpacity style={styles.addButton} onPress={addTask}>
        <View>
          <Icon name="add-sharp" size={32} color="#C0C0C0"></Icon>
        </View>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  centeredText: {
    textAlign: "center",
  },

  bottom: {
    flexDirection: "row",
    position: "absolute",
    bottom: 36,
    alignSelf: "center",
    gap: 20,
    paddingTop: 10,
    backgroundColor: "#E8EAED",
  },
  addButton: {
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    opacity: 0.6,
    backgroundColor: "#fff",
    borderRadius: 52,
  },
  textInput: {
    backgroundColor: "#fff",
    color: "black",
    paddingVertical: 15,
    borderRadius: 60,
    paddingHorizontal: 20,
    width: "80%",
  },
});
