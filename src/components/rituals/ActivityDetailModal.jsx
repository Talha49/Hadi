import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal, ScrollView } from 'react-native';
import { Colors, Typography } from '../../theme';
import { sWidth, sHeight } from '../../utils/responsive';
import { Images } from '../../assets/images/Images';
import { t } from '../../i18n/translations';

const ActivityDetailModal = ({ visible, item, onClose }) => {
    if (!item) return null;

    const { width: imgW = 405, height: imgH = 460 } = item.dimensions || {};

    return (
        <Modal
            visible={visible}
            animationType="slide"
            transparent={false}
            statusBarTranslucent={true}
            onRequestClose={onClose}
        >
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={onClose} style={styles.closeIconWrapper}>
                        <Image source={Images.cross} style={styles.closeIcon} />
                    </TouchableOpacity>
                </View>

                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.scrollContent}
                    bounces={false}
                >
                    <View style={styles.imageContainer}>
                        <Image
                            source={item.image}
                            style={{ width: sWidth(imgW), height: sHeight(imgH) }}
                            resizeMode="contain"
                        />
                    </View>

                    <View style={styles.infoContent}>
                        <Text style={styles.title}>{item.title}</Text>

                        <View style={styles.pointsList}>
                            {item.detailsPoints && item.detailsPoints.map((point, index) => (
                                <View key={index} style={styles.pointRow}>
                                    <View style={styles.bullet} />
                                    <Text style={styles.pointText}>{point}</Text>
                                </View>
                            ))}
                        </View>

                        <View style={styles.bottomSpace}>
                            <TouchableOpacity onPress={onClose} style={styles.bottomCloseButton}>
                                <Text style={styles.bottomCloseText}>{t('rituals.details') === 'Details' ? 'Close' : 'إغلاق'}</Text>
                                <View style={styles.underline} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    header: {
        width: '100%',
        height: sHeight(80),
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingHorizontal: sWidth(25),
        paddingTop: sHeight(30),
        zIndex: 10,
    },
    closeIconWrapper: {
        padding: sWidth(5),
    },
    closeIcon: {
        width: sWidth(23),
        height: sWidth(23),
        tintColor: '#0f0f0f',
    },
    scrollContent: {
        alignItems: 'center',
        paddingBottom: sHeight(50),
    },
    imageContainer: {
        width: sWidth(405),
        height: sHeight(500),
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -sHeight(30),
    },
    infoContent: {
        width: '100%',
        paddingHorizontal: sWidth(40),
        alignItems: 'center',
    },
    title: {
        fontSize: sWidth(26),
        fontWeight: Typography.weight.bold,
        color: Colors.background,
        textAlign: 'center',
        marginBottom: sHeight(25),
    },
    pointsList: {
        width: '100%',
        marginBottom: sHeight(60),
    },
    pointRow: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginBottom: sHeight(10),
    },
    bullet: {
        width: sWidth(4),
        height: sWidth(4),
        borderRadius: sWidth(2),
        backgroundColor: Colors.text.secondary,
        marginTop: sHeight(8),
        marginRight: sWidth(8),
    },
    pointText: {
        fontSize: sWidth(15),
        color: Colors.text.secondary,
        lineHeight: sHeight(20),
        textAlign: 'center',
    },
    bottomSpace: {
        marginTop: 'auto',
        paddingTop: sHeight(20),
    },
    bottomCloseButton: {
        alignItems: 'center',
    },
    bottomCloseText: {
        fontSize: sWidth(14),
        color: Colors.text.lightgray,
        fontWeight: Typography.weight.medium,
    },
    underline: {
        width: sWidth(40),
        height: 1,
        backgroundColor: Colors.text.lightgray,
        marginTop: 2,
    },
});

export default ActivityDetailModal;
