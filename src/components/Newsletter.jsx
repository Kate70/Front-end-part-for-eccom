import styled from "styled-components";
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import {mobile} from "../responsive";


const Container = styled.div`
height:60vh;
background-color:#EFFCEF;
display: flex;
align-items: center;
justify-content: center;
flex-direction:column`;

const Title = styled.h1`
font-size: 70px;
margin: 20px;
${mobile({ fontSize: "40px" })}`

const Input = styled.input`
border:none;
flex:8;
padding-left:15px;
`

const Description= styled.div`
font-size: 24px;
font-weight: 300;
margin-bottom: 20px;
${mobile({ textAlign: "center" })}`

const Button = styled.button`
flex:2;
border:none;
background-color:teal;
color:white`


const InputContainer = styled.div`
width: 50%;
height: 40px;
background-color:white;
display: flex;
justify-content:space-between;
border: 1px solid gray;
${mobile({ width: "80%" })}`

const Newsletter = () => {
  return (
    <Container>
        <Title>NewsLetter</Title>
        <Description>Lorem ipsum dolor sit amet consectetur.</Description>
        <InputContainer>
        <Input placeholder="Your email"/>
        <Button>
        <SendOutlinedIcon/>
        </Button>
        </InputContainer>

    </Container>
  )
}

export default Newsletter