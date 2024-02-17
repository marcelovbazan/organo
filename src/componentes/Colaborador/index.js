import "./Colaborador.css"

const Colaborador = (props) => {
    var corSecundaria = { backgroundColor: props.corDeFundo }
    return (
        <section className="colaborador">
            <div class='cabecalho' style={corSecundaria}>
                <img src={props.imagem} alt={props.nome} />
            </div>
            <div className='rodape'>
                <h4>{props.nome} </h4>
                <h5>{props.cargo}</h5>
            </div>

        </section>
    )
}
export default Colaborador;