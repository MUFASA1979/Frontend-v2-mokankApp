import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ROUTES from './Index';
import CreateItem from '../screens/createItem/CreateItem';


const Stack = createStackNavigator();
const CreateItemNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={ROUTES.CREATE_ITEM.CREATE_ITEM} component={CreateItem} />
    </Stack.Navigator>
  )
}

export default CreateItemNavigation

const styles = StyleSheet.create({})