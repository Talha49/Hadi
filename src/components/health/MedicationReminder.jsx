import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Colors, Typography } from '../../theme';
import { sWidth, sHeight } from '../../utils/responsive';
import { Images } from '../../assets/images/Images';

const MedicationReminder = ({ time, name, quantity, completed = false, onToggle }) => {
    return (
        <View style={styles.container}>
            <View style={styles.mainContent}>
                <View style={styles.iconWrapper}>
                    <Image source={Images.pill} style={styles.pillIcon} />
                </View>
                <View style={styles.infoWrapper}>
                    <Text style={styles.time}>{time}</Text>
                    <View style={styles.medicationRow}>
                        <Text style={styles.name}>{name}</Text>
                        <Text style={styles.divider}>|</Text>
                        <Text style={styles.quantity}>{quantity}</Text>
                        <Image source={Images.pill} style={styles.smallPill} />

                    </View>
                </View>
            </View>

            <TouchableOpacity
                style={[styles.checkWrapper, completed && styles.completedCheck]}
                onPress={onToggle}
                activeOpacity={0.7}
            >
                <Image
                    source={Images.tick2}
                    style={[styles.checkIcon, { tintColor: completed ? Colors.white : '#60A5BB' }]}
                />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: sWidth(350),
        height: sHeight(75),
        backgroundColor: Colors.white,
        borderRadius: sWidth(24),
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: sWidth(25),
        marginBottom: sHeight(10),
    },
    mainContent: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconWrapper: {
        width: sWidth(50),
        height: sWidth(50),
        borderRadius: sWidth(14),
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: sWidth(15),
    },
    pillIcon: {
        width: sWidth(24.86), // Exact size requested
        height: sWidth(21.9), // Exact size requested
        tintColor: Colors.text.secondary,
        transform: [{ rotate: '-10deg' }],
    },
    infoWrapper: {
        justifyContent: 'center',
    },
    time: {
        fontSize: sWidth(20),
        fontWeight: Typography.weight.bold,
        color: Colors.text.secondary,
    },
    medicationRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: sHeight(2),
        gap: sWidth(5),
    },
    name: {
        fontSize: sWidth(10),
        color: '#60A5BB',
        fontWeight: Typography.weight.bold,
        fontFamily: 'monospace', // To match the code-like look in figma
    },
    divider: {
        color: '#E2E8F0',
        fontWeight: Typography.weight.regular,
        fontSize: sWidth(10),
    },
    smallPill: {
        width: sWidth(8),
        height: sWidth(8),
        tintColor: '#60A5BB',
        transform: [{ rotate: '-45deg' }],
    },
    quantity: {
        fontSize: sWidth(10),
        color: '#60A5BB',
        fontWeight: Typography.weight.bold,
        fontFamily: 'monospace',
    },
    checkWrapper: {
        width: sWidth(55),
        height: sHeight(75),
        backgroundColor: 'rgba(39, 104, 126, 0.05)',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopRightRadius: sWidth(24),
        borderBottomRightRadius: sWidth(24),
        marginRight: -sWidth(25),
    },
    completedCheck: {
        backgroundColor: '#60A5BB',
    },
    checkIcon: {
        width: sWidth(31), // Exact size requested
        height: sWidth(27), // Exact size requested
    },
});

export default MedicationReminder;
