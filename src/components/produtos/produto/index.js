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
                    {
                        props.desconto
                            ?
                            <div className='tag-desconto'>
                                <img src={IconTag} /><span className='texto-tag'>10% OFF</span>
                            </div>
                            :
                            console.log("Sem desconto")
                    }

                </div>
                <div className='imagem-container'>
                    <img className='imagem-produto' src={props.imagem} />
                </div>
                <div className='infos'>
                    <div className='estrelas'>
                        <img src={IconEstrela} />
                        <img src={IconEstrela} />
                        <img src={IconEstrela} />
                        <img src={IconEstrela} />
                        <img src={IconEstrela} />
                    </div>
                    <span className='titulo'>{props.produto}</span>
                    <span><b className='negrito'>De </b><span className='preco-total'>{props.precototal}</span><b className='negrito'> Por</b></span>
                    <span className='preco-promocional'>{props.preco_promocional}</span>
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