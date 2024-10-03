// src/index.js

import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import customTheme from "./theme";
import { ChakraProvider } from '@chakra-ui/react';

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if using TypeScript


root.render(
  <React.StrictMode>
    <ChakraProvider theme={customTheme}>
        <Router>
            <App />
        </Router>
    </ChakraProvider>
  </React.StrictMode>,
);

reportWebVitals();
