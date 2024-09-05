import styled from "styled-components";

export const NavStyle = styled.header `

.nav {
    padding: 20px 0; /* Espaçamento superior e inferior para a barra de navegação */
    background-color: #292929; /* Cor de fundo escura para a barra de navegação */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5); /* Sombra sutil ao redor da barra de navegação */
}

.container {
    display: flex; /* Usa flexbox para o layout */
    justify-content: space-between; /* Espaça os itens igualmente entre o início e o fim do container */
    align-items: center; /* Alinha os itens verticalmente ao centro */
    max-width: 1200px; /* Largura máxima do container */
    margin: 0 auto; /* Centraliza o container horizontalmente */
    padding: 0 20px; /* Espaçamento interno à esquerda e à direita */
}

h1 {
    font-size: 2.5rem; /* Tamanho da fonte para o título principal */
    font-weight: bold; /* Peso da fonte em negrito */
    color: #ff4500; /* Cor laranja esportiva para o título */
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* Sombra do texto para destacar o título */
    margin: 0; /* Remove a margem padrão */
}

h2 {
    font-size: 1.2rem; /* Tamanho da fonte para o subtítulo */
    font-weight: 300; /* Peso da fonte leve */
    color: #ddd; /* Cor do texto em cinza claro */
}

ul {
    list-style: none; /* Remove os marcadores da lista */
    display: flex; /* Usa flexbox para o layout da lista */
    gap: 20px; /* Espaçamento entre os itens da lista */
}

.navLink {
    text-decoration: none; /* Remove o sublinhado dos links */
    font-size: 1rem; /* Tamanho da fonte para os links */
    color: #f5f5f5; /* Cor do texto dos links */
    padding: 20px 15px; /* Espaçamento interno dos links */
    border-radius: 5px; /* Cantos arredondados para os links */
    transition: background 0.3s, color 0.3s; /* Transição suave para as mudanças de cor e fundo */
}

.navLink:hover {
    background-color: #ff4500; /* Cor de fundo laranja ao passar o mouse */
    color: #fff; /* Cor do texto branca ao passar o mouse */
    box-shadow: 0 4px 8px rgba(255, 69, 0, 0.5); /* Sombra ao redor do link ao passar o mouse */
}

.cart-background {
    background-color: #ff4500; /* Cor de fundo laranja para o ícone do carrinho */
    border-radius: 8px; /* Cantos arredondados para o fundo do ícone do carrinho */
    height: 50px; /* Altura do fundo do ícone do carrinho */
    width: 50px; /* Largura do fundo do ícone do carrinho */
    display: flex; /* Usa flexbox para centralizar o ícone */
    align-items: center; /* Alinha o ícone verticalmente ao centro */
    justify-content: center; /* Alinha o ícone horizontalmente ao centro */
    transition: transform 0.3s ease; /* Transição suave para o efeito de hover */
    cursor: pointer; /* Muda o cursor para uma mão ao passar sobre o ícone */
}

.cart-icon {
    width: 30px; /* Largura do ícone do carrinho */
    height: 30px; /* Altura do ícone do carrinho */
}

.cart-background:hover {
    transform: scale(1.05); /* Aumenta o tamanho do fundo do ícone do carrinho ao passar o mouse */
}

`
