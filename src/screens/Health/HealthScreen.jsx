import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CommonBackground from '../../components/common/CommonBackground';
import { Images } from '../../assets/images/Images';
import { Typography, Colors } from '../../theme';

const HealthScreen = () => {
    return (
        <CommonBackground source={Images.commonBack}>
            <View style={styles.container}>
                <Text style={styles.text}>Health Screen</Text>
            </View>
        </CommonBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: Typography.size.xl,
        color: Colors.white,
    },
});

export default HealthScreen;
