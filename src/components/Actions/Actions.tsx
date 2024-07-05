import { useCallback, useContext } from "react";
import Goat from "../../assets/svg-tsx/Goat";
import Location from "../../assets/svg-tsx/Location";
import "./Actions.scss";
import { AppContext } from "../../context/app.context";

const Actions = () => {
  const { savegoatLocation, location, hasGoat, mapRef, goatLocation } =
    useContext(AppContext);

  const handleClickOnSaveLocation = useCallback(() => {
    if (hasGoat) {
      savegoatLocation(null);
    } else {
      if (location) {
        savegoatLocation(location);
      }
    }
  }, [location, savegoatLocation, hasGoat]);

  const navegateToLocation = useCallback(() => {
    if (mapRef && location) {
      mapRef.current?.flyTo([location.latitude, location.longitude], 15);
    }
  }, [mapRef, location]);

  const navegateToGoatLocation = useCallback(() => {
    if (mapRef && goatLocation) {
      mapRef.current?.flyTo(
        [goatLocation.latitude, goatLocation.longitude],
        15
      );
    }
  }, [mapRef, goatLocation]);

  return (
    <>
      <button
        className={`c-actions__top-item ${
          hasGoat ? "c-actions__top-item--withoutGoat" : ""
        }`}
        onClick={handleClickOnSaveLocation}
      >
        {!hasGoat ? "Colocar cabra" : "Quitar cabra"}
      </button>
      <div className="c-actions">
        <button
          onClick={navegateToGoatLocation}
          disabled={!hasGoat}
          className="c-actions__item"
        >
          <Goat size="2rem" />
        </button>
        <button
          onClick={navegateToLocation}
          className="c-actions__item c-actions__item--location"
        >
          <Location size="2rem" />
        </button>
      </div>
    </>
  );
};

export default Actions;
