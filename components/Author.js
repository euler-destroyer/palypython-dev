// Imports

import Link from "next/link"

// Author component

const Author = props => (
    <>
        <Link href = {props.link}>
            <a className = "author-container">
                <img src = {props.image} className = "author-image" />
                {props.name}
            </a>
        </Link>
        <style jsx>{`
            .author-container {
                display: flex;
                flex-direction: row;
                align-items: center;
                text-decoration: none;
                color: black;
                letter-spacing: -0.25px;
                margin: 0 10px;
                padding: 5px 8px;
                border-radius: 4px;
                border: 1px solid white;
                transition-duration: 0.2s;
            }

            .author-container:hover {
                border-color: rgb(200, 200, 220);
            }

            .author-image {
                width: 38px;
                height: 38px;
                object-fit: cover;
                border-radius: 9999px;
                border: 2.5px solid rgba(0, 142, 255, 0.15);
                margin-right: 7px;
            }
        `}</style>
    </>
)

// Exports

export default Author