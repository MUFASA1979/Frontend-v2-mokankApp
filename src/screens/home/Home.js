import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Search from "../../components/Search";
import CategoryList from "../../components/CategoryList";
import { ScrollView } from "react-native-gesture-handler";
import ItemList from "../../components/ItemList";

const Home = () => {
  return (
    <View>
      {/**SEARCH */}
      <View>
        <Search />
      </View>
      {/** CATEGORIES */}
      <View>
        <ScrollView horizontal contentContainerStyle={{}}>
          <CategoryList />
        </ScrollView>
      </View>
      {/** ITEMS */}
      <View>
        <ScrollView contentContainerStyle={{}}>
          <ItemList/>
        </ScrollView>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
