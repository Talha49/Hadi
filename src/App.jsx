import React from 'react';
import RootNavigator from './navigation';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const App = () => {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <RootNavigator />
        </GestureHandlerRootView>
    );
};

export default App;

