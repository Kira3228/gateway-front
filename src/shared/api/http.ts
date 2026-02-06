import { BASE_URL } from "@/CONSTANTS"
import axios, { AxiosResponse } from "axios"

const api = axios.create({
  baseURL: BASE_URL
})

export const useApi = () => {
  const get = async <T>(endpoint: string, params?: Record<string, any>): Promise<T> => {
    try {
      const response: AxiosResponse<T> = await api.get(endpoint, {
        params
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
  const httpPatch = async <T>(url: string, body?: any): Promise<T> => {
    try {
      const response: AxiosResponse<T> = await api.patch(url, body);
      return response.data;
    } catch (error: any) {
      throw new Error(`PATCH ${url} failed: ${error.message}`);
    }
  };
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
    get, httpPatch, httpGetBlob, post
  }
}
