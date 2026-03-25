import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthStack from './stacks/AuthStack';
import MainTabNavigator from './navigators/MainTabNavigator';
import FieldworkerTabNavigator from './navigators/FieldworkerTabNavigator';
import ChatScreen from '../screens/Pilgrim/Group/ChatScreen';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Auth" component={AuthStack} />
                <Stack.Screen name="Main" component={MainTabNavigator} />
                <Stack.Screen name="FieldworkerMain" component={FieldworkerTabNavigator} />
                <Stack.Screen name="Chat" component={ChatScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default RootNavigator;
