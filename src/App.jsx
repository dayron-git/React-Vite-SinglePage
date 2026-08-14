import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header'
import Footer from './components/footer'
import Menu from './components/Menu'
import Add from './components/Add'
import Features from './components/Features'
import Getapp from './components/Getapp'

function App() {
  const [count, setCount] = useState(0)

   const featureList = [
    {
      icon: 'bi-phone',
      title: 'Device Mockups',
      description: 'Ready to use HTML/CSS device mockups, no Photoshop required!',
    },
    {
      icon: 'bi-camera',
      title: 'Flexible Use',
      description: 'Put an image, video, animation, or anything else in the screen!',
    },
    {
      icon: 'bi-gift',
      title: 'Free to Use',
      description: 'As always, this theme is free to download and use for any purpose!',
    },
    {
      icon: 'bi-patch-check',
      title: 'Open Source',
      description: 'Since this theme is MIT licensed, you can use it commercially!',
    },
  ];

  return (
    <>
        <div className="dashboard">
            <Menu></Menu>
            <Header></Header>
            <Add></Add>
            <Features items={featureList}></Features>
            <Getapp></Getapp>
            <Footer></Footer>
        </div>
      
    </> 
  )
}

export default App
