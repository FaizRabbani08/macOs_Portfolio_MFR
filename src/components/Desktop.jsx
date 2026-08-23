import { useState } from 'react'
import Dock from './Dock'
import DesktopIcons from './DesktopIcons'
import Navbar from './Navbar'
import Spotlight from './Spotlight'
import ControlCenter from './ControlCenter'
import Welcome from './Welcome'
import WindowManager from './WindowManager'
import { useWindowStore } from '#store/windowStore'
import { useContextMenu } from '#hooks/useContextMenu'

const Desktop = ({ wallpaper, theme }) => {
	const openWindowInStore = useWindowStore((state) => state.openWindow)
	const toggleSpotlight = useWindowStore((state) => state.toggleSpotlight)
	const [isControlCenterOpen, setIsControlCenterOpen] = useState(false)
	const { menu, handleContext } = useContextMenu()

	const handleOpenWindow = (type) => {
		if (type === 'search') {
			toggleSpotlight()
			return
		}

		if (type === 'resume') {
			window.open('/files/resume.pdf', '_blank', 'noopener,noreferrer')
			return
		}
		openWindowInStore(type)
	}

	return (
		<main
			className={`desktop-shell desktop-view ${theme === 'dark' ? 'theme-dark' : 'theme-light'}`}
			style={{ backgroundImage: `linear-gradient(135deg, rgb(7 12 24 / 0.18), rgb(7 12 24 / 0.08)), url("${wallpaper}")` }}
			onContextMenu={handleContext}
		>
			<Navbar onOpen={handleOpenWindow} onToggleTheme={() => undefined} onToggleControlCenter={() => setIsControlCenterOpen((open) => !open)} />
			<DesktopIcons onOpen={handleOpenWindow} />
			<Welcome />
			<WindowManager />
			<Spotlight />
			<ControlCenter isOpen={isControlCenterOpen} />
			<Dock onOpen={handleOpenWindow} />
			{menu.show && (
				<div className="desktop-context-menu" style={{ top: menu.y, left: menu.x }} onClick={(event) => event.stopPropagation()}>
					<button type="button">New Folder</button>
					<button type="button">Get Info</button>
					<hr />
					<button type="button" onClick={() => handleOpenWindow('settings')}>Change Wallpaper...</button>
					<button type="button">Show View Options</button>
				</div>
			)}
		</main>
	)
}

export default Desktop
