import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Colors, Spacing, Typography } from '../../../theme';
import { sWidth, sHeight } from '../../../utils/responsive';
import { Images } from '../../../assets/images/Images';
import Header from '../../../components/common/Header';

// Mock Data
const patientInfo = {
    surname: "SAJID",
    firstName: "Muhammad Mardan",
    sex: "M",
    phone: "+97 668 786 45 55"
};

const prescriptions = [
    { id: 1, condition: "Type 2 Diabetes", detail: "Minoxdoryl\t500 - 1000mg pill" },
    { id: 2, condition: "Type 2 Diabetes", detail: "Minoxdoryl\t500 - 1000mg pill" },
    { id: 3, condition: "Type 2 Diabetes", detail: "Minoxdoryl\t500 - 1000mg pill" },
    { id: 4, condition: "Allergy to Peach", detail: "Menaxdryol\t1000mg injection" },
];

const medicalHistory = [
    {
        id: '1',
        date: '20/06/2025',
        details: {
            medication: 'Metformin',
            why: 'Lowers blood sugar in type 2 diabetes',
            dose: '500–1000 mg once or twice daily',
            howToTake: 'With meals, same time each day',
            sideEffects: 'Nausea, diarrhea',
            doctorName: 'Nathan Smith',
            location: 'New East Hospital, Makkah'
        }
    },
    {
        id: '2',
        date: '20/06/2025',
        details: null // Collapsed mock instance
    }
];

const AccordionItem = ({ item }) => {
    // Default open the first one for demonstration
    const [expanded, setExpanded] = useState(item.id === '1');

    return (
        <View style={styles.accordionContainer}>
            <TouchableOpacity 
                style={styles.accordionHeader} 
                activeOpacity={0.7}
                onPress={() => setExpanded(!expanded)}
            >
                <Text style={styles.accordionDate}>{item.date}</Text>
                <Image 
                    source={Images.rightArrow} 
                    style={[styles.chevron, { transform: [{ rotate: expanded ? '-90deg' : '90deg' }] }]} 
                />
            </TouchableOpacity>

            {expanded && item.details && (
                <View style={styles.accordionContent}>
                    <DetailRow label="Medication:" value={item.details.medication} />
                    <DetailRow label="Why:" value={item.details.why} />
                    <DetailRow label="Dose:" value={item.details.dose} />
                    <DetailRow label="How to take:" value={item.details.howToTake} />
                    <DetailRow label="Common side effects:" value={item.details.sideEffects} />
                    <DetailRow label="Doctor Name:" value={item.details.doctorName} />
                    <DetailRow label="Location:" value={item.details.location} />
                </View>
            )}
        </View>
    );
};

const DetailRow = ({ label, value }) => (
    <View style={styles.detailRow}>
        <Text style={styles.detailText}>
            <Text style={styles.detailLabel}>{label} </Text>
            {value}
        </Text>
    </View>
);

const MedicalCardScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Header 
                title="Medical Card" 
                showMihrab={true} 
                leftAlign={true} 
                onBackPress={() => navigation.goBack()}
                titleStyle={{ marginLeft: 5 }} 
            />

            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                
                {/* Patient Info Card */}
                <View style={styles.infoCard}>
                    <View style={styles.infoColumn}>
                        <Text style={styles.valueText}>{patientInfo.surname}</Text>
                        <Text style={styles.labelText}>Surname</Text>
                    </View>
                    <View style={styles.divider} />
                    <View style={[styles.infoColumn, { flex: 1 }]}>
                        <Text style={styles.valueText}>{patientInfo.firstName}</Text>
                        <Text style={styles.labelText}>First Name</Text>
                    </View>
                    <View style={styles.divider} />
                    <View style={styles.infoColumn}>
                        <Text style={styles.valueText}>{patientInfo.sex}</Text>
                        <Text style={styles.labelText}>Sex</Text>
                    </View>
                </View>

                {/* SOS & Contact Row */}
                <View style={styles.actionRow}>
                    <TouchableOpacity style={styles.sosBlock} activeOpacity={0.8}>
                        <Image source={Images.sos} style={styles.sosImage} resizeMode="contain" />
                    </TouchableOpacity>

                    <View style={styles.contactBlock}>
                        <Text style={styles.contactLabel}>Emergency Contact</Text>
                        <Text style={styles.contactNumber}>{patientInfo.phone}</Text>
                    </View>
                </View>

                {/* Prescription History */}
                <Text style={styles.sectionHeader}>Prescription History</Text>
                <View style={styles.prescriptionList}>
                    {prescriptions.map((item, index) => (
                        <View key={index} style={styles.rxRow}>
                            <Image source={Images.safety} style={styles.rxWarningIcon} />
                            <View style={styles.rxCard}>
                                <Text style={styles.rxCondition}>{item.condition}</Text>
                                <Text style={styles.rxDetail}>{item.detail}</Text>
                            </View>
                        </View>
                    ))}
                </View>

                {/* Medical History */}
                <Text style={styles.sectionHeader}>Medical History</Text>
                <View style={styles.medicalHistoryList}>
                    {medicalHistory.map((item) => (
                        <AccordionItem key={item.id} item={item} />
                    ))}
                </View>

            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7F4EF',
    },
    scrollContent: {
        paddingHorizontal: Spacing.layout.gap,
        paddingTop: sHeight(20),
        paddingBottom: sHeight(50),
    },
    // Top Info Cards (Same styles as Emergency Case)
    infoCard: {
        backgroundColor: Colors.white,
        borderRadius: sWidth(18),
        paddingVertical: sHeight(20),
        paddingHorizontal: sWidth(15),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: sHeight(15),
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 5,
    },
    infoColumn: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    divider: {
        width: 1,
        height: '80%',
        backgroundColor: '#E0E0E0',
        marginHorizontal: sWidth(10),
    },
    valueText: {
        fontSize: sWidth(14),
        color: '#606060',
        fontWeight: Typography.weight.bold,
        marginBottom: sHeight(4),
        textAlign: 'center',
    },
    labelText: {
        fontSize: Typography.size.xss,
        color: '#A0A0A0',
        fontWeight: Typography.weight.regular,
        textAlign: 'center',
    },
    // SOS & Action Row
    actionRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: sHeight(25),
    },
    sosBlock: {
        width: sWidth(135),
        height: sHeight(93),
        backgroundColor: Colors.yellow,
        borderRadius: sWidth(16),
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
    },
    sosImage: {
        width: sWidth(69),
        height: sHeight(67),
        tintColor: Colors.white,
    },
    contactBlock: {
        flex: 1,
        marginLeft: sWidth(10),
        backgroundColor: Colors.white,
        borderRadius: sWidth(16),
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
    },
    contactLabel: {
        fontSize: sWidth(9),
        color: '#A0A0A0',
        fontWeight: Typography.weight.medium,
        marginBottom: sHeight(5),
    },
    contactNumber: {
        fontSize: sWidth(14),
        color: Colors.background,
        fontWeight: Typography.weight.heavy,
        textAlign: 'center',
        letterSpacing: 0.5,
    },
    // Typography Headers
    sectionHeader: {
        fontSize: sWidth(15),
        fontWeight: Typography.weight.heavy,
        color: Colors.background,
        marginBottom: sHeight(15),
        marginLeft: sWidth(5),
    },
    // Prescription Cards
    prescriptionList: {
        gap: sHeight(10),
        marginBottom: sHeight(25),
        alignItems: 'center', // Centers the row in space
    },
    rxRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
    },
    rxWarningIcon: {
        width: sWidth(18),
        height: sWidth(18),
        tintColor: Colors.background, // Match dark blue
    },
    rxCard: {
        width: sWidth(263),
        height: sHeight(60),
        backgroundColor: Colors.white,
        borderRadius: sWidth(14),
        justifyContent: 'center',
        paddingHorizontal: sWidth(20),
        elevation: 1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 3,
    },
    rxCondition: {
        fontSize: sWidth(15),
        fontWeight: Typography.weight.bold,
        color: Colors.background,
        marginBottom: sHeight(4),
    },
    rxDetail: {
        fontSize: sWidth(11),
        fontFamily: 'monospace', // Gives that technical medicine look from the mockup
        color: '#4AA1B7', // Aqua blue
        fontWeight: Typography.weight.semibold,
    },
    // Accordion
    medicalHistoryList: {
        gap: sHeight(15),
    },
    accordionContainer: {
        backgroundColor: Colors.white,
        borderRadius: sWidth(18),
        overflow: 'hidden',
        elevation: 1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 3,
    },
    accordionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: sHeight(20),
        paddingHorizontal: sWidth(20),
    },
    accordionDate: {
        fontSize: sWidth(15),
        fontWeight: Typography.weight.heavy,
        color: '#4AA1B7',
    },
    chevron: {
        width: sWidth(14),
        height: sWidth(14),
        tintColor: '#4AA1B7',
    },
    accordionContent: {
        paddingHorizontal: sWidth(15),
        paddingBottom: sHeight(20),
        gap: sHeight(8),
    },
    detailRow: {
        backgroundColor: '#F5F5F5', // Soft gray pill
        paddingVertical: sHeight(12),
        paddingHorizontal: sWidth(15),
        borderRadius: sWidth(12),
    },
    detailText: {
        fontSize: sWidth(12),
        color: Colors.background,
        lineHeight: sHeight(18),
    },
    detailLabel: {
        fontWeight: Typography.weight.heavy,
    }
});

export default MedicalCardScreen;
