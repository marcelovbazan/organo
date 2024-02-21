import "./Colaborador.css"
import { IoMdCloseCircle } from "react-icons/io";

const Colaborador = ({aoDeletar,colaborador,corDeFundo}) => {
    var corSecundaria = { backgroundColor: corDeFundo }
    return (
        <section className="colaborador">
            <IoMdCloseCircle  size={25} className="deletar" onClick={aoDeletar} />
                        <div class='cabecalho' style={corSecundaria}>
                <img src={colaborador.imagem} alt={colaborador.nome} />
            </div>
            <div className='rodape'>
                <h4>{colaborador.nome} </h4>
                <h5>{colaborador.cargo}</h5>
            </div>

        </section>
    )
}
export default Colaborador;