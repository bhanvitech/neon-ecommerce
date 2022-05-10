import React from 'react'
import styled from 'styled-components'
import NewReleasesOutlinedIcon from '@mui/icons-material/NewReleasesOutlined';

const Container=styled.div`
height:30px;
background-color:black;
color:#FF3131;
display:flex;
align-items:center;
justify-content:center;
font-size:16px;
font-weight:500;
text-align:center;
   text-transform: uppercase;
  background-image: linear-gradient(
    -225deg,
    #231557 0%,
    #44107a 29%,
    #ff1361 67%,
    #fff800 100%
  );
  background-size: auto auto;
  background-clip: border-box;
  background-size: 200% auto;
  background-clip: text;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textclip 2s linear infinite;
  


@keyframes textclip {
  to {
    background-position: 200% center;
  }
}


`

const Announcements = () => {
  return (
    <Container>
        <NewReleasesOutlinedIcon style={{marginRight:'15px'}}/>
        Super Deal Buy Two Neon Signs & Get Free Animated Sign From Us .</Container>
  )
}

export default Announcements