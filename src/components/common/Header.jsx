import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { Colors, Spacing, Typography } from '../../theme';
import { Images } from '../../assets/images/Images';
import { sWidth, sHeight } from '../../utils/responsive';

const Header = ({ title, onBackPress, style, titleStyle, iconStyle, profileImage, subtitle, showMihrab }) => {
    return (
        <View style={[styles.header, style, showMihrab && styles.mihrabHeader]}>
            {showMihrab && (
                <Image
                    source={Images.mihrab}
                    style={styles.mihrabBg}
                    resizeMode="stretch"
                />
            )}

            <View style={styles.contentRow}>
                {onBackPress && (
                    <TouchableOpacity onPress={onBackPress} style={styles.backButton} activeOpacity={0.7}>
                        <Image source={Images.leftArrow} style={[styles.backIcon, iconStyle]} />
                    </TouchableOpacity>
                )}

                <View style={styles.centerContent}>
                    {profileImage && (
                        <View style={styles.avatarWrapper}>
                            <Image source={profileImage} style={styles.avatar} />
                        </View>
                    )}
                    <Text style={[styles.headerTitle, titleStyle]}>{title}</Text>
                    {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
                </View>

                {/* Placeholder for symmetry */}
                {onBackPress && <View style={styles.placeholder} />}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        height: sHeight(100),
        backgroundColor: Colors.background,
        justifyContent: 'center',
    },
    mihrabHeader: {
        height: sHeight(160),
        paddingTop: sHeight(40),
    },
    mihrabBg: {
        position: 'absolute',
        top: sHeight(30),
        alignSelf: 'center',
        width: sWidth(375),
        height: sHeight(155),
    },
    contentRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: Spacing.layout.gap,
    },
    backButton: {
        width: sWidth(40),
        height: sWidth(40),
        justifyContent: 'center',
        zIndex: 10,
    },
    backIcon: {
        width: sWidth(10),
        height: sWidth(18),
        tintColor: Colors.white,
    },
    centerContent: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    avatarWrapper: {
        width: sWidth(50),
        height: sWidth(50),
        borderRadius: sWidth(25),
        borderWidth: 2,
        borderColor: Colors.yellow,
        overflow: 'hidden',
        marginBottom: sHeight(8),
    },
    avatar: {
        width: '100%',
        height: '100%',
    },
    headerTitle: {
        fontSize: sWidth(18),
        fontWeight: Typography.weight.bold,
        color: Colors.white,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: sWidth(12),
        color: 'rgba(255, 255, 255, 0.7)',
        marginTop: 2,
    },
    placeholder: {
        width: sWidth(40),
    },
});

export default Header;
