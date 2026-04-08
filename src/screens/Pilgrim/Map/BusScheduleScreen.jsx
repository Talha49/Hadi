import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { Colors, Spacing, Typography } from '../../../theme';
import { sWidth, sHeight } from '../../../utils/responsive';
import { Images } from '../../../assets/images/Images';
import Header from '../../../components/common/Header';

const busSchedules = [
    { id: '1', busNo: '175', time: '05:22 AM', route: 'Saddar Street - Malik Road', details: 'Ride 3 stops (3 min)', freq: 'Every 30 min' },
    { id: '2', busNo: '175', time: '05:52 AM', route: 'Saddar Street - Malik Road', details: 'Ride 3 stops (3 min)', freq: 'Every 30 min' },
    { id: '3', busNo: '175', time: '06:22 AM', route: 'Saddar Street - Malik Road', details: 'Ride 3 stops (3 min)', freq: 'Every 30 min' },
    { id: '4', busNo: '175', time: '06:52 AM', route: 'Saddar Street - Malik Road', details: 'Ride 3 stops (3 min)', freq: 'Every 30 min' },
];

const BusScheduleScreen = ({ navigation }) => {

    const renderItem = ({ item }) => (
        <View style={styles.card}>
            <View style={styles.cardLeft}>
                <Image source={Images.broadcast} style={styles.busIcon} resizeMode="contain" />
                <Text style={styles.busNo}>{item.busNo}</Text>
            </View>
            <View style={styles.cardCenter}>
                <Text style={styles.timeText}>{item.time}</Text>
                <Text style={styles.routeText}>{item.route}</Text>
                <View style={styles.detailRow}>
                    <Text style={styles.chevron}>⌄</Text>
                    <Text style={styles.detailText}>{item.details}</Text>
                </View>
            </View>
            <View style={styles.cardRight}>
                <Text style={styles.freqText}>{item.freq}</Text>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <Header 
                title="Bus Schedule" 
                showMihrab={true} 
                onBackPress={() => navigation.goBack()}
                leftAlign={true}
            />

            <View style={styles.listHeader}>
                <Text style={styles.headerTitle}>Bus Schedule</Text>
                <TouchableOpacity style={styles.dateSelector}>
                    <Text style={styles.dateText}>Today</Text>
                    <Text style={styles.dateChevron}>⌄</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={busSchedules}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.listContent}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.backgroundLight,
    },
    listContent: {
        paddingHorizontal: Spacing.layout.gap,
        gap: sHeight(12),
        paddingBottom: sHeight(40),
    },
    listHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: Spacing.layout.gap,
        paddingTop: sHeight(30),
        marginBottom: sHeight(20),
    },
    headerTitle: {
        fontSize: sWidth(18),
        fontWeight: Typography.weight.bold,
        color: Colors.text.title,
    },
    dateSelector: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: sWidth(6),
    },
    dateText: {
        fontSize: sWidth(14),
        fontWeight: Typography.weight.medium,
        color: Colors.text.lightgray,
    },
    dateChevron: {
        fontSize: sWidth(14),
        color: Colors.text.lightgray,
        marginTop: -4,
    },
    // Bus Card
    card: {
        flexDirection: 'row',
        backgroundColor: Colors.white,
        borderRadius: sWidth(18),
        paddingVertical: sHeight(20),
        paddingHorizontal: sWidth(15),
        alignItems: 'center',
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 5,
    },
    cardLeft: {
        alignItems: 'center',
        justifyContent: 'center',
        width: sWidth(50),
        gap: sHeight(4),
    },
    busIcon: {
        width: sWidth(24),
        height: sWidth(24),
        tintColor: Colors.text.lightgray,
    },
    busNo: {
        fontSize: sWidth(16),
        fontWeight: Typography.weight.bold,
        color: Colors.text.secondary,
    },
    cardCenter: {
        flex: 1,
        marginLeft: sWidth(15),
    },
    timeText: {
        fontSize: sWidth(16),
        fontWeight: Typography.weight.heavy,
        color: '#4AA1B7', // Matching the Aqua blue in the mockup
        marginBottom: sHeight(4),
    },
    routeText: {
        fontSize: sWidth(11),
        fontWeight: Typography.weight.medium,
        color: '#4AA1B7',
        opacity: 0.6,
        marginBottom: sHeight(8),
    },
    detailRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: sWidth(4),
    },
    chevron: {
        fontSize: sWidth(12),
        color: Colors.text.lightgray,
        marginTop: -10,
    },
    detailText: {
        fontSize: sWidth(11),
        color: Colors.text.lightgray,
        fontWeight: Typography.weight.medium,
    },
    cardRight: {
        justifyContent: 'center',
    },
    freqText: {
        fontSize: sWidth(11),
        color: Colors.text.lightgray,
        fontWeight: Typography.weight.medium,
    },
});

export default BusScheduleScreen;
