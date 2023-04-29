import styled from "styled-components"
import logo from "../assets/logo.png"
import login from "../assets/login.png"
import van from "../assets/van.png"

export default function Header(){
    return (
<HeaderPersonalizado>
    <img src={logo}  alt=" Perigo Store logo"/>
    <input placeholder="Vasculhar"/>
    <img src={login} alt=" login icon"className="login-icon"/>
    <img src={van} alt=" van icon"className="van-icon"/>
</HeaderPersonalizado>
    )
}

const HeaderPersonalizado = styled.header`
height: 120px;
width: 100vw;
display:flex;
align-items: center;
justify-content: space-around;
background-color: #D9D9D9;
position: fixed;
top: 0px;
left: 0px;
img{
    height:80%;
}
input{
    width: 40%;
    height: 30%;
    border-radius: 5px;
    
}
.login-icon{
    height: 44%;
}
.van-icon{
    height: 35%; 
}
`