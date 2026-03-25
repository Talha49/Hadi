import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../screens/Pilgrim/Home/HomeScreen';
import VisaScreen from '../../screens/Pilgrim/Home/VisaScreen';
import PassportScreen from '../../screens/Pilgrim/Home/PassportScreen';
import VaccinationScreen from '../../screens/Pilgrim/Home/VaccinationScreen';
import ProfileScreen from '../../screens/Shared/Profile/ProfileScreen';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                animation: 'slide_from_right',
            }}
        >
            <Stack.Screen name="HomeMain" component={HomeScreen} />
            <Stack.Screen name="Visa" component={VisaScreen} />
            <Stack.Screen name="PassportDetail" component={PassportScreen} />
            <Stack.Screen name="VaccinationDetail" component={VaccinationScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
    );
};

export default HomeStack;
