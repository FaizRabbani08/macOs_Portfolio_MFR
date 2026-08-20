import { Check, Info, Monitor, Palette } from "lucide-react";
import { useSettingsStore } from "#store/settingsStore";

const WALLPAPERS = [
  { name: "Sonoma", url: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400" },
  { name: "Dark Abstract", url: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853" },
  { name: "Mountains", url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b" },
  { name: "Ocean", url: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0" },
];

const Settings = () => {
  const { wallpaper, setWallpaper, theme, setTheme } = useSettingsStore();

  return (
    <div className="settings-app">
      <aside className="settings-sidebar">
        <button type="button" className="settings-nav-item is-active"><Monitor size={18} /> Desktop</button>
        <button type="button" className="settings-nav-item"><Palette size={18} /> Appearance</button>
        <button type="button" className="settings-nav-item settings-nav-bottom"><Info size={18} /> About Me</button>
      </aside>

      <section className="settings-content">
        <h3>Wallpaper</h3>
        <div className="wallpaper-grid">
          {WALLPAPERS.map((item) => {
            const isSelected = wallpaper.includes(item.url);

            return (
              <button type="button" className="wallpaper-option" key={item.name} onClick={() => setWallpaper(item.url)}>
                <img src={`${item.url}?auto=format&fit=crop&w=300&q=80`} alt={item.name} />
                <span>{item.name}</span>
                {isSelected && <i><Check size={12} /></i>}
              </button>
            );
          })}
        </div>

        <h3>Appearance</h3>
        <div className="theme-options">
          <button type="button" className={theme === "light" ? "is-selected" : ""} onClick={() => setTheme("light")}>Light</button>
          <button type="button" className={theme === "dark" ? "is-selected" : ""} onClick={() => setTheme("dark")}>Dark</button>
        </div>
      </section>
    </div>
  );
};

export default Settings;