import React from 'react'

import IconArrow from '../../assets/Icons/arrow.svg'
import Produto from './produto'

import ImgComputador from '../../assets/Images/Produtos/Computador.png'
import ImgA52 from '../../assets/Images/Produtos/A52.png'
import ImgIphone from '../../assets/Images/Produtos/Iphone.png'
import ImgG73 from '../../assets/Images/Produtos/G733.png'
import ImgSsd from '../../assets/Images/Produtos/SSD.png'
import ImgGabinete from '../../assets/Images/Produtos/Gabinete.png'
import ImgHD from '../../assets/Images/Produtos/HD.png'
import ImgMouse from '../../assets/Images/Produtos/Mouse.png'
import ImgTeclado from '../../assets/Images/Produtos/Teclado.png'
import ImgMonitor from '../../assets/Images/Produtos/Monitor.jpg'
import ImgMesa from '../../assets/Images/Produtos/Computador_Mesa.jpg'
import ImgCadeira from '../../assets/Images/Produtos/Cadeira.jpg'

import './produtos.css'

const Produtos = () => {
    return (
        <div className='container-produtos'>
            <div className='container-interno'>
                <div className='container-l'>
                    <ul className='lista-departamentos'>
                        <li className='departamento'><span className='departamento-texto'><span className='active-border'></span><b className='active'>Eletrônicos</b></span><img src={IconArrow} /></li>
                        <li className='departamento'><span className='departamento-texto'>Vestuário</span><img src={IconArrow} /></li>
                        <li className='departamento'><span className='departamento-texto'>Esportes</span><img src={IconArrow} /></li>
                        <li className='departamento'><span className='departamento-texto'>Livros</span><img src={IconArrow} /></li>
                        <li className='departamento'><span className='departamento-texto'>Móveis</span><img src={IconArrow} /></li>
                        <li className='departamento'><span className='departamento-texto'>Eletrodomésticos</span><img src={IconArrow} /></li>
                        <li className='departamento'><span className='departamento-texto'>Casa</span><img src={IconArrow} /></li>
                        <li className='departamento'><span className='departamento-texto'>Cozinha</span><img src={IconArrow} /></li>
                        <li className='departamento'><span className='departamento-texto'>Música</span><img src={IconArrow} /></li>
                        <li className='departamento'><span className='departamento-texto'>Pets</span><img src={IconArrow} /></li>
                        <li className='departamento'><span className='departamento-texto'>Arte</span><img src={IconArrow} /></li>
                        <li className='departamento'><span className='departamento-texto'>Veículos</span><img src={IconArrow} /></li>
                    </ul>
                </div>
                <div className='container-r'>
                    <Produto 
                        imagem={ImgComputador}
                        produto="Notebook Acer Nitro 5"
                        precototal="R$5000,00"
                        preco_promocional="R$4900.00"
                        desconto="10%"
                    />

                    <Produto 
                        imagem={ImgA52}
                        produto="Smartphone A52"
                        precototal="R$1500,00"
                        preco_promocional="R$1200.00"
                        desconto="10%"
                    />

                    <Produto 
                        imagem={ImgIphone}
                        produto="Iphone 64GB"
                        precototal="R$9000,00"
                        preco_promocional="R$8900.00"
                        desconto="10%"
                    />

                    <Produto 
                        imagem={ImgG73}
                        produto="Headser G73"
                        precototal="R$900,00"
                        preco_promocional="R$800.00"
                        desconto="10%"
                    />

                    <Produto 
                        imagem={ImgSsd}
                        produto="SSD 120GB"
                        precototal="R$120,00"
                        preco_promocional="R$100.00"
                        desconto="10%"
                    />

                    <Produto 
                        imagem={ImgHD}
                        produto="HD Blue 1tb"
                        precototal="R$100,00"
                        preco_promocional="R$80.00"
                        desconto="10%"
                    />

                    <Produto 
                        imagem={ImgMouse}
                        produto="Mouse Redragon"
                        precototal="R$180,00"
                        preco_promocional="R$150.00"
                        desconto="10%"
                    />

                    <Produto 
                        imagem={ImgGabinete}
                        produto="Gabinete"
                        precototal="R$500,00"
                        preco_promocional="R$400.00"
                        desconto="10%"
                    />

                    <Produto 
                        imagem={ImgTeclado}
                        produto="Teclado Alienware"
                        precototal="R$1000,00"
                        preco_promocional="R$900.00"
                        desconto="10%"
                    />

                    <Produto 
                        imagem={ImgMonitor}
                        produto="Monitor 144hz"
                        precototal="R$1200,00"
                        preco_promocional="R$1000.00"
                        desconto="10%"
                    />

                    <Produto 
                        imagem={ImgMesa}
                        produto="Desktop I9"
                        precototal="R$5000,00"
                        preco_promocional="R$4400.00"
                        desconto="10%"
                    />

                    <Produto 
                        imagem={ImgCadeira}
                        produto="Cadeira Gamer Led"
                        precototal="R$1400,00"
                        preco_promocional="R$1200.00"
                        desconto="10%"
                    />
                </div>
            </div>
        </div>
    )
}

export default Produtos