import { CardContainer } from "./styles";
import { priceFormatter } from "../../utils/priceFormatter";
import imagem from "../../assets/carrinho-de-compras.jpg"


function Card(props) {

    return (

        <CardContainer>

            <section className="formatarCard">
                {
                    props.isOnProductsScreen
                    && <img src={props.lista.imageUrl} alt="imageUrl" />
                }
                {
                    props.isOnCartScreen
                    && <img src={imagem} alt="imagem" />
                }

                <p>Produto: {props.lista.name}</p>
                
                <p>{priceFormatter.format(props.lista.value)}</p>
                {
                    props.isOnProductsScreen
                    && <button onClick={() => props.addToCart(props.lista)} 
                    >Adicionar ao carrinho</button>
                }
                {
                    props.isOnCartScreen
                    && <h3> x {props.lista.quantity}</h3>
                }
                {
                    props.isOnCartScreen
                    && <button className="removerItem"
                    onClick={() => props.deleteFromCart(props.lista)}
                    >x</button>
                }
               
            </section>
        </CardContainer>
    );
}

export default Card;