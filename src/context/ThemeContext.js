import React, { createContext, useContext, useState } from 'react'


export const ThemeContext = createContext()
export const ThemeUpdateContext = createContext()

export const useTheme = () => {
  return useContext(ThemeContext)
}
export const useThemeUpdate = () => {
  return useContext(ThemeUpdateContext)
}

export const themes = {
  dark: {
    color: '#f8f8f8',
    backgroundColor: '#2b2b2b'
  },
  light: {
    color: '#2b2b2b',
    backgroundColor: '#f8f8f8'
  }
}

export const ThemeProvider = ({ children }) => {
  const [lightTheme, setLightTheme] = useState(true)
  
  const changeTheme = () => {
    setLightTheme(prevTheme => !prevTheme)
  }


  return (
    <ThemeContext.Provider value={ lightTheme }>
      <ThemeUpdateContext.Provider value={changeTheme}>
        { children }
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  )
}