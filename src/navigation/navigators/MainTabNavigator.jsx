import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, StyleSheet, View, Text } from 'react-native';
import HomeStack from '../stacks/HomeStack';
import MapScreen from '../../screens/Map/MapScreen';
import RitualsStack from '../stacks/RitualsStack';
import HealthScreen from '../../screens/Health/HealthScreen';
import GroupScreen from '../../screens/Group/GroupScreen';
import { Colors, Spacing, Typography } from '../../theme';
import { Images } from '../../assets/images/Images';
import { t } from '../../i18n/translations';
import { sWidth, sHeight } from '../../utils/responsive';

const Tab = createBottomTabNavigator();

const TabBarIcon = ({ source, focused, label }) => (
    <View style={styles.iconContainer}>
        <Image
            source={source}
            style={[
                styles.icon,
                { tintColor: focused ? Colors.background : Colors.text.lightgray }
            ]}
            resizeMode="contain"
        />
        <Text style={[
            styles.label,
            { color: focused ? Colors.background : Colors.text.lightgray }
        ]}>
            {label}
        </Text>
    </View>
);

const MainTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: styles.tabBar,
                tabBarItemStyle: styles.tabBarItem,
                tabBarIconStyle: styles.tabBarIconOverride,
            }}
        >
            <Tab.Screen
                name="HomeTab"
                component={HomeStack}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <TabBarIcon source={Images.home} focused={focused} label={t('tabs.home')} />
                    ),
                }}
            />
            <Tab.Screen
                name="MapTab"
                component={MapScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <TabBarIcon source={Images.map} focused={focused} label={t('tabs.map')} />
                    ),
                }}
            />
            <Tab.Screen
                name="RitualsTab"
                component={RitualsStack}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <TabBarIcon source={Images.rituals} focused={focused} label={t('tabs.rituals')} />
                    ),
                }}
            />
            <Tab.Screen
                name="HealthTab"
                component={HealthScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <TabBarIcon source={Images.health} focused={focused} label={t('tabs.health')} />
                    ),
                }}
            />
            <Tab.Screen
                name="GroupTab"
                component={GroupScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <TabBarIcon source={Images.group} focused={focused} label={t('tabs.group')} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    tabBar: {
        height: sHeight(63),
        backgroundColor: Colors.white,
        borderTopWidth: 0,
        elevation: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
    },
    tabBarItem: {
        justifyContent: 'center',
        alignItems: 'center',
        height: sHeight(63),
    },
    tabBarIconOverride: {
        width: '100%',
        height: '100%',
        marginTop: 0,
    },
    iconContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: sHeight(8), // Subtle top padding for balance
    },
    icon: {
        width: sWidth(22),
        height: sWidth(22),
        marginBottom: sHeight(2),
    },
    label: {
        fontSize: sWidth(10),
        fontWeight: Typography.weight.medium,
    },
});

export default MainTabNavigator;
