import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FieldworkerHomeScreen from '../../screens/Fieldworker/Home/FieldworkerHomeScreen';
import ProfileScreen from '../../screens/Shared/Profile/ProfileScreen';
import EmergencyCaseScreen from '../../screens/Fieldworker/Home/EmergencyCaseScreen';

const Stack = createNativeStackNavigator();

const FieldworkerHomeStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                animation: 'slide_from_right',
            }}
        >
            <Stack.Screen name="FieldworkerHomeMain" component={FieldworkerHomeScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="EmergencyCase" component={EmergencyCaseScreen} />
        </Stack.Navigator>
    );
};

export default FieldworkerHomeStack;
