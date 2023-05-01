import axios from "axios"
import styled from "styled-components"
import Header from "../components/Header"
import { Link, useParams } from "react-router-dom"
import { useContext, useState } from "react"
import { useEffect } from "react"
import { UserContext } from "../contexts/UserContexts"


export default function ItemPage() {
    const {category, item} = useParams()
    const url = `http://localhost:5000`

    const { sessao } = useContext(UserContext)


    const [categoria, setCategoria]=useState(category)
    const [itemBuscado, setItemBuscado] = useState({})

    useEffect(()=> {
        const carregarItem = axios.get(`${url}/${categoria}/${item}`)
        carregarItem.then((res) => {
            setItemBuscado(res.data)
            console.log(res.data)
        })
        carregarItem.catch((err) => {
            console.log(err.response.data)
        })
    }, [])

function addItem(item){
    if (sessao === null) {
        return alert("Você precisa fazer login para adicionar itens ao carrinho")
    } else {
    const config = { headers: { Authorization: `Bearer ${sessao.token}` } }

    const adicionarItem = axios.post(`${url}/home/cart`, item, config)
    adicionarItem.then((res) => {
console.log(res.data)
alert(res.data)
    })
    adicionarItem.catch((err)=> {
        console.log(err.response)
    })
}}

    return (
        <>
            <Header />
            <Main>
                <ContainerImagem>
                    <img src={itemBuscado.image} />
                </ContainerImagem>
                <ContainerDetalhes>
                    <div>
                    <h1><Link to={`/categoria/${categoria}`}> {categoria}</Link><br/>{itemBuscado.name}</h1>
                    </div>
                    <h2>RS{itemBuscado.price},00</h2>
                        <p>{itemBuscado.description}
                        </p>
                    <button onClick={()=>addItem(itemBuscado)}>Adicionar ao carrinho</button>
                </ContainerDetalhes>
            </Main>
        </>
    )
}

const Main = styled.div`
background-color: #808080;
margin-top: 120px;
display: flex;
justify-content: center;
padding-top: 30px;
width: 100vw;
height: 100vh;
`

const ContainerImagem = styled.div`
width: 30%;
height: 50%;
display: flex;
justify-content: center;
img{
    max-width: 90%;
    max-height: 90%;
}
`
const ContainerDetalhes = styled.div`
display: flex;
flex-direction: column;
width: 30%;
height: 40%;
div{
    height: 50px;
    width: 100%;
    display: flex;
    align-self: center;
    flex-direction: row;
    align-items: center;
}
h1{
    font-size: 28px;
}
h2{
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 20px;
    font-weight: 700;
}
p{
    font-size: 18px;
    font-weight: 500;
}
button{
    width: 30%;
    height: 30px;
    margin-top: 30px;
    align-self: center;
}
`