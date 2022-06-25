import React from 'react'
import './slider.css'

import IconLeft from '../../assets/Icons/arrow-left.svg'
import IconLeft2 from '../../assets/Icons/arrow-left2.svg'

const Slider = () => {
  return (
    <div className='slider'>
      <div className='container-l'>
        <img src={IconLeft} />
      </div>
      <div className='container-r'>
        <img src={IconLeft2} />
      </div>
    </div>
  )
}

export default Slider