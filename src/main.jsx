import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
// import {Quiz,result} from './quiz.jsx';
import Quiz from './quiz/quiz.jsx';
import App from './App.jsx';
import Login from './login-2.jsx';



createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>
    <Routes>
      
      <Route path='/' element={<App />}></Route>
      
      <Route path='/quiz' element={<Quiz />}></Route>

      <Route path='/login' element={<Login />}></Route>
    
    </Routes>
  </BrowserRouter>
  </StrictMode>
)

// function main() {
//   return(
//     <>
//     <BrowserRouter>
//     <Routes>
      
//       <Route path='/' element={<App />}></Route>
      
//       <Route path='/quiz' element={<Quiz />}></Route>
    
//     </Routes>
//     </BrowserRouter>
//     </>
//   )
// }