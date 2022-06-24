import React from 'react'
import "./navbar.css"

import IconMap from '../../assets/Icons/map-pin.svg'
import ArrowDown from '../../assets/Icons/arrow-down.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar-container'>
        <div className='navbar-l'>
          <h3 className='logo'>Loja.com.br</h3>
          <input className='input-search'></input>
          <div className='endereco'>
            <img className="icon-map" src={IconMap} />
            <span className='texto-endereco'>Selecione o <b className='black-font'>Endereço</b></span>
            <img className="icon-arrow" src={ArrowDown} />
          </div>
        </div>
        <div className='navbar-r'>
          <span className='texto-r'>Registrar <b id="texto-r-black">Conta</b></span>
          <span className='texto-r' id="texto-r-black">|</span>
          <span className='texto-r'>Faça <b id="texto-r-black">Login</b></span>
        </div>
      </div>
    </div>
  )
}

export default Navbar