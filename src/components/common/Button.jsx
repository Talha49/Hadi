import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator, Image } from 'react-native';
import { Colors, Spacing, Typography } from '../../theme';

const Button = ({
    title,
    onPress,
    variant = 'primary', // primary, outline, ghost
    size = 'full',      // full, content
    loading = false,
    disabled = false,
    icon,
    iconStyle,
    style,
    textStyle,
    ...props
}) => {
    const getButtonStyle = () => {
        let baseStyle = [styles.button];

        // Variant styles
        if (variant === 'outline') baseStyle.push(styles.outlineButton);
        if (variant === 'ghost') baseStyle.push(styles.ghostButton);

        // Size styles
        if (size === 'content') baseStyle.push(styles.contentSize);

        // State styles
        if (disabled || loading) baseStyle.push(styles.disabledButton);

        return [baseStyle, style];
    };

    const getTextStyle = () => {
        let baseTextStyle = [styles.text];

        if (variant === 'outline') baseTextStyle.push(styles.outlineText);
        if (variant === 'ghost') baseTextStyle.push(styles.ghostText);
        if (disabled) baseTextStyle.push(styles.disabledText);

        return [baseTextStyle, textStyle];
    };

    return (
        <TouchableOpacity
            style={getButtonStyle()}
            onPress={onPress}
            activeOpacity={0.7}
            disabled={disabled || loading}
            {...props}
        >
            {loading ? (
                <ActivityIndicator color={variant === 'primary' ? Colors.background : Colors.primary} />
            ) : (
                <>
                    {icon && <Image source={icon} style={[styles.icon, iconStyle]} />}
                    {title && <Text style={getTextStyle()}>{title}</Text>}
                </>
            )}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.primary,
        paddingVertical: Spacing.m,
        paddingHorizontal: Spacing.l,
        borderRadius: Spacing.borderRadius.l,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    icon: {
        width: 20,
        height: 20,
        marginRight: Spacing.s,
    },
    outlineButton: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: Colors.primary,
    },
    ghostButton: {
        backgroundColor: 'transparent',
    },
    contentSize: {
        alignSelf: 'flex-start',
    },
    disabledButton: {
        opacity: 0.5,
    },
    text: {
        color: Colors.background,
        fontSize: Typography.size.m,
        fontWeight: Typography.weight.bold,
    },
    outlineText: {
        color: Colors.primary,
    },
    ghostText: {
        color: Colors.primary,
    },
    disabledText: {
        color: Colors.text.secondary,
    },
});

export default Button;
