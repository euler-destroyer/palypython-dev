// Imports

import { useRouter } from "next/router"
import Link from "next/link"

// Nav link component

const NavLink = props => (
    <>
        <Link href = {props.link}>
            <a className = {`nav-link ${props.theme === "dark" ? "dark" : "light"}`}>
                {props.children}
            </a>
        </Link>
        <style jsx>{`
            .nav-link {
                text-decoration: none;
                font-size: 1.1rem;
                margin: 0 5px;
                padding: 6px 10px;
                border-radius: 4px;
                transition: 0.2s;
            }

            .light {
                color: white;
            }

            .dark {
                color: var(--text-dark);
            }

            .dark:hover {
                background-color: rgb(237,242,247);
            }

            @media only screen and (max-width: 850px) {
                .nav-link {
                    display: none;
                }
            }
        `}</style>
    </>
)


export default NavLink