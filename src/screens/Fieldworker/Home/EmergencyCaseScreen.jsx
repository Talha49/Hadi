import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Colors, Spacing, Typography } from '../../../theme';
import { sWidth, sHeight } from '../../../utils/responsive';
import { Images } from '../../../assets/images/Images';
import Header from '../../../components/common/Header';
import Button from '../../../components/common/Button';

// Mock Data for Emergency Case Profile
const emergencyData = {
    surname: "SAJID",
    firstName: "Muhammad Mardan",
    sex: "M",
    type: "Medical Emergency",
    id: "22X3UHJ3",
    distance: "3KM",
    phone: "+97 668 786\n45 55"
};

const EmergencyCaseScreen = ({ navigation }) => {

    const handleAccept = () => {
        // Mock functionality for accepting case
        navigation.goBack();
    };

    const handleCancel = () => {
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <Header
                title="Emergency Case"
                showMihrab={true}
                leftAlign={true}
                onBackPress={handleCancel}
                titleStyle={{ marginLeft: 5 }}
            />

            {/* The background of the screen is off-white based on mockup */}
            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>

                {/* Top Info Card (Personal Details) */}
                <View style={styles.infoCard}>
                    <View style={styles.infoColumn}>
                        <Text style={styles.valueText}>{emergencyData.surname}</Text>
                        <Text style={styles.labelText}>Surname</Text>
                    </View>
                    <View style={styles.divider} />
                    <View style={[styles.infoColumn, { flex: 1 }]}>
                        <Text style={styles.valueText}>{emergencyData.firstName}</Text>
                        <Text style={styles.labelText}>First Name</Text>
                    </View>
                    <View style={styles.divider} />
                    <View style={styles.infoColumn}>
                        <Text style={styles.valueText}>{emergencyData.sex}</Text>
                        <Text style={styles.labelText}>Sex</Text>
                    </View>
                </View>

                {/* Middle Info Card (Emergency Details) */}
                <View style={styles.infoCard}>
                    <View style={styles.infoColumn}>
                        <Text style={styles.valueText}>Medical</Text>
                        <Text style={styles.labelText}>Emergency</Text>
                    </View>
                    <View style={styles.divider} />
                    <View style={[styles.infoColumn, { flex: 1 }]}>
                        <Text style={styles.valueText}>{emergencyData.id}</Text>
                        <Text style={styles.labelText}>Pilgrim ID</Text>
                    </View>
                    <View style={styles.divider} />
                    <View style={styles.infoColumn}>
                        <Text style={styles.valueText}>{emergencyData.distance}</Text>
                        <Text style={styles.labelText}>Distance</Text>
                    </View>
                </View>

                {/* Advanced Layout Row: QR Block & SOS Block */}
                <View style={styles.mediaRow}>

                    {/* QR Code Container (202.92 x 191.72) */}
                    <View style={styles.qrContainer}>
                        <Image
                            source={Images.qr}
                            style={styles.qrImage}
                            resizeMode="contain"
                        />
                    </View>

                    {/* SOS & Contact Column */}
                    <View style={styles.sosColumn}>
                        {/* SOS Button Block (135 x 93) */}
                        <TouchableOpacity style={styles.sosBlock} activeOpacity={0.8}>
                            <Image
                                source={Images.sos}
                                style={styles.sosImage}
                                resizeMode="contain"
                            />
                        </TouchableOpacity>

                        {/* Emergency Contact Block */}
                        <View style={styles.contactBlock}>
                            <Text style={styles.contactLabel}>Emergency Contact</Text>
                            <Text style={styles.contactNumber}>{emergencyData.phone}</Text>
                        </View>
                    </View>
                </View>

                {/* Actions Bottom Area */}
                <View style={styles.actionsContainer}>
                    <Button
                        title="Accept Case"
                        onPress={handleAccept}
                        style={styles.acceptButton}
                        textStyle={styles.acceptButtonText}
                    />
                    <Button
                        title="Cancel"
                        onPress={handleCancel}
                        style={styles.cancelButton}
                        textStyle={styles.cancelButtonText}
                    />
                </View>

            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7F4EF', // Light earthy off-white from mockup
    },
    scrollContent: {
        paddingHorizontal: Spacing.layout.gap,
        paddingTop: sHeight(20),
        paddingBottom: sHeight(50),

    },
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
        color: '#606060', // Dark grayish
        fontWeight: Typography.weight.bold,
        marginBottom: sHeight(4),
        textAlign: 'center',
    },
    labelText: {
        fontSize: Typography.size.xss,
        color: '#A0A0A0', // Lighter soft gray
        fontWeight: Typography.weight.regular,
        textAlign: 'center',
    },
    mediaRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: sHeight(10),
        marginBottom: sHeight(30),
    },
    // Exact sizing from user specs
    qrContainer: {
        width: sWidth(202.92),
        height: sHeight(191.72),
        backgroundColor: '#4AA1B7', // Dark teal/blue from mockup (approximation matching colors.background)
        borderRadius: sWidth(16),
        alignItems: 'center',
        justifyContent: 'center',
    },
    qrImage: {
        // inner qr sizing
        width: sWidth(155.77),
        height: sWidth(153.33),
        tintColor: Colors.white, // assuming white QR
    },
    sosColumn: {
        justifyContent: 'space-between',
        height: sHeight(191.72),
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
        height: sHeight(88), // remainder of the 191 height
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
    actionsContainer: {
        gap: sHeight(15),
    },
    acceptButton: {
        backgroundColor: Colors.yellow,
        height: sHeight(55),
        borderRadius: sWidth(14),
    },
    acceptButtonText: {
        color: Colors.white,
        fontSize: Typography.size.m,
        fontWeight: Typography.weight.bold,
    },
    cancelButton: {
        backgroundColor: '#D9D9D9', // Gray from mockup
        height: sHeight(55),
        borderRadius: sWidth(14),
    },
    cancelButtonText: {
        color: Colors.white,
        fontSize: Typography.size.m,
        fontWeight: Typography.weight.bold,
    }
});

export default EmergencyCaseScreen;
