import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { Colors, Spacing, Typography } from '../../theme';
import { Images } from '../../assets/images/Images';
import { sWidth, sHeight } from '../../utils/responsive';

const Header = ({ title, onBackPress, style, titleStyle, iconStyle }) => {
    return (



        <View style={[styles.header, style]}>
            {onBackPress && (

                <TouchableOpacity onPress={onBackPress} style={styles.backButton} activeOpacity={0.7}>
                    <Image source={Images.leftArrow} style={[styles.backIcon, iconStyle]} />
                </TouchableOpacity>
            )}
            <Text style={[styles.headerTitle, titleStyle]}>{title}</Text>
        </View>

    );
};

const styles = StyleSheet.create({
    header: {
        height: sHeight(100),
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: Spacing.layout.gap,
        paddingTop: sHeight(40),
        backgroundColor: Colors.background,
    },
    backButton: {
        width: sWidth(40),
        height: sWidth(40),
        justifyContent: 'center',
        alignItems: 'center',
    },
    backIcon: {
        width: sWidth(12),
        height: sWidth(20),
        tintColor: Colors.white,
    },
    headerTitle: {
        fontSize: sWidth(20),
        fontWeight: Typography.weight.bold,
        color: Colors.white,
        flex: 1,
        marginRight: sWidth(40), // Offset for back button to keep title centered
    },

});

export default Header;
