import { ContatoStyle } from "../css/ContatoStyle" // Importa os estilos personalizados para o componente

const Contato = () => {
    return (
        <>
        <ContatoStyle> {/* Aplica os estilos CSS para o componente */}
            <section className="contatoSection"> {/* Seção para o formulário de contato */}
            <h1>Entre em Contato</h1>
                <form> {/* Formulário de contato */}
                    <input type="text" placeholder="Seu Nome" required /> {/* Campo para o nome */}
                    <input type="email" placeholder="Seu Email" required /> {/* Campo para o email */}
                    <input type="text" placeholder="Sua Mensagem" required /> {/* Campo para a mensagem */}
                    <button type="submit">Enviar Mensagem</button> {/* Botão para enviar o formulário */}
                </form>
            </section>
        </ContatoStyle>
        </>
    )
}

export default Contato
