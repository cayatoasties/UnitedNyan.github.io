import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import Quiz from './quiz.jsx';
import App from './App.jsx';



// createRoot(document.getElementById('root')).render(
//   <BrowserRouter>
//     <Switch>
      
//       <Route path='/'>
//         <App />
//       </Route>
      
//       <Route path='/quiz'>
//         <Quiz />
//       </Route>
    
//     </Switch>
//   </BrowserRouter>,
// )

function main() {
  return(
    <>
    <BrowserRouter>
    <Switch>
      
      <Route path='/'>
        <App />
      </Route>
      
      <Route path='/quiz'>
        <Quiz />
      </Route>
    
    </Switch>
    </BrowserRouter>
    </>
  )
}