import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MapScreen from '../../screens/Shared/Map/MapScreen';
import EmergencyDirectionsScreen from '../../screens/Fieldworker/Map/EmergencyDirectionsScreen';

const Stack = createNativeStackNavigator();

const FieldworkerMapStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                animation: 'slide_from_right',
            }}
        >
            <Stack.Screen name="FieldworkerMapMain" component={MapScreen} />
            <Stack.Screen name="EmergencyDirections" component={EmergencyDirectionsScreen} />
        </Stack.Navigator>
    );
};

export default FieldworkerMapStack;
