/**
 * Calculates the distance between two points on Earth (in km)
 * using the Haversine formula.
 */
export const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Radius of the earth in km
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c; // Distance in km
    return d.toFixed(1);
};

function deg2rad(deg) {
    return deg * (Math.PI / 180);
}

/**
 * Generates a slightly "jagged" path between two points for UI demonstration
 * when no real routing API is available.
 */
export const getMockPolyline = (start, end) => {
    const midLat = (start.latitude + end.latitude) / 2;
    const midLon = (start.longitude + end.longitude) / 2;
    
    // Add some random "bend" to the middle point
    return [
        start,
        { latitude: midLat + 0.001, longitude: midLon - 0.001 },
        { latitude: midLat - 0.001, longitude: midLon + 0.001 },
        end
    ];
};
