// Imports

const courseData = require("../../../data/courses.json")

import Error from "next/error"
import Link from "next/link"
import Layout from "../../../components/Layout"
import Markdown from "markdown-to-jsx"
import Problem from "../../../components/CodeProblem"
import MultipleChoiceQuestion from "../../../components/MultipleChoiceQuestion"

// Course map component

const CourseMap = props => (
    <>
        <div className = "map">
            {Object.keys(props.lessons).map(lesson => (
                <Link href = "/resources/[course]/[page]" as = {`/resources/${props.course}/${lesson}`} key = {lesson}>
                    <a className = "lesson">
                        {lesson === props.currentLesson ? (
                            <b>{props.lessons[lesson].name}</b>
                        ) : props.lessons[lesson].name}
                        {lesson === props.currentLesson ? (
                            <i className = "fas fa-check-circle current-point"></i>
                        ) : (
                            <i className = "fas fa-circle point"></i>
                        )}
                    </a>
                </Link>
            ))}
        </div>
        <style jsx>{`
            .map {
                width: 20%;
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: flex-start;
                border-left: 1px solid #CCCCCC;
                padding: 12px 0;
            }

            .lesson {
                position: relative;
                margin: 8px 0 8px 16px;
                cursor: pointer;
                transition-duration: 250ms;
                text-decoration: none;
                color: black;
            }

            .lesson:hover {
                color: rgb(80, 80, 80) !important;
            }

            .point {
                position: absolute;
                top: calc(0.5rem - 2px);
                left: -20.5px;
                font-size: 8px;
                color: #CCCCCC;
                transition-duration: 250ms;
            }

            .lesson:hover .point {
                color: #AFAFAF;
            }

            .current-point {
                position: absolute;
                transition-duration: 250ms;
                top: calc(0.5rem - 4px);
                left: -22.5px;
                color: #0070F3;
                background-color: white;
                font-size: 12px;
            }
        `}</style>
    </>
)

// Course page component

const CoursePage = props => {
    return props.course ? (
        <>
            <Layout navTheme = "dark">
                <div className = "page">
                    <CourseMap course = {props.course} lessons = {props.lessons} currentLesson = {props.coursePage}/>
                    <div className = "content">
                        <div className = "course-title">{props.course.split("-").map(word => `${word[0].toUpperCase()}${word.substr(1)}`).join(" ")}</div>
                        <div className = "title">{props.lessons[props.coursePage].title}</div>
                        <div className = "focus">
                            {props.lessons[props.coursePage].video ? (
                                <iframe className = "video" src = {props.lessons[props.coursePage].video}></iframe>
                            ) : (
                                <img className = "graphic" src = {props.lessons[props.coursePage].image}></img>
                            )}
                        </div>
                        <div className = "markdown">
                            <Markdown
                                children = {props.lessonData}
                                options = {{
                                    overrides: {
                                        Problem: {
                                            component: Problem,
                                        },
                                        MultipleChoiceQuestion: {
                                            component: MultipleChoiceQuestion,
                                        }
                                    }
                                }}
                            />
                        </div>
                    </div>
                </div>
            </Layout>
            <style jsx>{`
                .page {
                    display: flex;
                    flex-direction: row;
                    justify-content: flex-start;
                    align-items: flex-start;
                    padding: 5vh 15% 5vh 7.5%;
                }

                .content {
                    width: 80%;
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;
                    align-items: flex-start;
                }

                .course-title {
                    font-weight: bold;
                    margin-bottom: 0.5rem;
                }

                .title {
                    font-weight: bold;
                    font-size: 2rem;
                }

                .focus {
                    width: 100%;
                    margin: 2rem 0;
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                }

                .graphic {
                    width: 100%;
                    height: max(300px, 50vh);
                    object-fit: cover;
                }

                .video {
                    width: min(530px, 100%);
                    height: max(300px, 50vh);
                    border: 1px solid black;
                }

                .markdown {
                    width: 100%;
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
    const course = context.params.course
    const page = context.params.page
    const lessons = courseData[course] ? require(`../../../data/resources/${course}/${course}.json`) : null

    return {
        props: {
            course: courseData[course]
                ? lessons[page]
                    ? course
                    : null
                : null,
            coursePage: page,
            courseData: courseData[course] || null,
            lessons: lessons,
            lessonData: lessons !== null && lessons[page]
                ? fs.readFileSync(`data/resources/${course}/${page}.md`).toString()
                : null,
            page: courseData[course]
                ? course.split("-").map(word => `${word[0].toUpperCase()}${word.substr(1)}`).join(" ")
                : null
        }
    }
}

// Exports

export default CoursePage