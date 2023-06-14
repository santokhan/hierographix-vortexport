"use client";

import { useState, useEffect } from "react";
import { Switch } from "@headlessui/react";

export function MyToggle() {
  const [enabled, setEnabled] = useState(false);

  function disableDark() {
    document.documentElement.classList.remove("dark");
    setEnabled(false);
  }
  function enableDark() {
    document.documentElement.classList.add("dark");
    setEnabled(true);
  }

  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      enableDark();
    } else {
      disableDark();
    }
    return () => {};
  }, []);

  function handleTheme() {
    if (enabled) {
      disableDark();
    } else {
      enableDark();
    }
  }

  return (
    <Switch
      checked={enabled}
      onChange={handleTheme}
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
    <div className="fixed left-0 bottom-0 h-12 w-20 bg-white flex items-center justify-end rounded-tr-3xl p-2 dark:bg-vpurple-950 shadow-xl">
      <MyToggle />
    </div>
  );
}
