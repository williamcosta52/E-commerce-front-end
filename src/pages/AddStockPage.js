import styled from "styled-components"
import Header from "../components/Header"
import { useState } from "react"
import axios from "axios"

export default function AddStockPage(){
    const url = process.env.REACT_APP_API_URL
    const [form, setForm] = useState({name: "", category: "", description:"", price:"", quantity: "", image:""})

    function handleForm(e){
        setForm({...form, [e.target.name]: e.target.value})
    }

    function enviarItem(e){
        e.preventDefault()
        const body = form
        const enviar = axios.post(`${url}/van/stock`, body)
        enviar.then((res)=> {
            alert(res.data)
            setForm({name: "", category: "", description:"", price:"", quantity: "", image:""})
        })
        enviar.catch((err)=> alert(err.response))
    }
    
    function cancelarItem(){
        setForm({})
        alert("Item cancelado")
    }
    return (
<PageContainer>
    <Header/>
    <FormContainer>
        <h1>Adicionar novo item</h1>
    <form onSubmit={enviarItem}>
        <InputBox>
        <label htmlFor="name">Nome do Item</label>

        <input
        id="name"
        required
        placeholder="Nome"
        name="name"
        value={form.name}
        onChange={handleForm}
        />
</InputBox>
<InputBox>
        <label htmlFor="category">Categoria do Item</label>
        <input
        id="category"
        placeholder="Categoria"
        name="category"
        value={form.category}
        onChange={handleForm}
        required/>
</InputBox>


<InputDes>
<label htmlFor="description">Descrição do Item</label>
        <textarea
        id="description"
        minLength={10}
        name="description"
        placeholder="Descrição"
        value={form.description}
        onChange={handleForm}
        required/>
</InputDes>


<InputBox>
        <label htmlFor="price">Preço do Item</label>
        <input
        type="number"
        required
        id="price"
        placeholder="Preço"
        name="price"
        value={form.price}
        onChange={handleForm}
        />
</InputBox>

<InputBox>
        <label htmlFor="quantity">Quantidade</label>
        <input 
        id="quantity"
        placeholder="Quantidade"
        type="number"
        name="quantity"
        value={form.quantity}
        onChange={handleForm}
        required/>
        </InputBox>

        <InputBox>
        <label htmlFor="image">URL da Imagem</label>
        <input id="image"
        placeholder="URL da Imagem"
        name="image"
        value={form.image}
        onChange={handleForm}
        required/>
        </InputBox>
        <ButtonsBox>
            <button tyoe="button" onClick={cancelarItem}>Cancelar</button>
            <button type="submit">Adicionar</button>
        </ButtonsBox>
    </form>
    </FormContainer>
</PageContainer>
    )
}

const PageContainer = styled.div`
background-color: black;
width: 100vw;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
`

const FormContainer = styled.div`
width: 60%;
height: 80%;
display: flex;
flex-direction: column;
background-color: white;
border-radius: 20px;
align-items: center;
margin-top: 80px;
h1{
    margin-top: 10px;
    margin-bottom: 10px;
}
form {
    height: 80%;
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}
`

const InputBox = styled.div`
background-color: #D9D9D9;
margin-bottom: 5px;
width: 100%;
height: 50px;
display: flex;
flex-direction: column;
label{
    height: 25px;
}
input{
    height: 26px;
}
`

const InputDes = styled.div`
background-color: #D9D9D9;
margin-bottom: 5px;
width: 100%;
height: 150px;
display: flex;
flex-direction: column;
label{
    height: 25px;
}
textarea{
    height: 100px;
}
`

const ButtonsBox = styled.div`
width: 60%;
height: 50px;
display: flex;
justify-content: space-evenly;
align-items: center;
button{
    height: 60%;
    width: 25%;
}
`