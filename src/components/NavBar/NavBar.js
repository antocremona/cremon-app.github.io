import React from 'react'
import { CartWidget } from './CartWidget'
import './NavBar.scss'

export const NavBar = () => {

    return (
        <header className='navbar'>
            <h1>SAMARA</h1>

            <nav>
                <a href='#'>Ofertas</a>
                <a href='#'>Precios</a>
                <a href='#'>Recetas</a>
                <a href='#'>Contacto</a>
            </nav>
            <CartWidget/>
        </header>
    )
}