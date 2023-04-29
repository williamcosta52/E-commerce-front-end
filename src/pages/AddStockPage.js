import styled from "styled-components"
import Header from "../components/Header"
import { useState } from "react"
import axios from "axios"
import { useEffect } from "react"
import { Link } from "react-router-dom"

export default function AddStockPage(){
    const url = `http://localhost:5000`

    const [form, setForm] = useState({name: "", category: "", description:"", price:"", quantity: "", image:""})

    function handleForm(e){
        setForm({...form, [e.target.name]: e.target.value})
    }
    const [categorias, setCategorias] = useState([])
    const [flex, setFlex] = useState("none")


    useEffect(() => {
        const carregarLista = axios.get(`${url}/categories`)
        carregarLista.then((res) => {
            setCategorias(res.data)
        })
        carregarLista.catch((err) => {
            console.log(err.response.data)
        })
    }, [])

    function mostrarCategorias() {
        if (flex === "none") {
            setFlex("flex")
        } else {
            setFlex("none")
        }
    }
    function enviarItem(e){
        e.preventDefault()
        const body = form
        const enviar = axios.post(`${url}/van/stock`, body)
        enviar.then((res)=> {
            alert(res.data)
            setForm({name: "", category: "", description:"", price:"", quantity: "", image:""})
        })
        enviar.catch((err)=> alert(err.response.data))
    }
    
    function cancelarItem(){
        setForm({})
        alert("Item cancelado")
    }


    return (
<PageContainer>
    <Header/>
    <CategoriasContainer>
                    <Título onClick={mostrarCategorias}>Categorias Presentes no estoque</Título>
                    <ListaCategorias flex={flex}>
                        {categorias.map((categoria, i) => (
                            <Link to={`/${categoria.category}`}> <li key={i}>{categoria.category}</li></Link>
                        ))}
                    </ListaCategorias>
                </CategoriasContainer>
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
background-color: white;
width: 100vw;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
`

const FormContainer = styled.div`
box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
//box-shadow: blue 0px 0px 0px 2px inset, rgb(255, 255, 255) 10px -10px 0px -3px, rgb(31, 193, 27) 10px -10px, rgb(255, 255, 255) 20px -20px 0px -3px, rgb(255, 217, 19) 20px -20px, rgb(255, 255, 255) 30px -30px 0px -3px, rgb(255, 156, 85) 30px -30px, rgb(255, 255, 255) 40px -40px 0px -3px, rgb(255, 85, 85) 40px -40px;
border-radius: 10px;
background-color: #fafafa;
margin-top: 15px;
width: 40%;
height: 80%;
display: flex;
flex-direction: column;
align-items: center;
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
margin-bottom: 5px;
width: 100%;
height: 50px;
display: flex;
flex-direction: column;
label{
    height: 25px;
}
input{
  //  box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px;
    background: #fafafa;
    height: 26px;
}
`

const InputDes = styled.div`
margin-bottom: 5px;
width: 100%;
height: 150px;
display: flex;
flex-direction: column;
label{
    height: 25px;
}
textarea{
  //  box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px;
    height: 100px;
    text-align: start;
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

const CategoriasContainer = styled.div`
width: 80%;
display: flex;
flex-direction: column;

`
const ListaCategorias = styled.ul`
display: ${props => props.flex};
justify-content: center;
flex-wrap: wrap;
li{
    display: flex;
height: 40px;
min-width: 360px;
margin-left: 10px;
margin-right: 10px;
margin-top: 5px;
margin-bottom: 5px;
background-color: #D9D9D9;
align-items: center;
justify-content: center;
}
`
const Título = styled.h1`
align-self: center;
justify-self: center;
font-weight: 800;
margin-bottom: 25px;
margin-top: 20px;
`
