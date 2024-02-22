import Botao from "../Botao";
import CampoTexto from "../CampoTexto/CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import { useState, useEffect } from "react";
import "./Formulario.css";
import { v4 as uuidv4 } from 'uuid';

const Formulario = (props) => {


    const [nome, setNome] = useState("");
    const [cargo, setCargo] = useState("");
    const [imagem, setImagem] = useState("");
    const [time, setTime] = useState("");

    useEffect(() => {
        if (props.colaboradorEditado) {
            setNome(props.colaboradorEditado.nome);
            setCargo(props.colaboradorEditado.cargo);
            setImagem(props.colaboradorEditado.imagem);
            setTime(props.colaboradorEditado.time);
        } else {
            setNome('');
            setCargo('');
            setImagem('');
            setTime('');
        }
    }, [props.colaboradorEditado]);


    const aoSalvar = (evento) => {
        evento.preventDefault();
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time,
            id: uuidv4()
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }
    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2> Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite seu nome..."
                    value={nome}
                    aoAlterado={valor => setNome(valor)}

                />
                <CampoTexto
                    obrigatorio={true}
                    label="Cargo"
                    placeholder="Digite seu Cargo..."
                    value={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <CampoTexto
                    label="Imagem"
                    placeholder="Caminho da Imagem..."
                    value={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa
                    obrigatorio={true}
                    label="Times"
                    opcoes={props.times}
                    value={time}
                    aoAlterado={valor => setTime(valor)}
                />
                <Botao>
                    Criar card
                </Botao>
            </form>
        </section>

    )
}

export default Formulario;