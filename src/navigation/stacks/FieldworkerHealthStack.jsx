import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FieldworkerHealthScreen from '../../screens/Fieldworker/Health/FieldworkerHealthScreen';
import QRScannerScreen from '../../screens/Fieldworker/Health/QRScannerScreen';
import MedicalCardScreen from '../../screens/Fieldworker/Health/MedicalCardScreen';

const Stack = createNativeStackNavigator();

const FieldworkerHealthStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                animation: 'slide_from_right',
            }}
        >
            <Stack.Screen name="FieldworkerHealthMain" component={FieldworkerHealthScreen} />
            <Stack.Screen name="QRScanner" component={QRScannerScreen} />
            <Stack.Screen name="MedicalCard" component={MedicalCardScreen} />
        </Stack.Navigator>
    );
};

export default FieldworkerHealthStack;
