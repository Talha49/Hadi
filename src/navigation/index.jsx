import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthStack from './stacks/AuthStack';
import MainTabNavigator from './navigators/MainTabNavigator';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
    // In a real app, you would check auth state here
    // For now, let's keep it false to allow the user to see the flow, 
    // but the LoginScreen will navigate to the Main navigator.
    const isAuthenticated = false;

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Auth" component={AuthStack} />
                <Stack.Screen name="Main" component={MainTabNavigator} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default RootNavigator;
