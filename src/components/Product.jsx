import styled from "styled-components";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ManageSearchOutlinedIcon from '@mui/icons-material/ManageSearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

const Info = styled.div`
opacity:0 ;
width:100%;
height:100%;
position:absolute;
top:0;
left:0;
background-color:rgba(0,0,0,0.3);;
z-index:3;
display: flex;
align-items:center;
justify-content:center;
transition:all 0.4s ease;
cursor: pointer;
`

const Container = styled.div`
flex:1;
margin: 5px;
min-width: 280px;
height:350px;
display: flex;
align-items:center;
justify-content:center;
background-color:#FEFEF1;
position: relative;
&:hover ${Info}{
opacity:1 ;
}`

const Circle = styled.div`
width: 200px;
height: 200px;
border-radius:50%;
background-color: white;
position:absolute;
`

const Image=styled.img`
height:75%;
z-index:2;
`



const Icon = styled.div`
width: 40px;
height:40px;
border-radius:50%;
background-color:white;
display: flex;
align-items:center;
justify-content: center;
margin: 10px;
transition:all 0.4s ease ;
&:hover{
    background-color:#DDFEF1;
    transform: scale(1.1);
}

`



export const Product = ({item}) => {
  return (
    <Container>
        <Circle/>
        <Image src={item.img}/>
        <Info>
            <Icon>
            <ShoppingCartOutlinedIcon/>
                </Icon>
                <Icon>
                <ManageSearchOutlinedIcon/>
                </Icon>    
                <Icon>
               < FavoriteBorderOutlinedIcon/>
                </Icon>  
        </Info>
    </Container>
  )
}