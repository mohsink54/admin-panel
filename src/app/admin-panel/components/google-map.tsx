"use client";
import React, { useState } from "react";
import { GoogleMap, Marker, InfoWindow, useLoadScript } from "@react-google-maps/api";

const GoogleMapComponent = () => {
  const position = { lat: 10.99835602, lng: 77.01502627 };
  const [showInfoWindow, setShowInfoWindow] = useState(false);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBg18Z8WpTOlZjqjHRyYCOtktphob1ijqo", // Replace with your actual API key
  });

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div className="px-4">
      <div className="w-full h-[350px] rounded-lg shadow-md overflow-hidden mt-8">
        <GoogleMap
          center={position}
          zoom={11}
          mapContainerStyle={{ height: "100%", width: "100%" }}
        >
          <Marker position={position} onClick={() => setShowInfoWindow(!showInfoWindow)}>
            {showInfoWindow && (
              <InfoWindow position={position} onCloseClick={() => setShowInfoWindow(false)}>
                <div>A custom location marker!</div>
              </InfoWindow>
            )}
          </Marker>
        </GoogleMap>
      </div>
    </div>
  );
};

export default GoogleMapComponent;
