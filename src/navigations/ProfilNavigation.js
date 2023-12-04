import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Profile from '../screens/profile/Profile';
import EditProfile from '../screens/profile/EditProfile';
import ROUTES from './Index';


const Stack = createStackNavigator();
const ProfilNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={ROUTES.PROFILE.PROFILE} component={Profile}/>
      <Stack.Screen name={ROUTES.PROFILE.EDIT_PROFILE} component={EditProfile}/>
    </Stack.Navigator>
  )
}

export default ProfilNavigation

const styles = StyleSheet.create({})