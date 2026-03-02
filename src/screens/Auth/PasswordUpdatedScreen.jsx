import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    ScrollView,
} from 'react-native';
import { Colors, Spacing, Typography } from '../../theme';
import Button from '../../components/common/Button';
import { Images } from '../../assets/images/Images';
import CommonBackground from '../../components/common/CommonBackground';

import { t } from '../../i18n/translations';
import { sWidth, sHeight } from '../../utils/responsive';

const PasswordUpdatedScreen = ({ navigation }) => {
    const handleLogin = () => {
        // Navigate back to Login and reset the stack
        navigation.reset({
            index: 0,
            routes: [{ name: 'Login' }],
        });
    };

    return (
        <CommonBackground source={Images.commonBack}>
            <View style={styles.mainContainer}>
                <View style={styles.whiteCard}>
                    <ScrollView
                        contentContainerStyle={styles.scrollContent}
                        showsVerticalScrollIndicator={false}
                    >
                        <View style={styles.imageContainer}>
                            <Image
                                source={Images.updatePassword}
                                style={styles.successImage}
                                resizeMode="contain"
                            />
                        </View>

                        <Text style={styles.title}>{t('success.title')}</Text>
                        <Text style={styles.subtitle}>
                            {t('success.message')}
                        </Text>

                        <Button
                            title={t('success.login')}
                            onPress={handleLogin}
                            style={styles.loginButton}
                            textStyle={{ color: Colors.white }}
                        />
                    </ScrollView>
                </View>
            </View>
        </CommonBackground>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    whiteCard: {
        height: '85%',
        borderTopLeftRadius: sWidth(60),
        borderTopRightRadius: sWidth(60),
        paddingTop: Spacing.xxl,
    },
    scrollContent: {
        flexGrow: 1,
        paddingHorizontal: Spacing.layout.gutter,
        paddingBottom: Spacing.xxl,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageContainer: {
        marginBottom: Spacing.xl,
    },
    successImage: {
        width: sWidth(198),
        height: sHeight(198),
    },
    title: {
        fontSize: Typography.size.xxl,
        fontWeight: Typography.weight.heavy,
        color: Colors.text.primary,
        textAlign: 'center',
        marginBottom: Spacing.m,
    },
    subtitle: {
        fontSize: Typography.size.m,
        color: Colors.text.lightgray,
        textAlign: 'center',
        marginBottom: sHeight(80),
        width: sWidth(250),
        lineHeight: Typography.lineHeight.normal,
    },
    loginButton: {
        width: sWidth(337),
        height: sHeight(60),
        borderRadius: sWidth(14),
        backgroundColor: Colors.button.primary,
    },
});

export default PasswordUpdatedScreen;
