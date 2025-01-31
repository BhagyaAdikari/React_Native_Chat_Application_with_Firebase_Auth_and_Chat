import {View,Text, Pressable} from 'react-native'
import React, { useRef } from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { StatusBar } from 'expo-status-bar';
import { Feather, Octicons } from '@expo/vector-icons';
import { TextInput } from 'react-native-web';
import Loading from '../components/Loading';
import CustomKeyboardView from '../components/CustomKeyboardView';

export default function SignUp(){

    const router=useRouter();
    const[loading,setLoading]=useState(false);
    const {register} =useAuth();

    const passwordRef=useRef("");
    const emailRef=useRef("");
    const usernameRef=useRef("");
    const profileRef=useRef("");

    const handleLogin=async()=>{
        if(!emailRef.current||!passwordRef.current||!usernameRef.current||!profileRef.current){  
            Alert.alert("Please fill in all fields to Sign Up");
            return;
        }

        setLoading(true);
        let response=await register(emailRef.current,passwordRef.current,usernameRef.current,profileRef.current);
        setLoading(false);

        console.log('got result : ',response);

        if(!response.success){
            Alert.alert("Sign Up",response.message);

    }
    return(
        <CustomKeyboardView>
        <View className='flex-1'>
            <StatusBar style='dark'/>
            <View style={{paddingTop: hp(7), paddingHorizontal: wp(5)}} className="flex-1 gap-12">
                {/* sign in image */}
                <View className="items-center">
                    <Image source={require('../assets/images/signup.jpg')} style={{width:wp('80%'),height:hp('20')}} resieMode='contain'/>
                </View>

                <View className="gap-10">
                    <View>
                        <Text style={{fontSize:hp('3%'),fontWeight:'bold'}}>Login to account</Text>
                    </View>
                    <View>
                        <Text style={{fontSize:hp('2%'),color:'gray'}}>Sign up to get started</Text>
                    </View>
                    <View className="gap-4">

                    <View style={{height:hp('7%')}} className="flex-row gap-4 px-4 bg-neutral-100 items-center rounded-2xl"> 
                            <Feather name='user' size={hp(2.7)} color='grey'/>
                            <TextInput 
                            onChangeText={(value)=>usernameRef.current=value}
                            style={{fontSize:hp(2)}} 
                            className="flex-1 font-semibold text-neutral-700" 
                            placeholder='User name'
                            placeholderTextColor={grey}/>               
                        </View>

                        <View style={{height:hp('7%')}} className="flex-row gap-4 px-4 bg-neutral-100 items-center rounded-2xl"> 
                            <Feather name='image' size={hp(2.7)} color='grey'/>
                            <TextInput 
                            onChangeText={(value)=>profileRef.current=value}
                            style={{fontSize:hp(2)}} 
                            className="flex-1 font-semibold text-neutral-700" 
                            placeholder='Profile Url'
                            placeholderTextColor={grey}/>               
                        </View>


                        <View style={{height:hp('7%')}} className="flex-row gap-4 px-4 bg-neutral-100 items-center rounded-2xl"> 
                            <Octicons name='mail' size={hp(2.7)} color='grey'/>
                            <TextInput 
                            onChangeText={(value)=>emailRef.current=value}
                            style={{fontSize:hp(2)}} 
                            className="flex-1 font-semibold text-neutral-700" 
                            placeholder='Email'
                            placeholderTextColor={grey}/>               
                        </View>

                        <View className="gap-3">
                            <View style={{height:hp('7%')}} className="flex-row gap-4 px-4 bg-neutral-100 items-center rounded-2xl"> 
                                <Octicons name='lock' size={hp(2.7)} color='grey'/>
                                <TextInput 
                                onChangeText={(value)=>passwordRef.current=value}
                                style={{fontSize:hp(2)}} 
                                className="flex-1 font-semibold text-neutral-700" 
                                placeholder='Password'
                                secureTextEntry={true}
                                placeholderTextColor={grey}/>               
                            </View>
                            

                        </View>

                        <View>
                            {
                                loading?(
                                    <View className='flex-row justify-center'>
                                        <Loading size={hp(6.5)}/>
                                    </View>
                                ):(
                                    <TouchableOpacity onPress={handleRegister} style={{height:hp(6.5)}} className="bg-indigo-500 rounded-xl justify-center items-center py-3">
                            <Text style={{fontSize:hp(2.7)}} className="text-white font-bold tracking-wider">
                                Sign In
                            </Text>
                        </TouchableOpacity>

                                )

                                
                            }
                            </View>

                        {/* sign in button */}
                        
                       
                        <View className="flex-row justify-center">
                            <Text style={{fontSize:hp(2)}} className="text-neutral-500 font-semibold">Already have an account?</Text>
                            <Pressable onPress={()=>router.push('/signin')}>
                                <Text style={{fontSize:hp(2),color:'indigo'}} className="font-semibold">Sign In</Text>
                            </Pressable>
                        </View>

                    </View>
                    


                </View>
            </View>
        </View>
        </CustomKeyboardView>
    )}}