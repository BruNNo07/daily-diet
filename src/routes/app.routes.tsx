import {createNativeStackNavigator} from '@react-navigation/native-stack'
import React from 'react'


const { Screen,Navigator }= createNativeStackNavigator()

export function AppRoutes(){
  return(
    <Navigator screenOptions={{ headerShown: false}}>
      {/* <Screen 
        name='groups'
        component={Groups}
      /> */}

    </Navigator>
  )
}