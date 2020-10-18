// Imports

import NavBar from "./navbar/NavBar"
import Footer from "./footer/Footer"

// Layout component

const Layout = props => (
    <>
        <NavBar color = {props.navColor} theme = {props.navTheme} />
        {props.children}
        <Footer />
    </>
)

// Exports

export default Layout