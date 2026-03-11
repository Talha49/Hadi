import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { Colors, Spacing, Typography } from '../../theme';
import { Images } from '../../assets/images/Images';
import { sWidth, sHeight } from '../../utils/responsive';

const Header = ({ title, onBackPress, style, titleStyle, iconStyle, profileImage, subtitle, showMihrab, leftAlign }) => {
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

                <View style={[
                    styles.centerContent,
                    leftAlign && { alignItems: 'flex-start', paddingHorizontal: sWidth(60) }
                ]}>
                    {profileImage && (
                        <View style={styles.avatarWrapper}>
                            <Image source={profileImage} style={styles.avatar} />
                        </View>
                    )}
                    <Text style={[
                        styles.headerTitle,
                        titleStyle,
                        leftAlign && { textAlign: 'left' }
                    ]}>{title}</Text>
                    {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
                </View>
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
        height: sHeight(123),
        paddingTop: sHeight(35),
    },
    mihrabBg: {
        position: 'absolute',
        top: 0,
        alignSelf: 'center',
        width: sWidth(402), // Exact width requested
        height: sHeight(123), // Exact height requested
    },
    contentRow: {
        flexDirection: 'row',
        alignItems: 'center',
        height: sHeight(60), // Fixed height for the row area
    },
    backButton: {
        position: 'absolute',
        left: Spacing.layout.gap,
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
        paddingHorizontal: sWidth(50), // Ensure text doesn't hit back button
    },
    avatarWrapper: {
        width: sWidth(46), // Slightly smaller to match design
        height: sWidth(46),
        borderRadius: sWidth(23),
        borderWidth: 2,
        borderColor: Colors.yellow,
        overflow: 'hidden',
        marginBottom: sHeight(4),
    },
    avatar: {
        width: '100%',
        height: '100%',
    },
    headerTitle: {
        fontSize: sWidth(20), // Slightly larger for better readability
        fontWeight: Typography.weight.bold,
        color: Colors.white,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: sWidth(12),
        color: 'rgba(255, 255, 255, 0.7)',
        marginTop: 2,
    },
});

export default Header;
