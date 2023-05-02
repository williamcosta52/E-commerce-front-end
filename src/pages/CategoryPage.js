import styled from "styled-components";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import ItemCard from "../components/ItemCard";

export default function CategoryPage() {

    const url = `http://localhost:5000`
    const { category } = useParams()
    const [categoria] = useState(category)
    const [flex, setFlex] = useState("none");

	const [categorias, setCategorias] = useState([]);
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

        const carregarLista = axios.get(`${url}/categories`);
		carregarLista.then((res) => {
			setCategorias(res.data);
		});
		carregarLista.catch((err) => {
			console.log(err.response.data);
		});
    }, [])
const navigate = useNavigate()
function enterStore() {
	navigate("/login");
}
function goHome() {
	navigate("/home");
}
function goCart() {
	navigate("/cart");
}

    return (
        <>
            	<HeaderHome>
			<ion-icon onClick={enterStore} name="person-outline"></ion-icon>
				<h1 onClick={goHome}>PERIGO STORE</h1>
				<ion-icon onClick={goCart} name="cart-outline"></ion-icon>
			</HeaderHome>
            <Main>
            <CategoriasContainer>
					<ListaCategorias>
						{categorias.map((categoria, i) => (
							<Link to={`/categoria/${categoria.category}`}> <li key={i}>{categoria.category}</li></Link>
						))}
					</ListaCategorias>
				</CategoriasContainer>



                <Título>
                    <h1>{categoria}</h1>
                </Título>
                <ContainerDosItens>

                    {itensPorCategoria.map((item, i) => (
                        <ItemCard category={categoria}
                            name={item.name}
                            image={item.image}
                            price={item.price} />
                    ))}
                </ContainerDosItens>
            </Main>
        </>
    )
}

const Main = styled.main`
	width: 100vw;
	height: 100vh;
background-color: black;
	display: flex;
	flex-direction: column;
`

const HeaderHome = styled.header`
display: flex;
justify-content: space-evenly;
align-items: center;
height: 100px;
width: 100vw;
background-color: black;
border-bottom: 2px solid white;
h1{
	color: white;
	font-size: 60px;
	font-weight: 800;
	transition-duration: 0.5s;
	&:hover {
      scale: 1.2;
	  color: red;
    }

}
ion-icon{
	color: white;
	font-size: 50px;
	transition-duration: 0.5s;
	&:hover {
      scale: 1.3;
	  color: red;
    }
}
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
flex-wrap: wrap;
padding-top: 15px;
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


const Título = styled.h1`
	align-self: center;
	color: white;
	justify-self: center;
	font-weight: 800;
	margin-bottom: 25px;
	margin-top: 20px;
`;
