import styled from "styled-components";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../components/Header";

export default function CategoryPage() {

    const url = `http://localhost:5000`
    const { category } = useParams()
    const [categoria] = useState(category)
    const [itensPorCategoria, setItensPorCategoria] = useState([])

    useEffect(() => {
        const carregarCategoria = axios.get(`${url}/categoria/${categoria}`)
        carregarCategoria.then((res) => {
            console.log(categoria)
            setItensPorCategoria(res.data)
        })
        carregarCategoria.catch((err) => {
            console.log(err.response.data)
        })
    }, [])

    console.log(itensPorCategoria)
    return (
        <>
            <Header />
            <Main>
                <NomeDaCategoria>
                    <h1>{categoria}</h1>
                </NomeDaCategoria>
                <ContainerDosItens>

                    {itensPorCategoria.map((item, i) => (
                        <Link to={`/${categoria}/${item.name}`} >
                            <ItemContainer key={i}>
                                <div><h2>{item.name}</h2></div>
                                <img src={item.image} />
                                <p>R${item.price},00</p>
                            </ItemContainer>  </Link>
                    ))}
                </ContainerDosItens>
            </Main>
        </>
    )
}

const Main = styled.main`
background-color: #808080;
width: 100vw;
height: 100vh;
padding-top: 25px;
`

const NomeDaCategoria = styled.div`
background-color: #D9D9D9;
width: 280px;
height: 60px;
margin-left: auto;
margin-right: auto;
display: flex;
justify-content: center;
align-items: center;
    h1{
        color: black;
        font-weight: 800;
    }
`
const ContainerDosItens = styled.div`
display: flex;
justify-content: space-evenly;
background-color:#808080;
flex-wrap: wrap;
padding-top: 15px;
`
const ItemContainer = styled.div`
background-color: #D9D9D9;
display: flex;
flex-direction: column;
align-items: center;
height: 300px;
width: 200px;
justify-content: space-evenly;
    div{
        width: 90%;
        height: 26px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    h2, p{
        color: black;
        font-weight: 600;
    }
    img {
        max-height: 80%;
        max-width: 90%;
    }
`