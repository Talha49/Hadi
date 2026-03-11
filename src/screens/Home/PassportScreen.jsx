import React from 'react';
import { StyleSheet, View, ScrollView, Image, Text } from 'react-native';
import { Colors, Spacing, Typography } from '../../theme';
import { Images } from '../../assets/images/Images';
import { sWidth, sHeight } from '../../utils/responsive';
import { t } from '../../i18n/translations';
import Header from '../../components/common/Header';

const PassportScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Header
                title={t('passportDetail.title')}
                onBackPress={() => navigation.goBack()}
                showMihrab={true}
                leftAlign={true}
            />

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
                {/* Info Card Row 1 */}
                <View style={styles.infoCard}>
                    <View style={styles.infoColumn}>
                        <Text style={styles.infoValue} numberOfLines={1}>SAJID</Text>
                        <Text style={styles.infoLabel}>{t('passportDetail.surname')}</Text>
                    </View>
                    <View style={styles.divider} />
                    <View style={styles.infoColumn}>
                        <Text style={styles.infoValue} numberOfLines={1}>Muhammad Mardan</Text>
                        <Text style={styles.infoLabel}>{t('passportDetail.firstName')}</Text>
                    </View>
                    <View style={styles.divider} />
                    <View style={styles.infoColumn}>
                        <Text style={styles.infoValue} numberOfLines={1}>M</Text>
                        <Text style={styles.infoLabel}>{t('passportDetail.sex')}</Text>
                    </View>
                </View>

                {/* Info Card Row 2 */}
                <View style={styles.infoCard}>
                    <View style={styles.infoColumn}>
                        <Text style={styles.infoValue} numberOfLines={1}>PAK</Text>
                        <Text style={styles.infoLabel}>{t('passportDetail.nationality')}</Text>
                    </View>
                    <View style={styles.divider} />
                    <View style={styles.infoColumn}>
                        <Text style={styles.infoValue} numberOfLines={1}>FX44508</Text>
                        <Text style={styles.infoLabel}>{t('passportDetail.passportNumber')}</Text>
                    </View>
                    <View style={styles.divider} />
                    <View style={styles.infoColumn}>
                        <Text style={styles.infoValue} numberOfLines={1}>09.12.2000</Text>
                        <Text style={styles.infoLabel}>{t('passportDetail.dob')}</Text>
                    </View>
                </View>

                {/* Passport Image Card */}
                <View style={styles.imageCard}>
                    <Image
                        source={Images.passport2}
                        style={styles.passportImage}
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
    passportImage: {
        width: '100%',
        height: sHeight(450),
    },
});

export default PassportScreen;
