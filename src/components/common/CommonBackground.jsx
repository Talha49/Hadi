import React from 'react';
import { StyleSheet, ImageBackground, StatusBar, View } from 'react-native';
import { Colors } from '../../theme';

const CommonBackground = ({ children, source }) => {
    return (
        <View style={styles.container}>
            <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
            <ImageBackground
                source={source}
                style={styles.image}
                resizeMode="cover"
            >
                <View style={styles.overlay}>
                    {children}
                </View>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    image: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    overlay: {
        flex: 1,
    },
});

export default CommonBackground;
