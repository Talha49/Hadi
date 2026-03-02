import React, { useState, useRef } from 'react';
import {
    StyleSheet,
    View,
    Text,
    FlatList,
    ImageBackground,
    Dimensions,
    TouchableOpacity,
    StatusBar,
} from 'react-native';
import { Colors, Spacing, Typography } from '../../theme';
import { onboardingData } from '../../data/onboardingData';

import { t } from '../../i18n/translations';
import { sWidth, sHeight } from '../../utils/responsive';

const { width, height } = Dimensions.get('window');

const OnboardingScreen = ({ navigation }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const flatListRef = useRef(null);

    const onViewableItemsChanged = useRef(({ viewableItems }) => {
        if (viewableItems.length > 0) {
            setCurrentIndex(viewableItems[0].index);
        }
    }).current;

    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

    const handleContinue = () => {
        navigation.navigate('Login');
    };

    const renderItem = ({ item }) => (
        <ImageBackground source={item.image} style={styles.slide} resizeMode="cover">
            <View style={styles.overlay}>
                <View style={styles.contentContainer}>
                    <Text style={styles.title}>{t(item.title)}</Text>
                    <Text style={styles.description}>{t(item.description)}</Text>

                    <View style={styles.footer}>
                        <View style={styles.pagination}>
                            {onboardingData.map((_, index) => (
                                <View
                                    key={index}
                                    style={[
                                        styles.dot,
                                        currentIndex === index && styles.activeDot,
                                    ]}
                                />
                            ))}
                        </View>

                        <TouchableOpacity
                            style={styles.actionButton}
                            onPress={item.isLast ? handleContinue : undefined}
                            activeOpacity={item.isLast ? 0.7 : 1}
                        >
                            <Text style={styles.actionText}>
                                {item.isLast ? t('onboarding.continue') : t('onboarding.swipe')}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ImageBackground>
    );

    return (
        <View style={styles.container}>
            <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
            <FlatList
                data={onboardingData}
                renderItem={renderItem}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onViewableItemsChanged={onViewableItemsChanged}
                viewabilityConfig={viewConfig}
                ref={flatListRef}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
    },
    slide: {
        width,
        height,
    },
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.2)',
        justifyContent: 'flex-end',
        paddingBottom: sHeight(60),
    },
    contentContainer: {
        alignItems: 'center',
        paddingHorizontal: Spacing.layout.gutter,
    },
    title: {
        fontSize: Typography.size.xxl,
        fontWeight: Typography.weight.heavy,
        color: Colors.white,
        textAlign: 'center',
        marginBottom: Spacing.m,
    },
    description: {
        fontSize: Typography.size.m,
        color: Colors.white,
        textAlign: 'center',
        marginBottom: Spacing.xxl * 2,
        lineHeight: Typography.lineHeight.normal,
        opacity: 0.9,
    },
    footer: {
        alignItems: 'center',
    },
    pagination: {
        flexDirection: 'row',
        marginBottom: Spacing.xl,
    },
    dot: {
        width: sWidth(10),
        height: sWidth(10),
        borderRadius: sWidth(5),
        backgroundColor: 'rgba(255,255,255,0.5)',
        marginHorizontal: sWidth(5),
    },
    activeDot: {
        backgroundColor: '#FFCC4D',
        width: sWidth(12),
        height: sWidth(12),
    },
    actionButton: {
        paddingVertical: sHeight(10),
    },
    actionText: {
        color: Colors.white,
        fontSize: Typography.size.m,
        fontWeight: Typography.weight.semibold,
    },
});

export default OnboardingScreen;
