import Colaborador from "../Colaborador"
import "./Time.css"

const Time = ({ time, colaboradores, aoDeletar, mudarCor }) => {

    return (
        (colaboradores.length > 0) ? <section className="time"  style={{ backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: time.corPrimaria }}>
            <input onChange={evento => mudarCor(evento.target.value, time.nome)} value={Time.corSecundaria} type='color' className='input-cor' />
            <h3 style={{ borderColor: time.corSecundaria }} >{time.nome}</h3>
            <div className="colaboradores">
                {colaboradores.map((colaborador, indice) => {
                    return <Colaborador
                                corDeFundo={time.corSecundaria}
                                key={indice}
                                colaborador={colaborador}
                                aoDeletar={aoDeletar}
                        
                        />
                }
                )}
            </div>
        </section>
            : ''
    )
}

export default Time;