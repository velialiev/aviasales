import React from 'react'
import logo from '../assets/logo.svg'
import { css } from 'emotion'

const headerStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25px 0;
`

const Header = () => {
  return (
    <header className={headerStyles}>
      <img src={logo} alt="logo" className="logo"/>
    </header>
  )
}

export default Header
