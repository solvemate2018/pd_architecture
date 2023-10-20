import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from "@material-tailwind/react";
import Home from './sections/Home';
import About from './sections/About';
import Team from './sections/Team';
import Projects from './sections/Projects';
import Services from './sections/Services';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <Home></Home>
      <About></About>
      <Team></Team>
      <Projects></Projects>
      <Services></Services>
      <Contact></Contact>
      <Footer></Footer>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
