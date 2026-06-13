"use client";

import { useEffect, useState } from "react";

export default function Cursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const moveCursor = (event: PointerEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("pointermove", moveCursor);
    return () => window.removeEventListener("pointermove", moveCursor);
  }, []);

  return (
    <div
      className="custom-cursor pointer-events-none fixed z-[2147483647] h-5 w-5 -translate-x-1/2 -translate-y-1/2"
      style={{ left: position.x, top: position.y }}
    >
      <div className="absolute left-1/2 top-0 h-5 w-px bg-orange-600" />
      <div className="absolute left-0 top-1/2 h-px w-5 bg-orange-600" />
    </div>
  );
}
