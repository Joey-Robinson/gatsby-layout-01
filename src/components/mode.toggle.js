import React from "react"
import useDarkMode from "use-dark-mode"
import sun from "../images/sun.svg"
import moon from "../images/moon.svg"

const ModeToggle = () => {
  const darkMode = useDarkMode(false)
  return (
    <div className="mode">
      <button onClick={darkMode.toggle}>
        {!darkMode.value ? (
          <img src={moon} alt="Dark Mode" />
        ) : (
          <img src={sun} alt="Light Mode" />
        )}
      </button>
    </div>
  )
}

export default ModeToggle
