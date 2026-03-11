import React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { Colors, Typography } from '../../theme';
import { sWidth, sHeight } from '../../utils/responsive';
import { Images } from '../../assets/images/Images';
import { t } from '../../i18n/translations';

const ActivityCard = ({ title, subtitle, type = 'white', isFlipped = false, onPress }) => {
    // type: 'yellow', 'white', 'teal'
    const isYellow = type === 'yellow';
    const isTeal = type === 'teal';
    const isWhite = type === 'white';

    const bgColor = isYellow ? Colors.yellow : isTeal ? '#4A98B0' : Colors.white;
    const textColor = (isYellow || isTeal) ? Colors.white : Colors.background;
    const subtitleColor = (isYellow || isTeal) ? 'rgba(255, 255, 255, 0.8)' : '#A0AEC0';

    return (
        <TouchableOpacity activeOpacity={0.9} onPress={onPress}>
            <ImageBackground
                source={Images.groupback}
                style={styles.card}
                imageStyle={[
                    styles.cardBg,
                    { tintColor: bgColor },
                    isFlipped && { transform: [{ scaleY: -1 }] }
                ]}
                resizeMode="stretch"
            >
                <View style={[styles.content, isFlipped && styles.flippedContent]}>
                    <Text style={[styles.subtitle, { color: subtitleColor }]}>{subtitle}</Text>
                    <Text style={[styles.title, { color: textColor }]} numberOfLines={2}>{title}</Text>

                    <View style={styles.bottomRow}>
                        <Text style={[styles.detailsText, { color: textColor }]}>{t('rituals.details')} </Text>
                        <Image
                            source={Images.rightArrow}
                            style={[styles.arrowIcon, { tintColor: textColor }]}
                        />
                    </View>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        width: sWidth(110),
        height: sHeight(135),
    },
    cardBg: {
        width: '100%',
        height: '100%',
    },
    content: {
        flex: 1,
        padding: sWidth(12),
        paddingTop: sHeight(30),
    },
    flippedContent: {
        paddingTop: sHeight(15),
        paddingBottom: sHeight(30),
        justifyContent: 'flex-start',
    },
    subtitle: {
        fontSize: sWidth(8),
        fontWeight: Typography.weight.medium,
        marginBottom: sHeight(4),
    },
    title: {
        fontSize: sWidth(11),
        fontWeight: Typography.weight.bold,
        lineHeight: sHeight(14),
        zIndex: 1,
    },
    activityImage: {
        width: sWidth(60),
        height: sHeight(50),
        position: 'absolute',
        bottom: sHeight(30),
        right: sWidth(10),
        opacity: 0.8,
    },
    bottomRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginTop: 'auto',
    },
    detailsText: {
        fontSize: sWidth(8),
        fontWeight: Typography.weight.medium,
    },
    arrowIcon: {
        width: sWidth(5),
        height: sWidth(8),
    },
});

export default ActivityCard;
