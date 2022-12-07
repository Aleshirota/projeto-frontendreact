import { CarrinhoContainer } from "./styled";
import Card from "../Card/Card";
import { priceFormatter } from "../../utils/priceFormatter";

function Carrinho(props) {
    const {deleteFromCart} = props
    
const total = props.cart.reduce(
    (acc, lista) => lista.value * lista.quantity + acc, 0)
   

    return (

        <CarrinhoContainer>

            <div className="Carrinho">
                <h1>Carrinho:</h1>
                <h2>Valor total: {priceFormatter.format(total)}</h2>
            </div>
            {props.cart.map(lista => (
                 <Card 
                 key={lista.id} 
                 lista={lista} 
                 isOnCartScreen={true}
                 deleteFromCart={deleteFromCart}
                 />

                 ))}
                  
        </CarrinhoContainer>
    );

}

export default Carrinho;

