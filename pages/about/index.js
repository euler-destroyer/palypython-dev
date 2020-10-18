// Imports

import Link from "next/link"
import Layout from "../../components/Layout"
import Section from "../../components/Section"
import Button from "../../components/Button"

// About person card

const AboutCard = props => (
    <>
        <Link href = "/about/[person]" as = {props.link}>
            <a className = "about-card">
                <img src = {props.image} className = "image" />
                <div className = "name">{props.name}</div>
                <div className = "role">{props.role}</div>
            </a>
        </Link>
        <style jsx>{`
            .about-card {
                display: flex;
                flex-direction: column;
                border-radius: 8px;
                padding: 20px;
                transition: 0.2s;
                text-decoration: none;
                color: black;
            }

            .about-card:hover {
                box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 
                            0 3px 6px rgba(0, 0, 0, 0.08);
                transform: translateY(-2px);
            }

            .image {
                width: 100%;
                height: 275px;
                object-fit: cover;
                margin-bottom: 10px;
                border-radius: 4px;
            }

            .name {
                font-weight: 600;
                font-size: 1.75rem;
            }

            .role {
                font-weight: 300;
                color: var(--text-dark);
            }
        `}</style>
    </>
)

// About page

const About = props => (
    <>
        <Layout navTheme = "dark">
            <Section height = "calc(100vh - var(--nav-height))" center>
                <div className = "desc">
                    <img className = "main-image" src = "/images/paly.jpg"></img>
                    <div className = "article">
                        <div className = "article-title">Welcome to Paly Python</div>
                        <div className = "article-content">
                            At Paly Python, our mission is to help students of all skill levels learn to code. We believe in giving every student the opportunity to learn the important skill of programming.
                            <br />
                            <br />
                            Paly Python is a completely student run organization located at Palo Alto High School. We have weekly club meetings where members participate in coding activities and also host in-depth online summer camps on specific programming topics at a variety of skill levels. Additionally, we have a series of interactive lesson resources anybody can use to learn programming right on our website.
                        </div>
                    </div>
                </div>
            </Section>
            <Section center>
                <div>
                    <div className = "team-title">Meet the Team Behind Paly Python</div>
                    <div className = "center">
                        <Button link = "/blog/story">Read our story</Button>
                    </div>
                    <div className = "card-container">
                        <AboutCard image = "/images/people/rohan-phanse.jpg" name = "Rohan Phanse" role = "Founder & President" link = "/about/rohan-phanse" />
                        <AboutCard image = "/images/people/jerry-xia.jpg" name = "Jerry Xia" role = "Vice President" link = "/about/jerry-xia" />
                        <AboutCard image = "/images/people/atticus-kuhn.jpg" name = "Atticus Kuhn" role = "Educational Officer" link = "/about/atticus-kuhn" />
                        <AboutCard image = "/images/people/mingyuan-wang.jpg" name = "Mingyuan Wang" role = "Content Manager" link = "/about/mingyuan-wang" />
                    </div>
                </div>
            </Section>
            <Section color = "#171A22" center>
                <div className = "discord">
                    <div className = "discord-desc">
                        <div className = "discord-title">
                            Join the community
                        </div>
                        <div className = "plug">
                            Come to our discord server to get the latest updates about Paly Python and meet other enthusiastic programmers and coders of all skill levels
                        </div>
                    </div>
                    <iframe 
                        src="https://discord.com/widget?id=688136360317812840&theme=dark"
                        width="315" 
                        height="450"
                        allowtransparency="true" 
                        frameBorder="0" 
                        sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
                    ></iframe>
                </div>
            </Section>

        </Layout>
        <style jsx>{`
            .desc {
                display: flex;
                flex-direction: row;
                justify-content: flex-start;
                align-items: center;
                padding: 30px 50px 50px 50px;
            }
            
            .main-image {
                width: 40vw;
                height: 70vh;
                object-fit: cover;
            }

            .article {
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: center;
                margin-left: 24px;
                font-size: 1.05rem;
                line-height: 1.5rem;
                padding: 0 36px;
            }

            .article-title {
                font-size: 3rem;
                font-weight: bold;
                margin-bottom: 3rem;
            }

            .article-content {
                font-size: 1.1rem;
                color: rgb(50, 50, 50);
                padding: 0 40px;
            }

            .team-title {
                font-size: 2.5rem;
                font-weight: 600;
                letter-spacing: 1px;
                text-align: center;
            }

            .card-container {
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                grid-gap: 5px;

                width: min(1200px, calc(100vw - 80px));
                margin: auto;
                margin-top: 65px;
                margin-bottom: 65px;
                padding: 0 40px;
            }

            .discord {
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
            }

            @media only screen and (max-width: 1000px) {
                .card-container {
                    grid-template-columns: repeat(2, 1fr);
                }
            }

            @media only screen and (max-width: 900px) {
                .desc {
                    flex-direction: column;
                }

                .main-image {
                    width: 80vw;
                    height: 40vh;
                    margin-bottom: 30px;
                }
            }

            @media only screen and (max-width: 850px) {  
                .discord {
                    flex-direction: column !important;
                }

                .discord-desc {
                    justify-content: center;
                    align-items: center;
                    margin-right: 0 !important;
                    margin-bottom: 50px !important;
                    text-align: center !important;
                }
            }

            @media only screen and (max-width: 700px) {
                .card-container {
                    grid-template-columns: 1fr;
                }
            }

            .center {
                display: flex;
                flex-direction: row;
                justify-content: center;
                margin: 20px;
            }

            .discord-desc {
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: flex-start;
                margin-right: 50px;
                width: 400px;
            }

            .plug {
                font-size: 1.1rem;
                color: rgb(220, 220, 220);
            }

            .discord-title {
                font-size: 2.5rem;
                font-weight: 600;
                letter-spacing: 1px;
                margin-bottom: 40px;
                color: white;
                width: 100%;
            }
        `}</style>
    </>
)

// Page properties

export async function getServerSideProps(context) {
    return {
        props: {
            page: "About"
        }
    }
}

// Exports

export default About