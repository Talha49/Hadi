import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,
    StatusBar,
    ImageBackground,
} from 'react-native';
import { Colors, Spacing, Typography } from '../../../theme';
import { Images } from '../../../assets/images/Images';
import { sWidth, sHeight } from '../../../utils/responsive';
import { t } from '../../../i18n/translations';
import CommonBackground from '../../../components/common/CommonBackground';
import Button from '../../../components/common/Button';
import QRInfoCard from '../../../components/common/QRInfoCard';

const HomeScreen = ({ navigation }) => {
    return (

        <CommonBackground source={Images.homeback}>

            <View style={styles.container}>
                <View style={styles.header}>
                    <View>
                        <Text style={styles.headerText}>Muhammad Ali</Text>
                        <Text style={styles.headerSubText}>2201880X</Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                        <Image source={Images.profile} style={styles.headerImage} />
                    </TouchableOpacity>
                </View>


                <View style={styles.timeContainer}>
                    <Text style={styles.locText}>Madinah, SA</Text>
                    <View style={styles.timeView}>
                        <Text style={styles.timeText}>03:45</Text>
                        <Text style={styles.timemode}>PM</Text>

                    </View>
                    <Text style={styles.dateText}>27 Feb 2026</Text>
                </View>


                <View style={styles.broadcastWrapper}>
                    <TouchableOpacity
                        style={styles.broadcastContainer}
                        activeOpacity={0.8}
                        onPress={() => console.log('Broadcast pressed')}
                    >
                        <Image source={Images.broadcast} style={styles.broadcastImage} />
                        <View style={styles.broadcastTextView}>
                            <Text style={styles.broadcastTitle}>GOVERNMENT BROADCAST: </Text>
                            <Text style={styles.broadcastDesc}>Strong Winds..</Text>
                        </View>
                    </TouchableOpacity>

                    <View style={styles.actionRow}>
                        {/* ... previous buttons ... */}
                        <Button
                            title="I'm Lost!"
                            icon={Images.lost}
                            style={styles.lostButtonStyle}
                            iconStyle={styles.lostIcon}
                            textStyle={styles.lostButtonText}
                            size="content"
                            onPress={() => console.log('Lost pressed')}
                        />
                        <Button
                            icon={Images.passport}
                            style={styles.actionButtonStyleSmall}
                            iconStyle={styles.actionIcon}
                            size="content"
                            onPress={() => navigation.navigate('PassportDetail')}
                        />
                        <Button
                            icon={Images.visa}
                            style={styles.actionButtonStyleSmall}
                            iconStyle={styles.actionIcon}
                            size="content"
                            onPress={() => navigation.navigate('Visa')}
                        />
                        <Button
                            icon={Images.vaccine}
                            style={styles.actionButtonStyleSmall}
                            iconStyle={styles.actionIcon}
                            size="content"
                            onPress={() => navigation.navigate('VaccinationDetail')}
                        />
                    </View>

                    {/* QR Code Card */}
                    <QRInfoCard
                        title="Pilgrim QR Code"
                        qrImage={Images.qr}
                        items={[
                            { icon: Images.broadcast, text: "Muhammad Ali" },
                            { icon: Images.broadcast, text: "Group A" },
                            { icon: Images.broadcast, text: "Madinah Royal Ho...." },
                        ]}
                        onPress={() => console.log('QR Card pressed')}
                    />
                </View>

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
    broadcastWrapper: {
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
    },
    broadcastImage: {
        width: sWidth(13),
        height: sWidth(13),
        marginRight: sWidth(12),
        tintColor: Colors.darkgray
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

    actionRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: sWidth(350),
        marginTop: sHeight(10),
    },
    lostButtonStyle: {
        width: sWidth(136),
        height: sHeight(53),
        backgroundColor: Colors.yellow,
        paddingHorizontal: 0,
        paddingVertical: 0,
        borderRadius: sWidth(14),
    },
    lostIcon: {
        width: sWidth(24),
        height: sWidth(24),
        marginRight: sWidth(8),
    },
    lostButtonText: {
        color: Colors.white,
        fontSize: sWidth(14),
        fontWeight: Typography.weight.bold,
    },
    actionButtonStyleSmall: {
        width: sWidth(57),
        height: sHeight(53),
        backgroundColor: Colors.white,
        paddingHorizontal: 0,
        paddingVertical: 0,
        borderRadius: sWidth(14),
    },
    actionIcon: {
        width: sWidth(24),
        height: sWidth(24),
        marginRight: 0,
    },
    qrCard: {
        backgroundColor: Colors.white,
        width: sWidth(350),
        borderRadius: sWidth(24),
        padding: sWidth(20),
        marginTop: sHeight(15),
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.05,
        shadowRadius: 10,
    },
    qrHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: sWidth(10),
        marginBottom: sHeight(15),
    },
    qrTitle: {
        fontSize: sWidth(18),
        fontWeight: Typography.weight.bold,
        color: '#27687E',
    },
    qrArrowIcon: {
        width: sWidth(18),
        height: sWidth(18),
        tintColor: '#27687E',
    },
    qrContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    qrInfoList: {
        flex: 1,
        gap: sHeight(8),
    },
    infoItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.lightgray,
        paddingHorizontal: sWidth(18),
        paddingVertical: sHeight(8),
        borderRadius: sWidth(20),
        alignSelf: 'flex-start',
    },
    infoItemIcon: {
        width: sWidth(14),
        height: sWidth(14),
        marginRight: sWidth(8),
        tintColor: '#9F9F9F',
    },
    infoItemText: {
        fontSize: sWidth(12),
        color: '#9F9F9F',
        fontWeight: Typography.weight.medium,
    },
    qrImageContainer: {
        width: sWidth(95.21),
        height: sHeight(91.67),
        marginLeft: sWidth(15),
        justifyContent: 'center',
        alignItems: 'center',
    },
    qrImage: {
        width: '100%',
        height: '100%',
    },
});

export default HomeScreen;
