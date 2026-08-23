import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Code2, MapPin, Zap } from "lucide-react";

const DynamicNotch = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="dynamic-notch-wrap">
      <motion.div
        layout
        className="dynamic-notch"
        animate={{ width: isExpanded ? 320 : 120, height: isExpanded ? 80 : 24 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        onHoverStart={() => setIsExpanded(true)}
        onHoverEnd={() => setIsExpanded(false)}
      >
        <AnimatePresence mode="wait">
          {!isExpanded ? (
            <motion.div key="compact" className="dynamic-notch-compact" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <span />
              <b>Faiz_System</b>
            </motion.div>
          ) : (
            <motion.div key="expanded" className="dynamic-notch-expanded" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
              <div><small>Status</small><strong>Ready to Build</strong></div>
              <div className="dynamic-notch-stats">
                <div><Zap size={14} /><small>Java 21</small></div>
                <div><MapPin size={14} /><small>Saudi Arabia</small></div>
                <div><Code2 size={14} /><small>React</small></div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default DynamicNotch;