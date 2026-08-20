import Dock from './Dock'
import DesktopIcons from './DesktopIcons'
import Navbar from './Navbar'
import Spotlight from './Spotlight'
import Welcome from './Welcome'
import WindowManager from './WindowManager'
import { useWindowStore } from '#store/windowStore'

const Desktop = ({ wallpaper, theme }) => {
	const openWindowInStore = useWindowStore((state) => state.openWindow)
	const toggleSpotlight = useWindowStore((state) => state.toggleSpotlight)

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
		>
			<Navbar onOpen={handleOpenWindow} onToggleTheme={() => undefined} />
			<DesktopIcons onOpen={handleOpenWindow} />
			<Welcome />
			<WindowManager />
			<Spotlight />
			<Dock onOpen={handleOpenWindow} />
		</main>
	)
}

export default Desktop
