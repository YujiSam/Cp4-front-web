import { ProdutosStyle } from "../css/ProdutosStyle"

const Produtos=()=>{

    return (
        <>
        <ProdutosStyle>
         <section className="divisor">
            <h1>Tênis de Corrida</h1>
        </section>
            <div className="card-container">
                <div className="card">
                <img src="src/assets/tenis.jpg" alt="imagem" />
                    <div className="info">
                        <h2>Tênis Adidas</h2>
                        <h1>Preço: $325,00</h1>
                        <h3>R$ 312,00 à vista com desconto via PIX</h3>
                        <button>Comprar</button>
                    </div>
                </div>
                <div className="card">
                <img src="src/assets/tenis1.jpg" alt="imagem" />
                    <div className="info">
                        <h2>Tênis Nike</h2>
                        <h1>Preço: $290,00</h1>
                        <h3>R$ 273,00 à vista com desconto via PIX</h3>
                        <button>Comprar</button>
                    </div>
                </div>
                <div className="card">
                <img src="src/assets/tenis2.jpg" alt="imagem" />
                    <div className="info">
                        <h2>Tênis Puma</h2>
                        <h1>Preço: $260,00</h1>
                        <h3>R$ 244,00 à vista com desconto via PIX</h3>
                        <button>Comprar</button>
                    </div>
                </div>
                <div className="card">
                <img src="src/assets/tenis3.jpg" alt="imagem" />
                    <div className="info">
                        <h2>Tênis Asics</h2>
                        <h1>Preço: $230,00</h1>
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
                        <h1>Preço: $425,00</h1>
                        <h3>R$ 389,00 à vista com desconto via PIX</h3>
                        <button>Comprar</button>
                    </div>
                </div>
                <div className="card">
                <img src="src/assets/futebol1.jpg" alt="imagem" />
                    <div className="info">
                        <h2>Bola Champions</h2>
                        <h1>Preço: $290,00</h1>
                        <h3>R$ 273,00 à vista com desconto via PIX</h3>
                        <button>Comprar</button>
                    </div>
                </div>
                <div className="card">
                <img src="src/assets/futebol2.jpg" alt="imagem" />
                    <div className="info">
                        <h2>Camisa Brasil</h2>
                        <h1 >Preço: $260,00</h1>
                        <h3>R$ 244,00 à vista com desconto via PIX</h3>
                        <button>Comprar</button>
                    </div>
                </div>
                <div className="card">
                <img src="src/assets/futebol3.jpg" alt="imagem" />
                    <div className="info">
                        <h2>Kit Camisa e Chuteira Japão</h2>
                        <h1>Preço: $680,00</h1>
                        <h3>R$ 644,00 à vista com desconto via PIX</h3>
                        <button>Comprar</button>
                    </div>
                </div>
            </div>
            <section className="divisor">
                <h1>Academia</h1>
            </section>
            <div className="card-container">
                <div className="card">
                <img src="src/assets/academia.jpg" alt="imagem" />
                    <div className="info">
                        <h2>Choqueteleira</h2>
                        <h1>21,60</h1>
                        <h3>R$ 19,35 à vista com desconto via PIX</h3>
                        <button>Comprar</button>
                    </div>
                </div>
                <div className="card">
                <img src="src/assets/academia1.jpg" alt="imagem" />
                    <div className="info">
                        <h2>Whey Growth Banana</h2>
                        <h1>Preço: $99,00</h1>
                        <h3>R$ 90,00 à vista com desconto via PIX</h3>
                        <button>Comprar</button>
                    </div>
                </div>
                <div className="card">
                <img src="src/assets/academia2.jpg" alt="imagem" />
                    <div className="info">
                        <h2>Creatina Monohidratada Growth</h2>
                        <h1 >Preço: $80,99</h1>
                        <h3>R$ 74,54 à vista com desconto via PIX</h3>
                        <button>Comprar</button>
                    </div>
                </div>
                <div className="card">
                <img src="src/assets/academia3.jpg" alt="imagem" />
                    <div className="info">
                        <h2>BCAA (120 CAPS)</h2>
                        <h1>Preço: $22,50</h1>
                        <h3>R$ 20,15 à vista com desconto via PIX</h3>
                        <button>Comprar</button>
                    </div>
                </div>
            </div>
            </ProdutosStyle>
        </>
    )
}

export default Produtos