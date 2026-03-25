import React, { useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Text } from 'react-native';
import { Colors, Spacing, Typography } from '../../../theme';
import { sWidth, sHeight } from '../../../utils/responsive';
import { Images } from '../../../assets/images/Images';
import Header from '../../../components/common/Header';

const QRScannerScreen = ({ navigation }) => {

    useEffect(() => {
        // Simulate reading the QR code
        const timer = setTimeout(() => {
            navigation.replace('MedicalCard');
        }, 2500);
        return () => clearTimeout(timer);
    }, [navigation]);

    return (
        <View style={styles.container}>
            {/* Header */}
            <Header 
                title="Scan Medical Card" 
                onBackPress={() => navigation.goBack()}
                style={styles.header}
                titleStyle={styles.headerTitle}
                leftAlign={true}
            />

            {/* Simulated Live Scanner Area */}
            <View style={styles.scannerArea}>
                <View style={styles.scanFrame}>
                    {/* Corner Brackets */}
                    <View style={[styles.corner, styles.topLeft]} />
                    <View style={[styles.corner, styles.topRight]} />
                    <View style={[styles.corner, styles.bottomLeft]} />
                    <View style={[styles.corner, styles.bottomRight]} />
                    
                    {/* The mock QR Code being scanned */}
                    <Image source={Images.qr} style={styles.qrMock} resizeMode="contain" />
                </View>
                <Text style={styles.scanningText}>Scanning...</Text>
            </View>

            {/* Bottom Controls */}
            <View style={styles.bottomControls}>
                
                {/* Gallery Button */}
                <TouchableOpacity style={styles.controlButton} activeOpacity={0.8}>
                    <Image source={Images.galllery} style={styles.galleryIcon} resizeMode="contain" />
                </TouchableOpacity>

                {/* Capture Ring */}
                <TouchableOpacity style={styles.captureRing} activeOpacity={0.8}>
                    <View style={styles.captureInnerCircle} />
                </TouchableOpacity>

                {/* Flash Button */}
                <TouchableOpacity style={styles.controlButton} activeOpacity={0.8}>
                    <Image source={Images.flash} style={styles.flashIcon} resizeMode="contain" />
                </TouchableOpacity>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // Mocking a live camera feed with a dark semi-transparent overlay color over an assumed real view
        backgroundColor: '#2A2C31', 
    },
    header: {
        backgroundColor: 'transparent',
    },
    headerTitle: {
        fontSize: sWidth(20),
        marginLeft: sWidth(5),
    },
    scannerArea: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    scanFrame: {
        width: sWidth(260),
        height: sWidth(260),
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    qrMock: {
        width: sWidth(200),
        height: sWidth(200),
        tintColor: 'rgba(255,255,255,0.8)',
    },
    corner: {
        position: 'absolute',
        width: sWidth(40),
        height: sWidth(40),
        borderColor: Colors.white,
    },
    topLeft: {
        top: 0,
        left: 0,
        borderTopWidth: 4,
        borderLeftWidth: 4,
        borderTopLeftRadius: sWidth(24),
    },
    topRight: {
        top: 0,
        right: 0,
        borderTopWidth: 4,
        borderRightWidth: 4,
        borderTopRightRadius: sWidth(24),
    },
    bottomLeft: {
        bottom: 0,
        left: 0,
        borderBottomWidth: 4,
        borderLeftWidth: 4,
        borderBottomLeftRadius: sWidth(24),
    },
    bottomRight: {
        bottom: 0,
        right: 0,
        borderBottomWidth: 4,
        borderRightWidth: 4,
        borderBottomRightRadius: sWidth(24),
    },
    scanningText: {
        marginTop: sHeight(30),
        color: Colors.white,
        fontSize: Typography.size.m,
        fontWeight: Typography.weight.medium,
        opacity: 0.8,
    },
    bottomControls: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        paddingBottom: sHeight(50),
        paddingHorizontal: Spacing.layout.margin,
    },
    controlButton: {
        width: sWidth(60),
        height: sWidth(60),
        borderRadius: sWidth(30),
        backgroundColor: 'rgba(255, 255, 255, 0.25)', // Glass effect
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.3)',
    },
    captureRing: {
        width: sWidth(80),
        height: sWidth(80),
        borderRadius: sWidth(40),
        borderWidth: 4,
        borderColor: Colors.white,
        justifyContent: 'center',
        alignItems: 'center',
    },
    captureInnerCircle: {
        width: sWidth(70),
        height: sWidth(70),
        borderRadius: sWidth(35),
        backgroundColor: Colors.white,
    },
    galleryIcon: {
        width: sWidth(27),
        height: sWidth(27),
        tintColor: Colors.white,
    },
    flashIcon: {
        width: sWidth(19),
        height: sWidth(21),
        tintColor: Colors.white,
    },
});

export default QRScannerScreen;
