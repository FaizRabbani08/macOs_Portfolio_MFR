import { useState } from 'react'
import Dock from './Dock'
import DesktopIcons from './DesktopIcons'
import Navbar from './Navbar'
import Welcome from './Welcome'
import WindowManager from './WindowManager'

const Desktop = () => {
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
		<main className={`desktop-shell desktop-view ${isDark ? 'theme-dark' : ''}`}>
			<Navbar onOpen={openWindow} onToggleTheme={() => setIsDark((dark) => !dark)} />
			<DesktopIcons onOpen={openWindow} />
			<Welcome />
			<WindowManager type={activeWindow} onClose={() => setActiveWindow(null)} />
			<Dock onOpen={openWindow} />
		</main>
	)
}

export default Desktop
