import { BASE_URL } from "@/CONSTANTS"
import axios, { AxiosResponse } from "axios"
import { formatDate } from "../lib/formatDate"
import qs from 'qs';

const api = axios.create({
  baseURL: BASE_URL,
  paramsSerializer: (params) => {
    console.log(`params`, params);

    const searchParams = new URLSearchParams();

    Object.entries(params).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        if (value.length > 0) {
          searchParams.append(key, value.join(','));
        }
      } else if (value !== undefined && value !== null && value !== '') {
        searchParams.append(key, value as string);
      }
    });
    console.log(`searchParams`, searchParams.toString());

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
