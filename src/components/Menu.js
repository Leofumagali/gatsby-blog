import * as React from "react"
import { Link } from "gatsby"

const Menu = () => {
  return (
    <nav className="mt-4 w-100 flex-1 space-between">
      <ul className="flex gap-8 underline">
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/posts">Posts</Link>
        </li>

        <li>
          <Link to="#news-letter">Newsletter</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Menu;