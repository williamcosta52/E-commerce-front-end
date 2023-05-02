import styled from "styled-components";
import { useNavigate } from "react-router-dom"
import Header from "../components/Header"
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import van from "../assets/van.png"
import { UserContext } from "../contexts/UserContexts";




export default function CartPage() {
    const navigate = useNavigate();
    const url = process.env.REACT_APP_API_URL



    const { sessao } = useContext(UserContext)

    function Navigate() {
        navigate("/sign-up")
    }
    const [estoque, setEstoque] = useState([]);
    
    useEffect(() => {
        const config = { headers: { Authorization: `Bearer ${sessao.token}` } }
        const carregarEstoque = axios.get(`${url}/home/cart/show`, config);
		carregarEstoque.then((res) => {            
			setEstoque(res.data);
		});
    }, [estoque]);
    let totalValue=estoque.reduce((accumulator,currentValue)=>accumulator+(currentValue.price*currentValue.quantity),0)

function tirarItem(id){

    const config = { headers: { Authorization: `Bearer ${sessao.token}` } }
    const deletarItem = axios.delete(`${url}/home/cart/delete/${id}`, config)
    deletarItem.then((res)=> {
        alert(res.data)
    })
    deletarItem.catch((err)=> {
        console.log(err.response.data)
    })
}

    return (
        <Container>

            <Header/>
            <CartBox>
                <div className="top">
                    <img src={van} alt=" van icon" className="van-icon" />
                    <div className="title-top">Itens retirados da van</div>
                </div>
                <ProductBox>
                    {estoque.map((item,i)=>
                    (<Product key={i}>
                        <div className="left">
                            <div ><h2>{item.name}</h2></div>
                            <img  src={item.image}  alt={item.name} />
                        </div>
                        <div className="right">
                            <div >Preço R$:{item.price},00</div>
                            <div onClick={() => tirarItem(item._id)}>Tirar item do carrinho</div>
                        </div>
                    </Product>))
                    }


                </ProductBox>
                <ProductsValue> Valor total: R$ {totalValue}</ProductsValue>
                <div className="button buy" onClick={() => alert(`Parabéns! Sua compra de ${totalValue} foi realizada com sucesso!`)}>Comprar</div>
                <div className="button browse"onClick={() => navigate("/home")}>Pegar mais itens</div>

            </CartBox>
        </Container>
    )
}
const Container = styled.div`
display:flex;
flex-direction: column;
align-items: center;
justify-content: end;
background-image: url(https://st4.depositphotos.com/9147252/24037/v/450/depositphotos_240371772-stock-illustration-vintage-black-background-floral-elements.jpg);
height: 100vh;
width: 100vw;
`
const CartBox = styled.div`
width: 60%;
height: 60%;
display: flex;
margin: auto;
flex-direction: column;
align-items: center;
background:white;
.top{
    width: 100%;
    display: flex;
    align-items: center;
    height: 20%;
    display: flex;
    
}
.top>img{
    margin-left: 7%;
    height: 70%;
}
.title-top{
    font-size: 25px;
    margin-left: 12%;
}
.button{
    width:50%;
    height:30px;
    margin-top: 4%;
    display:flex;
    align-items: center;
    justify-content: center;
    border-radius:5px ;
}
.buy{    
    background-color:gray;
}
.browse{
    box-sizing: border-box;
    background-color:white;
    border:2px solid black;
}
`
const ProductBox = styled.div`
width: 80%;
position: relative;
height: 50%;
display:flex;
flex-direction: column;
background-color: white;
border: 1px solid black;
overflow-y:scroll;
`
const ProductsValue = styled.div`
    width: 80%;
    height: 25px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top:1px solid  lightgrey ;
`
const Product = styled.div`
width: 100%;
border-bottom: 1px solid grey;
min-height: 150px;
    display: flex;
    background-color: plum;//white;
    align-items: center;
    margin-bottom: 10px;
    margin-top: 10px;
    .left{
        height: 100%;
        background-color: white;
    width: 50%;
    display:flex;
    flex-direction: column;
    align-items: center; 
    justify-content: space-evenly;
}
img{
    height: 50%;
}
.right{
    display:flex;
    flex-direction: column;
    align-items: center; 
    justify-content: space-evenly;
    background-color: white;
    height: 100%;
    width: 50%;    
}
`