// Imports

import Link from "next/link"

import Layout from "../components/Layout"
import Section from "../components/Section"


const Card = props => (
    <>
        <Link href = {props.link}>
            <a className = "card">
                <img className = "image" src = {props.image}></img>
                <div className = "content">
                    <div className = "title">{props.title}</div>
                    <div className = "desc">{props.desc}</div>
                </div>
            </a>
        </Link>
        <style jsx>{`
            .card {
                display: flex;
                font-size: 1.1rem;
                flex-direction: column;
                align-items: center;
                padding: 30px;
                border-radius: 6px;
                border: 2px solid #EEEEEE;
                width: 300px;
                cursor: pointer;
                transition: transform 200ms;
                text-decoration: none;
                color: black;
            }

            .card:hover {
                transform: translateY(-2px);
                transform: scale(1.05);
            }

            .image {
                max-height: 120px;
                max-width: 120px;
                margin-bottom: 1rem;
            }

            .title {
                font-size: 1.5rem;
                font-weight: bold;
                text-align: center;
            }

            .desc {
                margin-top: 0.75rem;
            }

            @media only screen and (max-width: 950px) {
                .card {
                    flex-direction: row !important;
                    width: 80vw !important;
                }

                .title {
                    margin: 0;
                }

                .content {
                    margin-left: 24px;
                }
            }

            @media only screen and (max-width: 500px) {
                .card {
                    flex-direction: column !important;
                }

                .content {
                    margin-left: 0;
                }
            }
        `}</style>
    </>
)

// Home page

const Home = () => {
    return (
        <>
            <Layout navColor = "var(--accent-dark)" navTheme = "light">
                <Section color = "var(--accent-dark)" height = "calc(100vh - var(--nav-height))" center>
                    <div className = "banner">
                        <div className = "desc">
                            <div className = "slogan">
                                Empowering the next generation of coders
                            </div>
                            Paly Python, a programming club based in Palo Alto, is dedicated to teaching students to code through free comprehensive resources and hosted events such as club meetings and summer camps.
                        </div>
                        <img className = "computer-icon" src = "/images/computer.svg"></img>
                    </div>
                </Section>
                <Section color = "white" center>
                    <div className = "what-we-do">
                        <div className = "title">
                            What we do
                        </div>
                        <div className = "desc-2">
                            Learn what Paly Python has to offer
                        </div>
                        <div className = "card-container">
                            <Card image = "/images/palypython.png" title = "Club" desc = "Learn to code in popular languages like Python and JS at our weekly club meetings! Students of all skill levels are welcomed." link = "/club" />
                            <Card image = "/images/school.svg" title = "Resources" desc = "Use our interactive lessons, practice problems, and video series to learn effective programming faster than ever." link = "/resources" />
                            <Card image = "/images/summercamp.png" title = "Camps" desc = "Paly Python also hosts a variety of summer camps in different areas of programming. They are free, fast-paced, and comprehensive." link = "/blog/summer-camps-2020" />
                        </div>
                    </div>
                </Section>
            </Layout>
            <style jsx>{`
                .banner {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    align-items: center;
                    padding: 0 10vw;
                }

                @media only screen and (max-width: 850px) {
                    .banner {
                        grid-template-columns: 1fr;
                    }

                    .computer-icon {
                        justify-self: center !important;
                    }

                    .desc {
                        text-align: center;
                    }
                }

                .desc {
                    color: rgb(200, 200, 200);
                    font-size: 1.2rem;
                    margin-right: 5%;
                }

                .slogan {
                    font-size: max(2.5rem, calc(3.5vw + 0.7rem));
                    font-weight: bold;
                    margin-bottom: 1rem;
                    color: white;
                }
                
                .computer-icon {
                    width: max(300px, 70%);
                    height: 400px;
                    object-fit: contain;
                    justify-self: end;
                }

                .what-we-do {
                    max-width: 1000px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }

                .title {
                    font-size: 3.2rem;
                    font-weight: 600;
                    letter-spacing: 1px;
                    text-align: center;

                }

                .desc-2 {
                    color: rgb(100, 100, 100);
                    font-size: 1.2rem;
                    margin: 15px 0 10px 0;
                    text-align: center;
                }

                .card-container {
                    margin: 50px 0 50px 0;
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    grid-gap: 30px;
                    max-width: 1000px;
                    justify-items: center;
                }

                @media only screen and (max-width: 950px) {
                    .card-container {
                        grid-template-columns: 1fr;
                    }
                }

            `}</style>
        </>
    )
}

// Exports

export default Home