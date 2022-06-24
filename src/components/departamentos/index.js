import React from 'react'
import "./departamentos.css"

const Departamentos = () => {
  return (
    <div className="departamentos">
        <div className="departamentos-container">
            <div>
                Departamentos em Destaque
            </div>
            <div className='departamentos-cards'>
                <div className='departamento-card'></div>
                <div className='departamento-card'></div>
                <div className='departamento-card'></div>
                <div className='departamento-card'></div>
            </div>
        </div>
    </div>
  )
}

export default Departamentos