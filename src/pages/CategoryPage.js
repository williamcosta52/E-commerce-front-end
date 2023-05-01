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


    function mostrarCategorias() {
		if (flex === "none") {
			setFlex("flex");
		} else {
			setFlex("none");
		}
	}



    return (
        <>
            <Header />
            <Main>
            <CategoriasContainer>
					<Título onClick={mostrarCategorias}>Categorias</Título>
					<ListaCategorias flex={flex}>
						{categorias.map((categoria, i) => (
							<Link to={`/categoria/${categoria.category}`}> <li key={i}>{categoria.category}</li></Link>
						))}
					</ListaCategorias>
				</CategoriasContainer>



                <NomeDaCategoria>
                    <h1>{categoria}</h1>
                </NomeDaCategoria>
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
background-color: #808080;
width: 100vw;
height: 100vh;
margin-top: 120px;
padding-top: 25px;
display: flex;
flex-direction: column;
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
    align-self: center;
`;

const Título = styled.h1`
	align-self: center;
	justify-self: center;
	font-weight: 800;
	margin-bottom: 25px;
	margin-top: 20px;
`;