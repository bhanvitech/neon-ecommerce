import React from 'react'
import styled from 'styled-components' 
import SearchIcon from '@mui/icons-material/Search';
import logo from '../assets/neonlogo1.png'
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';


const Container=styled.div`
    height :130px;
    background-color:#000

`;
const Wrapper=styled.div`
    padding 10px 20px;
    display:flex;
    justify-content:space-between;
    align-items:center;
`;
const Left=styled.div`
    flex:1;
    display:flex;
    align-items:center;
`;
const Center=styled.div`
   flex:1;
   align-items:center;  
   text-align:center;
`;
const Right=styled.div`
    flex:1;
    display:flex;
    align-items:center;
    justify-content:flex-end;
`;
const Language=styled.span`
    font-size:14px;
    cursor:pointer;
    color:white;
`
const SearhContainer=styled.div`
    border 1px solid lightgray;
    display:flex;
    align-items:center;
    margin-left:25px;
    padding:5px;  
    color:white  

`
const Input=styled.input`
    border:none;
    background-color:#000;
    color:white; 

`
const Logo=styled.img`
    height:110px;
    width:130px;
`
const MenuItem=styled.div`
    font-size:14px;
    cursor:pointer;
    color:white;
    margin-left:25px;
`

const Navbar = () => {
  return (
      <Container>
         <Wrapper>
            <Left>
                {/* <Language>EN </Language>
                <SearhContainer>
                    <Input/>
                    <SearchIcon style={{color:"gray",fontSize:'16px'}}/>
                </SearhContainer> */}
                <Logo src={logo} alt=''/>
            </Left>
            <Center>
            {/* <Logo src={logo} alt=''/> */}
            </Center>
            <Right>
                <MenuItem>ABOUT</MenuItem>
                <MenuItem>REGISTER</MenuItem>
                <MenuItem>SIGN IN</MenuItem>    
                <MenuItem> <Badge badgeContent={4} color="primary">
                                    <ShoppingCartOutlinedIcon/>
                        </Badge>
                </MenuItem>
            </Right>


         </Wrapper>
    </Container>
  )
}

export default Navbar