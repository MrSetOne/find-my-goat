import { useState, useEffect, useMemo } from "react";

const useTrackedLocation = () => {
  const [location, setLocation] = useState<GeolocationCoordinates | null>(null);
  const hasData = useMemo(() => location !== null, [location]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const watchId = navigator.geolocation.watchPosition(
      (position) => {
        setLocation(position.coords);
      },
      (error) => {
        setError(error.message);
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      }
    );

    return () => navigator.geolocation.clearWatch(watchId);
  }, []);

  return { location, error, hasData };
};

export default useTrackedLocation;
