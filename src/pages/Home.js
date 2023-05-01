import styled from "styled-components";
import Header from "../components/Header";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
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

	function mostrarCategorias() {
		if (flex === "none") {
			setFlex("flex");
		} else {
			setFlex("none");
		}
	}

	return (
		<PageContainer>
			<Header />
			<MainHome>
				<CategoriasContainer>
					<Título onClick={mostrarCategorias}>Categorias</Título>
					<ListaCategorias flex={flex}>
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
								image={item.image}
								name={item.name}
								price={item.price}/>
						

						))}
					</DisplayContainer>
				</TodoEstoqueContainer>
			</MainHome>
		</PageContainer>
	);
}

const PageContainer = styled.div`
	background-color: #808080;
	width: 100%;
	height: 100rem;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const MainHome = styled.main`
	width: 60%;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 120px;
`;

const ListaCategorias = styled.ul`
	display: ${(props) => props.flex};
	justify-content: center;
	flex-wrap: wrap;
	li {
		display: flex;
		height: 40px;
		min-width: 360px;
		margin-left: 10px;
		margin-right: 10px;
		margin-top: 5px;
		margin-bottom: 5px;
		background-color: #d9d9d9;
		align-items: center;
		justify-content: center;
	}
`;

const CategoriasContainer = styled.div`
	width: 80%;
	display: flex;
	flex-direction: column;
`;

const Título = styled.h1`
	align-self: center;
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
/*
const ContainerItem = styled.div`
display: flex;
flex-direction: column;
align-items: center;
p{
    color: white;
    font-weight: 800;
}
`*/