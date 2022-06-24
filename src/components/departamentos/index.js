import React from 'react'
import "./departamentos.css"

import ImgEletronicos from '../../assets/Images/Eletronicos.png'
import ImgVideogames from '../../assets/Images/Videogames.png'
import ImgVestuario from '../../assets/Images/Vestuario.png'
import ImgEsportes from '../../assets/Images/Esportes.png'

import IconArrow from '../../assets/Icons/arrow-right.svg'

const Departamentos = () => {
  return (
    <div className="departamentos">
        <div className="departamentos-container">
            <div className='div-destaque'>
                <span>Departamentos em Destaque</span>
                <div className='barra-inferior'></div>
                <div className='infos-card'>

                </div>
            </div>
            <div className='departamentos-cards'>
                <div className='departamento-card'>
                  <div className='black-effect'></div>
                  <img className='imagem' src={ImgEletronicos} />
                  <div className='infos-container'>
                    <div className='infos-card'>
                      <span className='info-texto'>Eletrônicos</span>
                    </div>
                    <img className='icon-arrow' src={IconArrow} />
                  </div>
                </div>

                <div className='departamento-card'>
                  <div className='black-effect'></div>
                  <img className='imagem' src={ImgVideogames} />
                  <div className='infos-container'>
                    <div className='infos-card'>
                      <span className='info-texto'>Videogames</span>
                    </div>
                    <img className='icon-arrow' src={IconArrow} />
                  </div>
                </div>

                <div className='departamento-card'>
                  <div className='black-effect'></div>
                  <img className='imagem' src={ImgVestuario} />
                  <div className='infos-container'>
                    <div className='infos-card'>
                      <span className='info-texto'>Moda & Vestuário</span>
                    </div>
                    <img className='icon-arrow' src={IconArrow} />
                  </div>
                </div>

                <div className='departamento-card'>
                  <div className='black-effect'></div>
                  <img className='imagem' src={ImgEsportes} />
                  <div className='infos-container'>
                    <div className='infos-card'>
                      <span className='info-texto'>Esportes</span>
                    </div>
                    <img className='icon-arrow' src={IconArrow} />
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Departamentos