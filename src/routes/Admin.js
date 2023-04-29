import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'

const Admin = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="Hello Admin!" text="Hope you are doing well:) Lets do some work."/>
      
      <Footer/>
    </div>
  )
}

export default Admin
