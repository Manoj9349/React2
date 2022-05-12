import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes ,Route } from 'react-router-dom';
import Home from '../src/pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Data from './pages/Data';
import Login from './pages/Login';
import Register from './pages/Register';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './pages/footer';
import Test from './pages/test';
function App() {
return (
	<Router>
	<Navbar/>
                <Routes>
                        <Route exact path='/' element={< Home />}></Route>
                        <Route path='/home'  element={<Home/>} />
                        <Route path='/about'  element={<About/>} />
                        <Route path='/contact'  element={<Contact/>} />
                        <Route path='/data'  element={<Data/>} />
                        <Route path='/login'  element={<Login/>} />
                        <Route path='/register'  element={<Register/>} />
                        <Route path='/test'  element={<Test/>} />
                </Routes>
                <Footer/>
	</Router>
        
);
}

export default App;
