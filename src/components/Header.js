import styled from "styled-components"
import logo from "../assets/logo.png"
import login from "../assets/login.png"
import van from "../assets/van.png"
import { useNavigate } from "react-router-dom";

export default function Header() {

    const navigate = useNavigate();
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
        <HeaderHome>
        <ion-icon onClick={enterStore} name="person-outline"></ion-icon>
            <h1 onClick={goHome}>PERIGO STORE</h1>
            <ion-icon onClick={goCart} name="cart-outline"></ion-icon>
        </HeaderHome>
    )
}

const HeaderHome = styled.header`
display: flex;
justify-content: space-evenly;
align-items: center;
height: 100px;
width: 100vw;
background-color: black;
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
}` 