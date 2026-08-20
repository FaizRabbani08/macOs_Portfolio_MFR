import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Monitor } from "lucide-react";
import { useWindowStore } from "#store/windowStore";

const BootScreen = () => {
  const setBootComplete = useWindowStore((state) => state.setBootComplete);
  const progressBarRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const timeline = gsap.timeline({
      onComplete: () => {
        gsap.to(containerRef.current, {
          opacity: 0,
          duration: 0.5,
          onComplete: () => setBootComplete(true),
        });
      },
    });

    timeline.to(progressBarRef.current, {
      width: "100%",
      duration: 2.5,
      ease: "power2.inOut",
      delay: 0.5,
    });

    return () => timeline.kill();
  }, [setBootComplete]);

  return (
    <div ref={containerRef} className="boot-screen">
      <div className="boot-content">
        <Monitor className="boot-logo" size={80} aria-hidden="true" />
        <div className="boot-progress"><div ref={progressBarRef} /></div>
        <div className="boot-copy">
          <h1>Mohammad Faiz Rabbani</h1>
          <p>Full Stack Developer</p>
        </div>
      </div>
    </div>
  );
};

export default BootScreen;