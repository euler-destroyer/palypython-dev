// Imports

import Link from "next/link"

// Nav button component

const NavButton = props => (
    <>
        <Link href = {props.link}>
            <a className = {`nav-button ${props.theme === "dark" ? "dark" : "light"}`} >
                {props.children}
            </a>
        </Link>
        <style jsx>{`
            .nav-button {
                cursor: pointer;
                padding: 5px 10px;
                font-size: 1.1rem;
                border-radius: 4px;
                transition-duration: 0.3s;
                text-decoration: none;
                user-select: none;
            }

            .light {
                color: white;
                border: 1px solid white;
            }

            .light:focus {
                box-shadow: 0 0 0 3px rgba(0, 142, 255, 0.6);
            }

            .dark {
                color: black;
                border: 1px solid black;
            }

            .dark:focus {
                box-shadow: 0 0 0 3px rgba(0, 142, 255, 0.3);
            }
           

            @media only screen and (max-width: 850px) {
                .nav-button {
                    display: none;
                }
            }
        `}</style>
    </>
)

// Exports

export default NavButton