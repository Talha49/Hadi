import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { Colors, Typography } from '../../theme';
import { sWidth, sHeight } from '../../utils/responsive';
import { Images } from '../../assets/images/Images';

const QRInfoCard = ({
    title,
    items = [],
    qrImage,
    onPress,
    bgColor = Colors.white,
    titleColor = '#27687E',
    itemBgColor = Colors.lightgray,
    textColor = '#9F9F9F',
    iconTintColor = '#9F9F9F',
    arrowTintColor = '#27687E',
    qrWidth = sWidth(91.67),
    qrHeight = sWidth(91.67),
    qrTintColor,
    headerIcon,
    showArrow = true
}) => {
    return (
        <TouchableOpacity
            style={[styles.qrCard, { backgroundColor: bgColor }]}
            activeOpacity={0.9}
            onPress={onPress}
        >
            <View style={styles.qrHeader}>
                {headerIcon && (
                    <Image
                        source={headerIcon}
                        style={[styles.headerIcon, { tintColor: titleColor }]}
                    />
                )}
                <Text style={[styles.qrTitle, { color: titleColor }]}>{title}</Text>
                {showArrow && (
                    <Image
                        source={Images.rightArrow}
                        style={[styles.qrArrowIcon, { tintColor: arrowTintColor }]}
                    />
                )}
            </View>

            <View style={styles.qrContent}>
                <View style={styles.qrInfoList}>
                    {items.map((item, index) => (
                        <View key={index} style={[styles.infoItem, { backgroundColor: itemBgColor }]}>
                            <Image
                                source={item.icon}
                                style={[styles.infoItemIcon, { tintColor: iconTintColor }]}
                            />
                            <Text style={[styles.infoItemText, { color: textColor }]}>{item.text}</Text>
                        </View>
                    ))}
                </View>
                <View style={styles.qrImageContainer}>
                    <Image
                        source={qrImage}
                        style={[
                            styles.qrImage,
                            { width: qrWidth, height: qrHeight },
                            qrTintColor && { tintColor: qrTintColor }
                        ]}
                        resizeMode="contain"
                    />
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    qrCard: {
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
    headerIcon: {
        width: sWidth(18),
        height: sWidth(18),
    },
    qrTitle: {
        fontSize: sWidth(18),
        fontWeight: Typography.weight.bold,
    },
    qrArrowIcon: {
        width: sWidth(18),
        height: sWidth(18),
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
        paddingHorizontal: sWidth(18),
        paddingVertical: sHeight(8),
        borderRadius: sWidth(20),
        alignSelf: 'flex-start',
    },
    infoItemIcon: {
        width: sWidth(14),
        height: sWidth(14),
        marginRight: sWidth(8),
    },
    infoItemText: {
        fontSize: sWidth(12),
        fontWeight: Typography.weight.medium,
    },
    qrImageContainer: {
        width: sWidth(95),
        height: sWidth(91),
        marginLeft: sWidth(15),
        justifyContent: 'center',
        alignItems: 'center',
    },
    qrImage: {
        width: '100%',
        height: '100%',
    },
});

export default QRInfoCard;
