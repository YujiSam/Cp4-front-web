import { ContatoStyle } from "../css/ContatoStyle"

const Contato=()=>{
    
    return (
        <>
        <ContatoStyle>
            <section className="contatoSection">
            <h1>Entre em Contato</h1>
                <form>
                    <input type="text" placeholder="Seu Nome" required />
                    <input type="email" placeholder="Seu Email" required />
                    <input type="text" placeholder="Sua Mensagem" required />
                    <button type="submit">Enviar Mensagem</button>
                </form>
            </section>
        </ContatoStyle>
        </>
    )
}

export default Contato