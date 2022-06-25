import React from 'react'
import './footer.css'

import IconArrowUp from '../../assets/Icons/arrow-up.svg'

const Footer = () => {
  return (
    <div className='footer-container'>
        <div className='footer-internal'>
            <div className='logo'>
                <span className='logo-texto'>Loja.com.br</span>
                <span className='logo-texto'>@WilliamPscheidt</span>
            </div>
            <div className='navegacao'>
                <ul className='links'>
                    <li className='link'>Mais Vendidos</li>
                    <li className='link'>Ofertas do Dia</li>
                    <li className='link'>Música</li>
                </ul>
                <ul className='links'>
                    <li className='link'>Música</li>
                    <li className='link'>Livros</li>
                    <li className='link'>Computadores</li>
                </ul>
                <ul className='links'>
                    <li className='link'>Atendimento ao Cliente</li>
                    <li className='link'>Acessar minha Conta</li>
                    <li className='link'>Meus Pedidos</li>
                </ul>
            </div>
            <div className='voltar'>
                <img src={IconArrowUp} />
            </div>
        </div>
    </div>
  )
}

export default Footer