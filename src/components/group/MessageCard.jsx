import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Colors, Typography } from '../../theme';
import { sWidth, sHeight, moderateScale } from '../../utils/responsive';
import { Images } from '../../assets/images/Images';

const MessageCard = ({ role, name, message, time, unreadCount, isImportant, isGroup, avatars, avatar }) => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity
            style={styles.card}
            activeOpacity={0.8}
            onPress={() => navigation.navigate('Chat', { name, avatar, isGroup, avatars })}
        >
            {isImportant && <View style={styles.accent} />}

            <View style={styles.leftSection}>
                {isGroup ? (
                    <View style={styles.groupAvatarWrapper}>
                        <Image source={avatars[0]} style={styles.groupAvatar1} />
                        <View style={styles.groupAvatar2Container}>
                            <Image source={avatars[1]} style={styles.groupAvatar2} />
                        </View>
                    </View>
                ) : (
                    <View style={styles.avatarWrapper}>
                        <Image source={avatar || Images.profile} style={styles.avatar} />
                    </View>
                )}
            </View>

            <View style={styles.mainSection}>
                <Text style={styles.roleText}>{role}</Text>
                <Text style={styles.nameText} numberOfLines={1}>{name}</Text>

                <View style={styles.messageRow}>
                    {!unreadCount && !isImportant && (
                        <View style={styles.ticksWrapper}>
                            <Image source={Images.tick} style={styles.tickIcon} />
                            <Image source={Images.tick} style={[styles.tickIcon, { marginLeft: -sWidth(8) }]} />
                        </View>
                    )}
                    <Text style={styles.messageText} numberOfLines={1}>{message}</Text>
                </View>
            </View>

            <View style={styles.rightSection}>
                {unreadCount ? (
                    <View style={styles.unreadBadge}>
                        <Text style={styles.unreadText}>{unreadCount}</Text>
                    </View>
                ) : (
                    <Text style={styles.timeText}>{time}</Text>
                )}
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: Colors.white,
        borderRadius: moderateScale(14),
        width: sWidth(350),
        height: sHeight(71),
        marginBottom: sHeight(10),
        flexDirection: 'row',
        alignItems: 'center',
        overflow: 'hidden',
        alignSelf: 'center',
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 5,
    },
    accent: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: sWidth(34),
        height: sHeight(71),
        backgroundColor: Colors.yellow,
        borderTopLeftRadius: moderateScale(14),
        borderBottomLeftRadius: moderateScale(14),
    },
    leftSection: {
        width: sWidth(75),
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1,
    },
    avatarWrapper: {
        width: sWidth(44),
        height: sWidth(44),
        borderRadius: sWidth(22),
        overflow: 'hidden',
        borderWidth: 1.5,
        borderColor: Colors.white,
    },
    avatar: {
        width: '100%',
        height: '100%',
    },
    groupAvatarWrapper: {
        width: sWidth(50),
        height: sWidth(44),
        justifyContent: 'center',
    },
    groupAvatar1: {
        width: sWidth(34),
        height: sWidth(34),
        borderRadius: sWidth(17),
        borderWidth: 1.5,
        borderColor: Colors.white,
    },
    groupAvatar2Container: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: sWidth(34),
        height: sWidth(34),
        borderRadius: sWidth(17),
        borderWidth: 1.5,
        borderColor: Colors.white,
        overflow: 'hidden',
    },
    groupAvatar2: {
        width: '100%',
        height: '100%',
    },
    mainSection: {
        flex: 1,
        paddingVertical: sHeight(6),
    },
    roleText: {
        fontSize: moderateScale(8),
        color: '#718096',
        fontWeight: Typography.weight.medium,
    },
    nameText: {
        fontSize: sWidth(15),
        fontWeight: Typography.weight.bold,
        color: Colors.background,
    },
    messageRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    ticksWrapper: {
        flexDirection: 'row',
        marginRight: sWidth(10),
    },
    tickIcon: {
        width: sWidth(12),
        height: sHeight(12),
        tintColor: '#A0AEC0',
        resizeMode: 'contain',
    },
    messageText: {
        fontSize: sWidth(13),
        color: '#A0AEC0',
        flex: 1,
    },
    rightSection: {
        width: sWidth(70),
        alignItems: 'center',
        justifyContent: 'center',
        paddingRight: sWidth(10),
    },
    unreadBadge: {
        width: sWidth(30),
        height: sWidth(30),
        borderRadius: sWidth(15),
        backgroundColor: Colors.yellow,
        alignItems: 'center',
        justifyContent: 'center',
    },
    unreadText: {
        color: Colors.white,
        fontSize: sWidth(14),
        fontWeight: Typography.weight.bold,
    },
    timeText: {
        fontSize: sWidth(10),
        color: '#A0AEC0',
        position: 'absolute',
        bottom: sHeight(15),
        right: sWidth(15),
    },
});

export default MessageCard;
