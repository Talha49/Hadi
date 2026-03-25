import React from 'react';
import {
    Modal,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    Pressable
} from 'react-native';
import { Colors, Typography, Spacing } from '../../theme';
import { Images } from '../../assets/images/Images';
import { sWidth, sHeight } from '../../utils/responsive';

/**
 * Reusable Custom Alert Modal
 * @param {boolean} visible - controls modal visibility
 * @param {function} onClose - invoked when close button or backdrop is pressed
 * @param {string} title - Main header text
 * @param {string} message - Descriptive body text
 * @param {string} type - 'warning' (Yellow header) or 'info' (Dark Blue header)
 */
const CustomAlertModal = ({ visible, onClose, title, message, type = 'warning' }) => {
    
    const isWarning = type === 'warning';
    const headerBgColor = isWarning ? Colors.yellow : Colors.background;

    // Optional: map the icon depending on type. Here we use Images.broadcast as the triangle.
    const alertIcon = Images.safety; // using safety or broadcast based on what fits best. The user prefers the warning triangle.

    return (
        <Modal
            transparent={true}
            animationType="fade"
            visible={visible}
            onRequestClose={onClose}
        >
            <Pressable style={styles.overlay} onPress={onClose}>
                <Pressable onPress={(e) => e.stopPropagation()}>
                    <View style={styles.modalContainer}>
                        
                        {/* Top Header Section */}
                        <View style={[styles.modalHeader, { backgroundColor: headerBgColor }]}>
                            {/* Close Button */}
                            <TouchableOpacity 
                                style={styles.closeButton} 
                                onPress={onClose}
                                hitSlop={{top: 15, bottom: 15, left: 15, right: 15}}
                                activeOpacity={0.7}
                            >
                                <Image 
                                    source={Images.cross} 
                                    style={styles.closeIcon} 
                                    resizeMode="contain" 
                                />
                            </TouchableOpacity>

                            {/* Alert Icon (Centered) */}
                            <Image 
                                source={Images.broadcast} 
                                style={styles.alertIcon} 
                                resizeMode="contain" 
                            />
                        </View>

                        {/* Bottom Content Section */}
                        <View style={styles.modalBody}>
                            <Text style={styles.titleText}>{title}</Text>
                            <Text style={styles.messageText}>{message}</Text>
                        </View>
                        
                    </View>
                </Pressable>
            </Pressable>
        </Modal>
    );
};

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.4)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        width: sWidth(320),
        backgroundColor: Colors.white,
        borderRadius: sWidth(18),
        overflow: 'hidden',
        elevation: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
    },
    modalHeader: {
        height: sHeight(130),
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    closeButton: {
        position: 'absolute',
        top: sHeight(15),
        right: sWidth(15),
        padding: sWidth(5),
    },
    closeIcon: {
        width: sWidth(16),
        height: sWidth(16),
        tintColor: Colors.white,
        opacity: 0.8,
    },
    alertIcon: {
        width: sWidth(55),
        height: sWidth(55),
        tintColor: Colors.white,
    },
    modalBody: {
        paddingHorizontal: sWidth(25),
        paddingTop: sHeight(25),
        paddingBottom: sHeight(40),
        alignItems: 'center',
    },
    titleText: {
        fontSize: Typography.size.l, // ~18-20
        fontWeight: Typography.weight.bold,
        color: Colors.background, // Dark Blue text for title
        marginBottom: sHeight(15),
        letterSpacing: 0.5,
    },
    messageText: {
        fontSize: Typography.size.s, // ~14
        color: '#4A4A4A',
        textAlign: 'center',
        fontWeight: Typography.weight.regular,
        lineHeight: sHeight(22),
    }
});

export default CustomAlertModal;
