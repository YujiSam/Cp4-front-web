import styled from "styled-components";

export const HomeStyle = styled.header `

.banner {
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)), url(src/assets/imagem.jpg); /* Adiciona um gradiente sobreposto à imagem de fundo, com o gradiente escurecendo o topo da imagem e a imagem é usada como fundo */
    background-size: cover; /* Faz com que a imagem de fundo cubra todo o elemento, mantendo a proporção da imagem */
    background-position: center bottom; /* Posiciona a imagem de fundo no centro horizontalmente e na parte inferior verticalmente */
    height: 400px; /* Define a altura do banner como 400 pixels */
    display: flex; /* Usa flexbox para o layout interno do banner */
    justify-content: center; /* Centraliza horizontalmente o conteúdo dentro do banner */
    align-items: center; /* Centraliza verticalmente o conteúdo dentro do banner */
    text-align: center; /* Alinha o texto centralizado horizontalmente dentro do banner */
}


.divisor{
    background-color: #ff4500;
    line-height: 50px;
    padding-left: 20px;
    text-transform: uppercase;
    font-size: 1.2rem;
    color: #ddd;
}

.card-container {
    display: flex; 
    justify-content: center; 
    flex-wrap: wrap;                
    gap: 20px;                  
    padding: 20px;
}

.card {
    width: 300px;
    border: 1px solid #ddd;
    background-color: white;
    border-radius: 10px;
    text-align: left;
    padding: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
}

.card:hover {
    transform: scale(1.05); 
}

.card img {
    width: 100%;
    height: 300px;
    border-radius: 10px;
    object-fit: cover; 
}

.info{
    font-size: 0.8rem;
    margin: 10px;
}

.info:hover {
    font-weight: bold;
    color: #ff4500;
}

button {
    background-color: black; 
    color: white; 
    border: none;
    padding: 15px 30px; 
    font-size: 1.2rem; 
    font-weight: bold; 
    border-radius: 10px; 
    transition: all 0.3s ease; 
    cursor: pointer; 
}

button:hover {
    background-color: #ff4500; 
    transform: scale(1.05); 
}

button:active {
    transform: scale(0.95);
}

`