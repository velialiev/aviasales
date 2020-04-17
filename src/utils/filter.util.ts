import { FILTER_TYPES } from '../constants/filter-options'

const isAllFiltersSelected = (filters: Record<FILTER_TYPES, boolean>) => {
  return Object.entries(filters)
    .filter(([key]) => key !== FILTER_TYPES.ALL)
    .every(([_, value]) => value)
}

const filterUtil = {
  isAllFiltersSelected,
}

export default filterUtil
