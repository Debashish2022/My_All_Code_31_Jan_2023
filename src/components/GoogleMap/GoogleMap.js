import React from 'react';
import GoogleMapReact from 'google-map-react';

const MyMap = ({ latitude, longitude }) => {
 const renderMarkers = (map, maps) => {
  let marker = new maps.Marker({
  position: { lat: latitude, lng: longitude },
  map,
  title: 'Hello World!'
  });
  return marker;
 };

 return (
   < >
    <GoogleMapReact
      bootstrapURLKeys={{ key: "AIzaSyCbX0Bznd0JJMjt3aw4yc4wYlx9s-pA13I" }}
      defaultCenter={{ lat: "34.004760", lng: "-81.028830" }}
      defaultZoom={16}
      yesIWantToUseGoogleMapApiInternals
      onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
    >
    </GoogleMapReact>
   </>
 );
};

export default MyMap;



















// import React from "react";

// import {
//   withScriptjs,
//   withGoogleMap,
//   GoogleMap,
//   Marker,
// } from "react-google-maps";

// const MapWrapper = withScriptjs(
//   withGoogleMap((props) => (
//     <GoogleMap
//       defaultZoom={13}
//       defaultCenter={{ lat: 34.00476, lng: -81.02883 }}
//     >
//       <Marker position={{ lat: 34.00476, lng: -81.02883 }} />
//     </GoogleMap>
//   ))
// );

// function MyMap() {
//   return (
//     <>
//       <MapWrapper
//         googleMapURL="https://maps.googleapis.com/maps/api/myAPIHere"
//         loadingElement={<div style={{ height: `100%` }} />}
//         containerElement={<div style={{ height: `100%` }} />}
//         mapElement={<div style={{ height: `100%` }} />}
//       />
//     </>
//   );
// }

// export default MyMap;
