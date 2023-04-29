import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"



export default function LoginPage(){
    const url = `http://localhost:5000`

const navigate = useNavigate()
    const [email, setEmail]=useState("")
    const [password, setPassword]=useState("")

    

function fazerLogin(e){
    e.preventDefault()
    const body = {email, password}

    const login = axios.post(`${url}/login`, body)
    login.then((res)=> {
        console.log(res.data)
        setEmail("")
        setPassword("")
        navigate("/home")
    })
    login.catch((err)=> {
        console.log(err.response.data)
    })

}

    return (
<PageContainer>
<LoginContainer>
    <form onSubmit={fazerLogin}>
    <label htmlFor="email">EMAIL</label>
    <input
    id="email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    />
    <label htmlFor="senha">SENHA</label>
    <input
    id="senha"
    type="password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    />
    <button type="submit">Entrar</button>
    </form>
    <Link to="sing-up">Ainda não possui uma conta? Cadastre-se!</Link>
</LoginContainer>


</PageContainer>
    )
}
const PageContainer = styled.div`
background-color: #808080;
width: 100vw;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
`

const LoginContainer = styled.div`
margin: auto;
width: 30%;
height: 40%;
display: flex;
flex-direction: column;
justify-content: space-evenly;
form{
    height: 40%;
    display: flex;
    flex-direction: column;
}
label{
    margin-top: 25px;
    margin-bottom: 5px;
}
button{
    width: 15%;
    align-self: center;
    margin-top: 30px;
}
a{
    align-self: center;
}
`