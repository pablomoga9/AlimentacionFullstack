import React from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';



const Map = (props) => {
  // const long=props.long;
  // const lat=props.lat;

  var icon = new L.Icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/2049/2049726.png',
    iconSize: [30, 30],
    iconAnchor: null
  });
  const map = { "width": "100%", "height": "50vh" };


  return <div>
    <MapContainer style={map} center={[51.505, -0.09]} zoom={1} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker
        // Meter posicion obtenida por props
        position={[37.41667, -6]}
        icon={icon}>
        <Popup>Detalles:
          <ul>
            <li>Nombre:</li>
          </ul>
        </Popup>
      </Marker>

    </MapContainer>
  </div>;
};

export default Map;
