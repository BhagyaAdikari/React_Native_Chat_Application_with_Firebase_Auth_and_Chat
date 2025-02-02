import { View, Text, TextInput, Pressable, TouchableOpacity, Image, Alert } from 'react-native';
import React, { useState, useRef } from 'react';
import { useRouter } from 'next/router';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StatusBar } from 'expo-status-bar';
import { Octicons } from '@expo/vector-icons';
import Loading from '../components/Loading';
import { useAuth } from '../hooks/useAuth'; // Ensure you have this hook correctly imported

export default function SignIn() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();

  const passwordRef = useRef('');
  const emailRef = useRef('');

  const handleLogin = async () => {
    if (!emailRef.current || !passwordRef.current) {
      Alert.alert('Please fill in all fields');
      return;
    }

    setLoading(true);
    const response = await login(emailRef.current, passwordRef.current);
    setLoading(false);

    console.log('Sign In result : ', response);

    if (!response.success) {
      Alert.alert('Sign In', response.msg);
    }
  };

  return (
    <View className="flex-1">
      <StatusBar style="dark" />
      <View style={{ paddingTop: hp(8), paddingHorizontal: wp(5) }} className="flex-1 gap-12">
        {/* sign in image */}
        <View className="items-center">
          <Image source={require('../assets/images/login.jpg')} style={{ width: wp('80%'), height: hp('25') }} resizeMode="contain" />
        </View>

        <View className="gap-10">
          <View>
            <Text style={{ fontSize: hp('3%'), fontWeight: 'bold' }}>Create an account</Text>
          </View>
          <View>
            <Text style={{ fontSize: hp('2%'), color: 'gray' }}>Sign up to get started</Text>
          </View>
          <View className="gap-4">
            <View style={{ height: hp('7%') }} className="flex-row gap-4 px-4 bg-neutral-100 items-center rounded-2xl">
              <Octicons name="mail" size={hp(2.7)} color="grey" />
              <TextInput
                onChangeText={(value) => (emailRef.current = value)}
                style={{ fontSize: hp(2) }}
                className="flex-1 font-semibold text-neutral-700"
                placeholder="Email"
                placeholderTextColor="grey"
              />
            </View>

            <View className="gap-3">
              <View style={{ height: hp('7%') }} className="flex-row gap-4 px-4 bg-neutral-100 items-center rounded-2xl">
                <Octicons name="lock" size={hp(2.7)} color="grey" />
                <TextInput
                  onChangeText={(value) => (passwordRef.current = value)}
                  style={{ fontSize: hp(2) }}
                  className="flex-1 font-semibold text-neutral-700"
                  placeholder="Password"
                  secureTextEntry={true}
                  placeholderTextColor="grey"
                />
              </View>
              <Text style={{ fontSize: hp(1.8) }} className="font-semibold text-neutral-500 text-right">
                Forgot password?
              </Text>
            </View>

            <View>
              {loading ? (
                <View className="flex-row justify-center">
                  <Loading size={hp(6.5)} />
                </View>
              ) : (
                <TouchableOpacity onPress={handleLogin} style={{ height: hp(6.5) }} className="bg-indigo-500 rounded-xl justify-center items-center py-3">
                  <Text style={{ fontSize: hp(2.7) }} className="text-white font-bold tracking-wider">
                    Sign In
                  </Text>
                </TouchableOpacity>
              )}
            </View>

            {/* sign up option */}
            <View className="flex-row justify-center">
              <Text style={{ fontSize: hp(2) }} className="text-neutral-500 font-semibold">
                Don't have an account?
              </Text>
              <Pressable onPress={() => router.push('/signup')}>
                <Text style={{ fontSize: hp(2), color: 'indigo' }} className="font-semibold">
                  Sign Up
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
