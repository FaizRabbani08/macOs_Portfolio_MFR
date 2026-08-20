import { useEffect, useState } from "react";
import dayjs from "dayjs";

import { navLinks, navIcons } from "#constants";
const Navbar = ({ onOpen, onToggleTheme }) => {
    const [now, setNow] = useState(dayjs());

    useEffect(() => {
        const timer = window.setInterval(() => setNow(dayjs()), 60000);
        return () => window.clearInterval(timer);
    }, []);

  return (
    <nav aria-label="Desktop menu bar">
        <div className="menu-left">
            <img src="/images/logo.svg" alt="Logo" className="size-8" />
            <p className="menu-title">Mohammad Faiz Rabbani</p>

            <ul className="menu-links" aria-label="Portfolio links">
                                {navLinks.map(({ id, name, type}) => (
                    <li key={id}>
                                                <button type="button" onClick={() => onOpen(type)}>{name}</button>
                    </li>
                ))
                }
            </ul>

        </div>

        <div className="menu-right">
            <ul className="system-status" aria-label="System controls">
                                {navIcons.map(({ id, img}) => (
                    <li key={id}>
                                                <button
                                                    type="button"
                                                    className="icon-button"
                                                    onClick={() => id === 2 ? onOpen("search") : id === 4 ? onToggleTheme() : undefined}
                                                    aria-label={id === 2 ? "Open Spotlight" : id === 4 ? "Toggle theme" : `System status ${id}`}
                                                >
                                                    <img src={img} className="icon-hover" alt="" />
                                                </button>
                    </li>
                ))
                }   
            </ul>

            <time>
                {now.format("ddd, MMM D h:mm A")}
            </time>
        </div>
        
    </nav>
  );
};
export default Navbar;