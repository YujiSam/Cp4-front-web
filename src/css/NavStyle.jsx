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
    margin: 0;
}

ul {
    list-style: none;
    display: flex;
    gap: 20px;
    margin: 0;
    padding: 0;
}

.navLink {
    text-decoration: none;
    font-size: 1rem;
    color: #f5f5f5;
    padding: 10px 15px;
    border-radius: 5px;
    transition: background 0.3s, color 0.3s;
}

.navLink:hover {
    background-color: #ff4500;
    color: #fff;
    box-shadow: 0 4px 8px rgba(255, 69, 0, 0.5);
}
`