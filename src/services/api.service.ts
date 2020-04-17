import axios, { AxiosResponse } from 'axios'
import URLS from '../constants/urls.constant'
import urlUtil from '../utils/url.util'

const axiosInstance = axios.create({
  baseURL: URLS.ROOT,
})

const get = <T>(url: string, params?: Record<string, string>): Promise<T> => {
  return axiosInstance.get<T>(
    params
      ? urlUtil.applyQueryParams(url, params)
      : url,
  ).then(res => res.data)
}

const post = <T>(url: string, body: any): Promise<T> => {
  return axiosInstance.post<T>(url, body)
    .then(res => res.data)
}

// const handleErrors = <T>(response: Promise<AxiosResponse<T>>) => {
//   return response
//     .then((res) => {
//       if (res.status === 200) {
//       }
//
//       return res.data
//     })
// };

const apiService = {
  get,
  post,
}

export default apiService
