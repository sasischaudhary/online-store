import React,{useState} from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Header from "./Components/Header"
import Home from "./Components/Home"
import ProductDetails from './Components/ProductDetails';

const App = () => {
  
  const[search,setSearch]=useState("");
  function getInput(e){
    setSearch(e.target.value);
   
  }
  
  return (
    
      <Router>
      <Header search={search} getInput={getInput}/>
      <Routes>
      <Route path="/" element={<Home search={search}/>}/> 
      <Route path="/products/:id" element={  <ProductDetails /> }/>
     
      </Routes>
      </Router>
    
  )
}

export default App;