import styled from "styled-components";
import fita from "../assets/fita.png";
import logo from "../assets/logo.png";

export default function BackgroundSign() {
	return (
		<Container>
			<Img src={fita} alt="fita" />
			<Logo src={logo} alt="logo" />
		</Container>
	);
}

const Img = styled.img`
	width: 1920px;
	height: 880px;
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
