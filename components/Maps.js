import React from "react"
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api"

export const MapContainer = () => {
  const mapStyles = {
    height: "50vh",
    width: "100%",
  }

  const defaultCenter = {
    lat: 51.5560247,
    lng: -0.2796177,
  }

  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_MAP_KEY}>
      <GoogleMap mapContainerStyle={mapStyles} zoom={14} center={defaultCenter}>
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  )
}
