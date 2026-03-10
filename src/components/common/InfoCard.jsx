import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Colors, Typography } from '../../theme';
import { sWidth, sHeight } from '../../utils/responsive';

const InfoCard = ({ icon, label, value, width, valueSize }) => (
    <View style={[styles.card, { width }]}>
        <View style={styles.cardHeader}>
            <Image source={icon} style={styles.cardIcon} />
            <Text style={styles.cardLabel}>{label}</Text>
        </View>
        <Text style={[styles.cardValue, valueSize && { fontSize: valueSize }]} numberOfLines={2}>{value}</Text>
    </View>
);

const styles = StyleSheet.create({
    card: {
        height: sHeight(75),
        backgroundColor: Colors.white,
        borderRadius: sWidth(18),
        padding: sWidth(10),
        justifyContent: 'center',
        elevation: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
    },
    cardHeader: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        gap: sWidth(4),
    },
    cardIcon: {
        width: sWidth(20),
        height: sWidth(20),
        tintColor: Colors.text.secondary,
        marginRight: 'auto',
    },
    cardLabel: {
        fontSize: Typography.size.xxss,
        color: Colors.text.secondary,
        fontWeight: Typography.weight.bold,
        textAlign: 'right',
    },
    cardValue: {
        fontSize: Typography.size.xs,
        color: Colors.text.secondary,
        fontWeight: Typography.weight.bold,
        textAlign: 'right',
        marginTop: sHeight(-4),
    },
});

export default InfoCard;
