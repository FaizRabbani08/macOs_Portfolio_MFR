import { useState } from "react";
import { motion } from "framer-motion";
import dayjs from "dayjs";
import { ChevronUp } from "lucide-react";
import { useWindowStore } from "#store/windowStore";

const LockScreen = () => {
  const setLocked = useWindowStore((state) => state.setLocked);
  const [isUnlocking, setIsUnlocking] = useState(false);

  const handleUnlock = () => {
    setIsUnlocking(true);
    window.setTimeout(() => setLocked(false), 800);
  };

  return (
    <motion.section
      className="lock-screen"
      initial={{ opacity: 1 }}
      animate={{ y: isUnlocking ? "-100%" : 0 }}
      transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
      role="dialog"
      aria-label="Lock Screen"
    >
      <div className="lock-clock"><h2>{dayjs().format("HH:mm")}</h2><p>{dayjs().format("dddd, MMMM D")}</p></div>
      <div className="lock-identity">
        <div className="lock-avatar">MF</div>
        <h1>Mohammad Faiz Rabbani</h1>
        <p>Transferable Iqama · Full Stack Developer</p>
        <button type="button" onClick={handleUnlock} aria-label="Click to Enter">
          <ChevronUp className="animate-bounce" />
          <span>Click to Enter</span>
        </button>
      </div>
      <div className="lock-skills"><span>Backend</span><span>Frontend</span><span>Cloud</span></div>
    </motion.section>
  );
};

export default LockScreen;