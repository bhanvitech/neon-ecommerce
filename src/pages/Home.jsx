import React from 'react'
import Navbar from '../components/Navbar'
import styled from 'styled-components'
import Announcements from '../components/Announcements'
import Slider from '../components/Slider'
const HomeContainer=styled.div`
    background-color:#FFF;
`


export default function Home() {
  return (
    <HomeContainer>
        <Announcements/>
        <Navbar/>   
        <Slider/>
    </HomeContainer>
  )
}
