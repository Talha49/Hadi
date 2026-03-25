import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';
import { Colors, Spacing, Typography } from '../../../theme';
import { Images } from '../../../assets/images/Images';
import { sWidth, sHeight } from '../../../utils/responsive';
import CommonBackground from '../../../components/common/CommonBackground';
import QRInfoCard from '../../../components/common/QRInfoCard';
import CustomAlertModal from '../../../components/common/CustomAlertModal';

const FieldworkerHomeScreen = ({ navigation }) => {
    const [isOnline, setIsOnline] = useState(false);
    const [alertConfig, setAlertConfig] = useState({ visible: false, type: 'warning', title: '', message: '' });

    // Loop SOS Alert popup every 6 seconds to show functionality continuously
    useEffect(() => {
        const interval = setInterval(() => {
            // Only show SOS if no other alert is currently visible
            setAlertConfig(prev => {
                if (!prev.visible) {
                    return {
                        visible: true,
                        type: 'warning', 
                        title: 'SOS Alert!',
                        message: 'A Pilgrim has reached out for help. Please go to the main page and accept your case.'
                    };
                }
                return prev;
            });
        }, 6000); 
        return () => clearInterval(interval);
    }, []);

    const toggleOnline = () => {
        setIsOnline(!isOnline);
        if (isOnline) {
            // If turning off, instantly show offline modal per user request
            setAlertConfig({
                visible: true,
                type: 'warning',
                title: 'You are Offline',
                message: 'To View a case, you need to be online and ready for action. Go to the Homepage and toggle Online.'
            });
        }
    };

    const closeAlert = () => setAlertConfig(prev => ({ ...prev, visible: false }));

    const handleEmergencyTaskPress = () => {
        if (!isOnline) {
            setAlertConfig({
                visible: true,
                type: 'warning',
                title: 'You are Offline',
                message: 'To View a case, you need to be online and ready for action. Go to the Homepage and toggle Online.'
            });
        } else {
            navigation.navigate('EmergencyCase');
        }
    };

    const handleBroadcastPress = () => {
        setAlertConfig({
            visible: true,
            type: 'info',
            title: 'Government Broadcast',
            message: 'A storm is approaching. Everyone is advised to not leave the house between the hours of 20:00-23:00.'
        });
    };

    return (
        <CommonBackground source={Images.homeback}>
            <View style={styles.container}>
                {/* Top Header Layer */}
                <View style={styles.header}>
                    <View>
                        <Text style={styles.headerText}>Muhammad Ali</Text>
                        <Text style={styles.headerSubText}>2230188CX</Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                        <Image source={Images.profile} style={styles.headerImage} />
                    </TouchableOpacity>
                </View>

                {/* Central Time/Location Ornament */}
                <View style={styles.timeContainer}>
                    <Text style={styles.locText}>Madinah, SA</Text>
                    <View style={styles.timeView}>
                        <Text style={styles.timeText}>03:45</Text>
                        <Text style={styles.timemode}>PM</Text>
                    </View>
                    <Text style={styles.dateText}>12 Sep 2026</Text>
                </View>

                {/* Main Action Content Area */}
                <View style={styles.contentWrapper}>
                    {/* Broadcast Banner */}
                    <TouchableOpacity 
                        style={styles.broadcastContainer} 
                        activeOpacity={0.8}
                        onPress={handleBroadcastPress}
                    >
                        <Image source={Images.broadcast} style={styles.broadcastImage} />
                        <View style={styles.broadcastTextView}>
                            <Text style={styles.broadcastTitle}>GOVERNMENT BROADCAST: </Text>
                            <Text style={styles.broadcastDesc}>Strong winds..</Text>
                        </View>
                    </TouchableOpacity>

                    {/* Status Toggle & Data Row */}
                    <View style={styles.statusRow}>
                        {/* Online Toggle Pill */}
                        <View style={styles.statusPill}>
                            <Text style={styles.statusPillText}>Online</Text>
                            <TouchableOpacity
                                style={[
                                    styles.switchTrack,
                                    isOnline ? styles.switchTrackOn : styles.switchTrackOff
                                ]}
                                activeOpacity={0.8}
                                onPress={toggleOnline}
                            >
                                <View style={[
                                    styles.switchThumb,
                                    isOnline ? styles.switchThumbOn : styles.switchThumbOff
                                ]} />
                            </TouchableOpacity>
                        </View>

                        {/* Active Cases Pill */}
                        <View style={[styles.statusPill, { justifyContent: 'center', gap: sWidth(5) }]}>
                            <Text style={styles.activeCasesNum}>4</Text>
                            <Text style={styles.statusPillText}>Active Cases</Text>
                        </View>
                    </View>

                    {/* Medical Emergency Task Card */}
                    <QRInfoCard
                        title="Medical Emergency"
                        titleColor={Colors.white}
                        arrowTintColor={Colors.white}
                        rightTextColor={Colors.white}
                        headerRightText="5 mins ago"
                        bgColor={Colors.yellow}
                        itemBgColor={'rgba(0,0,0,0.06)'} 
                        textColor={Colors.white}
                        iconTintColor={Colors.white}
                        qrImage={Images.qr}
                        qrTintColor={Colors.white}
                        onPress={handleEmergencyTaskPress}
                        items={[
                            { icon: Images.profile, text: "Muhammad Ali" },
                            { icon: Images.map, text: "Sharjah Bridge" },
                            { icon: Images.broadcast, text: "+97 555 78 20" },
                            { icon: Images.group, text: "Group 2A" },
                        ]}
                    />
                </View>

                {/* Highly Reusable Alert Modal */}
                <CustomAlertModal 
                    visible={alertConfig.visible}
                    type={alertConfig.type}
                    title={alertConfig.title}
                    message={alertConfig.message}
                    onClose={closeAlert}
                />
            </View>
        </CommonBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: Spacing.layout.gap,
        paddingVertical: sHeight(40),
    },
    headerText: {
        fontSize: Typography.size.xxl,
        fontWeight: Typography.weight.bold,
        color: Colors.white,
    },
    headerSubText: {
        fontSize: Typography.size.m,
        color: Colors.white,
        fontWeight: Typography.weight.medium,
        textAlign: 'left',
    },
    headerImage: {
        width: sWidth(50),
        height: sWidth(50),
        borderRadius: sWidth(25),
        borderWidth: 2,
        borderColor: Colors.yellow,
    },
    timeContainer: {
        alignItems: 'center',
        paddingHorizontal: Spacing.layout.gutter,
        paddingVertical: sHeight(45),
    },
    timeView: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: sWidth(10),
    },
    timemode: {
        fontSize: Typography.size.xs,
        fontWeight: Typography.weight.bold,
        color: Colors.white,
        marginTop: sHeight(8),
    },
    locText: {
        fontSize: Typography.size.xs,
        fontWeight: Typography.weight.bold,
        color: Colors.white,
    },
    timeText: {
        fontSize: Typography.size.xl,
        color: Colors.white,
        fontWeight: Typography.weight.medium,
    },
    dateText: {
        fontSize: Typography.size.xss,
        color: Colors.white,
        fontWeight: Typography.weight.medium,
    },
    contentWrapper: {
        alignItems: 'center',
        paddingVertical: sHeight(40),
        justifyContent: 'flex-end',
        flex: 1,
        gap: sHeight(10),
    },
    broadcastContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.background, // #27687E
        width: sWidth(350),
        height: sHeight(53),
        borderRadius: sWidth(14),
        paddingHorizontal: sWidth(15),
        marginBottom: sHeight(10),
    },
    broadcastImage: {
        width: sWidth(13),
        height: sWidth(13),
        marginRight: sWidth(12),
        tintColor: Colors.white
    },
    broadcastTextView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    broadcastTitle: {
        color: Colors.white,
        fontSize: Typography.size.s,
        fontWeight: Typography.weight.heavy,
        letterSpacing: 0.5,
    },
    broadcastDesc: {
        color: Colors.white,
        fontSize: sWidth(13),
        fontWeight: Typography.weight.regular,
        opacity: 0.9,
    },
    statusRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: sWidth(350),
        marginBottom: sHeight(5),
    },
    statusPill: {
        width: sWidth(168),
        height: sHeight(53),
        backgroundColor: Colors.white,
        borderRadius: sWidth(14),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: sWidth(20),
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 5,
    },
    statusPillText: {
        fontSize: sWidth(14),
        color: '#707070', // Match the gray text from design
        fontWeight: Typography.weight.semibold,
    },
    activeCasesNum: {
        fontSize: sWidth(16),
        color: Colors.background, // match the dark teal #27687E
        fontWeight: Typography.weight.bold,
    },
    // Custom Switch Styles
    switchTrack: {
        width: sWidth(50),
        height: sHeight(26),
        borderRadius: sHeight(13),
        justifyContent: 'center',
        paddingHorizontal: sWidth(2),
    },
    switchTrackOff: {
        backgroundColor: '#E6E6E6', // Light gray background
    },
    switchTrackOn: {
        backgroundColor: Colors.yellow,
    },
    switchThumb: {
        width: sWidth(22),
        height: sWidth(22),
        borderRadius: sWidth(11),
        backgroundColor: Colors.white,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
    },
    switchThumbOff: {
        alignSelf: 'flex-start',
        marginLeft: sWidth(2),
    },
    switchThumbOn: {
        alignSelf: 'flex-end',
        marginRight: sWidth(2),
    },
});

export default FieldworkerHomeScreen;
