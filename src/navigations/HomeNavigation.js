import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/home/Home';
import ItemDetails from '../screens/home/ItemDetails';
import ROUTES from './Index';


const Stack = createStackNavigator();
const HomeNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={ROUTES.HOME.HOME} component={Home}/>
      <Stack.Screen name={ROUTES.HOME.ITEM_DETAILS} component={ItemDetails}/>
    </Stack.Navigator>
  )
}

export default HomeNavigation
