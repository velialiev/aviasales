import React, { ReactChild, ReactChildren } from 'react'
import { css } from 'emotion'
import { COLORS } from '../constants/colors'
import cn from 'classnames'

const cardStyles = css`
  background: ${COLORS.LIGHTEST};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 20px;
  width: 100%;
`

const withoutContentPaddingStyles = css`
  padding: 0 0 10px 0;
`

const Card = ({ children, type = CARD_TYPES.DEFAULT, className }: IProps) => {
  const cardClass = cn(
    cardStyles,
    className,
    {
      [withoutContentPaddingStyles]: type === CARD_TYPES.WITHOUT_CONTENT_PADDING,
    },
  )
  return (
    <div className={cardClass}>
      {children}
    </div>
  )
}

interface IProps {
  children: any
  type?: CARD_TYPES
  className?: string
}

export enum CARD_TYPES {
  DEFAULT = 'DEFAULT',
  WITHOUT_CONTENT_PADDING = 'WITHOUT_CONTENT_PADDING',
}

export default Card
