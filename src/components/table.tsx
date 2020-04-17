import React, { ReactChild, ReactChildren } from 'react'
import { css } from 'emotion'
import { COLORS } from '../constants/colors'
import Row from './row'

const tableRowStyles = css`
  margin-bottom: 10px;
  
  &:last-child {
    margin-bottom: 0;
  }
`

const tableHeaderStyles = css`
  font-weight: 600;
  font-size: 12px;
  color: ${COLORS.DARKER};
  text-transform: uppercase;
`

const tableDataStyles = css`
  font-weight: 600;
  font-size: 14px;
  color: ${COLORS.DARKEST};
`

const Table = ({ table }: IProps) => {
  return (
    <div>
      {
        table.map((row, i) => (
          <Row key={i} className={tableRowStyles}>
            {
              row.map((cell, j) => (
                <div key={j}>
                  <div className={tableHeaderStyles}>
                    {cell.header}
                  </div>

                  <div className={tableDataStyles}>
                    {cell.data}
                  </div>
                </div>
              ))
            }
          </Row>
        ))
      }
    </div>
  )
}

interface ITableCell {
  header: string
  data: string
}

type TTableRow = ITableCell[]
export type TTable = TTableRow[]

interface IProps {
  table: TTable
}

export default Table
