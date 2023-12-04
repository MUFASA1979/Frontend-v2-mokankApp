import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../screens/auth/Login';
import Register from '../screens/auth/Register';



const Stack = createStackNavigator();
const AuthNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='login' component={Login}/>
      <Stack.Screen name='register' component={Register}/>
    </Stack.Navigator>
  )
}

export default AuthNavigation

