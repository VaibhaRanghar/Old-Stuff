import { useState } from "react";

export function useGeolocation({setError, setIsLoading  }) {
  const [position, setPosition] = useState({});
  const { lat, lng } = position;
  function getPosition() {
    if (!navigator.geolocation)
      return setError("Your browser does not support geolocation");

    setIsLoading(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPosition({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
        setIsLoading(false);
      },
      (error) => {
        setError(error.message);
        setIsLoading(false);
      }
    );
  }

  return [ lat, lng, getPosition];
}
