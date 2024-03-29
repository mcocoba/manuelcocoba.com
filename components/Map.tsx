import { useRef } from "react";
import Map, { Marker, MapProvider } from "react-map-gl";

import 'mapbox-gl/dist/mapbox-gl.css';

export default function MapPlaces({ locations }) {

  const mapRef = useRef(null);

  return <MapProvider>
    <Map
      initialViewState={{
        latitude: 19.3906797,
        longitude: -99.2840426,
        zoom: 3,
        bearing: 3,
        pitch: 3
      }}
      style={{ width: '100%', height: '100%' }}
      mapStyle='mapbox://styles/mapbox/streets-v12'
      projection={'globe'}
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_KEY}
      ref={mapRef}
    >
      {locations.map((item, index) => (
        <div key={`${item.latitude}/${item.longitude}`}>
          <Marker
            key={`marker-${index}`}
            longitude={item.longitude}
            latitude={item.latitude}
            color="red"
            scale={.5}>
          </Marker>
        </div>
      ))}
    </Map>
  </MapProvider >
}
