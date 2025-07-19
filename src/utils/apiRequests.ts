import OCMChargingPoint from '../types/OCMChargingPoint';
import { BASE_URL, FETCH_OCM } from './constants';
import { API_KEY } from '../../environment';
import GeoLocationType from '../types/GeoLocation';

const request = async <TResponse>(url: string, config: RequestInit = {}): Promise<TResponse> => {
  config.headers = { ...config.headers, 'X-API-Key': API_KEY };
  const response = await fetch(BASE_URL + url, config);
  return await response.json();
};

const getOCMChargingPoints = async (location: GeoLocationType) => {
  console.log(location);
  let url = `${FETCH_OCM}?latitude=${location?.coords.latitude}&longitude=${location?.coords.longitude}`;
  const response = await request<OCMChargingPoint[]>(url);
  return response;
};

export { getOCMChargingPoints };
