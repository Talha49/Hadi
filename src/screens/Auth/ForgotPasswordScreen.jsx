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

const ForgotPasswordScreen = ({ navigation }) => {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const hasMinLength = newPassword.length >= 8;
    const hasSymbolOrNumber = /[\d!@#$%^&*()_+{}\[\]:;"'<>,.?/\\|`~]/.test(newPassword);
    const notNameOrEmail = newPassword.length > 0; // Simple check for demo

    const isAllValid = hasMinLength && hasSymbolOrNumber && notNameOrEmail;

    const handleContinue = () => {
        if (!isAllValid) {
            setError(t('forgot.errorCriteria')); // Fallback if needed, but UI shows the red text already. Let's just use simple error.
            return;
        }
        if (newPassword !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        setError('');
        setLoading(true);
        // Simulate API call
        setTimeout(() => {
            setLoading(false);
            navigation.navigate('PasswordUpdated');
        }, 1500);
    };

    const ValidationItem = ({ text, isValid }) => (
        <View style={styles.validationItem}>
            <View>
                <Image 
                    source={Images.tick} 
                    style={[styles.checkInner, !isValid && { tintColor: Colors.text.lightgray }]} 
                />
            </View>
            <Text style={[styles.validationText, isValid && styles.validationTextValid]}>
                {t(text)}
            </Text>
        </View>
    );

    return (
        <CommonBackground source={Images.commonBack}>
            <View style={styles.mainContainer}>
                <View style={styles.whiteCard}>
                    <KeyboardAvoidingView
                        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                        style={styles.flex}
                    >
                        <ScrollView
                            contentContainerStyle={styles.scrollContent}
                            showsVerticalScrollIndicator={false}
                        >
                            <Text style={styles.title}>{t('forgot.title')}</Text>

                            <View style={styles.form}>
                                {error ? <Text style={styles.errorText}>{error}</Text> : null}

                                <Input
                                    label={t('forgot.newPassword')}
                                    placeholder={t('forgot.placeholder')}
                                    value={newPassword}
                                    onChangeText={setNewPassword}
                                    secureTextEntry
                                    placeholderTextColor={Colors.text.lightgray}
                                />

                                <Input
                                    label={t('forgot.confirmPassword')}
                                    placeholder={t('forgot.placeholder')}
                                    value={confirmPassword}
                                    onChangeText={setConfirmPassword}
                                    secureTextEntry
                                    placeholderTextColor={Colors.text.lightgray}
                                />

                                <View style={styles.validationList}>
                                    <ValidationItem text="forgot.validateName" isValid={notNameOrEmail} />
                                    <ValidationItem text="forgot.validateLength" isValid={hasMinLength} />
                                    <ValidationItem text="forgot.validateSymbol" isValid={hasSymbolOrNumber} />
                                </View>

                                <Button
                                    title={t('forgot.continue')}
                                    onPress={handleContinue}
                                    loading={loading}
                                    style={styles.continueButton}
                                    textStyle={{ color: Colors.white }}
                                />

                                <TouchableOpacity
                                    style={styles.backButton}
                                    onPress={() => navigation.goBack()}
                                >
                                    <Text style={styles.backText}>{t('forgot.back')}</Text>
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
                    </KeyboardAvoidingView>
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
    flex: {
        flex: 1,
    },
    scrollContent: {
        flexGrow: 1,
        paddingHorizontal: Spacing.layout.gutter,
        paddingBottom: Spacing.xxl,
        alignItems: 'center',
    },
    title: {
        fontSize: Typography.size.xxl,
        fontWeight: Typography.weight.heavy,
        color: Colors.text.primary,
        width: sWidth(337),
        marginBottom: Spacing.xxl,
        lineHeight: sHeight(40),
    },
    form: {
        width: sWidth(337),
        alignItems: 'center',
    },
    errorText: {
        color: 'red',
        fontSize: Typography.size.s,
        marginBottom: Spacing.m,
        alignSelf: 'flex-start',
    },
    validationList: {
        width: sWidth(337),
        marginBottom: Spacing.xxl,
    },
    validationItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: Spacing.s,
        gap: sWidth(10),
    },
    checkInner: {
        width: sWidth(12),
        height: sWidth(12),
        resizeMode: 'contain',
    },
    validationText: {
        fontSize: Typography.size.xs,
        color: Colors.text.secondary,
        fontWeight: Typography.weight.semibold,
    },
    validationTextValid: {
        color: '#27687E',
    },
    continueButton: {
        width: sWidth(337),
        height: sHeight(60),
        borderRadius: sWidth(14),
        backgroundColor: Colors.button.primary,
        marginBottom: Spacing.l,
    },
    backButton: {
        paddingVertical: Spacing.s,
    },
    backText: {
        color: Colors.text.lightgray,
        fontSize: Typography.size.s,
        fontWeight: Typography.weight.semibold,
        textDecorationLine: 'underline',
    },
});

export default ForgotPasswordScreen;
