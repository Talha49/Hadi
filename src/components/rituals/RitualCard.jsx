import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { Colors, Typography } from '../../theme';
import { sWidth, sHeight, moderateScale } from '../../utils/responsive';
import { Images } from '../../assets/images/Images';

const RitualCard = ({ title, subtitle, status, onPress }) => {
    const isUpcoming = status === 'upcoming';
    const isActive = status === 'active';
    const isCompleted = status === 'completed';

    const cardStyles = [
        styles.card,
        isUpcoming && styles.upcomingCard,
        isActive && styles.activeCard,
        isCompleted && styles.completedCard,
    ];

    const titleStyles = [
        styles.title,
        isCompleted && styles.completedTitle,
    ];

    const subtitleStyles = [
        styles.subtitle,
        isCompleted && styles.completedSubtitle,
    ];

    return (
        <TouchableOpacity
            style={cardStyles}
            onPress={onPress}
            activeOpacity={0.8}
        >
            <View style={styles.textContainer}>
                <Text style={titleStyles}>{title}</Text>
                <Text style={subtitleStyles}>{subtitle}</Text>
            </View>

            {(isCompleted || isActive) && (
                <Image
                    source={Images.tick}
                    style={[
                        styles.checkIcon,
                        isActive && { tintColor: Colors.white },
                        isCompleted && { tintColor: '#4A98B0' }
                    ]}
                    resizeMode="contain"
                />
            )}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        width: sWidth(230),
        height: sHeight(71),
        borderRadius: moderateScale(14),
        paddingHorizontal: sWidth(18),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: sHeight(10),
    },
    upcomingCard: {
        backgroundColor: '#4A98B0',
    },
    activeCard: {
        backgroundColor: Colors.yellow,
        width: sWidth(320),
        height: sHeight(80),
        marginLeft: -sWidth(50), // Shift left to look "disconnected" and prominent
    },
    completedCard: {
        backgroundColor: Colors.white,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
    },
    textContainer: {
        flex: 1,
    },
    title: {
        fontSize: sWidth(15),
        fontWeight: Typography.weight.bold,
        color: Colors.white,
    },
    completedTitle: {
        color: Colors.background,
    },
    subtitle: {
        fontSize: sWidth(11),
        color: 'rgba(255, 255, 255, 0.7)',
        marginTop: 2,
    },
    completedSubtitle: {
        color: '#A0AEC0',
    },
    checkIcon: {
        width: sWidth(18),
        height: sWidth(18),
    },
});

export default RitualCard;
