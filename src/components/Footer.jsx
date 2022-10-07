import styled from "styled-components";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinDropIcon from '@mui/icons-material/PinDrop';
import SettingsPhoneIcon from '@mui/icons-material/SettingsPhone';
import EmailIcon from '@mui/icons-material/Email';
import {mobile} from "../responsive";


const Container = styled.div`
display: flex;
${mobile({ flexDirection: "column" })}
`


const Left = styled.div`
flex: 1;
flex-direction:column;
padding: 20px 0px;`

const Logo = styled.h1`
`
const Desc = styled.p`
margin: 20px `

const Social = styled.div`
display: flex;`

const SocialIcon = styled.h1`
width: 40px;
height: 40px;
border-radius:50%;
color:white;
background-color: #${(props) => props.color};
display: flex;
align-items: center;
justify-content: center;
margin-right: 20px;`

const Center = styled.div`
flex: 1;
padding: 20px;
${mobile({ display: "none" })}`

const Title = styled.h3`
margin-bottom: 30px;`

const List = styled.ul`
margin: 0;
padding: 0;
list-style:none;
display: flex;
flex-wrap: wrap;`

const ListItem = styled.li`
width:50%;
margin-bottom: 10px;`

const Right = styled.div`
flex: 1;
padding: 20px;`

const ContactItem = styled.div`
margin-bottom: 20px;
display: flex;
align-items: center;
${mobile({ backgroundColor: "#fff8f8" })}`

const Payment = styled.img`
    width: 50%;
`;

const Footer = () => {
  return (
    <Container>
        <Left>
<Logo>SHOP</Logo>
<Desc>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat cupiditate nemo aut eaque inventore. Recusandae tenetur, ullam iure placeat rem temporibus soluta beatae? Facilis, voluptatibus?</Desc>
<Social>
    <SocialIcon color="3B5999">
<FacebookOutlinedIcon/>
    </SocialIcon>
   
    <SocialIcon color="E4405F">
    <InstagramIcon/>
</SocialIcon>
</Social>
        </Left>
<Center>
<Title>Useful Links</Title>
<List>
<ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
</List>
</Center>
<Right>
<Title>Contact</Title>
<ContactItem><PinDropIcon style={{marginRight:"10px"}}/>
Rivne Mlunisska str, 56</ContactItem>
<ContactItem> <SettingsPhoneIcon style={{marginRight:"10px"}}/>
+3 8 063 20 55 28</ContactItem>
<ContactItem> <EmailIcon style={{marginRight:"10px"}}/>
contact@lama.dev</ContactItem>
<Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
</Right>
    </Container>
  )
}

export default Footer