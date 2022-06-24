import React from 'react'
import "./navigation.css"

import IconMenu from '../../assets/Icons/align-left.svg'
import IconCart from '../../assets/Icons/shopping-cart.svg'

const Navigation = () => {
  return (
    <div className="navigation">
        <div className="navigation-container">
            <div className="navigation-l">
                <img className="icon-menu" src={IconMenu} />
                <span className='texto-navigation-departamento'>Todos os Departamentos</span>
                <span className='separator'>|</span>
                <span className='texto-navigation'>Mais Vendidos</span>
                <span className='separator'>|</span>
                <span className='texto-navigation'>Ofertas do Dia</span>
                <span className='separator'>|</span>
                <span className='texto-navigation'>Música</span>
                <span className='separator'>|</span>
                <span className='texto-navigation'>Livros</span>
                <span className='separator'>|</span>
                <span className='texto-navigation'>Atendimento ao Cliente</span>
                <span className='separator'>|</span>
                <span className='texto-navigation'>Eletrônicos</span>
            </div>
            <div className="navigation-r">
                <img className="icon-cart" src={IconCart} />
                <span className='text-cart'>Carrinho</span>
                <span className='total-carrinho'>5</span>
            </div>
        </div>
    </div>
  )
}

export default Navigation