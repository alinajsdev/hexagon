import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom';
import Main from './Router/Main';

const breakpoints = {
  sm: '320px',
  md: '768px',
  lg: '960px',
  xl: '1200px',
  '2xl': '1536px',
}
const theme = extendTheme({ breakpoints })

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <ChakraProvider theme={theme}>
     <BrowserRouter>
     <Main/>
     </BrowserRouter>
    </ChakraProvider>
    
  </React.StrictMode>
);


