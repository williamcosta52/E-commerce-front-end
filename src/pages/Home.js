import styled from "styled-components";
import logo from "../assets/logo.png";
import van from "../assets/van.jpg";

export default function Home() {
	return (
		<Container>
			<Header>
				<Logo src={logo} alt="logo" />
				<input placeholder="Vasculhar" />
				<Cart src={van} alt="cart" />
			</Header>
		</Container>
	);
}

const Container = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	position: relative;
`;
const Header = styled.div`
	display: flex;
	position: fixed;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 120px;
	background: #d9d9d9;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	input {
		width: 700px;
		height: 30px;
		background: #ffffff;
		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
		border: none;
		border-radius: 4px;
		:focus {
			outline: 0;
		}
		::placeholder {
			color: black;
			letter-spacing: 1px;
			font-size: 15px;
			font-family: "Jua", sans-serif;
			padding-left: 5px;
		}
	}
`;
const Logo = styled.img`
	width: 330px;
	height: 115px;
	position: absolute;
	left: 20px;
	top: 10px;
`;
const Cart = styled.img`
	width: 75px;
	height: 60px;
	border-radius: 10px;
	position: absolute;
	right: 40px;
`;
