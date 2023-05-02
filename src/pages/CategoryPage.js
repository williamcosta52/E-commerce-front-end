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

	const [categorias, setCategorias] = useState([]);
    const [itensPorCategoria, setItensPorCategoria] = useState([])

    useEffect(() => {
		const carregarLista = axios.get(`${url}/categories`);
		carregarLista.then((res) => {
			setCategorias(res.data);
			console.log(res.data)
		});
		carregarLista.catch((err) => {
			console.log(err.response.data);
		});
        const carregarCategoria = axios.get(`${url}/categoria/${categoria}`)
        carregarCategoria.then((res) => {
            console.log(categoria)
            setItensPorCategoria(res.data)
        })
        carregarCategoria.catch((err) => {
            console.log(err.response.data)
        })

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

function goToThis(cat){
	navigate(`/categoria/${cat}`)
	console.log(`${cat}`)
	window.location.reload(true)
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
							<div onClick={()=>goToThis(categoria.category)}> <li key={i}>{categoria.category}</li></div>
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
background-image: url(https://st4.depositphotos.com/9147252/24037/v/450/depositphotos_240371772-stock-illustration-vintage-black-background-floral-elements.jpg);
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
	overflow-y: hidden;
	::-webkit-scrollbar {
  width: 12px;
  width: 12px;
}
::-webkit-scrollbar-track {
  border-radius: 8px;
  background-color: #000000;
  border: 1px solid #FFFFFF;
}
::-webkit-scrollbar-track:hover {
  background-color: #7C1E1E;
}
::-webkit-scrollbar-track:active {
  background-color: #881A1A;
}
::-webkit-scrollbar-thumb {
  border-radius: 20px;
  background-color: #000000;
  border: 1px solid #FFFFFF;
}
::-webkit-scrollbar-thumb:hover {
  background-color: #000000;
}
::-webkit-scrollbar-thumb:active {
  background-color: #000000;
}
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
transition-duration: 0.5s;
&:hover {
	scale: 1.2;
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
