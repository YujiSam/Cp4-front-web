import { HomeStyle } from "../css/HomeStyle"

const Home=()=>{

    return (
        <>
        <HomeStyle>
        <section className="banner"></section>
        <section className="divisor">
            <h1>Tênis de Corrida</h1>
        </section>
            <div className="card-container">
                <div className="card">
                <img src="src/assets/tenis.jpg" alt="imagem" />
                    <div className="info">
                        <h2>Tênis Adidas</h2>
                        <h1 className="preco">Preço: $325,00</h1>
                        <h3>R$ 312,00 à vista com desconto via PIX</h3>
                        <button>Comprar</button>
                    </div>
                </div>
                <div className="card">
                <img src="src/assets/tenis1.jpg" alt="imagem" />
                    <div className="info">
                        <h2>Tênis Nike</h2>
                        <h1 className="preco">Preço: $290,00</h1>
                        <h3>R$ 273,00 à vista com desconto via PIX</h3>
                        <button>Comprar</button>
                    </div>
                </div>
                <div className="card">
                <img src="src/assets/tenis2.jpg" alt="imagem" />
                    <div className="info">
                        <h2>Tênis Puma</h2>
                        <h1 className="preco">Preço: $260,00</h1>
                        <h3>R$ 244,00 à vista com desconto via PIX</h3>
                        <button>Comprar</button>
                    </div>
                </div>
                <div className="card">
                <img src="src/assets/tenis3.jpg" alt="imagem" />
                    <div className="info">
                        <h2>Tênis Asics</h2>
                        <h1 className="preco">Preço: $230,00</h1>
                        <h3>R$ 212,00 à vista com desconto via PIX</h3>
                        <button>Comprar</button>
                    </div>
                </div>
            </div>
            <section className="divisor">
            <h1>Mundo do Futebol</h1>
            </section>
            <div className="card-container">
                <div className="card">
                <img src="src/assets/futebol.jpg" alt="imagem" />
                    <div className="info">
                        <h2>Chuteira Nemezis</h2>
                        <h1 className="preco">Preço: $425,00</h1>
                        <h3>R$ 389,00 à vista com desconto via PIX</h3>
                        <button>Comprar</button>
                    </div>
                </div>
                <div className="card">
                <img src="src/assets/futebol1.jpg" alt="imagem" />
                    <div className="info">
                        <h2>Bola Champions</h2>
                        <h1 className="preco">Preço: $290,00</h1>
                        <h3>R$ 273,00 à vista com desconto via PIX</h3>
                        <button>Comprar</button>
                    </div>
                </div>
                <div className="card">
                <img src="src/assets/futebol2.jpg" alt="imagem" />
                    <div className="info">
                        <h2>Camisa Brasil</h2>
                        <h1 className="preco">Preço: $260,00</h1>
                        <h3>R$ 244,00 à vista com desconto via PIX</h3>
                        <button>Comprar</button>
                    </div>
                </div>
                <div className="card">
                <img src="src/assets/futebol3.jpg" alt="imagem" />
                    <div className="info">
                        <h2>Kit Camisa e Chuteira Japão</h2>
                        <h1 className="preco">Preço: $680,00</h1>
                        <h3>R$ 644,00 à vista com desconto via PIX</h3>
                        <button>Comprar</button>
                    </div>
                </div>
            </div>
        </HomeStyle>
        </>
    )
}

export default Home