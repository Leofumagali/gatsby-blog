import * as React from "react"
import { Link } from "gatsby"

const NotFoundPage = () => {
  return (
    <main>
      <h1>Página não encontrada</h1>

      <Link to="/">Volte ao início</Link>.
    </main>
  )
}

export default NotFoundPage;

export const Head = () => <title>Página não encontrada</title>
