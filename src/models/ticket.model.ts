export interface ITicketSegment {
  origin: string // IATA
  destination: string // IATA
  date: string
  stops: string[] // IATA[]
  duration: number // minutes
}

export interface ITicket {
  price: number
  carrier: string // IATA
  segments: ITicketSegment[]
}
