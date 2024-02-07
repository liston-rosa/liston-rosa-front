import React from "react";
import Map from "@/components/ArgentinianMap/";

export const metadata = {
  title: 'Mapa de obras'
}
function MapAr() {
  return (
    <div style={{
      marginBottom: '50px',
    }}>
      <Map />
    </div>
  );
}

export default MapAr;
