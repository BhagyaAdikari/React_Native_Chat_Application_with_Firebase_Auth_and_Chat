import { View, Text, Pressable, ActivityIndicator } from 'react-native';
import React, { useState } from 'react';
import { useAuth } from '../../context/authContext'; // Correct import

export default function StartPage() {
    const { logout, user } = useAuth();
    const [loading, setLoading] = useState(false); // State for handling loading

    const handleLogout = async () => {
        try {
            setLoading(true); // Set loading to true while logging out
            await logout();
            setLoading(false); // Set loading to false after logout is complete
        } catch (error) {
            console.error("Logout error:", error);
            setLoading(false); // Set loading to false in case of error
        }
    };

    console.log('user data:', user);

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
            {loading ? (
                <ActivityIndicator size="large" color="gray" />
            ) : (
                <Pressable
                    onPress={handleLogout}
                    style={{
                        backgroundColor: 'blue',
                        paddingHorizontal: 16,
                        paddingVertical: 12,
                        borderRadius: 16,
                        marginTop: 16,
                    }}
                >
                    <Text style={{ color: 'white', fontSize: 16 }}>Sign out</Text>
                </Pressable>
            )}
        </View>
    );
}
