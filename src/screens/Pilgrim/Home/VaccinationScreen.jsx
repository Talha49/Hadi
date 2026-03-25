import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Image, LayoutAnimation, Platform, UIManager } from 'react-native';
import { Colors, Spacing, Typography } from '../../../theme';
import { Images } from '../../../assets/images/Images';
import { sWidth, sHeight } from '../../../utils/responsive';
import { t } from '../../../i18n/translations';
import Header from '../../../components/common/Header';

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

const VaccinationScreen = ({ navigation }) => {
    const [expandedIndex, setExpandedIndex] = useState(1);

    const toggleExpand = (index) => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setExpandedIndex(expandedIndex === index ? -1 : index);
    };

    const records = [
        { title: 'MMR', date: '20.06.2025' },
        {
            title: 'MMR',
            date: '20.06.2025',
            details: [
                { label: t('vaccineDetail.vaccination'), value: 'MMR' },
                { label: t('vaccineDetail.disease'), value: 'Measles, Mumps, Rubella' },
                { label: t('vaccineDetail.doseNumber'), value: '1st dose' },
                { label: t('vaccineDetail.ageAtVaccination'), value: '1 year' },
                { label: t('vaccineDetail.manufacturer'), value: 'Serum Institute of India (MMR II / equivalent)' },
                { label: t('vaccineDetail.batchNumber'), value: 'MMR-A12345' },
                { label: t('vaccineDetail.vaccinationCenter'), value: 'Ankara State Hospital' },
                { label: t('vaccineDetail.nextDueDate'), value: '15 April 2016 (2nd dose)' },
                { label: t('vaccineDetail.doctor'), value: 'Ministry of Health Physician' },
            ]
        }
    ];

    return (
        <View style={styles.container}>
            <Header
                title={t('vaccineDetail.title')}
                onBackPress={() => navigation.goBack()}
                showMihrab={true}
                leftAlign={true}
            />

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
                {records.map((record, index) => {
                    const isExpanded = expandedIndex === index;
                    return (
                        <View key={index} style={styles.cardContainer}>
                            <TouchableOpacity
                                style={[styles.cardHeader, isExpanded && styles.cardHeaderExpanded]}
                                activeOpacity={0.7}
                                onPress={() => toggleExpand(index)}
                            >
                                <View>
                                    <Text style={styles.cardTitle}>{record.title}</Text>
                                    <Text style={styles.cardDate}>{record.date}</Text>
                                </View>
                                <Image
                                    source={Images.rightArrow}
                                    style={[styles.arrowIcon, { transform: [{ rotate: isExpanded ? '-90deg' : '90deg' }] }]}
                                />
                            </TouchableOpacity>

                            {isExpanded && record.details && (
                                <View style={styles.detailsContainer}>
                                    {record.details.map((item, dIndex) => (
                                        <View key={dIndex} style={styles.infoItem}>
                                            <Text style={styles.infoLabel}>{item.label} </Text>
                                            <Text style={styles.infoValue}>{item.value}</Text>
                                        </View>
                                    ))}
                                </View>
                            )}
                        </View>
                    );
                })}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.backgroundLight,
    },
    scrollContent: {
        paddingHorizontal: Spacing.layout.gap,
        paddingTop: sHeight(20),
        paddingBottom: sHeight(100),
        alignItems: 'center',
    },
    cardContainer: {
        backgroundColor: Colors.white,
        borderRadius: sWidth(20),
        width: sWidth(348),
        marginBottom: sHeight(15),
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        overflow: 'hidden',
    },
    cardHeader: {
        padding: sWidth(20),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    cardHeaderExpanded: {
        borderBottomWidth: 1,
        borderBottomColor: '#F0F0F0',
    },
    cardTitle: {
        fontSize: sWidth(18),
        fontWeight: Typography.weight.bold,
        color: '#27687E',
    },
    cardDate: {
        fontSize: sWidth(14),
        color: '#27687E',
        marginTop: sHeight(4),
        opacity: 0.8,
    },
    arrowIcon: {
        width: sWidth(18),
        height: sWidth(18),
        tintColor: '#27687E',
    },
    detailsContainer: {
        padding: sWidth(15),
        gap: sHeight(10),
    },
    infoItem: {
        backgroundColor: '#F5F9FA',
        paddingHorizontal: sWidth(15),
        paddingVertical: sHeight(12),
        borderRadius: sWidth(15),
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    infoLabel: {
        fontSize: sWidth(13),
        fontWeight: Typography.weight.bold,
        color: '#27687E',
    },
    infoValue: {
        fontSize: sWidth(13),
        color: Colors.darkgray,
        fontWeight: Typography.weight.medium,
    },
});

export default VaccinationScreen;
