import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, StyleSheet, View, Text } from 'react-native';
import FieldworkerHomeStack from '../stacks/FieldworkerHomeStack';
import FieldworkerMapStack from '../stacks/FieldworkerMapStack';
import FieldworkerHealthStack from '../stacks/FieldworkerHealthStack';
import { Colors, Typography } from '../../theme';
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

const FieldworkerTabNavigator = () => {
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
                component={FieldworkerHomeStack}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <TabBarIcon source={Images.home} focused={focused} label={t('tabs.home')} />
                    ),
                }}
            />
            <Tab.Screen
                name="MapTab"
                component={FieldworkerMapStack}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <TabBarIcon source={Images.map} focused={focused} label={t('tabs.map')} />
                    ),
                }}
            />
            <Tab.Screen
                name="HealthTab"
                component={FieldworkerHealthStack}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <TabBarIcon source={Images.health} focused={focused} label={t('tabs.health')} />
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
        paddingTop: sHeight(8), 
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

export default FieldworkerTabNavigator;
