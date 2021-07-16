import React, { useState } from "react";
import Nav from "../components/Nav";
import Home from "../components/Home";
import Country from "../features/country/Country";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../components/theme';
import { GlobalStyles } from '../components/global';

function App() {
  const [theme, setTheme] = useState('light')

  return (
    <Router>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme }>
        <GlobalStyles />
      <Nav theme={theme} setTheme={setTheme} />
      <Route exact path="/" component={Home} />
      <Route path="/:alpha3Code" component={Country} />
      </ThemeProvider>
    </Router>
    
  );
}

export default App;
