import { Link } from "react-router-dom";
import styled from "styled-components";

export default function ItemCard(props) {
    const {key, category, name, price, image} = props
    return (
        <ContainerItem>
        <ItemCardi key={key}><Link to={`/${category}/${name}`}>



            <img src={image} />
            <DivNome><h2>{name}</h2></DivNome>

        </Link>
        </ItemCardi>
        <p>R${price},00</p>
    </ContainerItem>
    )
}

const ContainerItem = styled.div`
display: flex;
flex-direction: column;
height: 380px;
width: 200px;
border-radius: 16px;
margin-left: 10px;
margin-right: 10px;
margin-bottom: 30px;
background-color: white;
align-items: center;
transition-duration: 0.5s;
p{
    color: black;
    font-weight: 800;
    font-size: 25px;
    z-index: 2;
}
&:hover {
      border: 3px solid red;
      scale: 1.1;
    }
`

const ItemCardi = styled.div`
background-color: beige ;
width: 100%;
height: 100%;
margin-bottom: 10px;
border-radius: 18px;
overflow-x: hidden;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
position: relative;
a{
    width: 100%;
    height: 100%;
margin-top: 5px;
margin-bottom: 5px;
overflow: hidden;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
}
img{
    height: 100%;
    
}
p{
    margin-top: -3px;
    font-size: 20px;
    width: 100%;
    background-color: white;
}
`



const DivNome = styled.div`
backdrop-filter: (15px);
height: 12%;
display: flex;
align-self: center;
justify-self: center;
background:rgba(255,255,255,0.8);
box-shadow: 0 0 10px 1px rgba(0,0,0,0.35);
-webkit-backdrop-filter: blur(15px);
position: absolute;
top: 10%;
right: 0px;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
a{
    text-decoration: none;
    color: black;
}
h2{
    font-size: 16px;
    font-weight: 800;
}
`