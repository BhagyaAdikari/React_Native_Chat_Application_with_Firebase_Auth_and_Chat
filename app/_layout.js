import {View,Text} from 'react-native'
import React from 'react'
import { Slot } from "expo-router";
import "../global.css";
import { use } from 'react';

const MainLayout = ()=>{
    const {isAuthenticated} = useAuth();
    const segments = useSegments();
    const router = useRouter();

    useEffect(()=>{
        // check if user authenticated or not
        if(typeof isAuthenticated === "undefined")return;
        const inApp = segments[0] === "app";
        if(isAuthenticated && !inApp){
            router.replace('home');
        }
        else if(!isAuthenticated ==false){
            router.replace('signIn');
        }
    },[isAuthenticated])

    return <Slot />
}

export default function _layout(){
return(
    <AuthContextProvider>
        <MainLayout />
    </AuthContextProvider>
)
}