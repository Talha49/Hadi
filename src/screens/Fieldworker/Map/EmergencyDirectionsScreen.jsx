import React, { useState, useMemo, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import { Colors, Spacing, Typography } from '../../../theme';
import { sWidth, sHeight } from '../../../utils/responsive';
import { Images } from '../../../assets/images/Images';
import Header from '../../../components/common/Header';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import MapView, { Marker, PROVIDER_GOOGLE, Polyline } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import { calculateDistance, getMockPolyline } from '../../../utils/mapUtils'; 
import { HadiMapTheme } from '../../../theme/mapTheme'; 

const GOOGLE_MAPS_API_KEY = "AIzaSyDtqUHYJtPsLxR-xKlwkguldstkX9YEJgw";

const decodePolyline = (t) => {
    let points = [];
    let index = 0, len = t.length;
    let lat = 0, lng = 0;
    while (index < len) {
        let b, shift = 0, result = 0;
        do { b = t.charCodeAt(index++) - 63; result |= (b & 0x1f) << shift; shift += 5; } while (b >= 0x20);
        let dlat = ((result & 1) ? ~(result >> 1) : (result >> 1)); lat += dlat;
        shift = 0; result = 0;
        do { b = t.charCodeAt(index++) - 63; result |= (b & 0x1f) << shift; shift += 5; } while (b >= 0x20);
        let dlng = ((result & 1) ? ~(result >> 1) : (result >> 1)); lng += dlng;
        points.push({ latitude: (lat / 1E5), longitude: (lng / 1E5) });
    }
    return points;
};

const EmergencyDirectionsScreen = ({ navigation, route }) => {
    const { mode = 'drive', emergencyTarget = null } = route.params || {};
    
    const [activeMode, setActiveMode] = useState(mode);
    const [isStarted, setIsStarted] = useState(false);
    const [originText] = useState('Your location');
    const destText = `Emergency ID ${emergencyTarget ? emergencyTarget.id : 'N/A'}`;
    const [directionsError, setDirectionsError] = useState(false);
    
    // GPS & Routing State
    const [userLoc, setUserLoc] = useState({ latitude: 21.4190, longitude: 39.8250 });
    const userLocRef = useRef(userLoc);
    const [routingOrigin, setRoutingOrigin] = useState(null);
    const destinationLoc = useMemo(() => emergencyTarget ? { latitude: emergencyTarget.latitude, longitude: emergencyTarget.longitude } : null, [emergencyTarget]);

    // Routes Payload State
    const [routePoints, setRoutePoints] = useState([]);
    const [realDist, setRealDist] = useState("0.0");
    const [realEta, setRealEta] = useState(0);

    const bottomSheetRef = useRef(null);
    const mapRef = useRef(null);
    const snapPoints = useMemo(() => ['35%', '50%', '90%'], []);
    const activeSnapPoints = useMemo(() => isStarted ? ['12%'] : snapPoints, [isStarted]);

    const fetchRealDirections = async (origin, dest, travelMode) => {
        if (!origin || !dest) return;
        try {
            const body = {
                origin: { location: { latLng: { latitude: origin.latitude, longitude: origin.longitude } } },
                destination: { location: { latLng: { latitude: dest.latitude, longitude: dest.longitude } } },
                travelMode: travelMode === 'walk' ? 'WALK' : 'DRIVE',
                routingPreference: 'TRAFFIC_UNAWARE'
            };

            const res = await fetch('https://routes.googleapis.com/directions/v2:computeRoutes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Goog-Api-Key': GOOGLE_MAPS_API_KEY,
                    'X-Goog-FieldMask': 'routes.duration,routes.distanceMeters,routes.polyline.encodedPolyline'
                },
                body: JSON.stringify(body)
            });
            const data = await res.json();

            if (data.routes && data.routes.length > 0) {
                const r = data.routes[0];
                setRealDist((r.distanceMeters / 1000).toFixed(1));
                setRealEta(Math.ceil(parseInt((r.duration || "0s").replace('s','')) / 60));
                
                const decodedPoints = decodePolyline(r.polyline.encodedPolyline);
                setRoutePoints(decodedPoints);
                setDirectionsError(false);

                if (!isStarted && mapRef.current) {
                     mapRef.current.fitToCoordinates(decodedPoints, { edgePadding: { top: 100, right: 80, bottom: sHeight(320), left: 80 }, animated: true });
                }
            } else { throw new Error("No routes resolved."); }
        } catch(err) { setDirectionsError(true); }
    };

    useEffect(() => {
        const watchId = Geolocation.watchPosition(
            (pos) => {
                const newLoc = { latitude: pos.coords.latitude, longitude: pos.coords.longitude };
                setUserLoc(newLoc);
                userLocRef.current = newLoc;
                if (!routingOrigin) {
                    setRoutingOrigin(newLoc);
                    if (!isStarted) mapRef.current?.animateCamera({ center: newLoc, zoom: 15 }, { duration: 1000 });
                } else if (isStarted) {
                    mapRef.current?.animateCamera({ center: newLoc }, { duration: 1000 });
                }
            },
            (error) => console.log('Emergency Tracking Watch Error:', error),
            { enableHighAccuracy: true, distanceFilter: 5, timeout: 15000, maximumAge: 10000 }
        );
        return () => Geolocation.clearWatch(watchId);
    }, [isStarted, routingOrigin]);

    useEffect(() => {
        if (!isStarted) { fetchRealDirections(routingOrigin, destinationLoc, activeMode); return; }
        const tick = setInterval(() => { fetchRealDirections(userLocRef.current, destinationLoc, activeMode); }, 60000);
        return () => clearInterval(tick);
    }, [isStarted, routingOrigin, destinationLoc, activeMode]);

    const fallbackDist = directionsError ? calculateDistance(routingOrigin?.latitude||0, routingOrigin?.longitude||0, destinationLoc?.latitude||0, destinationLoc?.longitude||0) : "0.0";
    const emergencyRoute = directionsError ? getMockPolyline(routingOrigin, destinationLoc) : routePoints;

    return (
        <View style={styles.container}>
            <MapView
                ref={mapRef}
                style={styles.map}
                provider={PROVIDER_GOOGLE}
                customMapStyle={HadiMapTheme}
                showsUserLocation={false}
                showsCompass={false}
            >
                {emergencyRoute.length > 0 && destinationLoc && (
                    <Polyline 
                        coordinates={emergencyRoute}
                        strokeWidth={6}
                        strokeColor="#4AA1B7"
                    />
                )}
                <Marker coordinate={userLoc} anchor={{ x: 0.5, y: 0.5 }}>
                    <View style={styles.userMarkerContainer}>
                        <View style={styles.markerPulse} />
                        <View style={styles.markerCore} />
                    </View>
                </Marker>
                {destinationLoc && (
                    <Marker coordinate={destinationLoc}>
                        <View style={styles.destMarkerPill} />
                    </Marker>
                )}
            </MapView>

            {!isStarted && (
                <Header 
                    title="< Emergency Directions" 
                    showMihrab={true} 
                    onBackPress={() => navigation.goBack()}
                    leftAlign={false}
                />
            )}

            {!isStarted && (
                <View style={styles.inputContainerWrapper}>
                    <View style={styles.inputBox}>
                        <View style={styles.inputRow}>
                            <Image source={Images.currentlocation} style={styles.originIcon} resizeMode="contain" />
                            <TextInput style={styles.textInputActive} value={originText} editable={false} />
                            <TouchableOpacity style={styles.moreBtn}>
                                <Image source={Images.threeDots} style={styles.moreTinyIcon} resizeMode="contain" />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.separator} />
                        <View style={styles.inputRow}>
                            <Image source={Images.reachlocation} style={styles.destMarkerIcon} resizeMode="contain" />
                            <TextInput style={styles.textInputDest} value={destText} editable={false} />
                            <TouchableOpacity style={styles.swapBtn}><Image source={Images.updown} style={styles.swapIcon} resizeMode="contain" /></TouchableOpacity>
                        </View>
                    </View>
                </View>
            )}

            <BottomSheet ref={bottomSheetRef} index={0} snapPoints={activeSnapPoints} enablePanDownToClose={false} handleIndicatorStyle={styles.sheetHandle} backgroundStyle={styles.sheetBackground}>
                <BottomSheetView style={styles.sheetContent}>
                    {!isStarted ? (
                        <>
                            <View style={styles.sheetHeader}>
                                <Text style={styles.sheetTitleText}>{activeMode === 'walk' ? 'Walking' : 'Drive by Car'}</Text>
                                <View style={styles.modeTabs}>
                                    <TouchableOpacity style={[styles.modeTab, activeMode === 'drive' && styles.modeTabActive]} onPress={() => setActiveMode('drive')}>
                                        <Image source={Images.car} style={[styles.modeIcon, activeMode === 'drive' && styles.whiteTint]} />
                                    </TouchableOpacity>
                                    <TouchableOpacity style={[styles.modeTab, activeMode === 'transit' && styles.modeTabActiveTransit]} onPress={() => setActiveMode('transit')}>
                                        <Image source={Images.bus} style={[styles.modeIcon, activeMode === 'transit' && styles.whiteTint]} />
                                    </TouchableOpacity>
                                    <TouchableOpacity style={[styles.modeTab, activeMode === 'walk' && styles.modeTabActiveWalk]} onPress={() => setActiveMode('walk')}>
                                        <Image source={Images.walk} style={[styles.modeIcon, activeMode === 'walk' && styles.whiteTint]} />
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <View style={styles.divider} />

                            <View style={styles.detailCard}>
                                <View style={styles.detailRow}>
                                    <View style={styles.durationBlock}>
                                        <Text style={styles.durationBig}>{directionsError ? 8 : realEta}</Text>
                                        <Text style={styles.durationUnit}>min</Text>
                                    </View>
                                    <View style={styles.etaBlock}>
                                        <Text style={styles.etaLabel}>Arrive {new Date(Date.now() + (directionsError?8:realEta)*60000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</Text>
                                        <Text style={styles.distLabel}>{directionsError ? fallbackDist : realDist} km</Text>
                                    </View>
                                </View>
                            </View>

                            <TouchableOpacity style={styles.startButton} onPress={() => { setIsStarted(true); mapRef.current?.animateCamera({ center: userLocRef.current, pitch: 65, heading: 0, zoom: 18.5 }, { duration: 1500 }); }}>
                                <Image source={Images.start} style={styles.startIconImage} resizeMode="contain" />
                                <Text style={styles.startBtnText}>Start</Text>
                            </TouchableOpacity>
                        </>
                    ) : (
                        <View style={styles.activeBar}>
                            <View style={styles.activeIconCircle}><Image source={activeMode === 'walk' ? Images.walk : Images.car} style={[styles.activeIcon, {tintColor: Colors.white}]} /></View>
                            <View><Text style={styles.activeTitle}>Arrive in {realEta} min</Text><Text style={styles.activeSub}>{realDist} km</Text></View>
                            <Text style={styles.currentTime}>{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</Text>
                        </View>
                    )}
                </BottomSheetView>
            </BottomSheet>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: Colors.backgroundLight },
    map: { ...StyleSheet.absoluteFillObject },
    userMarkerContainer: { alignItems: 'center', justifyContent: 'center', width: sWidth(40), height: sWidth(40) },
    markerPulse: { width: sWidth(30), height: sWidth(30), borderRadius: sWidth(15), backgroundColor: 'rgba(74, 161, 183, 0.2)', position: 'absolute' },
    markerCore: { width: sWidth(14), height: sWidth(14), borderRadius: sWidth(7), backgroundColor: '#4AA1B7', borderWidth: 2.5, borderColor: Colors.white },
    inputContainerWrapper: { width: '100%', alignItems: 'center', marginTop: sHeight(15), position: 'absolute', zIndex: 100, top: sHeight(120) },
    inputBox: { width: sWidth(350), height: sHeight(86), backgroundColor: Colors.white, borderRadius: sWidth(24), paddingHorizontal: sWidth(18), justifyContent: 'center', elevation: 10, shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.1, shadowRadius: 10 },
    inputRow: { flexDirection: 'row', alignItems: 'center', height: sHeight(38) },
    originIcon: { width: sWidth(20), height: sWidth(20), marginRight: sWidth(12) },
    destMarkerIcon: { width: sWidth(18), height: sWidth(18), marginRight: sWidth(12), tintColor: Colors.text.lightgray },
    textInputActive: { flex: 1, fontSize: sWidth(15), color: '#4AA1B7', fontWeight: Typography.weight.medium, padding: 0 },
    textInputDest: { flex: 1, fontSize: sWidth(15), color: Colors.text.primary, fontWeight: Typography.weight.medium, padding: 0 },
    separator: { height: 1, backgroundColor: '#F0F0F0', marginLeft: sWidth(30) },
    moreTinyIcon: { width: sWidth(16), height: sWidth(10), tintColor: Colors.darkgray },
    swapIcon: { width: sWidth(22), height: sWidth(22), tintColor: Colors.darkgray },
    destMarkerPill: { width: sWidth(16), height: sWidth(16), backgroundColor: Colors.yellow, borderRadius: sWidth(8), borderWidth: 3, borderColor: Colors.white },
    sheetHandle: { backgroundColor: '#E0E0E0', width: sWidth(40) },
    sheetBackground: { backgroundColor: Colors.white, borderTopLeftRadius: sWidth(30), borderTopRightRadius: sWidth(30) },
    sheetContent: { paddingHorizontal: Spacing.layout.gap, paddingTop: sHeight(10) },
    sheetHeader: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: sHeight(15) },
    sheetTitleText: { fontSize: sWidth(18), fontWeight: Typography.weight.bold, color: Colors.text.title },
    modeTabs: { flexDirection: 'row', gap: sWidth(8) },
    modeTab: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#F5F9FA', paddingHorizontal: sWidth(12), paddingVertical: sHeight(8), borderRadius: sWidth(15), gap: sWidth(6) },
    modeTabActive: { backgroundColor: '#4AA1B7' },
    modeTabActiveTransit: { backgroundColor: '#4AA1B7' },
    modeTabActiveWalk: { backgroundColor: '#4AA1B7' },
    modeIcon: { width: sWidth(16), height: sWidth(16), tintColor: Colors.text.secondary },
    whiteTint: { tintColor: Colors.white },
    divider: { height: 1, backgroundColor: '#F0F0F0', marginBottom: sHeight(15) },
    detailCard: { backgroundColor: '#F9F9F9', borderRadius: sWidth(20), padding: sWidth(20), marginBottom: sHeight(20) },
    detailRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
    durationBlock: { flexDirection: 'row', alignItems: 'baseline', gap: sWidth(4) },
    durationBig: { fontSize: sWidth(36), fontWeight: Typography.weight.heavy, color: Colors.text.title },
    durationUnit: { fontSize: sWidth(18), fontWeight: Typography.weight.bold, color: Colors.text.title },
    etaBlock: { alignItems: 'flex-end' },
    etaLabel: { fontSize: sWidth(14), fontWeight: Typography.weight.semibold, color: Colors.text.title },
    distLabel: { fontSize: sWidth(12), color: Colors.text.lightgray, marginTop: sHeight(2) },
    startButton: { backgroundColor: '#4AA1B7', height: sHeight(54), width: sWidth(180), borderRadius: sWidth(27), flexDirection: 'row', alignItems: 'center', justifyContent: 'center', alignSelf: 'flex-end', gap: sWidth(8) },
    startIconImage: { width: sWidth(14), height: sWidth(14) },
    startBtnText: { color: Colors.white, fontSize: sWidth(16), fontWeight: Typography.weight.bold },
    activeBar: { flexDirection: 'row', alignItems: 'center', width: '100%', gap: sWidth(15), paddingVertical: 10 },
    activeIconCircle: { width: sWidth(40), height: sWidth(40), borderRadius: sWidth(20), backgroundColor: '#4AA1B7', alignItems: 'center', justifyContent: 'center'},
    activeIcon: { width: sWidth(20), height: sWidth(20) },
    activeTitle: { fontSize: sWidth(18), fontWeight: Typography.weight.bold, color: Colors.text.title },
    activeSub: { fontSize: sWidth(14), color: Colors.text.lightgray, marginTop: 2 },
    currentTime: { marginLeft: 'auto', fontSize: sWidth(14), fontWeight: Typography.weight.bold, color: Colors.text.title }
});

export default EmergencyDirectionsScreen;
