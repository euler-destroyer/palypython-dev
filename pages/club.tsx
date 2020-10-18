// Imports

import Layout from "../components/Layout"
import Section from "../components/Section"
import Link from "next/link"

// Resource card component

const Card: React.FC<{link:string, image:string, title:string, desc:string, static?: boolean}> = props => (
    <>
        {!props.static ?
            <Link href = {props.link}>
                <a className = "card">
                    <img className = "image" src = {props.image}></img>
                    <div className = "content">
                        <div className = "title">{props.title}</div>
                        <div className = "desc">{props.desc}</div>
                    </div>
                </a>
            </Link>
        :
            <a className = "card" href = {props.link} target = "_blank">
                <img className = "image" src = {props.image}></img>
                <div className = "content">
                    <div className = "title">{props.title}</div>
                    <div className = "desc">{props.desc}</div>
                </div>
            </a>
        }
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
                text-align: center;
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



// Club page

const Club: React.FC = props => (
    <>
        <Layout navTheme = "dark">
            <div className = "content">
                <Section height = "calc(100vh - var(--nav-height))" center>
                    <div className = "center">
                        <div className = "section-title">Welcome to Paly Python</div>
                        <div className = "section-desc">Learn to code in popular languages such as Python and JS through our interactive resources! There will also be fun activites, events, community building, and more.</div>
                        <div className = "card-container">
                            <Card title = "Club Constitution" link = "https://docs.google.com/document/d/1wCzTpsIjIJys4rR9FnBj9xAPThDexpcWqjicpJnXLKQ/edit?usp=sharing" desc = "Read our club constitution here, and find out how our club is administered" image = "/images/parchment.svg" static/>
                            <Card title = "Sign Up" link = "https://docs.google.com/forms/d/e/1FAIpQLSc1mgsHAlm13FbVUJC4o3CRZ9C7vxANhuJ0O9ZJ6CQdGEMhHg/viewform" desc = "Sign up to be a part of the weekly Paly Python club meetings" image = "/images/google-forms.png" static />
                            <Card title = "Zoom Link" link = "https://pausd.zoom.us/my/palypython" image = "/images/zoom.png" desc = "Join our club meetings every week at this Zoom meeting room" static />
                        </div>
                    </div>
                </Section>
                <Section center>
                    <div className = "center">
                        <div className = "section-title">Learn more</div>
                        <div className = "section-desc">Find out who we are and what we do</div>
                        <div className = "card-container">
                            <Card title = "About" link = "/about" desc = "Discover our mission and learn about the team behind Paly Python" image = "/images/palypython.png" />
                            <Card title = "Resources" link = "/resources" desc = "Explore our interactive coding tutorials and lessons" image = "/images/school.svg" static />
                            <Card title = "Blog" link = "/blog" desc = "Read about what's going on at Paly Python through our blog" image = "/images/write.svg" static />
                        </div>
                    </div>
                </Section>
                <Section center>
                    <div className = "section-title">Club Schedule</div>
                    <iframe className = "calendar" src="https://calendar.google.com/calendar/embed?src=palypythonpc%40gmail.com&ctz=America%2FLos_Angeles" width="800" height="600" frameBorder="0" scrolling="no"></iframe>
                </Section>
            </div>
        </Layout>
        <style jsx>{`
            .content {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: flex-start;
            }

            .center {
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: center;
            }

            .section-title {
                font-size: 2.5rem;
                font-weight: bold;
                text-align: center;
            }

            .section-desc {
                font-size: 1.15rem;
                margin: 1rem 0 2rem 0;
                text-align: center;
                padding: 0 10vw;
            }

            .welcome {
                height: 60vh !important;
            }

            .resources-title {
                font-size: 1.5rem;
            }

            .resources {
                display: flex;
                flex-direction: row;
                margin-top: 1.5rem;
            }

            .schedule {
                height: 70vh !important;
            }

            .club-meetings {
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                margin-top: 2rem;
            }

            .signup {
                height: 100vh !important;
            }

            .form {
                border: 1.5px solid #EEEEEE;
                border-radius: 6px;
            }

            .card-container {
                margin: 50px 0 50px 0;
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                grid-gap: 30px;
                max-width: 1000px;
                justify-items: center;
            }

            .calendar {
                width: 80vw;
                max-width: 800px;
                margin-bottom: 2rem;
            }

            @media only screen and (max-width: 950px) {
                .card-container {
                    grid-template-columns: 1fr;
                }
            }
        `}</style>
    </>
)

// Page properties

export async function getServerSideProps(context) {
    return {
        props: {
            page: "Club"
        }
    }
}

// Exports

export default Club