import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useWindowStore } from "#store/windowStore";

const MissionControl = () => {
  const containerRef = useRef(null);
  const windows = useWindowStore((state) => state.windows);
  const toggleMissionControl = useWindowStore((state) => state.toggleMissionControl);
  const focusWindow = useWindowStore((state) => state.focusWindow);
  const openWindows = Object.values(windows).filter((windowState) => windowState?.isOpen);

  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      { backdropFilter: "blur(0px)", backgroundColor: "rgb(0 0 0 / 0)" },
      { backdropFilter: "blur(20px)", backgroundColor: "rgb(0 0 0 / 0.4)", duration: 0.4 }
    );
  }, []);

  return (
    <section
      ref={containerRef}
      className="mission-control-overlay"
      onClick={toggleMissionControl}
      role="dialog"
      aria-label="Mission Control"
    >
      <div className="mission-control-grid">
        {openWindows.length === 0 ? (
          <p className="mission-control-empty">No windows open</p>
        ) : (
          openWindows.map((windowState) => (
            <button
              type="button"
              key={windowState.id}
              className="mission-control-card"
              onClick={(event) => {
                event.stopPropagation();
                focusWindow(windowState.id);
                toggleMissionControl();
              }}
            >
              <span>{windowState.id}</span>
              <strong>{windowState.id.slice(0, 1)}</strong>
            </button>
          ))
        )}
      </div>
    </section>
  );
};

export default MissionControl;