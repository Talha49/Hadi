import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    Image,
} from 'react-native';
import { Colors, Spacing, Typography } from '../../theme';
import Input from '../../components/common/Input';
import Button from '../../components/common/Button';
import { Images } from '../../assets/images/Images';

import CommonBackground from '../../components/common/CommonBackground';

import { t } from '../../i18n/translations';
import { sWidth, sHeight } from '../../utils/responsive';

const LoginScreen = ({ navigation }) => {
    const [passport, setPassport] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleLogin = () => {
        setLoading(true);
        // Simulate API call
        setTimeout(() => {
            setLoading(true);
            navigation.navigate('Main');
        }, 1500);
    };

    return (
        <CommonBackground source={Images.commonBack}>
            <View style={styles.container}>
                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    style={styles.flex}
                >
                    <ScrollView
                        contentContainerStyle={styles.scrollContent}
                        showsVerticalScrollIndicator={false}
                    >
                        <View style={styles.header}>
                            <Image source={Images.logo} style={styles.logo} resizeMode="contain" />
                        </View>

                        <View style={styles.form}>
                            <Input
                                label={t('auth.passport')}
                                placeholder={t('auth.passportPlaceholder')}
                                value={passport}
                                onChangeText={setPassport}
                                autoCapitalize="characters"
                                placeholderTextColor={Colors.text.lightgray}
                            />

                            <Input
                                label={t('auth.phone')}
                                placeholder={t('auth.phonePlaceholder')}
                                value={phone}
                                onChangeText={setPhone}
                                keyboardType="phone-pad"
                                placeholderTextColor={Colors.text.lightgray}
                            />

                            <Input
                                label={t('auth.password')}
                                placeholder={t('auth.passwordPlaceholder')}
                                value={password}
                                onChangeText={setPassword}
                                secureTextEntry
                                placeholderTextColor={Colors.text.lightgray}
                            />

                            <TouchableOpacity
                                style={styles.forgotContainer}
                                onPress={() => navigation.navigate('ForgotPassword')}
                            >
                                <Text style={styles.forgotText}>{t('auth.forgotPassword')}</Text>
                            </TouchableOpacity>

                            <Button
                                title={t('auth.login')}
                                onPress={handleLogin}
                                loading={loading}
                                style={styles.loginButton}
                                textStyle={{ color: Colors.white }} />
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </View>
        </CommonBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    flex: {
        flex: 1,
    },
    scrollContent: {
        flexGrow: 1,
        paddingHorizontal: Spacing.layout.gutter,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        marginBottom: sHeight(50),
        alignItems: 'center',
    },
    logo: {
        width: sWidth(133),
        height: sHeight(106),
    },
    form: {
        width: sWidth(337),
        alignItems: 'center',
    },
    forgotContainer: {
        width: sWidth(337),
        alignItems: 'flex-end',
        marginBottom: Spacing.xl,
    },
    forgotText: {
        fontSize: Typography.size.xs,
        fontWeight: Typography.weight.semibold,
        color: Colors.text.lightgray
    },
    loginButton: {
        width: sWidth(337),
        height: sHeight(60),
        borderRadius: sWidth(14),
        backgroundColor: Colors.button.primary,
    },
});

export default LoginScreen;
