import styled from "styled-components";

export const NavStyle = styled.header `

.nav {
    padding: 20px 0;
    background-color: #292929;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
}

.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

h1 {
    font-size: 2.5rem;
    font-weight: bold;
    color: #ff4500; /* Laranja esportivo */
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    margin: 0;
}

h2 {
    font-size: 1.2rem;
    font-weight: 300;
    color: #ddd;
}

ul {
    list-style: none;
    display: flex;
    gap: 20px;
}

.navLink {
    text-decoration: none;
    font-size: 1rem;
    color: #f5f5f5;
    padding: 20px 15px;
    border-radius: 5px;
    transition: background 0.3s, color 0.3s;
}

.navLink:hover {
    background-color: #ff4500;
    color: #fff;
    box-shadow: 0 4px 8px rgba(255, 69, 0, 0.5);
}

.cart-background {
    background-color: #ff4500;
    border-radius: 8px;
    height: 50px;
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    align-items: center;
    transition: transform 0.3s ease;
    cursor: pointer; 
}

.cart-icon {
    width: 30px; 
    height: 30px; 
}

.cart-background:hover {
    transform: scale(1.05);
}

`