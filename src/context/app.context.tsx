import React, { createContext, useMemo, useRef } from "react";
import useGoatLocation from "../hooks/useGoatLocation";
import useTrackedLocation from "../hooks/useTrackedLocation";
import { Map } from "leaflet";

type AppContextType = {
  goatLocation: GeolocationCoordinates | null;
  savegoatLocation: (location: GeolocationCoordinates | null) => void;
  hasData: boolean;
  error: string | null;
  location: GeolocationCoordinates | null;
  hasGoat: boolean;
  mapRef?: React.MutableRefObject<Map | null>;
};

export const AppContext = createContext<AppContextType>({
  goatLocation: null,
  savegoatLocation: () => {},
  hasData: false,
  error: null,
  location: null,
  hasGoat: false,
});

interface AppProviderProps {
  children: React.ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  const { goatLocation, savegoatLocation, hasGoat } = useGoatLocation();
  const { hasData, error, location } = useTrackedLocation();
  const mapRef = useRef<Map | null>(null);

  const returnValue = useMemo(() => {
    return {
      goatLocation,
      savegoatLocation,
      hasData,
      error,
      hasGoat,
      location,
      mapRef,
    };
  }, [
    goatLocation,
    savegoatLocation,
    hasData,
    error,
    location,
    hasGoat,
    mapRef,
  ]);

  return (
    <AppContext.Provider value={returnValue}>{children}</AppContext.Provider>
  );
};
