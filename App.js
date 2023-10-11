import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  FlatList,
  Platform,
} from "react-native";
import Task from "./component/Task";
import { useState, useEffect } from "react";
import AddTask from "./component/AddTask";

export default function App() {
  const [tasks, setTasks] = useState(["First project", "To do list"]);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.top}>
          <Text style={styles.heading}>Today's tasks</Text>
          <FlatList
            style={styles.tasksBox}
            data={tasks}
            keyExtractor={(_, index) => index}
            renderItem={({ index, item }) => {
              return (
                <View>
                  <Task index={index} taskText={item} setTasks={setTasks} />
                </View>
              );
            }}
          />
        </View>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "position" : "height"}
        >
          <AddTask setTasks={setTasks} tasks={tasks} />
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tasksBox: {
    height: "80%",
    flexDirection: "column",
    gap: 20,
  },
  container: {
    paddingTop: 94,
    paddingHorizontal: 20,
    backgroundColor: "#E8EAED",
    width: "100%",
    height: "100%",
    justifyContent: "space-between",
  },
  heading: {
    marginBottom: 30,
    fontSize: 24,
    fontWeight: "700",
  },
  taskContainer: {
    flexDirection: "column",
    gap: 18,
    marginBottom: 30,
    fontWeight: 700,
  },
});
