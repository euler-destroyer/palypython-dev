// Imports

import Link from "next/link"

// Footer links

const FooterLink = props => (
    <>
        {props.static ?
            <a href = {props.link} target = "_blank" className = "footer-link">
                {props.children}
            </a> 
            :
            <Link href = {props.link}>
                <a className = "footer-link">
                    {props.children}
                </a>
            </Link>
        }
        <style jsx>{`
            .footer-link {
                padding: 3px 0;
                color: rgb(80, 80, 80);
                text-decoration: none;
                transition-duration: 250ms;
                margin-bottom: 2px;
            }

            .footer-link:hover {
                color: rgb(60, 60, 60);
            }
        `}</style>
    </>
)

// Exports

export default FooterLink