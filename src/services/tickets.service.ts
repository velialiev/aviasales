import apiService from './api.service'
import URLS from '../constants/urls.constant'
import { ITicket } from '../models/ticket.model'

const getSearchId = (): Promise<ISearchIdGettingResponse> => {
  return apiService.get<ISearchIdGettingResponse>(URLS.SEARCH)
}

const getTicketsChunk = (searchId: string): Promise<ITicketsChunkGettingResponse> => {
  return apiService.get(URLS.TICKETS, { searchId })
}

const ticketsService = {
  getSearchId,
  getTicketsChunk,
}

interface ISearchIdGettingResponse {
  searchId: string
}

interface ITicketsChunkGettingResponse {
  tickets: ITicket[]
  stop: boolean
}

export default ticketsService
