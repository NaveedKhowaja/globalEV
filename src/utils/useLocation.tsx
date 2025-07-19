import { useEffect, useState } from 'react';
import Geolocation from '@react-native-community/geolocation';
import GeoLocationType from '../types/GeoLocation';

const useLocation = () => {
  const [location, setLocation] = useState<GeoLocationType>(null);

  useEffect(() => {
    Geolocation.getCurrentPosition(userLocation => {
      setLocation(userLocation);
    });
  }, []);

  return location;
};

export default useLocation;
