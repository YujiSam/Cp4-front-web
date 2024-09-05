import styled from "styled-components";

export const ProdutosStyle = styled.header `

.divisor {
    background-color: #ff4500; /* Cor de fundo laranja para a seção divisora */
    line-height: 50px; /* Altura da linha para o texto na seção divisora */
    padding-left: 20px; /* Espaçamento à esquerda do texto */
    text-transform: uppercase; /* Transforma o texto para maiúsculas */
    font-size: 1.2rem; /* Tamanho da fonte */
    color: #ddd; /* Cor do texto */
}

.card-container {
    display: flex; /* Usa flexbox para o layout dos cards */
    justify-content: center; /* Centraliza os cards horizontalmente */
    flex-wrap: wrap; /* Permite que os cards se movam para a linha seguinte se necessário */
    gap: 20px; /* Espaçamento entre os cards */
    padding: 20px; /* Espaçamento interno ao redor dos cards */
}

.card {
    width: 300px; /* Largura fixa para os cards */
    border: 1px solid #ddd; /* Borda fina e cinza ao redor do card */
    background-color: white; /* Cor de fundo branca para os cards */
    border-radius: 10px; /* Cantos arredondados nos cards */
    text-align: left; /* Alinha o texto à esquerda */
    padding: 10px; /* Espaçamento interno dentro do card */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra sutil ao redor do card */
    transition: transform 0.3s ease; /* Suaviza a transformação do card */
}

.card:hover {
    transform: scale(1.05); /* Aumenta o tamanho do card ao passar o mouse */
}

.card img {
    width: 100%; /* Faz com que a imagem ocupe toda a largura do card */
    height: 300px; /* Altura fixa para a imagem */
    border-radius: 10px; /* Cantos arredondados para a imagem */
    object-fit: cover; /* Garante que a imagem cubra a área sem distorção */
}

.info {
    font-size: 0.8rem; /* Tamanho da fonte para as informações do produto */
    margin: 10px; /* Espaçamento ao redor das informações */
}

.info:hover {
    font-weight: bold; /* Deixa o texto em negrito ao passar o mouse */
    color: #ff4500; /* Muda a cor do texto para laranja ao passar o mouse */
}

button {
    background-color: black; /* Cor de fundo preta para o botão */
    color: white; /* Cor do texto no botão */
    border: none; /* Remove a borda padrão do botão */
    padding: 15px 30px; /* Espaçamento interno do botão */
    font-size: 1.2rem; /* Tamanho da fonte no botão */
    font-weight: bold; /* Deixa o texto em negrito */
    border-radius: 10px; /* Cantos arredondados para o botão */
    transition: all 0.3s ease; /* Suaviza as mudanças de estado do botão */
    cursor: pointer; /* Muda o cursor para uma mão ao passar sobre o botão */
}

button:hover {
    background-color: #ff4500; /* Muda a cor de fundo do botão ao passar o mouse */
    transform: scale(1.05); /* Aumenta o tamanho do botão ao passar o mouse */
}

button:active {
    transform: scale(0.95); /* Reduz o tamanho do botão quando clicado */
}

`
