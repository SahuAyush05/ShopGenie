import React from 'react'
import logoImg from '../assets/GenieLogo.png';
const Header = () => {
  return (
    <header id='main-header'>
        <div id='title' className='h-[20%] px-8'>
            <img src={logoImg} alt='logoImage' className='w-[7em] h-[7em]'/>
            <h1>ShopGenie</h1>
        </div>
        
    </header>
  )
}

export default Header