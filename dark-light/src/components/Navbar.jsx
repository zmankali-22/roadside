import { Link } from "react-router-dom";
import { useTheme } from "../contexts/theme-context";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  return (
    <nav className="navbar">
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <div className="mode-switch">
        <label>
          <input
            type="checkbox"
            checked={theme === "dark"}
            onChange={toggleTheme}
          />
          <span className="slider "></span>
        </label>
      </div>
    </nav>
  );
}
