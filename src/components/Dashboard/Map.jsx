import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import './map.css'

const Map = () => {
 const mapContainer = useRef(null);
 const [marker, setMarker] = useState(null); // State to hold the marker

 useEffect(() => {
    mapboxgl.accessToken = "pk.eyJ1IjoiZWZ5emhpIiwiYSI6ImNsdTlpenE0aDA4d3oya3F4c29mY2xnN28ifQ.O0g7UZjJZG_PA6q_hAmp_Q";

    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-74.5, 40],
      zoom: 10
    });

    map.addControl(new mapboxgl.NavigationControl());

    if (navigator.geolocation) {
      navigator.geolocation.watchPosition((position) => {
        const { latitude, longitude } = position.coords;

        map.setCenter([longitude, latitude]);

        // Remove the old marker if it exists
        if (marker) {
          marker.remove();
        }

        // Create a marker on the user's exact location
        const markerElement = document.createElement('div');
        markerElement.className = 'custom-marker';
        
        const newMarker = new mapboxgl.Marker(markerElement)
          .setLngLat([longitude, latitude])
          .addTo(map);

        // Update the marker state
        setMarker(newMarker);
      }, (error) => {
        console.error('Cannot get user location', error);
      });
    } else {
      console.error("Geolocation is not supported by this browser.");
    }

    return () => {
      map.remove();
      if (marker) {
        marker.remove();
      }
    };

 }, []);

 return (
    <div ref={mapContainer} style={{ width: '100%', height: '100vh' }} />
 );
};

export default Map;
