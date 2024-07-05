import { Icon } from "leaflet";
import { useContext, useEffect, useRef, useState } from "react";
import { Circle, MapContainer, Marker, TileLayer } from "react-leaflet";
import { AppContext } from "../../context/app.context";
import dot from "../../assets/dot.svg";
import goat from "../../assets/goat.svg";

const Map = () => {
  const [isHidrated, setIsHidrated] = useState<boolean>(false);

  const { goatLocation, location, mapRef } = useContext(AppContext);

  const dotRef = useRef(new Icon({ iconUrl: dot, iconSize: [90, 90] }));
  const goatRef = useRef(new Icon({ iconUrl: goat, iconSize: [27, 27] }));

  useEffect(() => {
    if (location && mapRef) {
      setIsHidrated((prev) => {
        if (mapRef.current && !prev) {
          mapRef.current.setView([location.latitude, location.longitude], 25);
        }
        return true;
      });
    }
  }, [location, mapRef]);

  return (
    <MapContainer
      ref={mapRef}
      className="map-container"
      center={[40.416156072477264, -3.6961237909805407]}
      zoom={5}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {isHidrated && location && (
        <>
          {goatLocation && (
            <>
              <Marker
                icon={goatRef.current}
                position={[goatLocation.latitude, goatLocation.longitude]}
              />
              <Circle
                center={[goatLocation.latitude, goatLocation.longitude]}
                radius={goatLocation?.accuracy / 3}
                className="circle"
                fill={true}
                color="#1AFFB6"
                fillColor="#1AFFB6"
              />
            </>
          )}
          <Marker
            icon={dotRef.current}
            position={[location.latitude, location.longitude]}
          />
          <Circle
            center={[location.latitude, location.longitude]}
            radius={location?.accuracy / 3}
            className="circle"
            fill={true}
            color="#819bf0"
            fillColor="#819bf0"
          />
        </>
      )}
    </MapContainer>
  );
};

export default Map;
