import React, { ReactChild, ReactChildren } from 'react'
import { css } from 'emotion'
import cn from 'classnames'

const rowStyles = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`

const Row = ({ children, className }: IProps) => {
  const rowClass = cn(
    rowStyles,
    className,
  )

  return (
    <div className={rowClass}>
      { children }
    </div>
  )
}

interface IProps {
  children: any
  className?: string
}

export default Row
