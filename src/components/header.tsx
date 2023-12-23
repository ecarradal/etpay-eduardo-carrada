import React from 'react'

const Header = () => {
  return (
    <header className='container flex-row justify-between align-center'>
      <img src="/assets/logo.svg" alt="Logo" />
      <button className='button btn-primary bt-small'>
        Get Early Access
      </button>
    </header>
  )
}

export default Header
