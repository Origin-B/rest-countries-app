// hooks
import { useEffect, useState } from "react";

// icons
import { Sun, Moon } from "../icons/Icons";

export default function Header() {
  const [active, setActive] = useState(() => {
    const save = localStorage.getItem("mode");
    return save ? save === "true" : false;
  });

  useEffect(() => {
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(active ? "dark" : "light");
    localStorage.setItem("mode", `${active}`);
  }, [active]);

  return (
    <header className="bg-icon shadow-sm p-4 flex items-center">
      <div className="flex justify-between items-center container my-2 mx-auto">
        <h1 className="font-extrabold">where in the world?</h1>

        <button
          aria-label="click to change the mode"
          className="text-sm  capitalize flex items-center gap-1 font-semibold cursor-pointer p-1 border border-transparent hover:border-text transition-colors rounded-md"
          onClick={() => setActive(!active)}
        >
          {active ? (
            <>
              <Sun className="size-4 fill-text" /> light
            </>
          ) : (
            <>
              <Moon className="size-4 fill-text" /> dark
            </>
          )}{" "}
          mode
        </button>
      </div>
    </header>
  );
}
