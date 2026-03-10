import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground, ScrollView } from 'react-native';
import { Images } from '../../assets/images/Images';
import { Typography, Colors, Spacing } from '../../theme';
import { sWidth, sHeight } from '../../utils/responsive';
import { useNavigation } from '@react-navigation/native';
import { t } from '../../i18n/translations';
import InfoCard from '../../components/common/InfoCard';
import MemberCard from '../../components/group/MemberCard';
import MessageCard from '../../components/group/MessageCard';

const GroupScreen = () => {
    const navigation = useNavigation();

    const groupData = [
        {
            icon: Images.hotel,
            label: t('group.makkahCity'),
            value: t('group.hotelName'),
            width: sWidth(150),
        },
        {
            icon: Images.groupmember,
            label: t('group.groupNumber'),
            value: '4A',
            width: sWidth(85),
            valueSize: Typography.size.xl,
        },
        {
            icon: Images.key,
            label: t('group.roomNumber'),
            value: '401',
            width: sWidth(85),
            valueSize: Typography.size.xl,
        },
    ];

    const members = [
        { name: 'Majid Hussain', room: '404', group: 'A', contact: '+92 300 5064477', isYellow: true },
        { name: 'Majid Hussain', room: '404', group: 'A', contact: '+92 300 5064477', isYellow: false },
        { name: 'Majid Hussain', room: '404', group: 'A', contact: '+92 300 5064477', isYellow: false },
        { name: 'Majid Hussain', room: '404', group: 'A', contact: '+92 300 5064477', isYellow: false },
        { name: 'Majid Hussain', room: '404', group: 'A', contact: '+92 300 5064477', isYellow: false },
        { name: 'Majid Hussain', room: '404', group: 'A', contact: '+92 300 5064477', isYellow: false },
    ];

    const messages = [
        {
            role: t('group.groupLeader'),
            name: 'Abdullah Hassan',
            message: t('group.reportTime'),
            unreadCount: 1,
            isImportant: true
        },
        {
            role: t('group.groupMember'),
            name: 'Ali Bakar',
            message: t('group.reportTime'),
            time: '07:00PM'
        },
        {
            role: t('group.important'),
            name: 'Hajj 2026 Group A',
            message: t('group.reportTime'),
            time: '07:00PM',
            isImportant: true,
            isGroup: true,
            avatars: [Images.profile, Images.profile]
        },
        {
            role: t('group.groupMember'),
            name: 'Hannan Abid',
            message: t('group.reportTime'),
            time: '07:00PM'
        },
        {
            role: t('group.groupMember'),
            name: 'Ali Bakar',
            message: t('group.reportTime'),
            time: '07:00PM'
        },
        {
            role: t('group.groupMember'),
            name: 'Jaffrey Hussain',
            message: t('group.reportTime'),
            time: '07:00PM'
        },
        {
            role: t('group.groupMember'),
            name: 'Hannan Abid',
            message: t('group.reportTime'),
            time: '07:00PM'
        },
    ];

    return (
        <ScrollView style={styles.container} bounces={false} showsVerticalScrollIndicator={false}>
            <ImageBackground
                source={Images.headerImage}
                style={styles.header}
                imageStyle={styles.headerBg}
                resizeMode="cover"
            >
                <View style={styles.headerContent}>
                    <View style={styles.topRow}>
                        <Text style={styles.headerTitle}>Hadi Journey</Text>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Profile')}
                            activeOpacity={0.8}
                        >
                            <Image source={Images.profile} style={styles.avatar} />
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>

            <View style={styles.content}>
                <View style={styles.cardsRow}>
                    {groupData.map((item, index) => (
                        <InfoCard key={index} {...item} />
                    ))}
                </View>

                <View style={styles.infoSection}>
                    <View style={styles.infoTitleRow}>
                        <Text style={styles.infoTitleRowText}>{t('group.groupInformation')}</Text>
                        <TouchableOpacity style={styles.swipeButton}>
                            <Text style={styles.swipeText}>{t('group.swipe')} </Text>
                            <Image source={Images.rightArrow} style={styles.swipeIcon} />
                        </TouchableOpacity>
                    </View>

                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.membersList}
                    >
                        {members.map((member, index) => (
                            <MemberCard key={index} {...member} />
                        ))}
                    </ScrollView>
                </View>

                <View style={[styles.infoSection, { marginTop: sHeight(30) }]}>
                    <View style={styles.infoTitleRow}>
                        <Text style={styles.infoTitleRowText}>{t('group.roomInformation')}</Text>
                        <TouchableOpacity style={styles.swipeButton}>
                            <Text style={styles.swipeText}>{t('group.swipe')} </Text>
                            <Image source={Images.rightArrow} style={styles.swipeIcon} />
                        </TouchableOpacity>
                    </View>

                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.membersList}
                    >
                        {members.map((member, index) => (
                            <MemberCard key={index} {...member} isYellow={false} />
                        ))}
                    </ScrollView>
                </View>

                <View style={styles.messageSection}>
                    <Text style={styles.infoTitle}>{t('group.messages')}</Text>
                    <View style={styles.messageList}>
                        {messages.map((msg, index) => (
                            <MessageCard key={index} {...msg} />
                        ))}
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.backgroundLight,
    },
    header: {
        width: sWidth(404),
        height: sHeight(259),
        backgroundColor: Colors.background,
    },
    headerBg: {
        position: 'absolute',
        top: 50,
        left: 0,
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    headerContent: {
        flex: 1,
        paddingHorizontal: Spacing.layout.gap,
        paddingTop: sHeight(50),
        paddingBottom: sHeight(70),
    },
    topRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerTitle: {
        fontSize: sWidth(24),
        fontWeight: Typography.weight.bold,
        color: Colors.white,
        letterSpacing: sWidth(-0.4),
    },
    avatar: {
        width: sWidth(40),
        height: sWidth(40),
        borderRadius: sWidth(20),
        borderWidth: 2,
        borderColor: Colors.yellow,
    },
    content: {
        marginTop: -sHeight(20),
        borderTopLeftRadius: sWidth(30),
        borderTopRightRadius: sWidth(30),
        paddingHorizontal: Spacing.layout.gap,
        paddingTop: sHeight(50),
    },
    cardsRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        position: 'absolute',
        top: -sHeight(37.5),
        zIndex: 10,
        gap: 8,
        paddingHorizontal: Spacing.layout.gap,
    },
    infoSection: {
        marginTop: sHeight(20),
    },
    infoTitleRowText: {
        fontSize: sWidth(20),
        fontWeight: Typography.weight.bold,
        color: Colors.background,
    },
    infoTitle: {
        fontSize: sWidth(24), // Larger for Messages section
        fontWeight: Typography.weight.bold,
        color: Colors.background,
        marginBottom: sHeight(20),
    },
    swipeButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    swipeText: {
        fontSize: sWidth(14),
        color: Colors.text.lightgray,
    },
    swipeIcon: {
        width: sWidth(6),
        height: sWidth(10),
        tintColor: Colors.text.lightgray,
    },
    membersList: {
        paddingBottom: sHeight(20),
        paddingRight: sWidth(20),
    },
    messageSection: {
        marginTop: sHeight(40),
        paddingBottom: sHeight(40),
    },
    messageList: {
        gap: sHeight(2),
    },
});

export default GroupScreen;
