import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { Images } from '../../assets/images/Images';
import { Typography, Colors, Spacing } from '../../theme';
import { sWidth, sHeight } from '../../utils/responsive';
import { useNavigation } from '@react-navigation/native';

const HadiHeader = ({ title, avatar = Images.profile, onAvatarPress, children }) => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <ImageBackground
                source={Images.headerImage}
                style={styles.header}
                imageStyle={styles.headerBg}
                resizeMode="cover"
            >
                <View style={styles.headerContent}>
                    <View style={styles.topRow}>
                        <Text style={styles.headerTitle}>{title}</Text>
                        <TouchableOpacity
                            onPress={onAvatarPress || (() => navigation.navigate('Profile'))}
                            activeOpacity={0.8}
                        >
                            <Image source={avatar} style={styles.avatar} />
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    header: {
        width: sWidth(404),
        height: sHeight(259),
        backgroundColor: Colors.background,
    },
    headerBg: {
        position: 'absolute',
        top: 50,
        left: 0,
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    headerContent: {
        flex: 1,
        paddingHorizontal: Spacing.layout.gap,
        paddingTop: sHeight(50),
        paddingBottom: sHeight(70),
    },
    topRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerTitle: {
        fontSize: sWidth(24),
        fontWeight: Typography.weight.bold,
        color: Colors.white,
        letterSpacing: sWidth(-0.4),
    },
    avatar: {
        width: sWidth(40),
        height: sWidth(40),
        borderRadius: sWidth(20),
        borderWidth: 2,
        borderColor: Colors.yellow,
    },
});

export default HadiHeader;
