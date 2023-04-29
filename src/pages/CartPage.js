import styled from "styled-components";
import {useNavigate} from "react-router-dom"
import Header from "../components/Header"
import van from "../assets/van.png"
export default function CartPage(){
    const navigate=useNavigate();
    function Navigate(){
        navigate("/sign-up")
    }
    const PRODUTOS=[
        {
            url:{van},            
            name: "Coisa",            
            quantity: 1,            
            price: 50.00
            
        },{
            url:{van},            
            name: "Coisa2",            
            quantity: 2,            
            price: 50.00
            
        },{
            url:{van},            
            name: "Coisa3",            
            quantity: 2,            
            price: 50.00
            
        },{
            url:{van},            
            name: "Coisa4",            
            quantity: 4,            
            price: 50.00
            
        }
    ]

    return(
<Container>

<Header></Header>
<CartBox>
    <div className="top">
    <img src={van} alt=" van icon"className="van-icon"/>
    <div className="title-top">Itens retirados da van</div>
    </div>
    <ProductBox>
        <div className="product">
        <div className="left">            
        <div>Nome do produto</div>
        <img src={van}  onClick={Navigate}alt="product image"/>        
        </div>
        <div className="right">
        <div>Preço R$:25,00</div>
        <div>Qntde:2</div>        
        </div>
        </div>
        <div className="product">
        <div className="left">            
        <div>Nome do produto</div>
        <img src={van}  onClick={Navigate}alt="product image"/>        
        </div>
        <div className="right">
        <div>Preço R$:25,00</div>
        <div>Qntde:2</div>        
        </div>
        </div>
        <div className="product">
        <div className="left">            
        <div>Nome do produto</div>
        <img src={van}  onClick={Navigate}alt="product image"/>        
        </div>
        <div className="right">
        <div>Preço R$:25,00</div>
        <div>Qntde:2</div>        
        </div>
        </div>
        <div className="product">
        <div className="left">            
        <div>Nome do produto</div>
        <img src={van}  onClick={Navigate}alt="product image"/>        
        </div>
        <div className="right">
        <div>Preço R$:25,00</div>
        <div>Qntde:2</div>        
        </div>
        </div>
        <div className="product">
        <div className="left">            
        <div>Nome do produto</div>
        <img src={van}  onClick={Navigate}alt="product image"/>        
        </div>
        <div className="right">
        <div>Preço R$:25,00</div>
        <div>Qntde:2</div>        
        </div>
        </div>
        <div className="product">
        <div className="left">            
        <div>Nome do produto</div>
        <img src={van}  onClick={Navigate}alt="product image"/>        
        </div>
        <div className="right">
        <div>Preço R$:25,00</div>
        <div>Qntde:2</div>        
        </div>
        </div>
        <div className="product">
        <div className="left">            
        <div>Nome do produto</div>
        <img src={van}  onClick={Navigate}alt="product image"/>        
        </div>
        <div className="right">
        <div>Preço R$:25,00</div>
        <div>Qntde:2</div>        
        </div>
        </div>
        <div className="bottom"> Valor total: R$ 50,00</div>
    </ProductBox>
    <div className="button buy">Comprar</div>
    <div className="button browse">Pegar mais itens</div>  
    
</CartBox>
</Container>
    )
}
const Container=styled.div`
display:flex;
flex-direction: column;
align-items: center;
justify-content: end;
background-color: grey;
height: 100vh;
width: 100vw;
`
const CartBox=styled.div`
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
const ProductBox=styled.div`
width: 80%;
position: relative;
height: 50%;
display:flex;
flex-direction: column;
background-color: white;
overflow-y:auto;
.product{
    width: 100%;
    display: flex;
    background-color: white;
}
.left{
    width: 50%;
    display:flex;
    flex-direction: column;
    align-items: center;
    background-color: blue;
}
.left>img{
    width: 50px;
}
.right{
    width: 50%;
    background-color: red;
}
.bottom{
    width: 100%;
    height: 25px;
    background-color: green;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;   
    bottom:0px;
    left: 0px;
}
`
