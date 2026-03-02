import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Colors, Spacing, Typography } from '../../theme';
import { Images } from '../../assets/images/Images';
import { sWidth, sHeight } from '../../utils/responsive';

const Input = ({
    label,
    placeholder,
    value,
    onChangeText,
    secureTextEntry,
    keyboardType = 'default',
    containerStyle,
    inputStyle,
    error,
    placeholderTextColor = Colors.text.secondary,
    ...props
}) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    const isPassword = secureTextEntry;
    const actualSecureTextEntry = isPassword ? !isPasswordVisible : false;

    return (
        <View style={[styles.container, containerStyle]}>
            {label && <Text style={styles.label}>{label}</Text>}
            <View style={styles.inputWrapper}>
                <TextInput
                    style={[
                        styles.input,
                        error && styles.inputError,
                        isPassword && styles.inputWithIcon,
                        inputStyle
                    ]}
                    placeholder={placeholder}
                    placeholderTextColor={placeholderTextColor}
                    value={value}
                    onChangeText={onChangeText}
                    secureTextEntry={actualSecureTextEntry}
                    keyboardType={keyboardType}
                    {...props}
                />
                {isPassword && (
                    <TouchableOpacity
                        style={styles.iconContainer}
                        onPress={togglePasswordVisibility}
                        activeOpacity={0.7}
                    >
                        <Image
                            source={isPasswordVisible ? Images.toggleOn : Images.toggle}
                            style={styles.icon}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                )}
            </View>
            {error && <Text style={styles.errorText}>{error}</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: Spacing.layout.gap, // 15px gap as per Figma
        width: '100%',
    },
    label: {
        color: Colors.text.title,
        fontSize: Typography.size.s,
        fontWeight: Typography.weight.semibold,
        marginBottom: Spacing.layout.gap, // 15px gap between label and input
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
    },
    input: {
        backgroundColor: Colors.white,
        color: Colors.text.primary,
        paddingHorizontal: sWidth(20), // 20px internal padding
        borderRadius: sWidth(14),
        borderWidth: 0,
        fontSize: Typography.size.m,
        width: sWidth(337),
        height: sHeight(60),
    },
    inputWithIcon: {
        paddingRight: sWidth(50),
    },
    iconContainer: {
        position: 'absolute',
        right: sWidth(15),
        height: '100%',
        justifyContent: 'center',
    },
    icon: {
        width: sWidth(24),
        height: sWidth(24),
        tintColor: Colors.text.lightgray,
    },
    inputError: {
        borderColor: '#FF5252',
        borderWidth: 1,
    },
    errorText: {
        color: '#FF5252',
        fontSize: Typography.size.xs,
        marginTop: Spacing.xs,
    },
});

export default Input;
