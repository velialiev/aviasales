import React from 'react'
import { css } from 'emotion'
import cn from 'classnames'

const listStyles = css`
  display: flex;
  flex-direction: column; 
`

const listItemStyles = css`
  width: 100%;
  margin-bottom: 20px;
    
  &:last-child {
    margin-bottom: 0;
  }
`
const listSelectionItemStyles = css`
  margin-bottom: 0;
  padding: 10px 20px;
  
  &:hover {
    background-color: #F1FCFF;
  }
`

const List = ({ children, type = LIST_TYPES.DEFAULT }: IProps) => {
  const listItemClass = cn(
    listItemStyles,
    {
      [listSelectionItemStyles]: type === LIST_TYPES.SELECTION,
    },
  )

  return (
    <div className={listStyles}>
      {
        React.Children.map(children, (child: any) => React.cloneElement(child, {
          className: cn(child.props.className, listItemClass),
        }))
      }
    </div>
  )
}

export enum LIST_TYPES {
  DEFAULT = 'DEFAULT',
  SELECTION = 'SELECTION',
}

interface IProps {
  children: any
  type?: LIST_TYPES
}

export default List
