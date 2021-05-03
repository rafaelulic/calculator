import React from 'react'
import { useTheme, useThemeUpdate } from '../context/ThemeContext'
import { FiMoon, FiSun } from 'react-icons/fi'

const ToggleThemeButton = () => {
  const changeTheme = useThemeUpdate()
  const lightTheme = useTheme()
  return (
    <button className={`btn-toggle ${lightTheme ? 'light-theme' : 'dark-theme'}`} onClick={changeTheme}>{lightTheme ? <FiMoon/> : <FiSun /> }</button>
  )
}

export default ToggleThemeButton