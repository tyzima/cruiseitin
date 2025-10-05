import React, { useEffect, useRef } from 'react';
import { Location } from '../types';

declare const L: any; // Use 'any' to avoid full Leaflet type definitions for this simple case

interface MapProps {
    port: { name: string; lat: number; lng: number };
    locations: Location[];
}

const Map: React.FC<MapProps> = ({ port, locations }) => {
    const mapContainer = useRef<HTMLDivElement>(null);
    const mapInstance = useRef<any>(null);

    useEffect(() => {
        if (mapContainer.current && !mapInstance.current) {
            // Initialize map
            const map = L.map(mapContainer.current).setView([port.lat, port.lng], 13);
            mapInstance.current = map;

            // Add light theme tile layer
            L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);

            const markers = [];

            // Add port marker
            const portIcon = L.divIcon({
                html: `
                    <div style="font-size: 24px; text-align: center; line-height: 1;">
                        🚢
                    </div>`,
                className: 'bg-transparent border-0',
                iconSize: [32, 32],
                iconAnchor: [16, 16]
            });

            const portMarker = L.marker([port.lat, port.lng], { icon: portIcon })
                .addTo(map)
                .bindPopup(`<b>${port.name}</b>`);
            markers.push(portMarker);
            
            // Add location markers
            locations.forEach(location => {
                const isEats = location.type === 'tourist' || location.type === 'hidden gem' && 'distance' in location; // Simple check
                const color = isEats ? 'text-green-600' : 'text-purple-600';
                
                const locationIcon = L.divIcon({
                    html: `
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 ${color}" fill="currentColor" viewBox="0 0 20 20">
                           <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 20l-4.95-5.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                        </svg>`,
                    className: 'bg-transparent border-0',
                    iconSize: [24, 24],
                    iconAnchor: [12, 24]
                });

                const marker = L.marker([location.lat, location.lng], { icon: locationIcon })
                    .addTo(map)
                    .bindPopup(`<b>${location.name}</b><br>${location.address}`);
                markers.push(marker);
            });

            // Fit map to markers
            if (markers.length > 0) {
                const group = L.featureGroup(markers);
                map.fitBounds(group.getBounds().pad(0.2));
            }
        }

        // Cleanup on unmount
        return () => {
            if (mapInstance.current) {
                mapInstance.current.remove();
                mapInstance.current = null;
            }
        };
    }, []); // Empty dependency array ensures this runs only once on mount

    return <div ref={mapContainer} className="w-full h-full" />;
};

export default Map;
