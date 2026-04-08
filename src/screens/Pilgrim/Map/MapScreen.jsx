import React, { useMemo, useRef, useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, FlatList, PermissionsAndroid, Platform } from 'react-native';
import { Colors, Spacing, Typography } from '../../../theme';
import { sWidth, sHeight } from '../../../utils/responsive';
import { Images } from '../../../assets/images/Images';
import HadiHeader from '../../../components/common/HadiHeader';
import InfoCard from '../../../components/common/InfoCard';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import locationsData from '../../../data/locations.json';
import { HadiMapTheme } from '../../../theme/mapTheme';

const busSchedules = [
    { id: '1', busNo: '175', time: '05:22 AM', route: 'Saddar Street - Malik Road', details: 'Ride 3 stops (3 min)', freq: 'Every 30 min' },
    { id: '2', busNo: '175', time: '05:52 AM', route: 'Saddar Street - Malik Road', details: 'Ride 3 stops (3 min)', freq: 'Every 30 min' },
    { id: '3', busNo: '175', time: '06:22 AM', route: 'Saddar Street - Malik Road', details: 'Ride 3 stops (3 min)', freq: 'Every 30 min' },
    { id: '4', busNo: '175', time: '06:52 AM', route: 'Saddar Street - Malik Road', details: 'Ride 3 stops (3 min)', freq: 'Every 30 min' },
];

const MapScreen = ({ navigation }) => {
    const busSheetRef = useRef(null);
    const busSnapPoints = useMemo(() => ['50%', '90%'], []);
    const mapRef = useRef(null);

    const [hasPermission, setHasPermission] = useState(false);
    const [userLocation, setUserLocation] = useState({
        latitude: 21.4190,
        longitude: 39.8250,
    });

    const infoData = [
        { label: "Makkah City", value: "Makkah Royal\nClock Tower", icon: Images.hotel, width: sWidth(130) },
        { label: "Floor\nNumber", value: "4", icon: Images.floor, valueSize: sWidth(26), width: sWidth(85) },
        { label: "Room\nNumber", value: "401", icon: Images.key, valueSize: sWidth(26), width: sWidth(85) },
    ];

    useEffect(() => {
        const checkPermission = async () => {
            if (Platform.OS === 'android') {
                try {
                    const granted = await PermissionsAndroid.request(
                        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
                    );
                    setHasPermission(granted === PermissionsAndroid.RESULTS.GRANTED);
                } catch (err) {
                    console.warn(err);
                }
            } else {
                setHasPermission(true);
            }
        };
        checkPermission();
    }, []);

    const handleUserLocationChange = (event) => {
        const { coordinate } = event.nativeEvent;
        if (coordinate) {
            setUserLocation(coordinate);
        }
    };

    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchSubmit = () => {
        if (searchQuery.trim().length > 0) {
            navigation.navigate('Directions', { destination: searchQuery.trim(), mode: 'drive' });
            setSearchQuery(''); // clear after navigate
        }
    };

    return (
        <View style={styles.container}>
            {/* FORCE RENDER ONLY WHEN READY TO PREVENT NATIVE CRASH */}
            <MapView
                ref={mapRef}
                style={styles.map}
                provider={PROVIDER_GOOGLE}
                customMapStyle={HadiMapTheme}
                initialRegion={{
                    latitude: 21.4200,
                    longitude: 39.8260,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.015,
                }}
                showsUserLocation={hasPermission}
                onUserLocationChange={handleUserLocationChange}
                showsMyLocationButton={false}
                showsCompass={false}
                showsBuildings={true}
                showsIndoors={true}
                showsPointsOfInterest={true}
            >

                {/* Custom Animated User Marker */}
                <Marker coordinate={userLocation} anchor={{ x: 0.5, y: 0.5 }}>
                    <View style={styles.customMarkerContainer}>
                        <View style={styles.markerPulse} />
                        <View style={styles.markerCore} />
                    </View>
                </Marker>

                {locationsData.map((loc) => (
                    <Marker 
                        key={loc.id}
                        coordinate={{ latitude: loc.latitude, longitude: loc.longitude }}
                        title={loc.name}
                    >
                        <View style={[styles.staticMarker, loc.type === 'hospital' && { backgroundColor: '#FF6B6B' }]}>
                            <Image 
                                source={loc.type === 'hotel' ? Images.hotel : Images.hospital} 
                                style={styles.staticMarkerIcon} 
                                resizeMode="contain" 
                            />
                        </View>
                    </Marker>
                ))}
            </MapView>

            <HadiHeader title="Hadi Maps">
                <View style={styles.infoRow}>
                    {infoData.map((info, index) => (
                        <InfoCard
                            key={index}
                            label={info.label}
                            value={info.value}
                            icon={info.icon}
                            valueSize={info.valueSize}
                            width={info.width}
                        />
                    ))}
                </View>
            </HadiHeader>

            <View style={styles.bottomOverlay}>
                <View style={styles.actionRow}>
                    <TouchableOpacity style={styles.lostButton} onPress={() => navigation.navigate('Directions', { mode: 'walk', destination: 'Madinah Royal Hotel' })}>
                        <Image source={Images.lost} style={styles.lostIcon} resizeMode="contain" />
                        <Text style={styles.lostText}>I'm Lost!</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.filterButton} onPress={() => navigation.navigate('Directions', { destination: 'Madinah Royal Hotel', mode: 'walk' })}>
                        <Image source={Images.hotel} style={styles.filterIcon} resizeMode="contain" />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.filterButton} onPress={() => navigation.navigate('Directions', { destination: 'Madinah Royal Hospital', mode: 'drive' })}>
                        <Image source={Images.hospital} style={styles.filterIcon} resizeMode="contain" />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.filterButton} onPress={() => busSheetRef.current?.snapToIndex(0)}>
                        <Image source={Images.bus} style={styles.filterIcon} resizeMode="contain" />
                    </TouchableOpacity>
                </View>

                <View style={styles.searchContainer}>
                    <Image source={Images.search} style={styles.searchIcon} resizeMode="contain" />
                    <TextInput 
                        placeholder="Where do you want to go?"
                        placeholderTextColor={Colors.text.lightgray}
                        style={styles.searchInput}
                        value={searchQuery}
                        onChangeText={setSearchQuery}
                        onSubmitEditing={handleSearchSubmit}
                        returnKeyType="search"
                    />
                </View>
            </View>

            <BottomSheet
                ref={busSheetRef}
                index={-1} 
                snapPoints={busSnapPoints}
                enablePanDownToClose={true}
                handleIndicatorStyle={styles.sheetHandle}
                backgroundStyle={styles.sheetBackground}
            >
                <BottomSheetView style={styles.sheetContent}>
                    <Text style={styles.sheetTitle}>Bus Schedule</Text>
                    <View style={styles.divider} />
                    <FlatList
                        data={busSchedules}
                        renderItem={({ item }) => (
                            <View style={styles.busCard}>
                                <Image source={Images.bus} style={styles.busIcon} />
                                <View style={{ flex: 1, marginLeft: 15 }}>
                                    <Text style={styles.busTimeText}>{item.time}</Text>
                                    <Text style={styles.busRouteText}>{item.route}</Text>
                                </View>
                                <Text style={styles.busNoText}>{item.busNo}</Text>
                            </View>
                        )}
                        keyExtractor={item => item.id}
                        contentContainerStyle={{ paddingBottom: 20 }}
                    />
                </BottomSheetView>
            </BottomSheet>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: Colors.white },
    map: { ...StyleSheet.absoluteFillObject },
    infoRow: { flexDirection: 'row', justifyContent: 'center', gap: 10, marginTop: -60 },
    customMarkerContainer: { alignItems: 'center', justifyContent: 'center' },
    markerPulse: { width: 30, height: 30, borderRadius: 15, backgroundColor: 'rgba(244, 197, 88, 0.4)', position: 'absolute' },
    markerCore: { width: 12, height: 12, borderRadius: 6, backgroundColor: Colors.yellow, borderWidth: 2, borderColor: Colors.white },
    staticMarker: { width: 28, height: 28, borderRadius: 14, backgroundColor: '#4AA1B7', borderWidth: 2, borderColor: Colors.white, alignItems: 'center', justifyContent: 'center' },
    staticMarkerIcon: { width: 14, height: 14, tintColor: Colors.white },
    bottomOverlay: { position: 'absolute', bottom: 30, width: '100%', paddingHorizontal: 20, gap: 15 },
    actionRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
    lostButton: { width: 135, height: 60, backgroundColor: Colors.yellow, borderRadius: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 6 },
    lostIcon: { width: 18, height: 18, tintColor: Colors.white },
    lostText: { fontSize: 14, fontWeight: 'bold', color: Colors.white },
    filterButton: { width: 60, height: 60, backgroundColor: Colors.white, borderRadius: 16, alignItems: 'center', justifyContent: 'center', elevation: 3 },
    filterIcon: { width: 24, height: 24, tintColor: Colors.background },
    searchContainer: { flexDirection: 'row', alignItems: 'center', backgroundColor: Colors.white, borderRadius: 30, height: 60, paddingHorizontal: 20, elevation: 2 },
    searchIcon: { width: 18, height: 18, tintColor: Colors.text.lightgray, marginRight: 10 },
    searchInput: { flex: 1, fontSize: 14, color: Colors.text.primary },
    sheetHandle: { backgroundColor: '#E0E0E0', width: 40 },
    sheetBackground: { backgroundColor: Colors.white, borderTopLeftRadius: 30, borderTopRightRadius: 30 },
    sheetContent: { paddingHorizontal: 20, paddingTop: 10, flex: 1 },
    sheetTitle: { fontSize: 18, fontWeight: 'bold', color: Colors.text.title, marginBottom: 15 },
    divider: { height: 1, backgroundColor: '#F0F0F0', marginBottom: 20 },
    busCard: { flexDirection: 'row', backgroundColor: '#F9F9F9', borderRadius: 18, padding: 15, alignItems: 'center', marginBottom: 10 },
    busIcon: { width: 20, height: 20, tintColor: Colors.text.lightgray },
    busNoText: { fontSize: 15, fontWeight: 'bold', color: Colors.text.secondary },
    busTimeText: { fontSize: 15, fontWeight: 'heavy', color: '#4AA1B7' },
    busRouteText: { fontSize: 11, color: '#4AA1B7', opacity: 0.6 },
});

export default MapScreen;
