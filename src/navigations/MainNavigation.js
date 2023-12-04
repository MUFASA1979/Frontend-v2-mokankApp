import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeNavigation from './HomeNavigation';
import CreateItemNavigation from './CreateItemNavigation';
import ProfilNavigation from './ProfilNavigation';
import ROUTES from './Index';


const Tab = createBottomTabNavigator();
const MainNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown:false}}>
      <Tab.Screen name={ROUTES.HOME.HOME_NAVIGATOR} component={HomeNavigation}/>
      <Tab.Screen name={ROUTES.CREATE_ITEM.CREATE_ITEM_NAVIGATOR} component={CreateItemNavigation} />
      <Tab.Screen name={ROUTES.PROFILE.PROFILE_NAVIGATOR} component={ProfilNavigation} />
    </Tab.Navigator>
  )
}

export default MainNavigation