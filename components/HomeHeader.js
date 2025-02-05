import { View, Text, Platform } from 'react-native';
import React from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Image } from 'expo-image';
import { useAuth } from '../context/authContext'; // Adjust the path as needed
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MenuOption, MenuOptions, MenuTrigger } from 'react-native-popup-menu';
import { Menu,MenuOptions,MenuOption,MenuTrigger } from 'react-native-popup-menu';
import { MenuItems } from './CustomMenuItems';
import { Feather } from '@expo/vector-icons';

const ios = Platform.OS === 'ios';

export default function HomeHeader() {
  const { user,logout } = useAuth();
  const { top } = useSafeAreaInsets();
  const blurhash = '|rF?hZRjRjWB}nj[t7WBj[t7WBof';
  const handleProfile = () => {
    // Handle profile navigation
  };

  const handleLogOut = async () => {
    await logout();
  };

  return (
    <View
      style={{ paddingTop: ios ? top : top + 10 }}
      className="flex-row justify-between items-center px-4 bg-indigo-400 pb-6 rounded-b-3xl shadow"
    >
      <View>
        <Text style={{ fontSize: hp(3) }} className="font-medium text-white">
          Chats
        </Text>
      </View>

      <Menu>
        <MenuTrigger customStyles={{ triggerWrapper: { padding: 10 } }}>
        <Image
          style={{ height: hp(4.3), aspectRatio: 1, borderRadius: 100 }}
          source={user?.profileUrl ? { uri: user.profileUrl } : require('../assets/default-profile.png')}
          placeholder={{ blurhash }}
          contentFit="cover"
          transition={500}
        />
        </MenuTrigger>
         <MenuOptions
         
          customStyles={{
            optionsContainer: {
              width: 160,
              marginTop: 40,
              borderRadius: 10,
              borderCurve: 'continuous',
              marginLeft: -30,
              backgroundColor: 'white',
              shadowOpacity:0.2,
              shadowOffser: { width: 0, height: 0 },
            },
          }}>
            <MenuItem
              text="Profile"
              action={handleProfile}
              value={null}
              icon={<Feather name='user' size={hp(2.5)} color="#737373"/>}
            />

            <Divider/>

            <MenuItem
              text="Sign Out"
              action={handleLogOut}
              value={null}
              icon={<AntDesign name='logout' size={hp(2.5)} color="#737373"/>}
            />
          </MenuOptions>
        </Menu>

      <View>
      
      </View>
    </View>
  );
}

const Divider=()=>{
  return(
    <View className="p-[1px] w-full bg-neutral-200"></View>
  )
}