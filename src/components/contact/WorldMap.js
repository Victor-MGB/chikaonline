import React from 'react';
import { ComposableMap, Geographies, Geography, ZoomableGroup, Marker } from 'react-simple-maps';

// URL to a world map topojson file
const geoUrl =
  'https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json';

// Coordinates for London, UK
const londonCoordinates = [-0.1276, 51.5074]; // [Longitude, Latitude]

const WorldMap = () => {
  return (
    <div className="flex justify-center items-center py-8">
      <ComposableMap className="w-full max-w-4xl h-auto shadow-md rounded-md border border-gray-300">
        <ZoomableGroup zoom={1}>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  className="cursor-pointer transition-colors duration-200 hover:fill-yellow-500"
                  style={{
                    default: {
                      fill: '#D6D6DA',
                      outline: 'none',
                    },
                    hover: {
                      fill: '#F53',
                      outline: 'none',
                    },
                    pressed: {
                      fill: '#E42',
                      outline: 'none',
                    },
                  }}
                />
              ))
            }
          </Geographies>

          {/* Marker for London, UK */}
          <Marker coordinates={londonCoordinates}>
            <circle r={8} fill="#FF5533" className="animate-bounce" />
            <text
              textAnchor="middle"
              y={-15}
              style={{ fontFamily: 'system-ui', fill: '#5D5A6D' }}
            >
              London, UK
            </text>
          </Marker>
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
};

export default WorldMap;
