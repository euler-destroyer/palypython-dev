// Imports

import Markdown from "markdown-to-jsx"
import Error from "next/error"
import Navbar from "../../components/navbar/NavBar.js"
import Section from "../../components/Section.js"
import Footer from "../../components/footer/Footer.js"

// About person page

const AboutPerson = props => {
    return props.name ? (
        <>
            <Navbar theme = "dark" />
            <div className = "content">
                <img className = "pfp" src = {props.image} />
                <div className = "desc">
                    <div className = "name">{props.name}</div>
                    <div className = "role">{props.role}</div>
                    <div className = "markdown">
                        <Markdown>
                            {props.desc}
                        </Markdown>
                    </div>
                </div>
            </div>
            <Footer />
            <style jsx>{`
                .content {
                    width: 90%;
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                    height: 75vh;
                    padding: 5vh 10%;
                    margin: 2% 5%;
                }

                .pfp {
                    max-width: 50%;
                    max-height: 80%;
                    border-radius: 4px;
                    object-fit: contain;
                }

                .desc {
                    width: 45%;
                    height: 100%;
                    border-left: 1px solid rgb(200, 200, 200);
                    padding-left: 5%;
                    margin-left: 5%;
                }

                .name {
                    font-size: 2rem;
                    font-weight: 600;
                    margin-bottom: 3px;
                }

                .role {
                    font-size: 1.1rem;
                    color: rgb(115, 115, 115);
                    margin-bottom: 15px;
                }

                @media only screen and (max-width: 700px) {
                    .content {
                        flex-direction: column !important;
                    }

                    .pfp {
                        max-width: 80%;
                        max-height: 50%;
                    }

                    .desc {
                        border-top: 1px solid rgb(200, 200, 200);
                        border-left: none;
                        padding-top: 5%;
                        margin-top: 5%;
                        margin-left: 0;
                        padding-left: 0;
                        height: 45%;
                        width: 100%;
                    }
                }
            `}</style>
        </>
    ) : (
        <Error statusCode = {404}></Error>
    )
}

// Page properties

export async function getServerSideProps(context) {
    const fs = require("fs")
    const person = context.params.person
    const name = person.split("-").map(w => `${w[0].toUpperCase()}${w.substr(1)}`).join(" ")

    const people = {
        "Rohan Phanse"  : "Founder & President",
        "Jerry Xia"     : "Vice President",
        "Mingyuan Wang" : "Content Manager",
        "Atticus Kuhn"  : "Educational Officer"
    }

    return {
        props: {
            name: people[name] ? name : null,
            role: people[name] || null,
            desc: people[name] ? fs.readFileSync(`data/about/${person}.md`).toString() : null,
            image: people[name] ? `/images/people/${person}.jpg` : null,
            page: people[name] ? `About ${name}` : null
        }
    }
}

// Exports

export default AboutPerson