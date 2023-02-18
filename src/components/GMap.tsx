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
        googleMapsApiKey: "AIzaSyCC95XK6thtVYy-v8qU60SE1xYk3Szyrw8",

    })

    const [map, setMap] = useState(null)


    const onUnmount = useCallback(function callback(map) {
        setMap(null)
    }, [])

    const onLoad = marker => {
        console.log('marker: ', marker)
    }

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={18}
            onUnmount={onUnmount}
        >
            <MarkerF position={center} onLoad={onLoad} />
        </GoogleMap>
    ) : <><div className="radial-progress"></div>    </>
}

export default GMap;