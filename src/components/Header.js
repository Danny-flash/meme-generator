import React from 'react'
import troll from './troll1.png'
const Header = () => {
  return (
   <header className='header'>
       <img src={troll} alt=""  className='header__image'/>
       <h2 className='header__title'>Meme Generator</h2>
       <h4 className='header__project'>Have Fun</h4>
   </header>
  )
}

export default Header