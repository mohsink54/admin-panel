"use client"
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export function GoogleMap() {
  const position = [10.99835602, 77.01502627];

  return (
    <div className="px-4">
    <div className="w-full h-[350px] rounded-lg shadow-md overflow-hidden  mt-8">
      <MapContainer center={position} zoom={11} scrollWheelZoom={false} style={{ height: "100%", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>
            A custom location marker!
          </Popup>
        </Marker>
      </MapContainer>
    </div>
    </div>
  );
}