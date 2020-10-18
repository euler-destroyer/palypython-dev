// Imports

import { useState } from "react"

// Modules

import Link from "next/link"
import NavLink from "./NavLink"
import NavButton from "./NavButton"

// Nav dropdown links

const DropdownLink = props => (
    <>
        <Link href = {props.link}>
            <a className = "link">{props.name}</a>
        </Link>
        <style jsx>{`
            .link {
                font-size: 1.1rem;
                color: black;
                transition-duration: 200ms;
            }

            .link:hover {
                transform: translateY(-1px);
                color: rgb(50, 50, 50);
            }
        `}</style>
    </>
)

// Navbar dropdown

const NavDropdown = props => (
    <>
        <div className = "content">
            <div className = "close-btn" onClick = {props.toggleDropdown}>
                <i className = "fas fa-times"></i>
            </div>
            <div className = "link-title">Pages</div>
            <div className = "links">
                <DropdownLink link = "/about" name = "About" />
                <DropdownLink link = "/resources" name = "Resources" />
                <DropdownLink link = "/blog" name = "Blog" />
                <DropdownLink link = "/club" name = "Club" />
            </div>
        </div>
        <style jsx>{`
            .content {
                position: absolute;
                z-index: 99999;
                top: 24px;
                left: 5vw;
                width: 90vw;
                height: 200px;
                display: ${props.visible ? "block" : "none"};
                border-radius: 16px;
                background-color: #FFFFFF;
                padding: 24px 32px;
                opacity: ${props.visible ? 1 : 0};
                pointer-events: ${props.visible ? "auto" : "none"};
                box-shadow: 2px 2px 16px #000000;
            }

            .close-btn {
                position: absolute;
                top: 18px;
                right: 24px;
                cursor: pointer;
            }

            .link-title {
                font-size: 1.2rem;
                margin-bottom: 16px;
            }

            .links {
                display: grid;
                grid-template-columns: 1fr 1fr;
                grid-template-rows: 1fr 1fr;
                grid-row-gap: 8px;
            }
        `}</style>
    </>
)

// Navbar component

const NavBar = props => {
    const [dropdown, setDropdown] = useState(false)

    return (
        <>
            <div className = "nav-wrapper" style = {{ backgroundColor: props.color || "transparent" }}>
                <div className = "dropdown-container">
                    <NavDropdown visible = {dropdown} toggleDropdown = {() => setDropdown(!dropdown)} />
                </div>
                <div className = "navbar">
                    <Link href = "/">
                        <a className="nav-section" style = {{ justifySelf: "start" }}>
                            <img id = "nav-logo-image" src = "/images/palypython.png" />
                            <div id = "nav-logo-text" style = {{
                                color: props.theme === "dark" ? "var(--accent-light)" : "white"
                            }}>Paly Python</div>
                        </a>
                    </Link>
                    <div className = "nav-section" style = {{ justifySelf: "center" }}>
                        <NavLink link = "/about" theme = {props.theme}>About</NavLink>
                        <NavLink link = "/resources" theme = {props.theme}>Resources</NavLink>
                        <NavLink link = "/blog" theme = {props.theme}>Blog</NavLink>
                        <NavLink link = "/club" theme = {props.theme}>Club</NavLink>
                    </div>
                    <div className = "nav-section" style = {{ justifySelf: "end" }}>
                        <NavButton link = "/login" theme = {props.theme}>Login</NavButton>
                        <div className = "menu">
                            <i className = "fas fa-bars" onClick = {() => setDropdown(!dropdown)}></i>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .nav-wrapper {
                    width: 100%;
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                }

                .navbar {
                    width: 1000px;
                    display: grid;
                    grid-template-columns: 1fr 3fr 1fr;
                    align-items: center;
                    padding: 13px 50px;
                }

                .dropdown-container {
                    display: none;
                }


                .menu {
                    display: none;
                    cursor: pointer;
                    color: ${props.theme === "light" ? "white" : "black"};
                }

                @media only screen and (max-width: 850px) {
                    .navbar {
                        grid-template-columns: 1fr 0.3fr 1fr;
                    }
                    
                    .menu {
                        display: flex;
                    }

                    .dropdown-container {
                        display: flex;
                    }
                }

                .nav-section {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    text-decoration: none;
                }

                #nav-logo-image {
                    width: 32px;
                    height: 32px;
                    margin-right: 10px;
                }

                #nav-logo-text {
                    font-size: 1.3rem;
                    font-weight: 600;
                }
            `}</style>
        </>
    )
}

// Exports

export default NavBar