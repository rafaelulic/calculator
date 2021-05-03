import React from 'react'
import './assets/styles/App.css'
import Calculator from './components/Calculator'
import { ThemeProvider } from './context/ThemeContext'

const App = () => {
  return (
    <ThemeProvider>
      <div className="App">   
        <Calculator />        
      </div>
    </ThemeProvider>
  )
}

export default App
