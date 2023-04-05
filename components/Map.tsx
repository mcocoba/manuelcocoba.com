import { useRef } from "react";
import ReactMapGL, { Marker } from "react-map-gl";

const ICON = `M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3
  c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9
  C20.1,15.8,20.2,15.8,20.2,15.7z`;

const SIZE = 20;

export default function Map({ locations }) {


  const mapRef = useRef(null);

  return <ReactMapGL
    initialViewState={{
      latitude: 35.3816221,
      longitude: -52.790592,
      zoom: 1.6,
      bearing: 0,
      pitch: 10
    }}
    style={{ width: '100%', height: '100%' }}
    mapStyle="mapbox://styles/mapbox/dark-v9"
    ref={mapRef}
  >
    {locations.map((item, index) => (
      <div key={item.latitude}>
        <Marker
          key={`marker-${index}`}
          longitude={item.longitude}
          latitude={item.latitude} >
          <svg
            height={SIZE}
            viewBox="0 0 24 24"
            style={{
              cursor: 'pointer',
              fill: '#d00',
              stroke: 'none',
              transform: `translate(${-SIZE / 2}px,${-SIZE}px)`
            }}
          >
            <path d={ICON} />
          </svg>
        </Marker>
      </div>
    ))}
  </ReactMapGL>
}
