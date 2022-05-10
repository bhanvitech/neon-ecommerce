import React from 'react'
import Navbar from '../../shared/Navbar/Navbar';
import Announcements from './helper/Announcement/Announcements';
import Slider from './helper/Slider/Slider';
import './HomePage.scss';

export default function Home() {
  return (
    <div className="container">
        <Announcements/>
        <Navbar/>
        <Slider/>
    </div>
  )
}
