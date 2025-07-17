import { useEffect, useState } from 'react';
import OCMChargingPoint from '../types/OCMChargingPoint';
import { getOCMChargingPoints } from './apiRequests';

const useOCMChargingPoints = () => {
  const [OCMChargingPoints, setOCMChargingPoints] = useState<OCMChargingPoint[]>([]);

  useEffect(() => {
    fetchOCMChargingPoints();
  }, []);

  const fetchOCMChargingPoints = async () => {
    const ocmChargingPoints = await getOCMChargingPoints();

    if (ocmChargingPoints.length > 0) {
      setOCMChargingPoints(ocmChargingPoints);
    }
  };

  return OCMChargingPoints;
};

export default useOCMChargingPoints;
