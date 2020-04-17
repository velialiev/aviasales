import { ITicket } from '../models/ticket.model'
import { TTable } from '../components/table'
import timeUtil from './time.util'
import { LOCALIZATION } from '../constants/localization'
import { SORTING_TYPES } from '../constants/sorting-options'
import { FILTER_OPTIONS, FILTER_TYPES } from '../constants/filter-options'

const getTransfersTable = (ticket: ITicket): TTable => {
  return ticket.segments
    .map(segment => [
      {
        header: `${segment.origin} - ${segment.destination}`,
        data: timeUtil.getTimeInterval(segment.date, segment.duration),
      },
      {
        header: LOCALIZATION.TICKETS_PAGE.TRAVEL_TIME,
        data: timeUtil.convertMinutesToDisplayableFormat(segment.duration),
      },
      {
        header: `${segment.stops.length} ${LOCALIZATION.TICKETS_PAGE.TRANSFERS(segment.stops.length)}`,
        data: segment.stops.join(', '),
      },
    ])
}

const getDuration = (ticket: ITicket) => {
  return ticket.segments.reduce((acc, segment) => acc + segment.duration, 0)
}

const getComparatorBySortingType = (type: SORTING_TYPES): (a: any, b: any) => number => {
  switch (type) {
    case SORTING_TYPES.CHEAPEST:
      return (ticketA: ITicket, ticketB: ITicket) => ticketA.price - ticketB.price
    case SORTING_TYPES.FASTEST:
      return (ticketA: ITicket, ticketB: ITicket) => getDuration(ticketA) - getDuration(ticketB)
    default:
      return () => 0
  }
}

const getAppropriateFilters = (ticket: ITicket): FILTER_TYPES[] => {
  const appropriateFilters = [
    FILTER_TYPES.ALL,
  ]

  const appropriateFilter = FILTER_OPTIONS
    .find(filter => filter.count === ticket.segments[0].stops.length)

  if (appropriateFilter) {
    appropriateFilters.push(appropriateFilter.id)
  }

  return appropriateFilters
}

const ticketUtil = {
  getTransfersTable,
  getDuration,
  getComparatorBySortingType,
  getAppropriateFilters,
}

export default ticketUtil
