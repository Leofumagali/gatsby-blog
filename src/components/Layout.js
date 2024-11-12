import * as React from "react"
import Footer from "./Footer"
import Header from "./Header"
import Newsletter from "./Newsletter"

const Layout = ({children}) => {
  return (
    <>
      <Header />

      <main className="">
        {children}
      </main>

      <Newsletter />
      <Footer />
    </>
  )
}

export default Layout;