import { StatusBar } from "expo-status-bar";
import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <>
      <View style={{ flex: 1, alignItems: "center" }}>
        <StatusBar style="light" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
