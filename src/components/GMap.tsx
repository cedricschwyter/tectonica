import { GoogleMap, useJsApiLoader, MarkerF } from '@react-google-maps/api';
import { useCallback, useState } from 'react';

const center = {
    lat: 47.398600,
    lng: 8.401630
};

const containerStyle = {
    width: '100%',
    height: '100%',
    borderRadius: '0.75rem' // Same as tailwind rounded-xl
};
const GMap = () => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    })

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={18}
        >
            <MarkerF position={center} />
        </GoogleMap>
    ) : <><div className="radial-progress"></div>    </>
}

export default GMap;