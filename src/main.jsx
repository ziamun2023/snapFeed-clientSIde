import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/home/Home.jsx';
import Chatpage from './pages/chatPage/Chatpage.jsx';
import Signup from './pages/signup/Signup.jsx'
import Login from './pages/login/Login.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element:<App></App>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      }
    ]
  },
  {
    
      path:'/chat',
      element:<Chatpage></Chatpage>
    

  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<ChakraProvider>
<RouterProvider router={router} />
</ChakraProvider>
  </React.StrictMode>,
)
