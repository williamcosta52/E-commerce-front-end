import styled from "styled-components";
import fita from "../assets/fita.png";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

export default function BackgroundSign() {
	const navigate = useNavigate();
	return (
		<Container>
			<Img src={fita} alt="fita" />
			<Logo onClick={() => navigate("/home")} src={logo} alt="logo" />
		</Container>
	);
}
const Img = styled.img`
	width: 1920px;
	height: 912px;
`;
const Logo = styled.img`
	width: 500px;
	height: 200px;
	z-index: 1;
	position: absolute;
	top: 100px;
	left: 700px;
`;
const Container = styled.div`
	display: flex;
	position: relative;
`;
