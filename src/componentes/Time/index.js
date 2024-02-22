import Colaborador from "../Colaborador"
import "./Time.css"
import hexToRgba from 'hex-to-rgba';

const Time = ({ time, colaboradores, aoDeletar, mudarCor,aoEditar,aoColaboradorEditado }) => {

    return (
        (colaboradores.length > 0) ? <section className="time"  style={{ backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: hexToRgba(time.cor, '0.6') }}>
            <input onChange={evento => mudarCor(evento.target.value, time.nome)} value={Time.cor} type='color' className='input-cor' />
            <h3 style={{ borderColor: time.cor }} >{time.nome}</h3>
            <div className="colaboradores">
                {colaboradores.map((colaborador, indice) => {
                    return <Colaborador
                                corDeFundo={time.cor}
                                key={indice}
                                colaborador={colaborador}
                                aoDeletar={aoDeletar}
                                aoEditar={aoEditar}
                                aoColaboradorEditado={aoColaboradorEditado}
                                
                        
                        />
                }
                )}
            </div>
        </section>
            : ''
    )
}

export default Time;