import { View, Text } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-web'

const ios=Platform.OS==='ios';

export default function CustomKeyboardView() {
  return (
    <KeyboardAvoidingView>
        behavior={ios ? "padding" : "height"}
        style={{flex:1}}
        <ScrollView
            style={{flex:1}}
            bounces={false}
            showsVerticalScrollIndicator={false}
            >
            {
                children
            }
        </ScrollView>
    </KeyboardAvoidingView>
  )
}