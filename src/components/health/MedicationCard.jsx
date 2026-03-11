import React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';
import { Colors, Typography } from '../../theme';
import { sWidth, sHeight } from '../../utils/responsive';
import { Images } from '../../assets/images/Images';

const MedicationCard = ({ name, dosage, quantity, instructions }) => {
    return (
        <ImageBackground
            source={Images.groupback}
            style={styles.card}
            imageStyle={styles.cardBg}
            resizeMode="stretch"
        >
            <View style={styles.content}>
                <Text style={styles.name}>{name}</Text>

                <View style={styles.badgeRow}>
                    <View style={styles.dosageBadge}>
                        <Text style={styles.dosageText}>{dosage}</Text>
                    </View>
                    <View style={styles.quantityBadge}>
                        {/* Pill icon on the left as per requested close image */}
                        <Text style={styles.quantityText}>{quantity}</Text>

                        <Image source={Images.pill} style={styles.pillIcon} />
                    </View>
                </View>

                <View style={styles.instructionBadge}>
                    <Text style={styles.instructions}>{instructions}</Text>
                </View>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    card: {
        width: sWidth(119), // Exact Figma width
        height: sHeight(105), // Exact Figma height
    },
    cardBg: {
        tintColor: Colors.white,
    },
    content: {
        flex: 1,
        padding: sWidth(10),
        paddingTop: sHeight(20),
    },
    name: {
        fontSize: sWidth(12),
        fontWeight: Typography.weight.bold,
        color: Colors.text.secondary,
        marginBottom: sHeight(6),
    },
    badgeRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: sWidth(4),
        marginBottom: sHeight(8),
    },
    dosageBadge: {
        backgroundColor: '#E8EDEF',
        paddingHorizontal: sWidth(6),
        paddingVertical: sHeight(3),
        borderRadius: sWidth(6),
    },
    dosageText: {
        fontSize: sWidth(7),
        color: Colors.text.secondary,
        fontWeight: Typography.weight.bold,
    },
    quantityBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#E8EDEF',
        paddingHorizontal: sWidth(6),
        paddingVertical: sHeight(3),
        borderRadius: sWidth(6),
        gap: sWidth(2),
    },
    pillIcon: {
        width: sWidth(6),
        height: sWidth(6),
        tintColor: Colors.text.secondary,
    },
    quantityText: {
        fontSize: sWidth(7),
        color: Colors.text.secondary,
        fontWeight: Typography.weight.bold,
    },
    instructionBadge: {
        backgroundColor: '#E8EDEF',
        paddingHorizontal: sWidth(6),
        paddingVertical: sHeight(3),
        borderRadius: sWidth(4),
        alignSelf: 'flex-start',
    },
    instructions: {
        fontSize: sWidth(7.5),
        color: Colors.text.secondary,
        fontWeight: Typography.weight.medium,
    },
});

export default MedicationCard;
