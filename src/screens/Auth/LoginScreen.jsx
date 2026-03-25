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
    const [error, setError] = useState('');
    const [role, setRole] = useState('pilgrim'); // 'pilgrim' | 'fieldworker'

    const handleLogin = () => {
        if (!passport.trim() || !phone.trim() || !password.trim()) {
            setError(t('auth.errorEmptyFields'));
            return;
        }

        // Robust Validation Rules
        const passportRegex = /^[A-Z0-9]{6,12}$/i;
        const phoneRegex = /^[0-9+]{8,15}$/;

        if (!passportRegex.test(passport.trim())) {
            setError("Please enter a valid Passport Number (6-12 alphanumeric characters)");
            return;
        }

        if (!phoneRegex.test(phone.trim())) {
            setError("Please enter a valid Phone Number (8-15 digits only)");
            return;
        }

        if (password.trim().length < 6) {
            setError("Password must be at least 6 characters long");
            return;
        }
        setError('');
        setLoading(true);
        // Simulate API call
        setTimeout(() => {
            setLoading(false);
            navigation.reset({
                index: 0,
                routes: [{ name: role === 'fieldworker' ? 'FieldworkerMain' : 'Main' }],
            });
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
                            <View style={styles.roleContainer}>
                                <TouchableOpacity
                                    style={[styles.roleButton, role === 'pilgrim' && styles.roleButtonActive]}
                                    onPress={() => setRole('pilgrim')}
                                >
                                    <Text style={[styles.roleText, role === 'pilgrim' && styles.roleTextActive]}>
                                        {t('auth.pilgrimRole')}
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={[styles.roleButton, role === 'fieldworker' && styles.roleButtonActive]}
                                    onPress={() => setRole('fieldworker')}
                                >
                                    <Text style={[styles.roleText, role === 'fieldworker' && styles.roleTextActive]}>
                                        {t('auth.fieldworkerRole')}
                                    </Text>
                                </TouchableOpacity>
                            </View>

                            {error ? <Text style={styles.errorText}>{error}</Text> : null}
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
                                onChangeText={(text) => setPhone(text.replace(/[^0-9+]/g, ''))}
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
    roleContainer: {
        flexDirection: 'row',
        width: sWidth(337),
        height: sHeight(50),
        backgroundColor: Colors.white,
        borderRadius: sWidth(14),
        marginBottom: Spacing.xl,
        padding: sWidth(4),
    },
    roleButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: sWidth(10),
    },
    roleButtonActive: {
        backgroundColor: Colors.button.primary,
    },
    roleText: {
        fontSize: Typography.size.s,
        fontWeight: Typography.weight.bold,
        color: Colors.text.lightgray,
    },
    roleTextActive: {
        color: Colors.white,
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
    errorText: {
        color: 'red',
        fontSize: Typography.size.s,
        marginBottom: Spacing.m,
        alignSelf: 'flex-start',
    },
});

export default LoginScreen;
