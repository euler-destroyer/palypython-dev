// Imports

import Link from "next/link"

// Button component

const Button = props => (
    <>
        {props.static ?
            <a href = {props.link} className = "button">
                {props.children}
            </a>
        :
        props.clickable ?
            <div className = "button" onClick = {props.clicked}>
                {props.children}
            </div>
        :
            <Link href = {props.link}>
                <a className = "button">
                    {props.children}
                </a>
            </Link>
        }
        <style jsx>{`
            .button {
                display: inline-block;
                padding: 8px 16px;
                text-decoration: none;
                border-radius: 4px;
                transition-duration: 0.2s;
                background-color: ${props.color || "var(--accent-light)"};
                color: ${props.textColor || "white"};
                cursor: pointer;
            }

            .button:hover {
                transform: translateY(-1px);
                box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 
                            0 3px 6px rgba(0, 0, 0, 0.08);
            }

        `}</style>
    </>
)

// Exports

export default Button