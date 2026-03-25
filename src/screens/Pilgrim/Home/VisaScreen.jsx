import React from 'react';
import { StyleSheet, View, ScrollView, Image, Text } from 'react-native';
import { Colors, Spacing, Typography } from '../../../theme';
import { Images } from '../../../assets/images/Images';
import { sWidth, sHeight } from '../../../utils/responsive';
import { t } from '../../../i18n/translations';
import Header from '../../../components/common/Header';

const VisaScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Header
                title={t('visa.title')}
                onBackPress={() => navigation.goBack()}
                showMihrab={true}
                leftAlign={true}
            />

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
                {/* Info Card Row 1 */}
                <View style={styles.infoCard}>
                    <View style={styles.infoColumn}>
                        <Text style={styles.infoValue} numberOfLines={1}>SAJID</Text>
                        <Text style={styles.infoLabel}>{t('visa.surname')}</Text>
                    </View>
                    <View style={styles.divider} />
                    <View style={styles.infoColumn}>
                        <Text style={styles.infoValue} numberOfLines={1}>FX589028028</Text>
                        <Text style={styles.infoLabel}>{t('visa.visaNumber')}</Text>
                    </View>
                    <View style={styles.divider} />
                    <View style={styles.infoColumn}>
                        <Text style={styles.infoValue} numberOfLines={1}>Single</Text>
                        <Text style={styles.infoLabel}>{t('visa.entries')}</Text>
                    </View>
                </View>

                {/* Info Card Row 2 */}
                <View style={styles.infoCard}>
                    <View style={styles.infoColumn}>
                        <Text style={styles.infoValue} numberOfLines={1}>09.12.2025</Text>
                        <Text style={styles.infoLabel}>{t('visa.dateIssued')}</Text>
                    </View>
                    <View style={styles.divider} />
                    <View style={styles.infoColumn}>
                        <Text style={styles.infoValue} numberOfLines={1}>Tourism Visa</Text>
                        <Text style={styles.infoLabel}>{t('visa.visaType')}</Text>
                    </View>
                    <View style={styles.divider} />
                    <View style={styles.infoColumn}>
                        <Text style={styles.infoValue} numberOfLines={1}>30 Days</Text>
                        <Text style={styles.infoLabel}>{t('visa.validity')}</Text>
                    </View>
                </View>

                {/* Visa Image Card */}
                <View style={styles.imageCard}>
                    <Image
                        source={Images.visa}
                        style={styles.visaImage}
                        resizeMode="contain"
                    />
                </View>
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
    infoCard: {
        backgroundColor: Colors.white,
        flexDirection: 'row',
        borderRadius: sWidth(15),
        width: sWidth(348),
        height: sHeight(81),
        marginBottom: sHeight(15),
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
    },
    infoColumn: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: sWidth(5),
    },
    divider: {
        width: 1,
        height: '50%',
        backgroundColor: Colors.lightgray3,
        alignSelf: 'center',
    },
    infoValue: {
        fontSize: sWidth(13),
        fontWeight: Typography.weight.bold,
        color: '#27687E',
        marginBottom: sHeight(2),
    },
    infoLabel: {
        fontSize: Typography.size.xs,
        color: Colors.lightgray3,
        fontWeight: Typography.weight.medium,
    },
    imageCard: {
        backgroundColor: Colors.white,
        borderRadius: sWidth(20),
        width: sWidth(348),
        padding: sWidth(10),
        alignItems: 'center',
    },
    visaImage: {
        width: '100%',
        height: sHeight(450),
    },
});

export default VisaScreen;
