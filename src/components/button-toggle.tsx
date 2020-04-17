import React from 'react'
import { css } from 'emotion'
import { COLORS } from '../constants/colors'
import cn from 'classnames'

//#region Styles
const buttonToggleStyles: string = css`
  display: flex;
  width: 100%;
  justify-content: flex-start;
`

const buttonToggleItemStyles: string = css`
  width: 100%;
  border: 1px solid ${COLORS.LIGHT};
  cursor: pointer;
  font-weight: 600;
  text-transform: uppercase;
  padding: 15px 57px;
  font-size: 12px;
  color: ${COLORS.DARKEST};
  background-color: ${COLORS.LIGHTEST};
  
  &:first-child {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }

  &:last-child {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`

const buttonToggleItemActiveStyles: string = css`
  border: none;
  background-color: ${COLORS.MAIN};
  color: #fff;
`
//endregion

const ButtonToggle = ({
  items,
  selectedItemId,
  handleSelect,
  className,
}: IProps) => {
  const buttonToggleItemClass = (id: string) => cn(
    buttonToggleItemStyles,
    className,
    {
      [buttonToggleItemActiveStyles]: id === selectedItemId,
    },
  )

  return (
    <div className={buttonToggleStyles}>
      {
        items.map(item => (
          <button
            onClick={() => handleSelect(item.id)}
            key={item.id}
            type="button"
            className={buttonToggleItemClass(item.id)}
          >
            {item.text}
          </button>
        ))
      }
    </div>
  )
}

export interface IButtonToggleItem {
  id: string
  text: string
}

interface IProps {
  items: IButtonToggleItem[]
  selectedItemId: string
  handleSelect: (id: any) => void
  className: string
}

export default ButtonToggle
