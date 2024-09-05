import styled from "styled-components";

export const ContatoStyle = styled.header `

.contatoSection{
    background-color: #ff4500;;
    padding: 12px;
    text-align: left;
}

.contatoSection h1{
    font-size: 2rem;
    padding: 24px 32px;
    border-bottom: thin solid #ddd;
}

input{
    background-color: black; 
    color: white; 
    padding: 10px 30px; 
    border: none;
    font-weight: bold; 
    margin: 10px;
}

button {
    background-color: black; 
    color: white; 
    padding: 10px 30px; 
    border: none; 
    font-weight: bold; /* Deixa o texto em negrito */
    display: flex; /* Define o botão como um contêiner flexível (flexbox) */
    flex-wrap: wrap; /* Permite que o conteúdo dentro do botão "quebre" em linhas se necessário */
    align-items: start; /* Alinha o conteúdo flexível ao topo do botão */
    margin: 10px; 
} 

`