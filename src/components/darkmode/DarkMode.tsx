import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const DarkMode = () => {
  const { theme, setTheme } = useTheme();

  const handleThemeChange = () => {
    if (theme === "forest") {
      setTheme("cupcake");
    } else {
      setTheme("forest");
    }
  };

  return (
    <div className="flex w-full justify-between items-center">
      <p>Theme</p>

      <div className="flex gap-1">
        <Sun className="scale-75" />
        <input type="checkbox" value="forest" className="toggle theme-controller border-2" onChange={handleThemeChange} checked={theme === "forest"} />
        <Moon className="scale-75" />
      </div>
    </div>
  );
};

export default DarkMode;