import React, { ChangeEvent } from 'react'
import List, { LIST_TYPES } from './list'
import Checkbox from './checkbox'
import { css } from 'emotion'
import { FILTER_TYPES, IFilter } from '../constants/filter-options'
import filterUtil from '../utils/filter.util'

const filterStyles = css`
  padding-left: 50px !important;
`

const Filters = ({
  filters,
  setValues,
  values,
}: IProps) => {
  const handleCheck = (e: ChangeEvent<HTMLInputElement>) => {
    const { target } = e
    const newValues = { ...values }

    if (target.name === FILTER_TYPES.ALL) {
      Object.keys(newValues).forEach(key => {
        newValues[key as FILTER_TYPES] = target.checked
      })
    } else {
      newValues[target.name as FILTER_TYPES] = target.checked
      newValues[FILTER_TYPES.ALL] = filterUtil.isAllFiltersSelected(newValues)
    }

    setValues(newValues)
  }

  return (
    <List type={LIST_TYPES.SELECTION}>
      {
        filters.map(filter => (
          <Checkbox
            name={filter.id}
            onCheck={handleCheck}
            isChecked={values[filter.id]}
            className={filterStyles}
            key={filter.id}
          >
            {filter.text}
          </Checkbox>
        ))
      }
    </List>
  )
}

interface IProps {
  filters: IFilter[]
  values: Record<FILTER_TYPES, boolean>
  setValues: (values: Record<FILTER_TYPES, boolean>) => void
}

export default Filters
