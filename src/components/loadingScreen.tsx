import React from 'react';
import { ActivityIndicator, View } from 'react-native';

export function LoadingScreen() {
  return(
    <View className='bg-GRAY-600 flex-1 items-center justify-center'>
      <ActivityIndicator color={'#1B1D1E'} />
    </View>
  )
}