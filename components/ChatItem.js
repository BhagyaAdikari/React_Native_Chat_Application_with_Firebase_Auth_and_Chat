import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Image } from 'react-native'
import { hookPropertyMap } from 'react-native-responsive-screen'

export default function ChatItem({item,router, noBorder}) {
  return (
    <TouchableOpacity className='flex-row items-center justify-between mb-4 pb-2 border-b border-neutral-200'>
        <Image 
            source={require(`../assets/images/1.png`)} 
            style={{height:hookPropertyMap(6),  width:hookPropertyMap(6)}}
            className='rounded-full'/>

    <View className='flex-1 gap-1'>
        <View className='flex-row justify-between'>
            <Text style={{fontSie: hookPropertyMap(1.8)}} className="font-semibold text-neutral-800">Bhagya</Text>
            <Text style={{fontSie: hookPropertyMap(1.6)}} className="font-medium text-neutral-800">time</Text>
        </View>
        <Text style={{fontSie: hookPropertyMap(1.6)}} className="font-medium text-neutral-500">Last message</Text>
    </View>
    </TouchableOpacity>
  )
}