import styled from "styled-components";
import { useNavigate } from "react-router-dom"
import Header from "../components/Header"
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import van from "../assets/van.png"
import { UserContext } from "../contexts/UserContexts";




export default function CartPage() {
    const navigate = useNavigate();
    const url = `http://localhost:5000`;



    const { sessao } = useContext(UserContext)

    function Navigate() {
        navigate("/sign-up")
    }
    const [estoque, setEstoque] = useState([]);
    
    useEffect(() => {
        const config = { headers: { Authorization: `Bearer ${sessao.token}` } }
        console.log(sessao)
        console.log(sessao.token)
        console.log(config)
        const carregarEstoque = axios.get(`${url}/home/cart/show`, config);
		carregarEstoque.then((res) => {            
			setEstoque(res.data);
		});
    }, []);
    let totalValue=estoque.reduce((accumulator,currentValue)=>accumulator+(currentValue.price*currentValue.quantity),0)
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
                        <div key={item.price} className="left">
                            <div key={item.id}>{item.name}</div>
                            <img key={item.quantity} src={item.image}  alt={item.name} />
                        </div>
                        <div key={item.description}className="right">
                            <div key={item.image}>Preço R$:{item.price}</div>
                            <div key={item.name}>Quantidade:{item.quantity}</div>
                        </div>
                    </Product>))
                    }
                   


                </ProductBox>
                <ProductsValue> Valor total: R$ {totalValue}</ProductsValue>
                <div className="button buy">Comprar</div>
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
background-color: grey;
height: 100vh;
width: 100vw;
`
const CartBox = styled.div`
width: 60%;
height: 60%;
display: flex;
flex-direction: column;
align-items: center;
background:yellow;
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
    background-color:orange;
}
.browse{
    box-sizing: border-box;
    background-color:white;
    border:2px solid blue;
}
`
const ProductBox = styled.div`
width: 80%;
position: relative;
height: 50%;
display:flex;
flex-direction: column;
background-color: white;
overflow-y:scroll;
/* .product{
    width: 100%;
    display: flex;
    background-color: white;
    margin-bottom: 10px;
    margin-top: 10px;
}
.left{
    width: 50%;
    display:flex;
    flex-direction: column;
    align-items: center;    
}
.left>img{
    width: 50px;
}
.right{
    width: 50%;    
} */

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
    display: flex;
    background-color: white;
    margin-bottom: 10px;
    margin-top: 10px;
    .left{
    width: 50%;
    display:flex;
    flex-direction: column;
    align-items: center;    
}
.left>img{
    width: 50px;
}
.right{
    width: 50%;    
}
`