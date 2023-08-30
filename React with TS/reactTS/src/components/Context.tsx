import { ReactNode, createContext, useState } from "react";
import Theme from "./Theme";
import Register from "./Register";


type ThemeType = "light" | "dark";

interface ThemeContextType {
  theme: ThemeType;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType  >({
  theme: "light",
  toggleTheme: () => {},
});

export const ThemeSetter = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<ThemeType>("light");
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const Context = () => {
  return (
    <div>
       <ThemeSetter>
       <Register/>
       
        <Theme/>
      </ThemeSetter>
    </div>
  );
};

export default Context;
