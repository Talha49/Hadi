import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Colors, Spacing, Typography } from '../../../theme';
import { sWidth, sHeight } from '../../../utils/responsive';
import { Images } from '../../../assets/images/Images';
import Header from '../../../components/common/Header';
import MapView, { Marker, UrlTile, Polyline, PROVIDER_DEFAULT } from 'react-native-maps';

const TransportDetailScreen = ({ navigation, route }) => {
    const { busNo = '175', duration = '11 min', arrivalTime = '5:43 PM' } = route.params || {};

    // Mock points for the transport visualization
    const transportPoints = [
        { latitude: 21.4190, longitude: 39.8250 }, // Your location
        { latitude: 21.4205, longitude: 39.8265 }, // Stop 1
        { latitude: 21.4220, longitude: 39.8280 }, // Destination
    ];

    return (
        <View style={styles.container}>
            {/* Real Map Background using OSM */}
            <MapView
                style={styles.map}
                provider={PROVIDER_DEFAULT}
                initialRegion={{
                    latitude: 21.4205,
                    longitude: 39.8265,
                    latitudeDelta: 0.005,
                    longitudeDelta: 0.005,
                }}
            >
                <UrlTile 
                    urlTemplate="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    maximumZ={19}
                />

                {/* Origin Marker */}
                <Marker coordinate={transportPoints[0]}>
                    <View style={styles.dotInner} />
                </Marker>

                {/* Destination Marker */}
                <Marker coordinate={transportPoints[2]}>
                    <View style={styles.destMarkerPill} />
                </Marker>

                {/* Transport Path */}
                <Polyline 
                    coordinates={transportPoints}
                    strokeWidth={4}
                    strokeColor="#4AA1B7"
                    lineDashPattern={[5, 10]}
                />
            </MapView>

            <Header 
                title="Hotel Directions" 
                showMihrab={true} 
                onBackPress={() => navigation.goBack()}
                leftAlign={true}
            />

            {/* Bottom Detail Sheet */}
            <View style={styles.bottomSheet}>
                <View style={styles.handle} />
                
                <View style={styles.sheetHeader}>
                    <View style={styles.headerLeft}>
                        <Image source={Images.bus} style={styles.busIcon} />
                        <Text style={styles.busNoText}>{busNo}</Text>
                        <View style={styles.divider} />
                        <Text style={styles.durationText}>{duration}</Text>
                    </View>
                    <Text style={styles.etaText}>Arrive at {arrivalTime}</Text>
                </View>

                {/* Timeline ScrollView */}
                <ScrollView contentContainerStyle={styles.timelineContent} showsVerticalScrollIndicator={false}>
                    
                    {/* Origin Stop */}
                    <View style={styles.timelineItem}>
                        <View style={styles.indicatorCol}>
                            <View style={styles.dotOuter}>
                                <View style={styles.dotInner} />
                            </View>
                            <View style={styles.line} />
                        </View>
                        <View style={styles.contentCol}>
                            <Text style={styles.locationTitle}>Your location</Text>
                        </View>
                        <View style={styles.timeCol}>
                            <Text style={styles.timelineTime}>5:43 PM</Text>
                        </View>
                    </View>

                    {/* Boarding Stop */}
                    <View style={styles.timelineItem}>
                        <View style={styles.indicatorCol}>
                            <View style={styles.busIndicator}>
                                <Image source={Images.localbus} style={styles.smallBusIcon} />
                            </View>
                            <View style={styles.boldBusLine} />
                        </View>
                        <View style={styles.contentCol}>
                            <View style={styles.busDetailBox}>
                                <Text style={styles.stopName}>Idari Brimler</Text>
                                <View style={styles.busSubRow}>
                                    <Image source={Images.localbus} style={styles.tinyBusIcon} />
                                    <Text style={styles.busNoSmall}>{busNo}</Text>
                                </View>
                                <TouchableOpacity style={styles.rideDropdown}>
                                    <Text style={styles.rideText}>⌄ Ride 3 stops (3 min)</Text>
                                </TouchableOpacity>
                                <Text style={styles.stopName}>Merkez Lojmanlar</Text>
                            </View>
                        </View>
                        <View style={styles.timeCol}>
                            <Text style={styles.timelineTime}>4{'\n'}min</Text>
                        </View>
                    </View>

                    {/* Finish Stop */}
                    <View style={styles.timelineItem}>
                        <View style={styles.indicatorCol}>
                            <View style={styles.dotOuterEmpty}>
                                <View style={styles.dotInnerEmpty} />
                            </View>
                        </View>
                        <View style={styles.contentCol}>
                            <Text style={styles.locationTitle}>Madinah Royal Hotel</Text>
                        </View>
                        <View style={styles.timeCol}>
                            <Text style={styles.timelineTime}>5:48 PM</Text>
                        </View>
                    </View>

                </ScrollView>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.backgroundLight,
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    destMarkerPill: {
        width: sWidth(16),
        height: sWidth(16),
        backgroundColor: Colors.yellow,
        borderRadius: sWidth(8),
        borderWidth: 3,
        borderColor: Colors.white,
    },
    // Bottom Detail Sheet
    bottomSheet: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: '60%',
        backgroundColor: Colors.white,
        borderTopLeftRadius: sWidth(24),
        borderTopRightRadius: sWidth(24),
        paddingHorizontal: Spacing.layout.gap,
        paddingTop: sHeight(10),
        elevation: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -4 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
    },
    handle: {
        width: sWidth(40),
        height: sHeight(4),
        backgroundColor: '#E0E0E0',
        borderRadius: 2,
        alignSelf: 'center',
        marginBottom: sHeight(20),
    },
    sheetHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom: sHeight(20),
        borderBottomWidth: 1,
        borderBottomColor: '#F0F0F0',
        marginBottom: sHeight(20),
    },
    headerLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: sWidth(10),
    },
    busIcon: {
        width: sWidth(20),
        height: sWidth(20),
        tintColor: Colors.text.title,
    },
    busNoText: {
        fontSize: sWidth(18),
        fontWeight: Typography.weight.bold,
        color: Colors.text.title,
    },
    divider: {
        width: 1,
        height: sHeight(15),
        backgroundColor: '#DDD',
        marginHorizontal: sWidth(5),
    },
    durationText: {
        fontSize: sWidth(18),
        fontWeight: Typography.weight.bold,
        color: Colors.text.title,
    },
    etaText: {
        fontSize: sWidth(12),
        color: Colors.text.lightgray,
        fontWeight: Typography.weight.medium,
    },
    // Timeline
    timelineContent: {
        paddingBottom: sHeight(50),
    },
    timelineItem: {
        flexDirection: 'row',
        minHeight: sHeight(60),
    },
    indicatorCol: {
        alignItems: 'center',
        width: sWidth(40),
    },
    contentCol: {
        flex: 1,
        paddingTop: sHeight(2),
    },
    timeCol: {
        width: sWidth(60),
        alignItems: 'flex-end',
        paddingTop: sHeight(2),
    },
    // Timeline Dots & Lines
    dotOuter: {
        width: sWidth(18),
        height: sWidth(18),
        borderRadius: sWidth(9),
        backgroundColor: '#E6F4F7',
        alignItems: 'center',
        justifyContent: 'center',
    },
    dotInner: {
        width: sWidth(8),
        height: sWidth(8),
        borderRadius: sWidth(4),
        backgroundColor: '#4AA1B7',
    },
    dotOuterEmpty: {
        width: sWidth(18),
        height: sWidth(18),
        borderRadius: sWidth(9),
        borderWidth: 1,
        borderColor: '#DDD',
        alignItems: 'center',
        justifyContent: 'center',
    },
    dotInnerEmpty: {
        width: sWidth(8),
        height: sWidth(8),
        borderRadius: sWidth(4),
        backgroundColor: '#F5F5F5',
    },
    line: {
        flex: 1,
        width: 1.5,
        backgroundColor: '#DDD',
        marginVertical: sHeight(4),
    },
    busIndicator: {
        width: sWidth(24),
        height: sWidth(24),
        backgroundColor: '#4AA1B7',
        borderRadius: sWidth(6),
        alignItems: 'center',
        justifyContent: 'center',
    },
    smallBusIcon: {
        width: sWidth(14),
        height: sWidth(14),
        tintColor: Colors.white,
    },
    boldBusLine: {
        flex: 1,
        width: 3,
        backgroundColor: '#4AA1B7',
        borderRadius: 1.5,
        marginVertical: sHeight(4),
    },
    // Timeline Content
    locationTitle: {
        fontSize: sWidth(14),
        fontWeight: Typography.weight.bold,
        color: Colors.text.title,
    },
    timelineTime: {
        fontSize: sWidth(11),
        color: Colors.text.lightgray,
        fontWeight: Typography.weight.medium,
        textAlign: 'right',
    },
    busDetailBox: {
        backgroundColor: '#F9F9F9',
        borderRadius: sWidth(12),
        padding: sWidth(12),
        gap: sHeight(8),
    },
    stopName: {
        fontSize: sWidth(13),
        fontWeight: Typography.weight.medium,
        color: '#666',
    },
    busSubRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: sWidth(6),
    },
    tinyBusIcon: {
        width: sWidth(10),
        height: sWidth(10),
        tintColor: '#666',
    },
    busNoSmall: {
        fontSize: sWidth(11),
        color: '#666',
        fontWeight: Typography.weight.bold,
    },
    rideDropdown: {
        paddingVertical: sHeight(4),
    },
    rideText: {
        fontSize: sWidth(11),
        color: Colors.text.lightgray,
        fontWeight: Typography.weight.medium,
    },
});

export default TransportDetailScreen;
