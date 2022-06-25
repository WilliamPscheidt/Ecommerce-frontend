import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div className='footer-container'>
        <div className='footer-internal'>
            <div className='logo'>
                <span>Loja.com.br</span>
                <span>@WilliamPscheidt</span>
            </div>
            <div className='navegacao'>
                <ul>
                    <li>Mais Vendidos</li>
                    <li>Ofertas do Dia</li>
                    <li>Música</li>
                </ul>
                <ul>
                    <li>Música</li>
                    <li>Livros</li>
                    <li>Computadores</li>
                </ul>
                <ul>
                    <li>Atendimento ao Cliente</li>
                    <li>Acessar minha Conta</li>
                    <li>Meus Pedidos</li>
                </ul>
            </div>
            <div className='voltar'>
                Voltar
            </div>
        </div>
    </div>
  )
}

export default Footer