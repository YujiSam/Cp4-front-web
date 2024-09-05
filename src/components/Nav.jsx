import { Link } from "react-router-dom"
import { NavStyle } from "../css/NavStyle"

const Nav=()=>{
    
    return (
        <>
        <NavStyle>
        <header className="nav">
            <div className="container">
                <img src="src/assets/icon.png" alt="icon" className="icon"/>
                <h1>MINOTAURO</h1>
                <h2>EQUIPAMENTOS DE PRIMEIRA LINHA</h2>
                <ul>
                    <Link to="/" className="navLink">Home</Link>
                    <Link to="/sobre" className="navLink">Sobre</Link>
                    <Link to="/produtos" className="navLink">Produtos</Link>
                    <div className="cart-background">
                        <img src="src/assets/compra.jpg" alt="Carrinho de Compras" className="cart-icon"/>
                    </div>
                </ul>
            </div>     
        </header>
        </NavStyle>
        </>
    )
}

export default Nav