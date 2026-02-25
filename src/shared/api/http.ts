import { BASE_URL } from "@/CONSTANTS"
import axios, { AxiosResponse } from "axios"
import { formatDate } from "../lib/formatDate"
import qs from 'qs';

const api = axios.create({
  baseURL: BASE_URL,
  paramsSerializer: (params) => {
    const searchParams = new URLSearchParams();

    Object.entries(params).forEach(([key, value]) => {
      // 1. Игнорируем null, undefined и абсолютно пустые строки
      if (value === null || value === undefined || value === '') {
        return;
      }

      if (Array.isArray(value)) {
        // 2. Если это массив, фильтруем его от пустых значений
        const filteredArray = value.filter(v => v !== '' && v !== null && v !== undefined);

        if (filteredArray.length > 0) {
          // Если твой бэкенд для СТАТУСОВ хочет запятые:
          searchParams.append(key, filteredArray.join(','));

          // ЕСЛИ ЖЕ бэкенд всё-таки заработал с repeat (key=1&key=2), 
          // то лучше использовать: 
          // filteredArray.forEach(v => searchParams.append(key, v));
        }
      } else {
        // 3. Обычное значение
        searchParams.append(key, value as string);
      }
    });

    return searchParams.toString();
  }
});

export const useApi = () => {
  const get = async <T, P>(endpoint: string, params?: P): Promise<T> => {
    console.log(BASE_URL + endpoint);

    try {
      const response: AxiosResponse<T> = await api.get(endpoint, {
        params: {
          ...params
        }
      })

      return response.data;
    } catch (error: any) {
      throw new Error(`GET ${endpoint} failed: ${error.message}`);
    }
  }

  const post = async <T>(endpoint: string, body: any,): Promise<T> => {
    try {
      const response: AxiosResponse<T> = await api.post(endpoint, body, { headers: { 'Content-Type': 'application/json', } })
      return response.data

    }
    catch (error: any) { throw new Error(`post ${endpoint} failed: ${error.message}`); }
  }

  const patch = async <T>(url: string, body?: any): Promise<T> => {
    try {
      const response: AxiosResponse<T> = await api.patch(url, body);
      return response.data;
    } catch (error: any) {
      throw new Error(`PATCH ${url} failed: ${error.message}`);
    }
  };

  const httpDelete = async<T>(url: string, body?: any): Promise<T> => {
    try {
      const config = body ? { data: body } : undefined;
      const response: AxiosResponse<T> = await api.delete(url, config);
      return response.data
    }
    catch (error: any) {
      throw new Error(`DELETE ${url} failed: ${error.message}`);
    }
  }

  const httpGetBlob = async (url: string, params?: Record<string, any>): Promise<Blob> => {
    try {
      const response: AxiosResponse<Blob> = await api.get(url, {
        params,
        responseType: 'blob',
      });
      return response.data;
    } catch (error: any) {
      throw new Error(`GET BLOB ${url} failed: ${error.message}`);
    }
  };
  return {
    get, patch, httpGetBlob, post, httpDelete
  }
}
