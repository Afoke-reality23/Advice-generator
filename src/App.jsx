import React from "react";
import { useEffect, useState } from "react";
import btnIcon from "./assets/icon-dice.svg";
import desktopPattern from "./assets/pattern-divider-desktop.svg";
import mobilePattern from "./assets/pattern-divider-mobile.svg";
export default function App() {
  const [advice, setAdvice] = useState({
    para: "",
  });
  useEffect(() => {
    fetchAdvice();
  }, []);
  function fetchAdvice() {
    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((data) => {
        setAdvice((prev) => ({
          ...prev,
          para: `"${data.slip.advice}"`,
        })).catch((error) => {
          console.error("Error fetching advice:", error);
        });
      });
  }
  return (
    <div className="page-body">
      <div className="text">
        <h3>ADVICE TEST</h3>
        <p className="advice">{advice.para}</p>
        <img
          srcSet={`${mobilePattern} 480w,${desktopPattern} 800w`}
          sizes="(max-width:600px) 800px,480px"
        />

        <a onClick={fetchAdvice}>
          <img src={btnIcon} alt="" />
        </a>
      </div>
    </div>
  );
}
