import React from 'react'
import './slider.css'

import IconLeft from '../../assets/Icons/arrow-left.svg'
import IconLeft2 from '../../assets/Icons/arrow-left2.svg'

const Slider = () => {
  return (
    <div className="slider-container">
      <div className="container">
        <div className='slider'>
          <div className='container-l'>
            <img className='icon-arrow' src={IconLeft} />
            <span className='texto-slider'>
              <b>Promoção Relâmpago</b><br />
              Toda a loja com 10% de desconto<br />
              Com o cupom <b>promocao1</b>
            </span>
          </div>
          <div className='container-r'>
            <img className='icon-arrow' src={IconLeft2} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Slider