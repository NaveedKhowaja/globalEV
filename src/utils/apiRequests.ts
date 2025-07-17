import OCMChargingPoint from '../types/OCMChargingPoint';
import { BASE_URL, FETCH_OCM } from './constants';
import { API_KEY } from '../../environment';

const request = async <TResponse>(url: string, config: RequestInit = {}): Promise<TResponse> => {
  config.headers = { ...config.headers, 'X-API-Key': API_KEY };
  const response = await fetch(BASE_URL + url, config);
  return await response.json();
};

const getOCMChargingPoints = async () => {
  const response = await request<OCMChargingPoint[]>(FETCH_OCM);
  return response;
};

export { getOCMChargingPoints };
