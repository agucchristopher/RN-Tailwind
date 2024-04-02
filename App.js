import {
  View,
  Text,
  StatusBar,
  useWindowDimensions,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { useFonts } from "expo-font";
const App = () => {
  let [loaded, error] = useFonts({
    PBold: require("./assets/Poppins-SemiBold.ttf"),
  });
  let [count, setcount] = useState(51);
  let [activeCount, setactiveCount] = useState(false);
  let { width, height } = useWindowDimensions();
  if (!loaded) return <Text>loading..</Text>;
  let countDown = () => {
    console.log("Count: ", count);
    setactiveCount(true);
    if (count <= 0) {
      setactiveCount(false);
      setcount(0);
      return;
    } else {
      setTimeout(() => {
        setcount((data) => data - 1);
      }, 500);
    }
  };
  return (
    <View
      style={{ backgroundColor: "#303431", flex: 1, justifyContent: "center" }}
    >
      <StatusBar backgroundColor={"#303431"} />
      {/* <Text>App</Text> */}
      <View
        style={{
          height: height * 0.4,
          borderWidth: 15,
          borderRadius: width * 0.4,
          width: width * 0.8,
          borderLeftColor: "#3D3F3E",
          borderTopColor: "#3D3F3E",
          borderBottomColor: "#8CBD83",
          alignSelf: "center",
          justifyContent: "center",
          borderRightColor: "#8CBD83",
          borderRightWidth: 14,
          borderBottomRightRadius: -15,
          borderTopRightRadius: -15,
          borderCurve: "circular",
        }}
      >
        <Text
          style={{
            alignSelf: "center",
            color: "white",
            fontFamily: "PBold",
            fontSize: 35,
          }}
        >
          00:00:{count}
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignSelf: "center",
          gap: 20,
          marginTop: 45,
        }}
      >
        <TouchableOpacity
          onPress={() => countDown()}
          style={{
            height: 50,
            backgroundColor: "#8CBD83",
            width: 50,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 1000,
          }}
        >
          <FontAwesome
            color={"black"}
            size={20}
            name={!activeCount ? "play" : "pause"}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: 50,
            backgroundColor: "#3D3F3E",
            width: 50,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 1000,
          }}
        >
          <FontAwesome color={"white"} size={20} name="repeat" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default App;
