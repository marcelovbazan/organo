import Colaborador from "../Colaborador"
import "./Time.css"

const Time = (props) => {
    const css_corSecundaria = {
        backgroundColor: props.corSecundaria
    }

    const css_corPrimaria = {
        borderColor: props.corPrimaria
    }
    return (
        (props.colaboradores.length > 0) ? <section className="time" style={css_corSecundaria}>
            <h3 style={css_corPrimaria} >{props.nome}</h3>
            <div className="colaboradores">
                {props.colaboradores.map((colaborador, indice) => {
                    return <Colaborador
                                corDeFundo={props.corPrimaria}
                                key={colaborador.indice}
                                nome={colaborador.nome}
                                imagem={colaborador.imagem}
                                cargo={colaborador.cargo} 
                                aoDeletar={props.aoDeletar}
                        
                        />
                }
                )}
            </div>
        </section>
            : ''
    )
}

export default Time;