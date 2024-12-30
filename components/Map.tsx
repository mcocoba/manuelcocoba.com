import { useRef } from "react";
import Map, { Marker, MapProvider } from "react-map-gl";

import 'mapbox-gl/dist/mapbox-gl.css';
import { ProjectionSpecification } from "mapbox-gl";

export default function MapPlaces({ locations }) {

  const mapRef = useRef(null);

  const finalProjection: ProjectionSpecification = {
    name: "globe"
  }

  return <MapProvider>
    <Map
      initialViewState={{
        latitude: 29.3353899,
        longitude: -108.4416098,
        zoom: 2,
        bearing: 3,
        pitch: 3
      }}
      style={{ width: '100%', height: '100%' }}
      mapStyle='mapbox://styles/mapbox/streets-v12'
      projection={finalProjection}
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
    >
      {
        locations.map((item, index) => (
          <div key={`${item.latitude}/${item.longitude}`}>
            <Marker
              key={`marker-${index}`}
              longitude={item.longitude}
              latitude={item.latitude}
              color="red"
              scale={.5}>
            </Marker>
          </div>
        ))
      }
    </Map>
  </MapProvider >
}
