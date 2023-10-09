import { useState } from 'react'
import './App.css';
import Home from './Home';
import Header from './Header';
import Sidebar from './Sidebar';

function App() {
  const [OpenSidebarToggle,setOpenSidebarToggle]=useState(false)

  const OpenSidebar=()=>{
    setOpenSidebarToggle(!OpenSidebarToggle)
  }

  return (
   <div className='grid-container'>
    <Header OpenSidebar={OpenSidebar}/>
    <Sidebar OpenSidebarToggle={OpenSidebarToggle} OpenSidebar={OpenSidebar}/>
    <Home/>
   </div>
  )
}

export default App;
