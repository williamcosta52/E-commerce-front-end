import styled from "styled-components"
import Header from "../components/Header"
import { Link } from "react-router-dom"

export default function StockPage(){

    return (
<PageContainer>
    <Header/>
    <Main>
        <Link to="/home"><h1>Ir para Loja</h1></Link>
        <Link to="/van/stock"><h1>Adicionar Itens ao Estoque</h1></Link>
    </Main>
</PageContainer>
    )
}
const PageContainer = styled.div`
background-color: black;
width: 100vw;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
`
const Main = styled.main`
width: 80%;
height: 60%;
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
background-color: black;

a{
    background-color: black;
    width: 50%;
    height: 20%;
    border: 1px solid white;
    font-size: 25px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    transition-duration: 0.5s;
    &:hover {
      border: 2px solid red;
	  scale: 1.2;
    }
}
`