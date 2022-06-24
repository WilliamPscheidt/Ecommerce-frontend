import React from 'react'
import "./departamentos.css"

import ImgEletronicos from '../../assets/Images/Eletronicos.png'
import ImgVideogames from '../../assets/Images/Videogames.png'
import ImgVestuario from '../../assets/Images/Vestuario.png'
import ImgEsportes from '../../assets/Images/Esportes.png'

const Departamentos = () => {
  return (
    <div className="departamentos">
        <div className="departamentos-container">
            <div className='div-destaque'>
                <span>Departamentos em Destaque</span>
                <div className='barra-inferior'></div>
            </div>
            <div className='departamentos-cards'>
                <div className='departamento-card'>
                  <div className='black-effect'></div>
                  <img className='imagem' src={ImgEletronicos} />
                </div>

                <div className='departamento-card'>
                  <div className='black-effect'></div>
                  <img className='imagem' src={ImgVideogames} />
                </div>

                <div className='departamento-card'>
                  <div className='black-effect'></div>
                  <img className='imagem' src={ImgVestuario} />
                </div>

                <div className='departamento-card'>
                  <div className='black-effect'></div>
                  <img className='imagem' src={ImgEsportes} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Departamentos