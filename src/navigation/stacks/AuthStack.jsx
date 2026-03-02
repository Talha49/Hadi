import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../../screens/Auth/LoginScreen';
import ForgotPasswordScreen from '../../screens/Auth/ForgotPasswordScreen';
import PasswordUpdatedScreen from '../../screens/Auth/PasswordUpdatedScreen';
import OnboardingScreen from '../../screens/Onboarding/OnboardingScreen';
import SplashScreen from '../../screens/Splash/SplashScreen';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                contentStyle: { backgroundColor: 'transparent' },
            }}
        >
            <Stack.Screen name="Splash" component={SplashScreen} />
            <Stack.Screen name="Onboarding" component={OnboardingScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
            <Stack.Screen name="PasswordUpdated" component={PasswordUpdatedScreen} />
        </Stack.Navigator>
    );
};

export default AuthStack;
