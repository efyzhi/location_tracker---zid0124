import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

const Map = () => {
  const mapContainer = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken = "pk.eyJ1IjoiZWZ5emhpIiwiYSI6ImNsdTlpenE0aDA4d3oya3F4c29mY2xnN28ifQ.O0g7UZjJZG_PA6q_hAmp_Q";

    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-74.5, 40],
      zoom: 9
    });

    map.addControl(new mapboxgl.NavigationControl());

    if (navigator.geolocation) {
      navigator.geolocation.watchPosition((position) => {
        const { latitude, longitude } = position.coords;

        map.setCenter([longitude, latitude]);

        const markerElement = document.createElement('div');
        markerElement.className = 'marker';
        new mapboxgl.Marker(markerElement)
          .setLngLat([longitude, latitude])
          .addTo(map);
      }, (error) => {
        console.error('Cannot get user location', error);
      });
    } else {
      console.error("Geolocation is not supported by this browser.");
    }

    return () => map.remove();

  }, []);

  return (
    <div ref={mapContainer} style={{ width: '100%', height: '100vh' }} />
  );
};

export default Map;
