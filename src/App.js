import React from 'react';
import Header from './MyComponent/Header';
import Main from './MyComponent/Main'
import Welcome from './MyComponent/Welcome';
import Marquee from './MyComponent/Marquee';
import Marquee1 from './MyComponent/Marquee1';
import VisitTemple from './MyComponent/VisitTemple';
import Gallery from './MyComponent/Gallery';
import Members from './MyComponent/Members';
import Subscribe from './MyComponent/Subscribe';
import Footer from './MyComponent/Footer';


import './App.css'; 


function App() {
  return (
    <>
      <Header/>
      <Main/>
      <Welcome/>
      <Marquee/>
      <Marquee1/>
      <VisitTemple/>
     <Gallery/>
      <Members/>
      <Subscribe/>
      <Footer/>
    </>
  );
}

export default App;
