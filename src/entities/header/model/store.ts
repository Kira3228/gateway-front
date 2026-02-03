import { THeaderColumn } from './types'
import { fetchHeaders } from "../api/getHeaders"
import { defineStore } from "pinia"
import { ref } from 'vue'

export interface IHeaderState {
  headers: THeaderColumn[]
}

export const useHeaderStore = defineStore(`header-store`, () => {
  const headers = ref<THeaderColumn[]>([])

  const getHeaders = async (preset?: string) => {
    try {
      const response = await fetchHeaders(preset)
      headers.value = response
    } catch (error) {

    }
  }
  
  return {
    headers, getHeaders
  }
})