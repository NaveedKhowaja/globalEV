import { useEffect, useState } from 'react';
import OCMChargingPoint from '../types/OCMChargingPoint';
import { getOCMChargingPoints } from './apiRequests';
import GeoLocationType from '../types/GeoLocation';

const useOCMChargingPoints = (location: GeoLocationType) => {
  const [OCMChargingPoints, setOCMChargingPoints] = useState<OCMChargingPoint[]>([]);

  useEffect(() => {
    fetchOCMChargingPoints();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchOCMChargingPoints = async () => {
    const ocmChargingPoints = await getOCMChargingPoints(location);

    if (ocmChargingPoints.length > 0) {
      setOCMChargingPoints(ocmChargingPoints);
    }
  };

  return OCMChargingPoints;
};

export default useOCMChargingPoints;
