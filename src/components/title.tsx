import React from 'react'
import { css } from 'emotion'
import { COLORS } from '../constants/colors'
import cn from 'classnames'

const titleStyles = css`
  font-size: 24px;
  color: ${COLORS.MAIN};
  font-weight: 600;
`

const Title = ({ children, className }: IProps) => {
  const titleClass = cn(
    className,
    titleStyles,
  )

  return (
    <span className={titleClass}>
      { children }
    </span>
  )
}

interface IProps {
  children: any;
  className?: string
}

export default Title
