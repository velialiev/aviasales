import React, { ReactChild, ReactChildren } from 'react'
import { css } from 'emotion'
import cn from 'classnames'

const containerStyles = css`
  width: 755px;
  margin: 0 auto;
`

const Container = ({ children, className }: IProps) => {
  const containerClass = cn(
    className,
    containerStyles,
  )

  return (
    <div className={containerClass}>
      { children }
    </div>
  )
}

interface IProps {
  children: any
  className: string
}

export default Container
