"use client";

import { useState, useEffect } from "react";
import { Switch } from "@headlessui/react";

export function MyToggle() {
  // default mode is dark
  const [enabled, setEnabled] = useState(true);

  // on mount `localStorage` will handle the state
  // it will get `localStorage` only
  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      setEnabled(true);
    } else if (localStorage.getItem("theme") === "light") {
      setEnabled(false);
    }
  }, []);

  // then state will handle the theme mode

  // it will set `localStorage` only
  useEffect(() => {
    if (enabled) {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }

    // on unMount anable dark mode
    return () => {
      document.documentElement.classList.add("dark");
    };
  }, [enabled]);

  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={`relative inline-flex h-8 w-14 items-center rounded-full ${
        enabled ? "bg-white/20" : "bg-gray-300"
      }`}
    >
      <span
        className={`inline-block h-6 w-6 transform rounded-full bg-white transition ${
          enabled ? "translate-x-7" : "translate-x-1"
        }`}
      >
        {enabled ? (
          <i className="fa fa-moon text-gray-800"></i>
        ) : (
          <i className="fa fa-sun text-gray-800"></i>
        )}
      </span>
    </Switch>
  );
}

export default function BottomBar() {
  return (
    <div className="fixed z-[11] left-0 bottom-0 h-12 w-20 bg-white flex items-center justify-end rounded-tr-3xl p-2 dark:bg-vpurple-950 shadow-xl">
      <MyToggle />
    </div>
  );
}
