import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RitualsScreen from '../../screens/Rituals/RitualsScreen';
import ItineraryScreen from '../../screens/Rituals/ItineraryScreen';

const Stack = createNativeStackNavigator();

const RitualsStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                animation: 'slide_from_right',
            }}
        >
            <Stack.Screen name="RitualsMain" component={RitualsScreen} />
            <Stack.Screen name="Itinerary" component={ItineraryScreen} />
        </Stack.Navigator>
    );
};

export default RitualsStack;
