import React, { ChangeEvent, ReactChild, ReactChildren } from 'react'
import { css } from 'emotion'
import { COLORS } from '../constants/colors'
import cn from 'classnames'
import checkedIcon from '../assets/checked.svg'

const checkboxStyles = css`
  display: block;
  padding-left: 30px;
  width: 100%;
  color: ${COLORS.DARKEST};
  
  input {
    position: absolute;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
  }
  
  span {
    position: absolute;
    margin-left: -30px;
    width: 20px;
    height: 20px;
    border: 1px solid ${COLORS.DARK};
    border-radius: 2px;
  }
  
  input:checked + span {
    border-color: ${COLORS.MAIN};
    background: url(${checkedIcon}) no-repeat center center;
  }
`

const Checkbox = ({
  isChecked,
  onCheck,
  children,
  className,
  ...rest
}: IProps) => {
  const checkboxClass = cn(
    checkboxStyles,
    className,
  )

  return (
    <label className={checkboxClass}>
      <input
        {...rest}
        checked={isChecked}
        onChange={onCheck}
        type="checkbox"
      />
      <span/>
      { children }
    </label>
  )
}

interface IProps {
  isChecked: boolean
  onCheck: (event: ChangeEvent<HTMLInputElement>) => void
  children: ReactChild | ReactChildren
  className?: string

  [key: string]: any
}

export default Checkbox
