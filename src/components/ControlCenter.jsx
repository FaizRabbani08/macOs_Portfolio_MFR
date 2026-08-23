import { Bluetooth, Moon, Sun, Volume2, Wifi, Zap } from "lucide-react";
import { useSettingsStore } from "#store/settingsStore";

const ControlCenter = ({ isOpen }) => {
  const theme = useSettingsStore((state) => state.theme);
  const setTheme = useSettingsStore((state) => state.setTheme);

  if (!isOpen) return null;

  return (
    <section className="control-center" role="dialog" aria-label="Control Center">
      <div className="control-tile">
        <div><span className="control-icon"><Wifi size={16} /></span><p>Wi-Fi<small>Faiz_5G</small></p></div>
        <div><span className="control-icon"><Bluetooth size={16} /></span><p>Bluetooth<small>On</small></p></div>
      </div>
      <div className="control-tile">
        <button type="button" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
          <span className="control-icon">{theme === "dark" ? <Moon size={16} /> : <Sun size={16} />}</span>
          <p>{theme === "dark" ? "Dark" : "Light"}<small>Mode</small></p>
        </button>
      </div>
      <div className="control-sliders">
        <Sun size={16} aria-hidden="true" /><input type="range" aria-label="Brightness" defaultValue="80" />
        <Volume2 size={16} aria-hidden="true" /><input type="range" aria-label="Volume" defaultValue="70" />
      </div>
      <div className="control-system-info"><Zap size={20} /><span>Spring Boot Engine: Optimal</span><small>RAM: 32GB DDR5</small></div>
    </section>
  );
};

export default ControlCenter;