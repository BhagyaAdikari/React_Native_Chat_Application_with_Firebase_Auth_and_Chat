import React, { useState } from 'react';
import { View, Text, Pressable, TextInput, Alert, Image, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StatusBar } from 'expo-status-bar';
import { Feather, Octicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router'; // Adjust the import based on your routing setup
import Loading from '../components/Loading';
import CustomKeyboardView from '../components/CustomKeyboardView';
import { useAuth } from '../context/authContext'; // Adjust the path as needed

export default function SignUp() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const { register } = useAuth();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [profileUrl, setProfileUrl] = useState("");

    const handleRegister = async () => {
        if (!email || !password || !username || !profileUrl) {
            Alert.alert("Please fill in all fields to Sign Up");
            return;
        }

        setLoading(true);
        let response = await register(email, password, username, profileUrl);
        setLoading(false);

        console.log('got result : ', response);

        if (!response.success) {
            Alert.alert("Sign Up", response.error);
        } else {
            router.push('/home'); // Adjust the route as needed
        }
    };

    return (
        <CustomKeyboardView>
            <View className='flex-1'>
                <StatusBar style='dark' />
                <View style={{ paddingTop: hp(7), paddingHorizontal: wp(5) }} className="flex-1 gap-12">
                    {/* sign up image */}
                    <View className="items-center">
                        <Image source={require('../assets/images/signup.jpg')} style={{ width: wp('80%'), height: hp('20%') }} resizeMode='contain' />
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
                                <Feather name='user' size={hp(2.7)} color='grey' />
                                <TextInput
                                    onChangeText={setUsername}
                                    style={{ fontSize: hp(2) }}
                                    className="flex-1 font-semibold text-neutral-700"
                                    placeholder='Username'
                                    placeholderTextColor={'grey'}
                                />
                            </View>

                            <View style={{ height: hp('7%') }} className="flex-row gap-4 px-4 bg-neutral-100 items-center rounded-2xl">
                                <Feather name='image' size={hp(2.7)} color='grey' />
                                <TextInput
                                    onChangeText={setProfileUrl}
                                    style={{ fontSize: hp(2) }}
                                    className="flex-1 font-semibold text-neutral-700"
                                    placeholder='Profile URL'
                                    placeholderTextColor={'grey'}
                                />
                            </View>

                            <View style={{ height: hp('7%') }} className="flex-row gap-4 px-4 bg-neutral-100 items-center rounded-2xl">
                                <Octicons name='mail' size={hp(2.7)} color='grey' />
                                <TextInput
                                    onChangeText={setEmail}
                                    style={{ fontSize: hp(2) }}
                                    className="flex-1 font-semibold text-neutral-700"
                                    placeholder='Email'
                                    placeholderTextColor={'grey'}
                                />
                            </View>

                            <View style={{ height: hp('7%') }} className="flex-row gap-4 px-4 bg-neutral-100 items-center rounded-2xl">
                                <Octicons name='lock' size={hp(2.7)} color='grey' />
                                <TextInput
                                    onChangeText={setPassword}
                                    style={{ fontSize: hp(2) }}
                                    className="flex-1 font-semibold text-neutral-700"
                                    placeholder='Password'
                                    secureTextEntry={true}
                                    placeholderTextColor={'grey'}
                                />
                            </View>

                            <View>
                                {loading ? (
                                    <View className='flex-row justify-center'>
                                        <Loading size={hp(6.5)} />
                                    </View>
                                ) : (
                                    <TouchableOpacity onPress={handleRegister} style={{ height: hp(6.5) }} className="bg-indigo-500 rounded-xl justify-center items-center py-3">
                                        <Text style={{ fontSize: hp(2.7) }} className="text-white font-bold tracking-wider">
                                            Sign Up
                                        </Text>
                                    </TouchableOpacity>
                                )}
                            </View>

                            <View className="flex-row justify-center">
                                <Text style={{ fontSize: hp(2) }} className="text-neutral-500 font-semibold">Already have an account?</Text>
                                <Pressable onPress={() => router.push('/signin')}>
                                    <Text style={{ fontSize: hp(2), color: 'indigo' }} className="font-semibold">Sign In</Text>
                                </Pressable>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </CustomKeyboardView>
    );
}