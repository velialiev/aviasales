import React from 'react'
import { css } from 'emotion'
import { COLORS } from '../constants/colors'
import cn from 'classnames'

const subtitleStyles = css`
  display: block;
  font-weight: 600;
  font-size: 12px;
  color: ${COLORS.DARKEST};
  text-transform: uppercase;
  margin-bottom: 10px;
`

const Subtitle = ({ children, className }: IProps) => {
  const subtitleClass = cn(className, subtitleStyles);

  return (
    <span className={subtitleClass}>
      {children}
    </span>
  )
}

interface IProps {
  children: string
  className: string
}

export default Subtitle
