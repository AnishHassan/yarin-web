import { useMemo } from 'react'
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'

const LocationMapper = () => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    });

    if (!isLoaded) return <div>Loading...</div>

    return <Map />
}


const Map = () => {
    const center = useMemo(() => ({ lat: 44, lng: -80 }),[]) 
    return <>
        <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
            <Marker position={{ lat: 44, lng: -80 }} />
        </GoogleMap>
    </>
}

export default LocationMapper