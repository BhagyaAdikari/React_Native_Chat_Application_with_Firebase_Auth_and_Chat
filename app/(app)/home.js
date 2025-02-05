import { View, Text, Pressable, ActivityIndicator } from 'react-native';
import React, { useState } from 'react';
import { useAuth } from '../../context/authContext'; // Correct import
import { StatusBar } from 'expo-status-bar';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import ChatList from '../../components/ChatList';

export default function StartPage() {
    const { logout, user } = useAuth();
    const [loading, setLoading] = useState(false); // State for handling loading
    const [users,setUsers] = useState([1,2,3]);

    useEffect(()=>{
        if(user?.uid){
            getUsers();
        }
       
    },[]);

    const getUsers=async()=>{

    }

    console.log('user data:', user);

    return (
        <View className='flex-1 bg-white'>
           <StatusBar style="light" />

           {
            users.length>0?(
                <ChatList users={users} />
            ):(
                <View className="flex items-center" style={{top:hp(30)}}>
                    <ActivityIndicator size="large"/>
                </View>
            )
           }
        </View>
    );
}
