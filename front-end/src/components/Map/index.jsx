import mapStyles from "../../mapStyles";
import { useCallback, useRef, useState, useEffect } from "react";
import "./Map.css";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import "@reach/combobox/styles.css";
import Locate from "./Locate";
import Markers from "./Markers";
import Search from "./Search";

const mapContainerStyle = {
  width: "100%",
  height: "100%",
};

// DEFAULT MAP STARTING LOCATION
const center = {
  lat: 49.26800377076573,
  lng: -123.10571490809717,
};

const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};

// ENABLED GMAPS LIBRARIES
const libraries = ["places"];

export default function Map({
  coord,
  state,
  setSelected,
  selected,
  jobMarkers,
}) {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    libraries,
  });
  const [markers, setMarkers] = useState([]);

  const mapRef = useRef();
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  const panTo = useCallback(({ lat, lng }) => {
    if (mapRef.current) {
      mapRef.current.panTo({ lat, lng });
      mapRef.current.setZoom(15);
    }
  }, []);

  useEffect(() => {
    const lat = coord.lat;
    const lng = coord.lng;
    panTo({ lat, lng });
  }, [coord]);

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading maps";

  return (
    <div className="google-map">
      {/* <div className="map-title">Job Map</div> */}
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={13}
        center={center}
        options={options}
        onLoad={onMapLoad}
      >
        <div className="map-search-container">
          <Search panTo={panTo} />
          <Locate panTo={panTo} />
        </div>
        <Markers
          state={state}
          markers={markers}
          setSelected={setSelected}
          selected={selected}
          coord={coord}
          jobMarkers={jobMarkers}
        />
      </GoogleMap>
    </div>
  );
}
