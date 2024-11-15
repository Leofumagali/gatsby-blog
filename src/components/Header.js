import * as React from "react"
import Menu from "./Menu";

const Header = () => {
  return (
    <header className="flex p-16 bg-[#f0f0f0] space-between">
      <Menu />
    </header>
  )
}

export default Header;