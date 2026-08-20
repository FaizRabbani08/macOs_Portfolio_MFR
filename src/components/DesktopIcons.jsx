import { dockApps } from '#constants'

const DesktopIcons = ({ onOpen }) => (
	<section className="desktop-icons" aria-label="Desktop applications">
		{dockApps.filter(({ canOpen }) => canOpen).slice(0, 4).map(({ id, name, icon }) => (
			<button type="button" className="desktop-icon" key={id} onClick={() => onOpen(id)}>
				<img src={`/images/${icon}`} alt="" />
				<span>{name}</span>
			</button>
		))}
	</section>
)

export default DesktopIcons
