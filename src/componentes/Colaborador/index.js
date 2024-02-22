import "./Colaborador.css"
import { IoMdCloseCircle } from "react-icons/io";

const Colaborador = ({ aoDeletar, colaborador, corDeFundo,aoEditar }) => {
    var corSecundaria = { backgroundColor: corDeFundo }
    return (
        <section className="colaborador">
            <IoMdCloseCircle
                size={25}
                className="deletar"
                onClick={() => aoDeletar(colaborador.id)}
            />

            <div class='cabecalho' style={corSecundaria}>

                <img src={colaborador.imagem} alt={colaborador.nome} />
            </div>
            <div className='rodape'>
                <h4>{colaborador.nome} </h4>
                <h5>{colaborador.cargo}</h5>
                <button onClick={() => aoEditar(colaborador.id)}>Editar</button>
                <button onClick={() => aoDeletar(colaborador.id)}>Deletar</button>
            </div>

        </section>
    )
}
export default Colaborador;