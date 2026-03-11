import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Typography, Colors, Spacing } from '../../theme';
import { Images } from '../../assets/images/Images';
import { sWidth, sHeight, moderateScale } from '../../utils/responsive';
import Header from '../../components/common/Header';
import RitualCard from '../../components/rituals/RitualCard';
import { t } from '../../i18n/translations';
import { useNavigation } from '@react-navigation/native';

const ItineraryScreen = () => {
    const navigation = useNavigation();
    const [rituals, setRituals] = useState([
        { id: 1, name: t('rituals.animalSacrifice'), day: '10th Day of Hajj', status: 'upcoming' },
        { id: 2, name: t('rituals.animalSacrifice'), day: '10th Day of Hajj', status: 'upcoming' },
        { id: 3, name: t('rituals.animalSacrifice'), day: '10th Day of Hajj', status: 'upcoming' },
        { id: 4, name: t('rituals.animalSacrifice'), day: '10th Day of Hajj', status: 'upcoming' },
        { id: 5, name: t('rituals.animalSacrificeQurbani'), day: '10th Day of Hajj', status: 'active' },
        { id: 6, name: t('rituals.animalSacrifice'), day: '10th Day of Hajj', status: 'completed' },
        { id: 7, name: t('rituals.animalSacrifice'), day: '10th Day of Hajj', status: 'completed' },
        { id: 8, name: t('rituals.animalSacrifice'), day: '10th Day of Hajj', status: 'completed' },
        { id: 9, name: t('rituals.animalSacrifice'), day: '10th Day of Hajj', status: 'completed' },
    ]);

    const toggleStatus = (id) => {
        setRituals(prev => prev.map(ritual => {
            if (ritual.id === id) {
                const nextStatus = ritual.status === 'upcoming' ? 'active' :
                    ritual.status === 'active' ? 'completed' : 'upcoming';
                return { ...ritual, status: nextStatus };
            }
            return ritual;
        }));
    };

    return (
        <View style={styles.container}>
            <Header
                title={t('rituals.title')}
                onBackPress={() => navigation.goBack()}
                showMihrab={true}
                leftAlign={true}
            />

            <ScrollView
                style={styles.content}
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.timelineContainer}>
                    {rituals.map((ritual, index) => {
                        const isActive = ritual.status === 'active';
                        const isCompleted = ritual.status === 'completed';
                        const isUpcoming = ritual.status === 'upcoming';

                        const showLine = !isActive && (index < rituals.length - 1) && (rituals[index + 1].status !== 'active');

                        return (
                            <View key={ritual.id} style={styles.ritualRow}>
                                <View style={styles.timelineColumn}>
                                    {!isActive && (
                                        <>
                                            <View style={[
                                                styles.dot,
                                                isUpcoming ? styles.upcomingDot : styles.completedDot,
                                            ]} />
                                            {showLine && <View style={styles.verticalLine} />}
                                        </>
                                    )}
                                    {isActive && (
                                        <View style={{ width: sWidth(14), height: sWidth(14) }} />
                                    )}
                                </View>

                                <RitualCard
                                    title={ritual.name}
                                    subtitle={`${ritual.day} | 1x`}
                                    status={ritual.status}
                                    onPress={() => toggleStatus(ritual.id)}
                                />
                            </View>
                        );
                    })}
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9F7F2',
    },
    content: {
        flex: 1,
    },
    scrollContent: {
        paddingTop: sHeight(30),
        paddingBottom: sHeight(50),
        paddingHorizontal: Spacing.layout.gap,
    },
    timelineContainer: {
        alignItems: 'center',
    },
    ritualRow: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'flex-start',
        paddingLeft: sWidth(20),
    },
    timelineColumn: {
        width: sWidth(60),
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'stretch',
    },
    verticalLine: {
        position: 'absolute',
        top: '50%',
        width: 1.5,
        backgroundColor: '#E2E8F0',
        height: sHeight(75),
        zIndex: 0,
    },
    dot: {
        width: sWidth(14),
        height: sWidth(14),
        borderRadius: sWidth(7),
        zIndex: 2,
        backgroundColor: '#CBD5E0',
    },
    upcomingDot: {
        backgroundColor: '#4A98B0',
    },
    completedDot: {
        backgroundColor: '#CBD5E0',
    },
});

export default ItineraryScreen;
