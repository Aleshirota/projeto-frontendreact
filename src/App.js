import styled, { createGlobalStyle } from "styled-components";
import React, { useState } from "react"
import Filtro from "./components/Filtro/Filtro";
import Carrinho from "./components/Carrinho/Carrinho";
import Card from "./components/Card/Card";
import { ListaDeProdutos } from "./components/ListaDeProdutos/ListaDeProdutos";
import { MainContainer } from "./components/Main/styled";
import { useEffect } from "react";



const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const Container = styled.div`
margin: 10px;
padding: 5px;
color: #0F4C5C;
display: flex;
background-image: url("./imgs/fundo de tela.png");
justify-content: space-between;
`;

function App() {

  const [listas, setLista] = useState(ListaDeProdutos)


  const [valorMin, setValorMin] = useState(-Infinity)
  const [valorMax, setValorMax] = useState(Infinity)
  const [buscaNome, setBuscaNome] = useState("")
  const [ordenaAlfabeto, setordenaAlfabeto] = useState("")

  const [cart, setCart] = useState([])

  const deleteFromCart = (productToDelete) => {

    const newCart = [...cart]
    
    const indexFound = newCart.findIndex(
      (productInCart) => productInCart.id === productToDelete.id
    )
    newCart.splice(indexFound, 1)

    const stringficado = JSON.stringify(newCart)
    localStorage.setItem("local", stringficado)


    setCart(newCart)
    
  }

  const addToCart = (ProductToAdd) => {
    const newCart = [...cart]

    const productFound = newCart.find(
      (productInCart) => productInCart.id === ProductToAdd.id
    )
    if (!productFound) {
      const newProduct = { ...ProductToAdd, quantity: 1 }
      newCart.push(newProduct)

    } else {
      productFound.quantity++
    }

    const stringficado = JSON.stringify(newCart)
    localStorage.setItem("local", stringficado)
    


    setCart(newCart)

  }

  const verificarItem = () => {
if (localStorage.getItem("local")){
const guardarItem = localStorage.getItem ("local")
const pegarItem = JSON.parse(guardarItem)
setCart(pegarItem)
}
  }

  useEffect(() =>{
    verificarItem()
  }, [])

  const onChangeOrdenacao = (e) => {
    setordenaAlfabeto(e.target.value)
  }

  

  return (
    <>
      <GlobalStyle />
      <Container>

        <Filtro
          valorMin={valorMin}
          setValorMin={setValorMin}
          valorMax={valorMax}
          setValorMax={setValorMax}
          buscaNome={buscaNome}
          setBuscaNome={setBuscaNome}
        />
        <MainContainer>
          <div className="Main">
            <h1>Pedras preciosas</h1>
            <select value={ordenaAlfabeto} onChange={onChangeOrdenacao}>
              <option value="">Ordenação</option>
              <option value="crescente">Crescente</option>
              <option value="decrescente">Decrescente</option>
            </select>
          </div>

          {listas
            .filter((lista) => {
              return lista.name.toLocaleLowerCase().includes(buscaNome.toLocaleLowerCase())
            })
            .filter((lista) => {
              return lista.value >= valorMin
            })
            .filter((lista) => {
              return lista.value <= valorMax
            })

            .sort((a, b) => {
              if (ordenaAlfabeto === "crescente") {
                if (a.name < b.name) {
                  return -1

                } else {
                  return 1
                }

              } else if (ordenaAlfabeto === "decrescente") {
                if (a.name < b.name) {
                  return 1
                } else {
                  return -1
                }
              }

            })

            .map(lista => {
              return <Card
                addToCart={addToCart}
                deleteFromCart={deleteFromCart}
                key={lista.id}
                lista={lista}
                isOnProductsScreen={true}

              />
            })}


        </MainContainer>
        <Carrinho 
        cart={cart}
        deleteFromCart={deleteFromCart}
         />
      </Container>

    </>
  );
}

export default App;

