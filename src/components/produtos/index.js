import React from 'react'

import IconArrow from '../../assets/Icons/arrow.svg'

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
                Produto1
            </div>
        </div>
    </div>
  )
}

export default Produtos