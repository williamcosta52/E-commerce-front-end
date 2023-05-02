import styled from "styled-components";
import Header from "../components/Header";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import ItemCard from "../components/ItemCard";

//COLOCA AKI

export default function Home() {
	const url = `http://localhost:5000`;

	const [categorias, setCategorias] = useState([]);
	const [estoque, setEstoque] = useState([]);
	const [flex, setFlex] = useState("none");

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

`;

/*const ItemCard = styled.div`
background-color: beige ;
min-height: 260px;
max-height: 260px;
max-width: 220px;
min-width: 220px;
margin-top: 10px;
margin-bottom: 10px;
border-radius: 18px;
overflow-x: hidden;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
position: relative;
transition-duration: 0.5s;
&:hover {
    scale: 1.1;
  }
a{
    width: 100%;
    height: 100%;
margin-top: 5px;
margin-bottom: 5px;
overflow: hidden;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
}
img{
    height: 100%;
}
p{
    margin-top: -3px;
    font-size: 20px;
    width: 100%;
    background-color: white;
}
`*/
const DivNome = styled.div`
backdrop-filter: (15px);
height: 12%;
display: flex;
align-self: center;
justify-self: center;
background:rgba(255,255,255,0.8);
box-shadow: 0 0 10px 1px rgba(0,0,0,0.35);
-webkit-backdrop-filter: blur(15px);
position: absolute;
top: 10%;
right: 0px;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
a{
    text-decoration: none;
    color: black;
}
h2{
    font-size: 16px;
    font-weight: 800;
}
`

const ContainerItem = styled.div`
display: flex;
height: 200px;
flex-direction: column;
align-items: center;
p{
    color: white;
    font-weight: 800;
}
`