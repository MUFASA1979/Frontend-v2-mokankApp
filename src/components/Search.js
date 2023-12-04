import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TextInput } from "react-native-gesture-handler";
import { Image } from "react-native";

const Search = () => {
  return (
    <View>
      <TextInput
        placeholder="Search"
        style={{
          width: "90%",
          height: "100%",
          borderWidth: 2,
          borderRadius: 17,
          paddingHorizontal: 50,
        }}
        placeholderTextColor={""}
      />
      <Image
        source={{ uri: "" }}
        style={{
          width: 20,
          height: 20,
          position: "absolute",
          left: 30,
        }}
      />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({});
