import {View,Text, Pressable} from 'react-native'
import React from 'react'
import {logout,user} from useAuth;
import { use } from 'react';
import { useAuth } from '../../context/authContext';

export default function StartPage(){

    const {logout}=useAuth();
    const hadleLogout=async()=>{
        await logout();
    }

    console.log('user data :',user);    
    return(
        <View className="flex-1 justify-center items-center">
            <ActivityIndicator size="large" color="gray"/>

            <Pressable onPress={handleLogout} className="bg-blue-500 px-4 py-2 rounded-2xl mt-4">
                <Text className="text-white">Sign out</Text>
            </Pressable>
        </View>
    )}