"use client";

import { useState } from "react";

export default function DarkMode() {
  const [mode, setMode] = useState(false);
  const [bgcolor, setBgcolor] = useState("#CACACA");

  return (
    <>
      <div
        className="w-full h-dvh"
        style={{ backgroundColor: mode ? "#000000" : "#e5e5e5" }}
      >
        <div className="w-2/5 mx-auto py-20">
          <h2 className="text-4xl font-bold text-blue-900 text-center pt-8 pb-12">
            Dark/Light Mode Toggle
          </h2>

          <div className="w-full text-center">
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                onChange={() => setMode(!mode)}
                checked={mode}
              />
              <div className="w-11 h-6 bg-gray-400 rounded-full peer-checked:bg-green-600 transition-colors relative">
                <div
                  className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform peer-checked:translate-x-full ${
                    mode ? "right-0.5" : "left-0.5"
                  }`}
                ></div>
              </div>
              <span
                className={`ml-3 text-lg font-bold ${
                  mode ? "text-white" : "text-black"
                }`}
              >
                {mode ? "Dark Mode" : "Light Mode"}
              </span>
            </label>
          </div>
        </div>
      </div>
    </>
  );
}
