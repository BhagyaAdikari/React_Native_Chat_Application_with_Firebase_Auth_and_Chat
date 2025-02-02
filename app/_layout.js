import { View, Text, useEffect } from 'react-native';
import React from 'react';
import { Slot } from "expo-router";
import { useAuth } from '../hooks/useAuth'; // Make sure this hook exists
import { useSegments } from 'expo-router'; // Ensure this import is correct
import { useRouter } from 'next/router'; // Assuming you're using Next.js
import "../global.css";
import { MenuProvider } from 'react-native-popup-menu';

const MainLayout = () => {
    const { isAuthenticated } = useAuth();
    const segments = useSegments();
    const router = useRouter();

    useEffect(() => {
        // Check if user is authenticated or not
        if (typeof isAuthenticated === "undefined") return;
        const inApp = segments[0] === "app";

        if (isAuthenticated && !inApp) {
            router.replace('home');
        } else if (!isAuthenticated) {
            router.replace('signIn');
        }
    }, [isAuthenticated, segments, router]);

    return <Slot />;
};

export default function _layout() {
    return (
        <MenuProvider>
            <AuthContextProvider>
                <MainLayout />
            </AuthContextProvider>
        </MenuProvider>
    );
}
