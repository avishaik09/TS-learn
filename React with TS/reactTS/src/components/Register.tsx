import { useState, FormEvent, useContext } from "react";
import { ThemeContext } from "./Context";

interface Person {
  name: string;
  age: number;
}
export default function Register() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [user, SetUser] = useState<Person>();
  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(user);
  };
  return (
    <div>
      <div
        className="boxContainer"
        style={{ backgroundColor: theme === "dark" ? "grey" : "yellow",color: theme ==="dark"?"white": "black"}}
      >
        <h1>Box</h1>
        <button onClick={toggleTheme}>Change Theme</button>

        <div>
          <form onSubmit={submitHandler}>
            <input
              type="text"
              placeholder="age"
              value={user?.age || ""}
              onChange={(e) =>
                SetUser((prev) => ({ ...prev!, age: Number(e.target.value) }))
              }
            />
            <input
              type="text"
              placeholder="name"
              value={user?.name || ""}
              onChange={(e) =>
                SetUser((prev) => ({ ...prev!, name: e.target.value }))
              }
            />
            <button type="submit">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
}
