import React from "react"
import useDarkMode from "use-dark-mode"
import sun from "../../images/sun.svg"
import moon from "../../images/moon.svg"

const ModeToggle = () => {
  const darkMode = useDarkMode(false)
  return (
    <div
      className="mode"
      role="img"
      aria-label="Sun and Moon images to indicate what mode you're on"
    >
      <button onClick={darkMode.toggle}>
        {!darkMode.value ? (
          <img aria-label="Crescent Moon" src={moon} alt="Dark Mode" />
        ) : (
          <img aria-label="Sun Shining Brightly" src={sun} alt="Light Mode" />
        )}
      </button>
    </div>
  )
}

export default ModeToggle
