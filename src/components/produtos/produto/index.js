import React from 'react'
import './produto.css'

import IconTag from '../../../assets/Icons/tag.svg'
import IconEstrela from '../../../assets/Icons/star.svg'
import IconCarrinho from '../../../assets/Icons/shopping-cart.svg'

const Produto = (props) => {
    return (
        <div className='card-produto'>
            <div className='container-card'>
                <div className='tags'>
                    <div className='tag-desconto'>
                        <img src={IconTag} /><span className='texto-tag'>10% OFF</span>
                    </div>
                </div>
                <div className='imagem-container'>
                    <img className='imagem-produto' src={ImgComputador} />
                </div>
                <div className='estrelas'>
                    <img src={IconEstrela} />
                    <img src={IconEstrela} />
                    <img src={IconEstrela} />
                    <img src={IconEstrela} />
                    <img src={IconEstrela} />
                </div>
                <div className='infos'>
                    <span className='titulo'>Notebook Acer Nitro 5</span>
                    <span><b className='negrito'>De </b><span className='preco-total'>R$5000,00</span><b className='negrito'> Por</b></span>
                    <span className='preco-promocional'>R$4900.00</span>
                </div>
                <div className='container-carrinho'>
                    <span className='add-carrinho'>Adicionar ao Carrinho</span>
                    <div className='cart-icon'>
                        <img src={IconCarrinho} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Produto