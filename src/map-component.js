import React from 'react';
import L from 'leaflet';
import {    MapContainer, TileLayer  } from 'react-leaflet';
import { LocationMarker } from './location-marker';
import 'leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

/*kaardikomponendi jaoks tahtsin algselt kasutada juhendis antud linki https://leafletjs.com/examples/quick-start/, 
aga kuna projekt on tehtud Reactiga, siis rohkem kasutasin libraryt React Leaflet https://react-leaflet.js.org/docs/start-introduction*/

/*alljärgnev on võetud Stackoverflowst. Markeri ikoon on React Leafletis puudu, tuleb ise lisada (https://stackoverflow.com/questions/49441600/react-leaflet-marker-files-not-found). 
Samuti tuleb ikoonile lisada ankur, et marker osutaks sinna, kuhu kasutaja kaardil klõpsas (https://stackoverflow.com/questions/62865155/when-creating-a-marker-onclick-the-marker-is-offset-and-not-directly-where-the).*/
let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [32, 37], 
    iconAnchor: [16, 37], 
});
L.Marker.prototype.options.icon = DefaultIcon;

export default function MapComponent(props) {
  return (
    <MapContainer center={props.position} zoom={13} style={{ height: "400px", width: "800px" }}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
        <LocationMarker position={props.position} getPositionInfo={props.getPositionInfo}/>
    </MapContainer>
  );
};