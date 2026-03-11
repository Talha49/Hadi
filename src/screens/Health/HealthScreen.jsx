import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import CommonBackground from '../../components/common/CommonBackground';
import HadiHeader from '../../components/common/HadiHeader';
import InfoCard from '../../components/common/InfoCard';
import QRInfoCard from '../../components/common/QRInfoCard';
import MedicationCard from '../../components/health/MedicationCard';
import MedicationReminder from '../../components/health/MedicationReminder';
import { Images } from '../../assets/images/Images';
import { Typography, Colors, Spacing } from '../../theme';
import { sWidth, sHeight } from '../../utils/responsive';
import { t } from '../../i18n/translations';

const HealthScreen = () => {
    const infoData = [
        { label: t('health.male'), value: "Shayan Ali\nHaider", icon: Images.male },
        { label: t('health.bodyWeight'), value: "74", icon: Images.weight, valueSize: sWidth(26) },
        { label: t('health.bloodGroup'), value: "AB+", icon: Images.bloodGroup, valueSize: sWidth(26) },
    ];

    const medications = [
        { id: 1, name: "Metformin", dosage: "500 - 1000mg", quantity: "2 ", instructions: t('health.takeAfterMeals') },
        { id: 2, name: "Metformin", dosage: "500 - 1000mg", quantity: "2 ", instructions: t('health.takeAfterMeals') },
        { id: 3, name: "Metformin", dosage: "500 - 1000mg", quantity: "2 ", instructions: t('health.takeAfterMeals') },
    ];

    const [reminders, setReminders] = React.useState([
        { id: 1, time: "07:00 PM", name: "Augmetin", quantity: "1 ", completed: true },
        { id: 2, time: "07:00 PM", name: "Augmetin", quantity: "1", completed: true },
        { id: 3, time: "07:00 PM", name: "Augmetin", quantity: "1 ", completed: false },
        { id: 4, time: "07:00 PM", name: "Augmetin", quantity: "1 ", completed: false },
        { id: 5, time: "07:00 PM", name: "Augmetin", quantity: "1 ", completed: false },
    ]);

    const toggleReminder = (id) => {
        setReminders(prev => prev.map(r => r.id === id ? { ...r, completed: !r.completed } : r));
    };

    return (
        <ScrollView style={styles.container} bounces={false} showsVerticalScrollIndicator={false}>
            <View style={styles.headerWrapper}>
                <HadiHeader title={t('health.title')}>
                    <View style={styles.infoRow}>
                        {infoData.map((info, index) => (
                            <InfoCard
                                key={index}
                                label={info.label}
                                value={info.value}
                                icon={info.icon}
                                valueSize={info.valueSize}
                                width={sWidth(110)}
                            />
                        ))}
                    </View>
                </HadiHeader>
            </View>

            <View style={styles.content}>
                <View style={styles.emergencyWrapper}>
                    <QRInfoCard
                        title={t('health.emergencyMedicalCard')}
                        bgColor="#F4C558"
                        titleColor={Colors.white}
                        itemBgColor="rgba(255, 255, 255, 0.2)"
                        textColor={Colors.white}
                        iconTintColor={Colors.white}
                        arrowTintColor={Colors.white}
                        qrImage={Images.qr}
                        qrTintColor={Colors.white}
                        qrWidth={sWidth(91.67)}
                        qrHeight={sWidth(91.67)}
                        headerIcon={Images.safety}
                        items={[
                            { icon: Images.sos, text: "Call +90 509 38 88" },
                            { icon: Images.sos, text: "High Blood Pressure" },
                            { icon: Images.sos, text: "Allergic to Peach" },
                            { icon: Images.sos, text: "Diabetes Type 2" },
                        ]}
                    />
                </View>

                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>{t('health.medicationList')}</Text>
                    <TouchableOpacity style={styles.swipeBadge}>
                        <Text style={styles.swipeIndicator}>{t('health.swipe')}</Text>
                    </TouchableOpacity>
                </View>

                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.medicationList}
                >
                    {medications.map((med, index) => (
                        <MedicationCard
                            key={index}
                            name={med.name}
                            dosage={med.dosage}
                            quantity={med.quantity}
                            instructions={med.instructions}
                        />
                    ))}
                </ScrollView>

                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>{t('health.medicationReminder')}</Text>
                </View>

                <View style={styles.remindersList}>
                    {reminders.map((reminder) => (
                        <MedicationReminder
                            key={reminder.id}
                            time={reminder.time}
                            name={reminder.name}
                            quantity={reminder.quantity}
                            completed={reminder.completed}
                            onToggle={() => toggleReminder(reminder.id)}
                        />
                    ))}
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
    headerWrapper: {
        marginBottom: sHeight(50),
    },
    infoRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: sWidth(10),
        marginTop: sHeight(-60),
        paddingHorizontal: Spacing.layout.gap,
    },
    content: {
        paddingHorizontal: Spacing.layout.gap,
        paddingBottom: sHeight(100), // More space for tab bar
    },
    emergencyWrapper: {
        alignItems: 'center',
        marginBottom: sHeight(15),
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: sHeight(15),
    },
    sectionTitle: {
        fontSize: sWidth(20),
        fontWeight: Typography.weight.bold,
        color: Colors.text.secondary,
        letterSpacing: -0.5,
    },
    swipeBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: sWidth(4),
    },
    swipeIndicator: {
        fontSize: sWidth(11),
        color: Colors.text.lightgray,
        fontWeight: Typography.weight.medium,
    },
    swipeArrow: {
        width: sWidth(4),
        height: sHeight(8),
        tintColor: Colors.text.lightgray,
    },
    medicationList: {
        paddingBottom: sHeight(25),
        gap: sWidth(8),
    },
    remindersList: {
        gap: sHeight(5),
    }
});

export default HealthScreen;
