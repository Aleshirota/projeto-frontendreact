import { FiltroContainer } from "./styled"



const Filtro = (props) => {
    

    const onChangeValorMin = (event) => {props.setValorMin(event.target.value)}
    const onChangeValorMax = (event) => {props.setValorMax(event.target.value)}
    const onChangeBuscaNome = (event) => {props.setBuscaNome(event.target.value)}
    

    return (

        <FiltroContainer>

            <div className="Filtro">
                <h1>Filtro</h1>
                <form>
                <p>{props.nome}</p>
                    <ol>
                        <li>
                            <label for="valorMin">Valor mínimo:</label>
                            <input
                                type="number"
                                name="valorMin"
                                id="valorMin"
                                value={props.valorMin}
                                onChange={onChangeValorMin}
                                ></input>
                        </li>
                        <li>
                            <label for="valorMax">Valor máximo:</label>
                            <input
                                type="number"
                                name="valorMax"
                                id="valorMax"
                                value={props.valorMax}
                                onChange={onChangeValorMax}
                            ></input>
                        </li>
                        <li>
                            <label for="buscaNome">Busca por Nome:</label>
                            <input 
                            type="text" 
                            name="buscaNome" 
                            id="buscaNome"
                            value={props.buscaNome}
                            onChange={onChangeBuscaNome}
                            ></input>
                        </li>
                    </ol>
                </form>
{/* <p>{props.valorMin}</p> */}
            </div>

        </FiltroContainer>

    );
}

export default Filtro;

