import React, { useState } from "react";
import { MapBrazil } from "react-brazil-map";

function GeographyChart() {
  const [district, setDistrict] = useState("");
  return (
    <div
      style={{
        display: "block",
        objectFit: "contain",
      }}
    >
      <MapBrazil
        onChange={setDistrict}
        bg="#6edbdb"
        fill="#e0e0e0"
        colorStroke="red"
        colorLabel="red"
      />
      {/* <p>The selected district was {district}</p> */}
    </div>
  );
}

export default GeographyChart;
