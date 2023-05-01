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


const ItemCardi = styled.div`
background-color: beige ;
min-height: 260px;
max-height: 260px;
max-width: 220px;
min-width: 220px;
margin-top: 10px;
margin-bottom: 10px;
border-radius: 18px;
overflow-x: hidden;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
position: relative;
transition-duration: 0.5s;
&:hover {
    scale: 1.1;
  }
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


const ContainerItem = styled.div`
display: flex;
flex-direction: column;
align-items: center;
p{
    color: white;
    font-weight: 800;
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