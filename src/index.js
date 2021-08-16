import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from "@chakra-ui/react"
// import 'bootstrap/dist/css/bootstrap.min.css'
// import $ from 'jquery';
// import Popper from 'popper.js';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'jquery/dist/jquery.min.js';
// import 'bootstrap/dist/js/bootstrap.min.js';
// import 'bootstrap/dist/css/bootstrap.min.css';

import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  colors: {
    green: {
      50: "#08cea3",
      100: "#08cea3",
      200: "#08cea3",
      300: "#08cea3",
      400: "#08cea3",
      500: "#08cea3",
      600: "#08cea3",
      700: "#08cea3",
      800: "#08cea3",
      900: "#08cea3",
    },
  },
})

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
