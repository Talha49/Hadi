import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Images } from '../../assets/images/Images';
import { Typography, Colors, Spacing } from '../../theme';
import { sWidth, sHeight } from '../../utils/responsive';
import { useNavigation } from '@react-navigation/native';
import { t } from '../../i18n/translations';
import HadiHeader from '../../components/common/HadiHeader';
import InfoCard from '../../components/common/InfoCard';
import ActivityCard from '../../components/rituals/ActivityCard';
import ActivityDetailModal from '../../components/rituals/ActivityDetailModal';

const RitualsScreen = () => {
    const navigation = useNavigation();
    const [selectedActivity, setSelectedActivity] = React.useState(null);
    const [modalVisible, setModalVisible] = React.useState(false);

    const activityDimensions = {
        ihram: { width: 404, height: 459 },
        tawafQudum: { width: 402, height: 473 },
        sai: { width: 669, height: 669 },
        mina: { width: 584, height: 584 },
        arafat: { width: 408, height: 469 },
        muzdalifah: { width: 402, height: 420 },
        stoningAqabah: { width: 402, height: 457 },
        qurbani: { width: 402, height: 462 },
        halq: { width: 402, height: 456 },
        tawafIfadah: { width: 402, height: 473 },
        stoningThree: { width: 402, height: 457 },
        tawafWada: { width: 402, height: 473 },
    };

    const openActivityDetail = (key, image) => {
        const activityData = t(`activities.${key}`, { returnObjects: true });
        const dimensions = activityDimensions[key] || { width: 405, height: 460 };
        setSelectedActivity({ ...activityData, image, dimensions });
        setModalVisible(true);
    };

    const dashboardData = [
        {
            icon: Images.hotel,
            label: t('group.makkahCity'),
            value: t('group.hotelName'),
            width: sWidth(150),
        },
        {
            icon: Images.floor,
            label: t('rituals.floorNumber'),
            value: '4',
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

    const ritualSummaries = [
        t('rituals.prayingAtMina'),
        t('rituals.travelingToMakkah'),
        t('rituals.animalSacrifice'),
    ];

    return (
        <ScrollView style={styles.container} bounces={false} showsVerticalScrollIndicator={false}>
            <HadiHeader title={t('rituals.hadiGuide')}>
                <View style={styles.cardsRow}>
                    {dashboardData.map((item, index) => (
                        <InfoCard key={index} {...item} />
                    ))}
                </View>
            </HadiHeader>

            <View style={styles.content}>
                <TouchableOpacity
                    style={styles.itinerarySection}
                    activeOpacity={0.9}
                    onPress={() => navigation.navigate('Itinerary')}
                >
                    <View style={styles.itineraryHeader}>
                        <Text style={styles.itineraryTitle}>{t('rituals.title')}</Text>
                        <Image source={Images.rightArrow} style={styles.arrowIcon} />
                    </View>

                    <View style={styles.itineraryContent}>
                        <View style={styles.ritualList}>
                            {ritualSummaries.map((item, index) => (
                                <View key={index} style={styles.ritualItem}>
                                    <Image source={Images.rightArrow} style={styles.ritualBullet} />
                                    <Text style={styles.ritualText}>{item}</Text>
                                </View>
                            ))}
                        </View>
                        <Image
                            source={Images.iteranaryimage}
                            style={styles.itineraryImage}
                            resizeMode="contain"
                        />
                    </View>
                </TouchableOpacity>

                <View style={styles.activitiesSection}>
                    <Text style={styles.sectionTitle}>{t('rituals.activitiesInfo')}</Text>

                    <View style={styles.activityGrid}>
                        {/* Row 1 - Straight */}
                        <ActivityCard {...t('activities.ihram', { returnObjects: true })} image={Images.ihram} type="yellow" onPress={() => openActivityDetail('ihram', Images.ihram)} />
                        <ActivityCard {...t('activities.tawafQudum', { returnObjects: true })} image={Images.tawaf} onPress={() => openActivityDetail('tawafQudum', Images.tawaf)} />
                        <ActivityCard {...t('activities.sai', { returnObjects: true })} image={Images.sai} onPress={() => openActivityDetail('sai', Images.sai)} />

                        {/* Row 2 - Flipped */}
                        <ActivityCard {...t('activities.mina', { returnObjects: true })} image={Images.mina} isFlipped onPress={() => openActivityDetail('mina', Images.mina)} />
                        <ActivityCard {...t('activities.arafat', { returnObjects: true })} image={Images.arafat} isFlipped onPress={() => openActivityDetail('arafat', Images.arafat)} />
                        <ActivityCard {...t('activities.muzdalifah', { returnObjects: true })} image={Images.muzdalifah} type="teal" isFlipped onPress={() => openActivityDetail('muzdalifah', Images.muzdalifah)} />

                        {/* Row 3 - Straight */}
                        <ActivityCard {...t('activities.stoningAqabah', { returnObjects: true })} image={Images.stoningAqabah} type="yellow" onPress={() => openActivityDetail('stoningAqabah', Images.stoningAqabah)} />
                        <ActivityCard {...t('activities.qurbani', { returnObjects: true })} image={Images.qurbani} onPress={() => openActivityDetail('qurbani', Images.qurbani)} />
                        <ActivityCard {...t('activities.halq', { returnObjects: true })} image={Images.halq} onPress={() => openActivityDetail('halq', Images.halq)} />

                        {/* Row 4 - Flipped */}
                        <ActivityCard {...t('activities.tawafIfadah', { returnObjects: true })} image={Images.tawafIfadah} isFlipped onPress={() => openActivityDetail('tawafIfadah', Images.tawafIfadah)} />
                        <ActivityCard {...t('activities.stoningThree', { returnObjects: true })} image={Images.stoningThree} isFlipped onPress={() => openActivityDetail('stoningThree', Images.stoningThree)} />
                        <ActivityCard {...t('activities.tawafWada', { returnObjects: true })} image={Images.tawafWada} type="teal" isFlipped onPress={() => openActivityDetail('tawafWada', Images.tawafWada)} />
                    </View>
                </View>
            </View>
            <ActivityDetailModal
                visible={modalVisible}
                item={selectedActivity}
                onClose={() => setModalVisible(false)}
            />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.backgroundLight,
    },
    content: {
        marginTop: sHeight(60),
        paddingHorizontal: Spacing.layout.gap,
    },
    cardsRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: sWidth(404),
        position: 'absolute',
        bottom: -sHeight(25),
        zIndex: 10,
        gap: 8,
        paddingHorizontal: Spacing.layout.gap,
    },
    itinerarySection: {
        width: sWidth(347),
        height: sHeight(184),
        backgroundColor: Colors.white,
        borderRadius: sWidth(14),
        padding: sWidth(20),
        alignSelf: 'center',
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
    },
    itineraryHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: sHeight(15),
    },
    itineraryTitle: {
        fontSize: sWidth(20),
        fontWeight: Typography.weight.bold,
        color: Colors.background,
        marginRight: sWidth(10),
    },
    arrowIcon: {
        width: sWidth(10),
        height: sWidth(18),
        tintColor: Colors.background,
    },
    itineraryContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    ritualList: {
        gap: sHeight(10),
    },
    ritualItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
        paddingVertical: sHeight(6),
        paddingHorizontal: sWidth(12),
        borderRadius: sWidth(12),
        width: sWidth(160),
    },
    ritualBullet: {
        width: sWidth(6),
        height: sWidth(10),
        marginRight: sWidth(8),
        tintColor: '#A0AEC0',
    },
    ritualText: {
        fontSize: sWidth(12),
        color: '#718096',
        fontWeight: Typography.weight.medium,
    },
    itineraryImage: {
        width: sWidth(135),
        height: sHeight(115),
        marginTop: -sHeight(10),
    },
    activitiesSection: {
        marginTop: sHeight(32),
        paddingBottom: sHeight(40),
    },
    sectionTitle: {
        fontSize: sWidth(22),
        fontWeight: Typography.weight.bold,
        color: Colors.background,
        marginBottom: sHeight(15),
    },
    activityGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: sWidth(8),
        justifyContent: 'space-between',
    },
});

export default RitualsScreen;
