import React, { useState } from 'react'
import styled from 'styled-components'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import slider1 from '../assets/slider1.jpg'
import slider2 from '../assets/slider2.jpg'
import slider3 from '../assets/slider3.jpg'
const Container=styled.div`
    width:100%;
    height:100vh;
    display:flex;
    position:relative;
    overflow:hidden;
`
const Arrow=styled.div`
    color:white;
    width:50px;
    height:50px;
    
    border-radius:50%;
    display:flex;
    align-items:center;
    justify-content:center;
    position:absolute;
    top:0;
    bottom:0;
    margin:auto;
    cursor:pointer;
    opacity:0.5;
     left:${props=>props.direction==="left" && '10px'};
     right:${props=>props.direction==="right" && '10px'};
     z-index:2;
`
const Wrapper=styled.div`
    height:100%;
    justify-content:center;
    display:flex;
    transition:all 1.5s ease
    transform:translateX(${(props)=>props.slideIndex * -100}vw);
`;
const Slide=styled.div`
    display:flex;
    align-items:center;
    width:100vw;
    height:100vh;
    background-color:black;
`
const ImgContainer=styled.div`
    flex:1;
    height:100%;
    padding:60px;
    
`
const InfoContainer=styled.div`
    flex:1;
    padding:50px;
    margin-left:20px;
`
const Image=styled.img`
    height:60%;
    margin-top:80px;
    border-radius:50%;
    margin-left:30px
`
const Title=styled.h1`
    font-size:60px;
    color:#ff3998; 
    font-family:Brush Script MT, Brush Script Std, cursive; 
`;
const Infoslide=styled.p`
    margin:50px 0px;
    font-size:20px;
    font-weight:500;
    color:white;
    letter-spacing:3px;
    font-family:Apple Chancery, cursive;
`;
const Button=styled.button`
    box-shadow:0 0 6px 0 rgba(157,96,212,0.5);
    padding:10px;
    font-size:20px;
    cursor:pointer;
    align-items:center;
    justify-content:center;
    border-radius:2rem;
    font-weight:bold;
    color:white;
    border:solid 3px transparent;
    background-image:linear-gradient(rgba(255,255,255,0),rgba(255,255,255,0)),linear-gradient(101deg,#ff3998,#ff8139)
`;
const Slider = () => {
    const [slideIndex,setSlideIndex]=useState(0);   
    const  handleClick=(direction)=>{
        if(direction==='left'){
            setSlideIndex(slideIndex>0?slideIndex-1:2);
        }else{
            setSlideIndex(slideIndex<2?slideIndex+1:0);
        }

    }
  return (
    <Container>
        <Arrow direction='left' onclick={()=>handleClick("left")}>
            <ArrowBackIosNewIcon/>
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
            <Slide>
            <ImgContainer>
                <Image src={slider1}></Image>
            </ImgContainer>
            <InfoContainer>
                <Title>Neonised Signs</Title>
                <Infoslide>We are here to light up your world with our elite handcrafted Neon Signs. 
                Consumer friendly prices and delivering all over India.
                </Infoslide>
                <Button>Shop Now</Button>
            </InfoContainer>
            </Slide>
            <Slide>
            <ImgContainer>
                <Image src={slider1}></Image>
            </ImgContainer>
            <InfoContainer>
                <Title>Neonised Signs</Title>
                <Infoslide>We are here to light up your world with our elite handcrafted Neon Signs. 
                Consumer friendly prices and delivering all over India.
                </Infoslide>
                <Button>Shop Now</Button>
            </InfoContainer>
            </Slide>
            <Slide>
            <ImgContainer>
                <Image src={slider1}></Image>
            </ImgContainer>
            <InfoContainer>
                <Title>Why US ?</Title>
                <Infoslide>We are here to light up your world with our elite handcrafted Neon Signs. 
                Consumer friendly prices and delivering all over India.
                </Infoslide>
                <Button>Shop Now</Button>
            </InfoContainer>
            </Slide>
        </Wrapper>
        <Arrow direction='right' onclick={()=>handleClick("right")}>
            <ArrowForwardIosIcon/>
        </Arrow>
    </Container>
  )
}

export default Slider