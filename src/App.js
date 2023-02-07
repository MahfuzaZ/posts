import logo from './logo.svg';
import './App.css';
import Layout from "./components/Layout"
import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home"
import About from "./pages/About"
import Posts from "./pages/Posts"
import Contact from "./pages/Contact"
import Info from './pages/Info';
import { useState } from 'react';
import Comments from './pages/Comments';
import Context from './components/Context';

function App() {

  return (
   <Context>
     <div className="App">
      <Layout>
         <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/posts' element={<Posts/>}/>
            <Route path='/posts/:id' element={<Info/>}/>
            <Route path='/contact' element={<Contact/>}/>
         </Routes>
      </Layout>
    </div>
   </Context>
  );
}

export default App;
