import styled from "styled-components";
import Header from "../components/Header";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import ItemCard from "../components/ItemCard";

//COLOCA AKI

export default function Home() {
	const url = process.env.REACT_APP_API_URL

	const [categorias, setCategorias] = useState([]);
	const [estoque, setEstoque] = useState([]);

	useEffect(() => {
		const carregarLista = axios.get(`${url}/categories`);
		carregarLista.then((res) => {
			setCategorias(res.data);
		});
		carregarLista.catch((err) => {
			console.log(err.response.data);
		});

		const carregarEstoque = axios.get(`${url}/van/stock`);
		carregarEstoque.then((res) => {
			setEstoque(res.data);
		});
		carregarLista.catch((err) => {
			console.log(err.response.data);
		});
	}, []);

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
		<PageContainer>
			<HeaderHome>
			<ion-icon onClick={enterStore} name="person-outline"></ion-icon>
				<h1 onClick={goHome}>PERIGO STORE</h1>
				<ion-icon onClick={goCart} name="cart-outline"></ion-icon>
			</HeaderHome>


			<MainHome>
				<CategoriasContainer>
					<ListaCategorias>
						{categorias.map((categoria, i) => (
							<Link to={`/categoria/${categoria.category}`}> <li key={i}>{categoria.category}</li></Link>
						))}
					</ListaCategorias>
				</CategoriasContainer>







				<TodoEstoqueContainer>
					<Título>
						Todos os Itens
					</Título>
					<DisplayContainer>
						{estoque.map((item, i) => (
							<ItemCard key={i}
							category={item.category}
							name={item.name}
							price={item.price}
							image={item.image}/>

						))}
					</DisplayContainer>
				</TodoEstoqueContainer>
			</MainHome>
		</PageContainer>
	);
}


const HeaderHome = styled.header`
display: flex;
justify-content: space-evenly;
align-items: center;
height: 100px;
width: 100vw;
background-color: black;
background-image: url(https://st4.depositphotos.com/9147252/24037/v/450/depositphotos_240371772-stock-illustration-vintage-black-background-floral-elements.jpg);
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

const PageContainer = styled.div`
		background-color: black;
	width: 100%;
	height: 100rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	font-family: 'Castoro Titling', cursive;
font-family: 'IBM Plex Sans Arabic', sans-serif;
`;

const MainHome = styled.main`
	width: 100%;
background-color: black;
	display: flex;
	flex-direction: column;
	align-items: center;
	
`;

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
		transition-duration: 0.5s;
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
	  scale: 1.2;
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

const TodoEstoqueContainer = styled.div`
	width: 80%;
	min-height: max-content;
	display: flex;
flex-direction: column;
`;

const DisplayContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;

`