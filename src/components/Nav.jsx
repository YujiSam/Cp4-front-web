import { Link } from "react-router-dom" // Importa o componente Link para navegação entre rotas
import { NavStyle } from "../css/NavStyle" // Importa os estilos personalizados para a navegação

const Nav = () => {

    return (
        <>
        <NavStyle> {/* Aplica os estilos CSS personalizados */}
        <header className="nav"> {/* Cabeçalho para o menu de navegação */}
            <div className="container"> {/* Container para organizar os elementos */}
                <img src="src/assets/icon.png" alt="icon" className="icon"/> {/* Ícone do site */}
                <h1>MINOTAURO</h1> {/* Título principal do site */}
                <h2>EQUIPAMENTOS DE PRIMEIRA LINHA</h2> {/* Subtítulo descritivo */}
                <ul> {/* Lista de navegação */}
                    <Link to="/" className="navLink">Home</Link> {/* Link para a página inicial */}
                    <Link to="/sobre" className="navLink">Sobre</Link> {/* Link para a página "Sobre" */}
                    <Link to="/produtos" className="navLink">Produtos</Link> {/* Link para a página de produtos */}
                    <div className="cart-background"> {/* Fundo para o ícone do carrinho */}
                        <img src="src/assets/compra.jpg" alt="Carrinho de Compras" className="cart-icon"/> {/* Ícone do carrinho de compras */}
                    </div>
                </ul>
            </div>     
        </header>
        </NavStyle>
        </>
    )
}

export default Nav
