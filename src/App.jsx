import { useState } from 'react'
import { Navbar, Welcome, Dock, PortfolioWindow } from './components'

function App() {
  const [activeWindow, setActiveWindow] = useState(null)
  const [isDark, setIsDark] = useState(false)

  const openWindow = (type) => {
    if (type === 'resume') {
      window.open('/files/resume.pdf', '_blank', 'noopener,noreferrer')
      return
    }
    setActiveWindow(type)
  }

  return (
    <main className={`desktop-shell ${isDark ? 'theme-dark' : ''}`}>
      <Navbar onOpen={openWindow} onToggleTheme={() => setIsDark((dark) => !dark)} />
      <Welcome />
      {activeWindow && <PortfolioWindow type={activeWindow} onClose={() => setActiveWindow(null)} />}
      <Dock onOpen={openWindow} />
    </main>
  ) 
}

export default App
