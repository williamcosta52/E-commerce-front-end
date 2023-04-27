import styled from "styled-components";
import BackgroundSign from "../constants/BackgroundSign";
import { useState } from "react";

export default function SignUp() {
	const [name, setName] = useState([]);
	const [email, setEmail] = useState([]);
	const [password, setPassword] = useState([]);
	const [confirmPassword, setConfirmPassword] = useState([]);
	const [age, setAge] = useState([]);

	function SignUp() {
		const url = "localhost:5000/sign-up";
		const body = {
			name: name,
			email: email,
			password: password,
			age: age,
		};

		axios
			.post(url, body)
			.then((r) => console.log(r))
			.catch((e) => console.log(e));
	}

	return (
		<Container>
			<BackgroundSign />
			<Inputsdiv>
				<form onSubmit={SignUp}>
					<input
						placeholder="Nome"
						type="text"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
					<input
						placeholder="Email"
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<input
						placeholder="Senha"
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<input
						placeholder="Confirme a senha"
						type="password"
						value={confirmPassword}
						onChange={(e) => setConfirmPassword(e.target.value)}
					/>
					<input
						placeholder="Idade"
						type="number"
						value={age}
						onChange={(e) => setAge(e.target.value)}
					/>
					<button type="submit">Cadastrar</button>
				</form>
			</Inputsdiv>
		</Container>
	);
}
const Container = styled.div`
	display: flex;
	position: relative;
`;
const Inputsdiv = styled.div`
	display: flex;
	height: 500px;
	width: 200px;
	flex-direction: column;
	z-index: 1;
	position: absolute;
	left: 780px;
	top: 350px;
	input {
		width: 300px;
		height: 25px;
		background: #d9d9d9;
		margin: 10px 15px;
		border-radius: 5px;
		::placeholder {
			color: black;
			font-family: "Jua", sans-serif;
		}
	}
	button {
		width: 200px;
		height: 25px;
		background: #d9d9d9;
		margin: 10px 70px;
		border-radius: 5px;
		font-family: "Jua", sans-serif;
	}
`;
