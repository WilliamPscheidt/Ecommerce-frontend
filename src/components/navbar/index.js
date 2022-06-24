import React from 'react'
import "./navbar.css"

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar-container'>
        <div className='navbar-l'>
          <h3 className='logo'>Loja.com.br</h3>
          <input></input>
          <span>Selecione o <b>Endereço</b></span>
        </div>
        <div className='navbar-r'>
          <span>Registrar Conta</span>
          <span>Faça Login</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar