import React from "react";
import styled from "styled-components";
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import { Badge } from "@mui/material";
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import {mobile} from "../responsive"

const Container = styled.div`
  height: 60px;
  margin-bottom:14px;
  ${mobile({height: "50px"})}
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom:15px;
  ${mobile({padding: "10px 1px"})}
`;

const Left = styled.div`
display: flex;
align-items:center;
flex:1`

const Language = styled.span`
font-size:14px;
cursor: pointer;
${mobile({display: "none"})}`

const SearchContainer = styled.div`
border: 0.4px solid lightblue;
display: flex;
align-items: center;
margin-left: 25px;
padding: 5px;`

const Input = styled.input`
border: none;
${mobile({width: "55px"})}
`

const Center = styled.div`
flex:1;
text-align:center`

const Logo = styled.h1`
font-weight:bold;
${mobile({FontSize: "26px"})}`


const Right = styled.div`
display: flex;
align-items: center;
justify-content: flex-end;
flex:1;
${mobile({flex:2,justifyContent: "center"})}`
;

const MenuItem = styled.div`
font-size:14px ;
margin-left: 25px;
cursor: pointer;
${mobile({fontSize: "13px",marginLeft: "10px"})}
`


const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left><Language>EN</Language>
        <SearchContainer>
        <Input style={{color: "gray", fontSize:"16px"}} placeholder="Search"></Input>
        <ManageSearchIcon></ManageSearchIcon>
        </SearchContainer>
        </Left>
        <Center><Logo>SHOP</Logo></Center>
        <Right>
        <MenuItem>REGISTER</MenuItem>
        <MenuItem>SING IN</MenuItem>
        <MenuItem>
        <Badge badgeContent={4} color="primary">
        <AddShoppingCartOutlinedIcon/>
        </Badge>
        </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
