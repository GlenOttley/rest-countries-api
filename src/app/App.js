import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '../components/global'
import Home from '../components/Home'
import Nav from '../components/Nav'
import { darkTheme, lightTheme } from '../components/theme'
import Country from '../features/country/Country'

function App() {
  const [theme, setTheme] = useState('light')

  return (
    <Router>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles />
        <Nav theme={theme} setTheme={setTheme} />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/:alpha3Code' element={<Country />} />
        </Routes>
      </ThemeProvider>
    </Router>
  )
}

export default App
