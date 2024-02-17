import "./ListaSuspensa.css"

const ListaSuspensa = (props) => {
    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className="lista-suspensa">
            <label>
                {props.label}
            </label>
            <select required={props.obrigatorio} onChange={aoDigitado} value={props.valor}>
                <option value="">Selecione uma opção</option>
                {props.opcoes.map((opcao, index) => (
                    <option key={opcao}>{opcao}</option>
                ))}
            </select>
        </div>
    )
}

export default ListaSuspensa