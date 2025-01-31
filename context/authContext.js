import {createContext,useState,useEffect,useContext} from 'react';
import {onAuthStateChanged, createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut} from 'firebase/auth';
import {doc, setDoc, getDoc} from 'firebase/firestore';
import { auth, db } from '../firebase';

export const AuthContext=createContext();

export const AuthContextProvider=({children})=>{
const [user,setUser]=useState(null);
const [isAuthenticated,setIsAuthenticated]=useState(undefined);

    useEffect(()=>{
        const unsub=onAuthStateChanged(auth,(user)=>{
            console.log('got user :',user);
            if(user){
            setIsAuthenticated(true);
            setUser(user);
            }else{
                setIsAuthenticated(false);
                setUser(null);
            }
        });
        return unsub;
    },[])

    const updateUserData=async(userId)=>{
        const docRef=doc(db,'users',userId);
        const docSnap=await getDoc(docRef);
        if(docSnap.exists()){
            const data=docSnap.data();
            setUser({...user, username: data.username,profileUrl: data.profileUrl,userId: data.userId});
        }
    }

    const login =async(email,password)=>{
    try{
        const response=await signInWithEmailAndPassword(auth,email,password);
        return {success: true, data: response?.user};
    }catch(e){
        let message=e.message;
        if(message.includes('(auth/invalid-email)')) message='Invalid Email';
        if(message.includes('(auth/invalid-credential)')) message='Wrong credentials';
        return {success: false, error: message};
    }
    }
    const logout =async()=>{
        try{
            await signOut(auth);
            return {success: true};
        }catch(e){
            return {success: false, msg: e.message, error :e};
        }
        }
       
     const register =async(email,password,username,profileUrl)=>{
            try{
                const response=await createUserWithEmailAndPassword(auth,email,password);
                console.log('response.user :',response?.user);

                await setDoc(doc(db,'users',response?.user?.uid),{
                    username,
                    profileUrl,
                    userId: response?.user?.uid
                });

                return {success: true, data: response?.user};

            }catch(e){

                let message=e.message;
                if(message.includes('(auth/invalid-email)')) message='Invalid Email';
                if(message.includes('(auth/email-already-in-use)')) message='Email is already registered';
                return {success: false, error: message};
            }
            }
            return(
            <AuthContextProvider value={{user,isAuthenticated, login,register,logout}}>
            {children}
            </AuthContextProvider>
            )
}

export const useAuth=()=>{
    const value = useContext(AuthContext);

    if(!value){
    throw new Error('useAuth must be wrapped inside AuthContextProvider');
    }
    return value;}
