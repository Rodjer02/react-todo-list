import AsyncStorage from "@react-native-async-storage/async-storage";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Task({ taskText, index, setTasks }) {
  const deleteTask = () => {
    setTasks((prevState) => {
      const newTasks = prevState.filter((el, curIndex) => {
        return curIndex !== index;
      });

      return newTasks;
    });
  };
  return (
    <TouchableOpacity onPress={deleteTask}>
      <View style={styles.container}>
        <View style={styles.left}>
          <View style={styles.square} />
          <Text>{taskText}</Text>
        </View>
        <View style={styles.right}></View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  left: {
    flexDirection: "row",
    gap: 15,
    maxWidth: "80%",
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: "#55BCF6",
    opacity: 0.4,
    borderRadius: 5,
  },
  right: {
    width: 12,
    height: 12,
    borderWidth: 2,
    borderColor: "#55BCF6",
    borderRadius: 5,
  },
});
