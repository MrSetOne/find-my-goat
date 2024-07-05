import { useCallback, useMemo } from "react";
import useLocalStorage from "./useLocalStorage";

const useGoatLocation = () => {
  const [goatLocation, setGoatLocation] =
    useLocalStorage<GeolocationCoordinates | null>("goatLocation", null);

  const hasGoat = useMemo(() => goatLocation !== null, [goatLocation]);

  const savegoatLocation = useCallback(
    (newgoatLocation: GeolocationCoordinates | null) => {
      setGoatLocation(newgoatLocation);
    },
    [setGoatLocation]
  );

  return { goatLocation, savegoatLocation, hasGoat };
};

export default useGoatLocation;
