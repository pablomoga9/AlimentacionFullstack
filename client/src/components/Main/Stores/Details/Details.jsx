import { useParams, Link, useNavigate, Navigate } from "react-router-dom";//Para capturar el parametro ID pasado por los parametros del router
import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { checkUserContext } from "../../../../context/checkUserContext"




function Details() {
  const params = useParams();// Para poder usar los parametros capturados por el router
  const { storeDetails, setStoreDetails } = useContext(checkUserContext);//Hook con el listado de las stores
  const { getStoreDetails } = useContext(checkUserContext);//Hook con el listado de las stores

  // const [searchId] = useState(params.id);//Creo variable de estado local para almacenar la ID


  useEffect(() => {
    getStoreDetails(params.id)//Lanzamos la busqueda
    console.log("storeDetails", storeDetails);
  }, []
  );

  var icon = new L.Icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/2049/2049726.png',
    iconSize: [30, 30],
    iconAnchor: null
  });
  const map = { "width": "100%", "height": "50vh" };


  return (
    <article>

      <h1>{storeDetails ? storeDetails.name
        : "..."}</h1>
      {storeDetails ? <img src={storeDetails.image}></img>
        : "Loading"}
      {storeDetails ? <p>{storeDetails.status}</p>
        : "..."}
      {storeDetails ? <ul>
        {storeDetails.episode.slice(0, 5).map((item, i) => <li>{item}</li>)}
      </ul>
        : "Loading..."}




      <div>
        <MapContainer style={map} center={[51.505, -0.09]} zoom={1} scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {storeDetails ?
            <Marker
              position={[37.41667, -6]}
              icon={icon}>
              <Popup>Detalles:
                <ul>
                  <li>Nombre: {storeDetails.name}</li>
                </ul>
              </Popup>
            </Marker>
            : null}
        </MapContainer>
      </div>
    </article>
  )
}


export default Details