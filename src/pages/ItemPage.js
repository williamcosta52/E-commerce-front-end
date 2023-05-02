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
    const [categorias, setCategorias] = useState([]);

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


        const carregarLista = axios.get(`${url}/categories`);
		carregarLista.then((res) => {
			setCategorias(res.data);
		});
		carregarLista.catch((err) => {
			console.log(err.response.data);
		});
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
            <CategoriasContainer>
					<ListaCategorias>
						{categorias.map((categoria, i) => (
							<Link to={`/categoria/${categoria.category}`}> <li key={i}>{categoria.category}</li></Link>
						))}
					</ListaCategorias>
				</CategoriasContainer>

            <Main>
                <ContainerImagem>
                    <img src={itemBuscado.image} />
                </ContainerImagem>
                <ContainerDetalhes>
                    <div>
                    <h1>
                        
                        <br/>{itemBuscado.name}</h1>
                    </div>
                    <h2>RS{itemBuscado.price},00</h2>
                        <p>
                            {itemBuscado.description}
                        </p>
                    <button onClick={()=>addItem(itemBuscado)}>Adicionar ao carrinho</button>
                </ContainerDetalhes>
            </Main>
        </>
    )
}

const Main = styled.div`
background-color: black;
display: flex;
justify-content: center;
padding-top: 30px;
width: 100vw;
height: 100vh;
font-family: 'Castoro Titling', cursive;
font-family: 'IBM Plex Sans Arabic', sans-serif;
`

const ContainerImagem = styled.div`
width: 35%;
height: 50%;
display: flex;
justify-content: center;
img{
    max-width: 90%;
    max-height: 90%;
    border-radius: 15%;
}
`
const ContainerDetalhes = styled.div`
display: flex;
flex-direction: column;
width: 30%;
height: 50%;
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
    color: white;
}
h2{
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 20px;
    font-weight: 700;
    color: white;
}
p{
    font-size: 18px;
    font-weight: 500;
    color: white;
}
button{
    width: 30%;
    height: 30px;
    margin-top: 30px;
    align-self: center;
}
`
const CategoriasContainer = styled.div`
	width: 100%;
	height: 100px;
	display: flex;
	flex-direction: row;
	overflow-x: auto;
`;

const ListaCategorias = styled.ul`
	display: flex;
	justify-content: space-around;
	li {
		color: white;
		display: flex;
		height: 100%;
		min-width: 360px;
		background-color: black;
		align-items: center;
		justify-content: center;
		border: 1px solid white;
		font-weight: 500;
	font-family: 'Castoro Titling', cursive;
font-family: 'IBM Plex Sans Arabic', sans-serif;
&:hover {
      border: 2px solid red;
    }
	}
`;