import React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { Colors, Typography } from '../../theme';
import { sWidth, sHeight } from '../../utils/responsive';
import { Images } from '../../assets/images/Images';
import { t } from '../../i18n/translations';

const MemberCard = ({ name, room, group, contact, isYellow }) => {
    const textColor = isYellow ? Colors.white : Colors.background;
    const tagBg = isYellow ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.05)';

    return (
        <ImageBackground
            source={Images.groupback}
            style={styles.card}
            imageStyle={[styles.cardBg, { tintColor: isYellow ? Colors.yellow : Colors.white }]}
            resizeMode="stretch"
        >
            <View style={styles.content}>
                <Text style={[styles.name, { color: textColor }]}>{name}</Text>

                <View style={styles.tagsRow}>
                    <View style={[styles.tag, { backgroundColor: tagBg }]}>
                        <Text style={[styles.tagText, { color: textColor }]}>{t('group.roomTag')} {room}</Text>
                    </View>
                    <View style={[styles.tag, { backgroundColor: tagBg }]}>
                        <Text style={[styles.tagText, { color: textColor }]}>{t('group.groupTag')} {group}</Text>
                    </View>
                </View>

                <View style={[styles.contactTag, { backgroundColor: tagBg }]}>
                    <Text style={[styles.contactText, { color: textColor }]}>
                        {t('group.contact')}: {contact}
                    </Text>
                </View>

                <View style={styles.bottomRow}>
                    <Image source={Images.profile} style={styles.avatar} />
                    <TouchableOpacity style={styles.messageButton}>
                        <Text style={[styles.messageText, { color: textColor }]}>{t('group.message')} </Text>
                        <Image
                            source={Images.rightArrow}
                            style={[styles.arrowIcon, { tintColor: textColor }]}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    card: {
        width: sWidth(140),
        height: sHeight(170),
        marginRight: sWidth(12),
    },
    cardBg: {
        width: '100%',
        height: '100%',
    },
    content: {
        flex: 1,
        padding: sWidth(12),
        paddingTop: sHeight(35),
    },
    name: {
        fontSize: Typography.size.xs,
        fontWeight: Typography.weight.bold,
        marginBottom: sHeight(8),
    },
    tagsRow: {
        flexDirection: 'row',
        gap: sWidth(4),
        marginBottom: sHeight(8),
    },
    tag: {
        paddingHorizontal: sWidth(6),
        paddingVertical: sHeight(2),
        borderRadius: sWidth(10),
    },
    tagText: {
        fontSize: Typography.size.xxss,
        fontWeight: Typography.weight.medium,
    },
    contactTag: {
        paddingHorizontal: sWidth(6),
        paddingVertical: sHeight(3),
        borderRadius: sWidth(10),
        alignSelf: 'flex-start',
        marginBottom: sHeight(15),
    },
    contactText: {
        fontSize: Typography.size.xxss,
        fontWeight: Typography.weight.medium,
    },
    bottomRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 'auto',
    },
    avatar: {
        width: sWidth(26),
        height: sWidth(26),
        borderRadius: sWidth(13),
    },
    messageButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    messageText: {
        fontSize: sWidth(8),
        fontWeight: Typography.weight.semibold,
    },
    arrowIcon: {
        width: sWidth(6),
        height: sWidth(6),
    },
});

export default MemberCard;
