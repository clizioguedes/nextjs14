/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosHeaders, AxiosError as GenericAxiosError } from 'axios'

interface ErrorData {
  error: string
  message: string
  statusCode: string
}

export interface AxiosError extends GenericAxiosError {
  response?: {
    data: ErrorData
    status: number
    statusText: string
    headers: AxiosHeaders
    config: any
  }
}

export type MetaResponse = {
  perPage: number
  totalItems: number
  currentPage: number
  totalPages: number
}

export type ResourceListResponseType<T> = {
  data: Array<T>
  meta: MetaResponse
}
