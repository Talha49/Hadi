import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, Platform, PermissionsAndroid } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import { Colors, Spacing, Typography } from '../../../theme';
import { sWidth, sHeight } from '../../../utils/responsive';
import { Images } from '../../../assets/images/Images';
import lostPilgrimsData from '../../../data/lost_pilgrims.json';
import { HadiMapTheme } from '../../../theme/mapTheme';

const MapScreen = ({ navigation }) => {
    const mapRef = useRef(null);
    const [userLoc, setUserLoc] = useState({ latitude: 21.4200, longitude: 39.8260 });
    const [hasGeo, setHasGeo] = useState(false);
    const [isOnline, setIsOnline] = useState(true);
    const [selectedPilgrim, setSelectedPilgrim] = useState(null);

    useEffect(() => {
        const checkPermission = async () => {
            if (Platform.OS === 'android') {
                try {
                    const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
                    setHasGeo(granted === PermissionsAndroid.RESULTS.GRANTED);
                } catch (err) { console.warn(err); }
            } else { setHasGeo(true); }
        };
        checkPermission();

        const watchId = Geolocation.watchPosition(
            (pos) => {
                const newLoc = { latitude: pos.coords.latitude, longitude: pos.coords.longitude };
                setUserLoc(newLoc);
            },
            (error) => console.log('FieldWorker Location Watch Error:', error),
            { enableHighAccuracy: true, distanceFilter: 5, timeout: 15000, maximumAge: 10000 }
        );

        return () => Geolocation.clearWatch(watchId);
    }, []);

    const handleStartEmergency = () => {
        if (!selectedPilgrim) return;
        navigation.navigate('EmergencyDirections', { 
            emergencyTarget: selectedPilgrim 
        });
    };

    return (
        <View style={styles.container}>
            <MapView
                ref={mapRef}
                style={styles.map}
                provider={PROVIDER_GOOGLE}
                customMapStyle={HadiMapTheme}
                showsUserLocation={false}
                showsCompass={false}
                initialRegion={{
                    latitude: 21.4220,
                    longitude: 39.8260,
                    latitudeDelta: 0.02,
                    longitudeDelta: 0.02,
                }}
            >
                {/* Simulated Field Worker GPS Pin */}
                <Marker coordinate={userLoc} anchor={{ x: 0.5, y: 0.5 }}>
                    <View style={styles.userMarkerContainer}>
                        <View style={styles.markerPulse} />
                        <View style={styles.markerCore} />
                    </View>
                </Marker>

                {/* Real-time Lost Pilgrim Markers */}
                {lostPilgrimsData.map((pilgrim) => {
                    const isSelected = selectedPilgrim?.id === pilgrim.id;
                    return (
                        <Marker 
                            key={pilgrim.id}
                            coordinate={{ latitude: pilgrim.latitude, longitude: pilgrim.longitude }}
                            onPress={() => setSelectedPilgrim(pilgrim)}
                            anchor={{ x: 0.5, y: 0.8 }}
                        >
                            <View style={[styles.alertMarkerContainer, isSelected && styles.selectedMarkerGlow]}>
                                <View style={styles.triangle} />
                                <Text style={styles.exclamationMark}>!</Text>
                                {/* Concentric target rings underneath triangle mimicking mockup exactly */}
                                {isSelected && (
                                    <View style={styles.targetRingOuter}>
                                        <View style={styles.targetRingInner} />
                                    </View>
                                )}
                            </View>
                        </Marker>
                    );
                })}
            </MapView>

            <View style={styles.topHeader}>
                <Text style={styles.topTitle}>Hadi Maps</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                    <Image source={Images.profile} style={styles.headProfileImage} />
                </TouchableOpacity>
            </View>

            {/* Floating Top Info Cards */}
            <View style={styles.infoRowRow}>
                <View style={[styles.infoCard, {flex: 1.5}]}>
                    <Image source={Images.profile} style={[styles.infoIcon, {tintColor: '#4AA1B7'}]} resizeMode="contain" />
                    <View style={styles.infoTextPile}>
                        <Text style={styles.infoLabelText}>Field Worker</Text>
                        <Text style={styles.infoValueTextBlue}>Muhammad{"\n"}Ali</Text>
                    </View>
                </View>

                <View style={[styles.infoCard, {flex: 1}]}>
                    <Image source={Images.passport} style={[styles.infoIcon, {tintColor: '#4AA1B7'}]} resizeMode="contain" />
                    <View style={styles.infoTextPile}>
                        <Text style={styles.infoLabelText}>Agent ID</Text>
                        <Text style={[styles.infoValueTextBlue, {fontSize: sWidth(18)}]}>401</Text>
                    </View>
                </View>

                <View style={[styles.infoCard, {flex: 1}]}>
                    <Image source={Images.broadcast} style={[styles.infoIcon, {tintColor: Colors.yellow}]} resizeMode="contain" />
                    <View style={styles.infoTextPile}>
                        <Text style={styles.infoLabelText}>Active Cases</Text>
                        <Text style={[styles.infoValueTextBlue, {color: Colors.yellow, fontSize: sWidth(18)}]}>4</Text>
                    </View>
                </View>
            </View>

            {/* Advanced Bottom Action Overlay */}
            <View style={styles.bottomOverlay}>
                <View style={styles.actionsRow}>
                    
                    <View style={styles.onlinePill}>
                        <Text style={styles.onlinePillText}>Online</Text>
                        <TouchableOpacity style={[styles.toggleTrack, isOnline && styles.toggleTrackOn]} onPress={() => setIsOnline(!isOnline)}>
                             <View style={[styles.toggleThumb, isOnline && styles.toggleThumbOn]} />
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity 
                        style={[styles.startButton, !selectedPilgrim && {backgroundColor: Colors.text.lightgray}]} 
                        activeOpacity={0.8}
                        onPress={handleStartEmergency}
                        disabled={!selectedPilgrim}
                    >
                        <Text style={styles.startButtonText}>Start</Text>
                        <Image source={Images.rightArrow} style={[styles.startArrow, !selectedPilgrim && {tintColor: '#eee'}]} resizeMode="contain"/>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.hospitalButton}>
                        <Image source={Images.hospital} style={styles.hospitalBtnIcon} resizeMode="contain" />
                    </TouchableOpacity>

                </View>

                <View style={styles.searchBarContainer}>
                    <Image source={Images.search} style={styles.searchIcon} resizeMode="contain" />
                    <TextInput 
                        placeholder="Where do you want to go?"
                        placeholderTextColor={Colors.text.lightgray}
                        style={styles.searchInput}
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: Colors.white },
    map: { ...StyleSheet.absoluteFillObject },
    // Tracker Marker
    userMarkerContainer: { alignItems: 'center', justifyContent: 'center', width: sWidth(40), height: sWidth(40) },
    markerPulse: { width: sWidth(30), height: sWidth(30), borderRadius: sWidth(15), backgroundColor: 'rgba(74, 161, 183, 0.2)', position: 'absolute' },
    markerCore: { width: sWidth(14), height: sWidth(14), borderRadius: sWidth(7), backgroundColor: '#4AA1B7', borderWidth: 2.5, borderColor: Colors.white },
    // Custom Yellow CSS Triangle 
    alertMarkerContainer: { alignItems: 'center', width: sWidth(60), height: sHeight(70), justifyContent: 'flex-start', paddingTop: 10 },
    selectedMarkerGlow: { shadowColor: Colors.yellow, shadowOffset: { width: 0, height: 0 }, shadowOpacity: 0.8, shadowRadius: 10, elevation: 5 },
    triangle: { width: 0, height: 0, backgroundColor: "transparent", borderStyle: "solid", borderLeftWidth: sWidth(18), borderRightWidth: sWidth(18), borderBottomWidth: sHeight(32), borderLeftColor: "transparent", borderRightColor: "transparent", borderBottomColor: Colors.yellow },
    exclamationMark: { position: 'absolute', top: sHeight(20), color: Colors.white, fontWeight: '900', fontSize: sWidth(18) },
    targetRingOuter: { width: sWidth(16), height: sWidth(16), borderRadius: sWidth(8), borderWidth: 2, borderColor: '#FBE8B3', alignItems: 'center', justifyContent: 'center', marginTop: sHeight(5) },
    targetRingInner: { width: sWidth(6), height: sWidth(6), borderRadius: sWidth(3), backgroundColor: Colors.yellow },
    
    // Top Bar Logic
    topHeader: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: Spacing.layout.gap, paddingTop: sHeight(60) },
    topTitle: { fontSize: Typography.size.xl, fontWeight: Typography.weight.bold, color: '#4AA1B7', textShadowColor: 'rgba(255,255,255,0.8)', textShadowOffset: {width: 0, height: 1}, textShadowRadius: 2 },
    headProfileImage: { width: sWidth(38), height: sWidth(38), borderRadius: sWidth(19), borderWidth: 2, borderColor: Colors.yellow },
    infoRowRow: { flexDirection: 'row', paddingHorizontal: Spacing.layout.gap, marginTop: sHeight(15), gap: sWidth(8) },
    infoCard: { backgroundColor: Colors.white, borderRadius: sWidth(14), paddingHorizontal: sWidth(12), paddingVertical: sHeight(10), flexDirection: 'row', alignItems: 'center', elevation: 5, shadowColor: '#000', shadowOffset: {width:0, height:2}, shadowOpacity: 0.1, shadowRadius: 5 },
    infoIcon: { width: sWidth(16), height: sWidth(16), marginRight: sWidth(8) },
    infoTextPile: { justifyContent: 'center' },
    infoLabelText: { fontSize: sWidth(8), fontWeight: 'bold', color: Colors.text.lightgray, textTransform: 'uppercase' },
    infoValueTextBlue: { fontSize: sWidth(12), fontWeight: 'bold', color: '#4AA1B7', marginTop: sHeight(2) },
    
    // Bottom Interface
    bottomOverlay: { position: 'absolute', bottom: sHeight(20), width: '100%', paddingHorizontal: Spacing.layout.gap },
    actionsRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: sHeight(15) },
    onlinePill: { width: sWidth(120), height: sHeight(56), backgroundColor: Colors.white, borderRadius: sWidth(28), flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: sWidth(12), elevation: 5, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 5 },
    onlinePillText: { fontSize: sWidth(14), fontWeight: Typography.weight.semibold, color: Colors.text.secondary },
    toggleTrack: { width: sWidth(38), height: sHeight(22), borderRadius: sHeight(11), backgroundColor: '#E0E0E0', justifyContent: 'center', paddingHorizontal: sWidth(2) },
    toggleTrackOn: { backgroundColor: Colors.yellow },
    toggleThumb: { width: sWidth(18), height: sWidth(18), borderRadius: sWidth(9), backgroundColor: Colors.white, alignSelf: 'flex-start' },
    toggleThumbOn: { alignSelf: 'flex-end', elevation: 2 },
    startButton: { flex: 1, marginHorizontal: sWidth(10), height: sHeight(56), backgroundColor: '#4AA1B7', borderRadius: sWidth(14), flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: sWidth(8), elevation: 5, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 5 },
    startButtonText: { color: Colors.white, fontSize: sWidth(16), fontWeight: Typography.weight.bold },
    startArrow: { width: sWidth(14), height: sWidth(14), tintColor: Colors.white },
    hospitalButton: { width: sWidth(56), height: sHeight(56), backgroundColor: Colors.white, borderRadius: sWidth(14), alignItems: 'center', justifyContent: 'center', elevation: 5, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 5 },
    hospitalBtnIcon: { width: sWidth(24), height: sWidth(24), tintColor: '#4AA1B7' },
    searchBarContainer: { width: '100%', height: sHeight(56), backgroundColor: Colors.white, borderRadius: sWidth(28), flexDirection: 'row', alignItems: 'center', paddingHorizontal: sWidth(20), elevation: 5, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 5 },
    searchIcon: { width: sWidth(16), height: sWidth(16), tintColor: Colors.text.lightgray, marginRight: sWidth(12) },
    searchInput: { flex: 1, fontSize: sWidth(14), color: Colors.text.primary, fontWeight: Typography.weight.medium },
});

export default MapScreen;
