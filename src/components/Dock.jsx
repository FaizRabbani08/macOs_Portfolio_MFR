import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { dockApps } from "#constants";
import { Tooltip } from "react-tooltip";
import { useWindowStore } from "#store/windowStore";

const DockItem = ({ app, onOpen, windowState }) => {
    const ref = useRef(null);
    const distance = useMotionValue(Infinity);
    const sizeRaw = useTransform(distance, [-150, 0, 150], [56, 82, 56]);
    const size = useSpring(sizeRaw, { stiffness: 400, damping: 25, mass: 0.1 });
    const isActive = windowState?.isOpen && !windowState?.isMinimized;

    return (
        <motion.div
            ref={ref}
            className="dock-item"
            onMouseMove={(event) => {
                const rect = ref.current?.getBoundingClientRect();
                if (rect) distance.set(event.clientX - (rect.left + rect.width / 2));
            }}
            onMouseLeave={() => distance.set(Infinity)}
            style={{ width: size, height: size }}
        >
            <button
                type="button"
                className="dock-icon"
                aria-label={app.name}
                data-tooltip-id="dock-tooltip"
                data-tooltip-content={app.name}
                disabled={!app.canOpen}
                onClick={() => app.canOpen && onOpen(app.id)}
            >
                <img src={app.iconPath ?? `/images/${app.icon}`} alt={app.name} loading="lazy" className={app.canOpen ? "" : "opacity-60"} />
            </button>
            {isActive && <span className="dock-indicator" aria-label={`${app.name} is open`} />}
        </motion.div>
    );
};

const Dock = ({ onOpen })=> {
    const dockRef = useRef(null);
    const windows = useWindowStore((state) => state.windows);

    return (
        <section id="dock" aria-label="Application Dock">
            <div ref={dockRef} className="dock-container">
                {dockApps.map((app) => <DockItem key={app.id} app={app} onOpen={onOpen} windowState={windows[app.id]} />)}

            <Tooltip id ="dock-tooltip" place="top" className="tooltip" >

            </Tooltip>
            </div>
        </section>
    )

};
export default Dock;