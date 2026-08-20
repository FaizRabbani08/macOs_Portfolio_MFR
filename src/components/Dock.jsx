import { useRef } from "react";
import gsap from "gsap";
import { dockApps } from "#constants";
import { Tooltip } from "react-tooltip";
import { useGSAP } from "@gsap/react";
import { useWindowStore } from "#store/windowStore";

const Dock = ({ onOpen })=> {
    const dockRef = useRef(null);
    const windows = useWindowStore((state) => state.windows);
    const focusWindow = useWindowStore((state) => state.focusWindow);

    useGSAP(() => {
        const dock = dockRef.current;
        if(!dock) return;

        const handleMouseMove = (e) => {
            const icons = dock.querySelectorAll(".dock-icon");
            icons.forEach((icon) => {
                const rect = icon.getBoundingClientRect();
                const distance = Math.abs(e.clientX - (rect.left + rect.width / 2));
                const intensity = Math.max(0, 1 - distance / 180);

                gsap.to(icon, {
                    scale: 1 + intensity * 0.65,
                    y: -15 * intensity,
                    duration: 0.2,
                    ease: "power3.out",
                    overwrite: true,
                });
            });
        };
        const resetIcons = () => {
            const icons = dock.querySelectorAll(".dock-icon");
            icons.forEach((icon) => gsap.to(icon, {
                    scale: 1,
                    y: 0,
                    duration: 0.25,
                    ease: "power3.out",
                }));
        };

        dock.addEventListener('mousemove', handleMouseMove)
        dock.addEventListener('mouseleave', resetIcons)

        return () => {
            dock.removeEventListener('mousemove', handleMouseMove)
            dock.removeEventListener('mouseleave', resetIcons)
            gsap.killTweensOf(dock.querySelectorAll(".dock-icon"))
        }
    }, { scope: dockRef })

    return (
        <section id="dock" aria-label="Application Dock">
            <div ref={dockRef} className="dock-container">
                        {dockApps.map((app) => {
                            const { id, name, icon, canOpen } = app;
                            const windowState = windows[id];
                            const isActive = windowState?.isOpen && !windowState?.isMinimized;

                            return (
                            <div key={id} className="dock-item">
                <button 
                type="button"
                className="dock-icon"
                aria-label={name}
                data-tooltip-id= "dock-tooltip"
                data-tooltip-content = {name}
                data-tooltip-delay-show = {150}
                disabled = {!canOpen}
                onClick={() => {
                    if (canOpen) {
                        if (windowState?.isOpen) {
                            focusWindow(id);
                        } else {
                            onOpen(id);
                        }
                    }
                }}
                >
                    <img 
                    src={`/images/${icon}`}
                    alt={name}
                    loading="lazy"
                    className={canOpen ? "": "opacity-60"}
                    />
                </button>
                                {isActive && <span className="dock-indicator" aria-label={`${name} is open`} />}
               </div>
                            );
                        })}

            <Tooltip id ="dock-tooltip" place="top" className="tooltip" >

            </Tooltip>
            </div>
        </section>
    )

};
export default Dock;