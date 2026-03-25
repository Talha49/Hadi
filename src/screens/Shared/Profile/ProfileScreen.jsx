import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
    ImageBackground,
    TextInput,
} from 'react-native';
import { Colors, Spacing, Typography } from '../../../theme';
import { Images } from '../../../assets/images/Images';
import { sWidth, sHeight } from '../../../utils/responsive';
import { t } from '../../../i18n/translations';
import Header from '../../../components/common/Header';

const ProfileScreen = ({ navigation }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState('Ali Usman Raja');
    const [phone, setPhone] = useState('+97 509 38 88');

    const handleEditToggle = () => {
        setIsEditing(!isEditing);
    };

    const handleLogout = () => {
        navigation.reset({
            index: 0,
            routes: [{ name: 'Auth' }],
        });
    };

    return (
        <View style={styles.container}>
            <Header
                title={t('profile.title')}
                onBackPress={() => navigation.goBack()}
                style={styles.header}
                titleStyle={styles.headerTitle}
            />

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
                {/* Profile Image & Edit */}
                <View style={styles.profileSection}>
                    <View style={styles.imageWrapper}>
                        <Image source={Images.profile} style={styles.profileImage} />
                    </View>
                    <TouchableOpacity style={styles.editButton} activeOpacity={0.7} onPress={handleEditToggle}>
                        <Text style={styles.editText}>{isEditing ? "Save" : t('profile.edit')}</Text>
                    </TouchableOpacity>
                </View>

                {/* Input Fields */}
                <View style={styles.fieldSection}>
                    <View style={styles.fieldItem}>
                        <Text style={styles.fieldLabel}>{t('profile.name')}</Text>
                        <View style={styles.inputContainer}>
                            {isEditing ? (
                                <TextInput
                                    style={[styles.inputText, { color: Colors.text.primary }]}
                                    value={name}
                                    onChangeText={setName}
                                />
                            ) : (
                                <Text style={styles.inputText}>{name}</Text>
                            )}
                        </View>
                    </View>

                    <View style={styles.fieldItem}>
                        <Text style={styles.fieldLabel}>{t('profile.phone')}</Text>
                        <View style={styles.inputContainer}>
                            {isEditing ? (
                                <TextInput
                                    style={[styles.inputText, { color: Colors.text.primary }]}
                                    value={phone}
                                    onChangeText={setPhone}
                                    keyboardType="phone-pad"
                                />
                            ) : (
                                <Text style={styles.inputText}>{phone}</Text>
                            )}
                        </View>
                    </View>
                </View>

                {/* Menu Options */}
                <View style={styles.menuSection}>
                    <TouchableOpacity style={styles.menuItem} activeOpacity={0.7}>
                        <View style={styles.menuLeft}>
                            <Image source={Images.info} style={styles.menuIcon} />
                            <Text style={styles.menuText}>{t('profile.about')}</Text>
                        </View>
                        <Image source={Images.rightArrow} style={styles.arrowIcon} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.menuItem} activeOpacity={0.7} onPress={handleLogout}>
                        <View style={styles.menuLeft}>
                            <Image source={Images.logout} style={styles.menuIcon} />
                            <Text style={styles.menuText}>{t('profile.logout')}</Text>
                        </View>
                        <Image source={Images.rightArrow} style={styles.arrowIcon} />
                    </TouchableOpacity>
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
    header: {
        backgroundColor: Colors.background, // Match the dark teal color in image
        height: sHeight(120),
        paddingTop: sHeight(50),
    },
    headerTitle: {
        textAlign: 'left',
        marginLeft: sWidth(10),
        color: Colors.white,
    },
    scrollContent: {
        paddingBottom: sHeight(50),
    },
    profileSection: {
        alignItems: 'center',
        marginTop: sHeight(40),
        marginBottom: sHeight(30),
    },
    imageWrapper: {
        width: sWidth(130),
        height: sWidth(130),
        borderRadius: sWidth(65),
        borderWidth: 4,
        borderColor: Colors.white,
        overflow: 'hidden',
        elevation: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.2,
        shadowRadius: 10,
    },
    profileImage: {
        width: '100%',
        height: '100%',
    },
    editButton: {
        marginTop: sHeight(15),
    },
    editText: {
        fontSize: sWidth(16),
        fontWeight: Typography.weight.bold,
        color: '#27687E',
    },
    fieldSection: {
        paddingHorizontal: Spacing.layout.gap,
        gap: sHeight(25),
    },
    fieldItem: {
        gap: sHeight(8),
    },
    fieldLabel: {
        fontSize: sWidth(16),
        fontWeight: Typography.weight.bold,
        color: '#4A5568',
        marginLeft: sWidth(5),
    },
    inputContainer: {
        backgroundColor: Colors.white,
        borderRadius: sWidth(15),
        height: sHeight(56),
        justifyContent: 'center',
        paddingHorizontal: sWidth(20),
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 5,
    },
    inputText: {
        fontSize: sWidth(15),
        color: '#A0AEC0',
    },
    menuSection: {
        paddingHorizontal: Spacing.layout.gap,
        marginTop: sHeight(60),
        gap: sHeight(15),
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: Colors.white,
        paddingHorizontal: sWidth(20),
        height: sHeight(60),
        borderRadius: sWidth(15),
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 5,
    },
    menuLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: sWidth(15),
    },
    menuIcon: {
        width: sWidth(20),
        height: sWidth(20),
        tintColor: '#27687E',
    },
    menuText: {
        fontSize: sWidth(16),
        fontWeight: Typography.weight.bold,
        color: '#27687E',
    },
    arrowIcon: {
        width: sWidth(14),
        height: sWidth(14),
        tintColor: '#27687E',
    },
});

export default ProfileScreen;
