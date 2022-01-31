import React, { Component } from 'react';
import { Routes ,Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Details from './components/Details';
import ProductList from './components/ProductList';
import Product from './components/Product'; 
import Default from './components/Default';
import Cart from './components/Cart/';
import Modal from './components/Modal';
import Page  from './components/Page';
import{ Signup} from './components/Signup'
import { Login } from './components/Login'
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar></Navbar>
        
        <Routes>
          <Route exact path="/" element={<ProductList/>} />
          <Route  path="/signup" element={<Signup/>}/>
          <Route  path="/login" element={<Login/>}/>
          <Route path="/details" element={<Details/>} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/page" element={<Page />} />
          <Route element={<Default/>} />
        
        </Routes>
        <Footer></Footer>
        
        <Modal/>
        
      </React.Fragment>
    );

  }
  
}

export default App;