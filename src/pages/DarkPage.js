import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function DarkPage() {
	const navigate = useNavigate();

	function exitStore() {
		navigate("/exit");
	}
	function enterStore() {
		navigate("/home");
	}

	return (
		<Dark>
			<h1>Você é policial?</h1>
			<DivButtons>
				<button onClick={exitStore}>Sim</button>
				<button onClick={enterStore}>Não</button>
			</DivButtons>
		</Dark>
	);
}

const Dark = styled.div`
	background-color: #000000;
	width: 1920px;
	height: 880px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	h1 {
		color: #ffffff;
		font-style: normal;
		font-weight: 400;
		font-size: 64px;
		line-height: 80px;
		text-align: center;
		font-family: "Jua", sans-serif;
	}
`;
const DivButtons = styled.div`
	display: flex;
	button {
		width: 121px;
		height: 53px;
		background: #d9d9d9;
		box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
		margin: 80px 80px;
	}
`;
