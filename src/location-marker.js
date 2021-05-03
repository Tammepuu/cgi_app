import { Marker, useMapEvent, useMap } from 'react-leaflet';
import React, { useEffect, useState } from 'react';

function LocationMarker(props) {
    useEffect(() => {
        setChosenPosition(props.position);
    }, [props.position])

    const [chosenPosition, setChosenPosition] = useState(props.position);
    useMapEvent(
        'click', (event) => {
            props.getPositionInfo(event.latlng);
            setChosenPosition(event.latlng)
        }
    );
    const map = useMap();
    map.flyTo(chosenPosition);
    return <Marker position={chosenPosition}></Marker>;
}

export { LocationMarker };