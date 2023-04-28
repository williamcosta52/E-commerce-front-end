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
background-color: #808080;
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
background-color: #808080;
a{
    width: 50%;
    height: 20%;
    background-color: #D9D9D9;
    display: flex;
    align-items: center;
    justify-content: center;
}
`