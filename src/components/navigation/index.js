import React from 'react'
import "./navigation.css"

const Navigation = () => {
  return (
    <div className="navigation">
        <div className="navigation-container">
            <div className="navigation-l">
                <span>Todos os Departamentos |</span>
                <span>Mais Vendidos |</span>
                <span>Ofertas do Dia |</span>
                <span>Música |</span>
                <span>Livros |</span>
                <span>Atendimento ao Cliente |</span>
                <span>Eletrônicos</span>
            </div>
            <div className="navigation-r">
                <span>Carrinho</span>
                <span>5</span>
            </div>
        </div>
    </div>
  )
}

export default Navigation