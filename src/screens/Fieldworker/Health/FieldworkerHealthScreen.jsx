import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Colors, Spacing, Typography } from '../../../theme';
import { sWidth, sHeight } from '../../../utils/responsive';
import { Images } from '../../../assets/images/Images';
import HadiHeader from '../../../components/common/HadiHeader';
import InfoCard from '../../../components/common/InfoCard';

const FieldworkerHealthScreen = ({ navigation }) => {

    const handleOpenScanner = () => {
        navigation.navigate('QRScanner');
    };

    const infoData = [
        { label: "Field Worker", value: "Muhammad\nAli", icon: Images.profile },
        { label: "Agent ID", value: "401", icon: Images.passport, valueSize: sWidth(26) },
        { label: "Active\nCases", value: "4", icon: Images.group, valueSize: sWidth(26) },
    ];

    return (
        <View style={styles.container}>
            {/* Standard HadiHeader matching Pilgrim Health styling */}
            <HadiHeader title="Hadi Health">
                {/* 3-Column Info Cards overlaying the header curve */}
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

            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                
                {/* Flexible spacer to push the scanning blocks to the bottom part of the screen */}
                <View style={{ flex: 1 }} />

                {/* Main Scanning Banner & SOS */}
                <View style={styles.actionRow}>
                    
                    {/* Large QR Scan Block */}
                    <TouchableOpacity 
                        style={styles.scanBlock} 
                        activeOpacity={0.8}
                        onPress={handleOpenScanner}
                    >
                        <Image source={Images.scan} style={styles.scanIcon} resizeMode="contain" />
                    </TouchableOpacity>

                    {/* SOS Block & Contact */}
                    <View style={styles.sosColumn}>
                        <TouchableOpacity style={styles.sosBlock} activeOpacity={0.8}>
                            <Image source={Images.sos} style={styles.sosImage} resizeMode="contain" />
                        </TouchableOpacity>

                        <View style={styles.contactBlock}>
                            <Text style={styles.contactLabel}>Emergency Contact</Text>
                            <Text style={styles.contactNumber}>+97 668 786{'\n'}45 55</Text>
                        </View>
                    </View>
                </View>

                {/* Patient / Profile Info Card placed below scanner */}
                <View style={styles.infoCard}>
                    <View style={styles.infoColumn}>
                        <Text style={styles.valueText}>SAJID</Text>
                        <Text style={styles.labelText}>Surname</Text>
                    </View>
                    <View style={styles.divider} />
                    <View style={[styles.infoColumn, { flex: 1 }]}>
                        <Text style={styles.valueText}>Muhammad Mardan</Text>
                        <Text style={styles.labelText}>First Name</Text>
                    </View>
                    <View style={styles.divider} />
                    <View style={styles.infoColumn}>
                        <Text style={styles.valueText}>M</Text>
                        <Text style={styles.labelText}>Sex</Text>
                    </View>
                </View>

            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7F4EF', // Light exact off-white mapped globally
    },
    // Header Stats Overlay Overlap
    infoRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: sWidth(10),
        marginTop: sHeight(-60), // Pull up into the header curve beautifully
        paddingHorizontal: Spacing.layout.gap,
    },
    scrollContent: {
        flexGrow: 1,
        paddingTop: sHeight(80), 
        paddingHorizontal: Spacing.layout.gap,
        paddingBottom: sHeight(120), // Increased to give appropriate bottom gap above the tab bar
    },
    actionRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: sHeight(30),
    },
    // Exact requested scanning block sizes
    scanBlock: {
        width: sWidth(200),
        height: sHeight(192),
        backgroundColor: '#4AA1B7',
        borderRadius: sWidth(20),
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 2,
    },
    scanIcon: {
        width: sWidth(156),
        height: sHeight(140),
        tintColor: Colors.white,
    },
    sosColumn: {
        justifyContent: 'space-between',
        height: sHeight(192), // matching the scanBlock height exactly
    },
    sosBlock: {
        width: sWidth(135),
        height: sHeight(93),
        backgroundColor: Colors.yellow,
        borderRadius: sWidth(16),
        alignItems: 'center',
        justifyContent: 'center',
    },
    sosImage: {
        width: sWidth(69),
        height: sHeight(67),
        tintColor: Colors.white,
    },
    contactBlock: {
        width: sWidth(135),
        height: sHeight(88), // remainder to equal 192 (93 + 88 + gap ≈ 192)
        backgroundColor: Colors.white,
        borderRadius: sWidth(16),
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: sWidth(10),
    },
    contactLabel: {
        fontSize: sWidth(9),
        color: '#A0A0A0',
        fontWeight: Typography.weight.medium,
        marginBottom: sHeight(5),
    },
    contactNumber: {
        fontSize: sWidth(13),
        color: Colors.background,
        fontWeight: Typography.weight.heavy,
        textAlign: 'center',
        lineHeight: sHeight(18),
    },
    infoCard: {
        backgroundColor: Colors.white,
        borderRadius: sWidth(18),
        paddingVertical: sHeight(20),
        paddingHorizontal: sWidth(15),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
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
        color: '#606060', // Dark grayish
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
});

export default FieldworkerHealthScreen;
