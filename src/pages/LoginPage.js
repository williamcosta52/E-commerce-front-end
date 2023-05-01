import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import BackgroundSign from "../constants/BackgroundSign";
import { UserContext } from "../contexts/UserContexts";

export default function LoginPage() {
	const url = `http://localhost:5000`;
	const { setSessao } = useContext(UserContext)
	const {sessao} = useContext(UserContext)
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	function fazerLogin(e) {
		e.preventDefault();
		const body = { email, password };

		const login = axios.post(`${url}/login`, body);
		login.then((res) => {
			console.log(res.data);
			const {name, token} = res.data
			setSessao({name, token})
			localStorage.setItem("sessao", JSON.stringify({name, token}))
			console.log({sessao})
			setEmail("");
			setPassword("");
			navigate("/home");
		});
		login.catch((err) => {
			console.log(err.response.data);
		});
	}
	return (
		<PageContainer>
			<BackgroundSign />
			<LoginContainer>
				<form onSubmit={fazerLogin}>
					<label htmlFor="email">EMAIL</label>
					<input
						id="email"
						value={email}
						required
						onChange={(e) => setEmail(e.target.value)}
					/>
					<label htmlFor="senha">SENHA</label>
					<input
						id="senha"
						type="password"
						value={password}
						required
						onChange={(e) => setPassword(e.target.value)}
					/>
					<button type="submit">Entrar</button>
				</form>
				<Link to="/signup">Ainda não possui uma conta? Cadastre-se!</Link>
			</LoginContainer>
		</PageContainer>
	);
}
const PageContainer = styled.div`
	background-color: #808080;
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;
`;

const LoginContainer = styled.div`
	margin: auto;
	width: 30%;
	height: 40%;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	z-index: 1;
	left: 780px;
	top: 300px;
	position: absolute;
	form {
		height: 40%;
		display: flex;
		flex-direction: column;
		input {
			width: 300px;
			height: 90px;
			background: #d9d9d9;
			margin: 10px 15px;
			border-radius: 5px;
			::placeholder {
				color: black;
				font-family: "Jua", sans-serif;
			}
		}
		button {
			margin-right: 235px;
			border-radius: 5px;
			width: 40%;
			align-self: center;
			margin-top: 30px;
		}
	}
	label {
		margin-top: 25px;
		margin-bottom: 5px;
		margin: 5px 15px;
	}
	a {
		align-self: center;
		text-decoration: none;
		color: white;
		margin-right: 235px;
		margin-top: 20px;
	}
`;
