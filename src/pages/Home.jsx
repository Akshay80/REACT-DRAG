import React from 'react'
import Boxes from '../components/Boxes'
import Comet from '../components/Comet'
import Footer from '../components/Footer'
import FriendsBlog from '../components/FriendsBlog'
import GetStart from '../components/GetStart'
import Header from '../components/Header'
import Services from '../components/Services'
import Testimonial from '../components/Testimonial'
import Video from '../components/Video'

export default function Home() {
  return (
    <>
        <Header/>
        <Video></Video>
        <Boxes></Boxes>
        <Services></Services>
        <Comet></Comet>
        <Testimonial></Testimonial>
        <FriendsBlog></FriendsBlog>
        <GetStart></GetStart>
        <Footer></Footer>
    </>
  )
}
