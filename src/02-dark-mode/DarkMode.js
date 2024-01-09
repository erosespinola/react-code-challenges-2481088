import { useState } from "react"

export default function DarkMode () {
  const [isDarkMode, setIsDarkMode] = useState(false)
  return (
    <div className={`page ${isDarkMode ? 'dark-mode' : ''}`}>
      <button onClick={() => setIsDarkMode(true)} className='dark-mode-button'>Dark Mode</button>
      <button onClick={() => setIsDarkMode(false)} className='light-mode-button'>Light Mode</button>
    </div>
  )
}
