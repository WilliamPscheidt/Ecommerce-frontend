import React from 'react'

import IconArrow from '../../assets/Icons/arrow.svg'
import IconTag from '../../assets/Icons/tag.svg'
import ImgComputador from '../../assets/Images/Produtos/Computador.png'

import './produtos.css'

const Produtos = () => {
  return (
    <div className='container-produtos'>
        <div className='container-interno'>
            <div className='container-l'>
                <ul className='lista-departamentos'>
                    <li className='departamento'><span className='departamento-texto'><span className='active-border'></span><b className='active'>Eletrônicos</b></span><img src={IconArrow}/></li>
                    <li className='departamento'><span className='departamento-texto'>Vestuário</span><img src={IconArrow}/></li>
                    <li className='departamento'><span className='departamento-texto'>Esportes</span><img src={IconArrow}/></li>
                    <li className='departamento'><span className='departamento-texto'>Livros</span><img src={IconArrow}/></li>
                    <li className='departamento'><span className='departamento-texto'>Móveis</span><img src={IconArrow}/></li>
                    <li className='departamento'><span className='departamento-texto'>Eletrodomésticos</span><img src={IconArrow}/></li>
                    <li className='departamento'><span className='departamento-texto'>Casa</span><img src={IconArrow}/></li>
                    <li className='departamento'><span className='departamento-texto'>Cozinha</span><img src={IconArrow}/></li>
                    <li className='departamento'><span className='departamento-texto'>Música</span><img src={IconArrow}/></li>
                    <li className='departamento'><span className='departamento-texto'>Pets</span><img src={IconArrow}/></li>
                    <li className='departamento'><span className='departamento-texto'>Arte</span><img src={IconArrow}/></li>
                    <li className='departamento'><span className='departamento-texto'>Veículos</span><img src={IconArrow}/></li>
                </ul>
            </div>

            <div className='container-r'>
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
                    </div>
                </div>
                <div className='card-produto'></div>
                <div className='card-produto'></div>
                <div className='card-produto'></div>
                <div className='card-produto'></div>
                <div className='card-produto'></div>
                <div className='card-produto'></div>
            </div>
        </div>
    </div>
  )
}

export default Produtos