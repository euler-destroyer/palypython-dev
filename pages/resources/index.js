// Imports

const courseData = require("../../data/courses.json")

import { useState, useEffect } from "react"
import Layout from "../../components/Layout"
import Section from "../../components/Section"
import SearchBar from "../../components/SearchBar"
import CoursePreview from "../../components/CoursePreview"
import Button from "../../components/Button"
// Resources page

const Resources = props => {
    // Course state

    const [query, updateQuery] = useState("")
    const [visibleCourses, updateCourses] = useState(props.courseData)
    const [courseLength, updateCourseLength] = useState(4)

    // Search filter

    useEffect(() => {
        updateCourses(props.courseData.filter(course => course.title.toLowerCase().includes(query.toLowerCase())))
    }, [query])

    // Show more courses

    function showMore() {
        updateCourseLength(visibleCourses.length - courseLength >= 4 ? courseLength + 4 : visibleCourses.length)
    }

    // Render

    return (
        <>
            <Layout navTheme = "dark">
                <Section height = "calc(100vh - var(--nav-height))">
                    <div className = "blog-title">Resources & Lessons</div>
                    <div className = "blog-container">
                        <SearchBar updateQuery = {value => updateQuery(value)} />
                        {visibleCourses.slice(0, courseLength).map(data => <CoursePreview course = {data} key = {data.id} />)}
                        {visibleCourses.length !== courseLength && visibleCourses.length > 4 &&
                            <div className = "center">
                                <Button clicked = {showMore} clickable>Show More</Button>
                            </div>
                        }
                    </div>
     
                </Section>
            </Layout>
            <style jsx>{`
                .blog-title {
                    font-size: 2.5rem;
                    font-weight: 600;
                    letter-spacing: 1px;
                    text-align: center;
                    padding-top: 10px;
                }

                .blog-container {
                    margin: 40px auto;
                    width: 800px;
                }

                .center {
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    margin-top: 20px;
                }
            `}</style>
        </>
    )
}

// Page properties

export async function getServerSideProps(context) {
    const courseDataArray = []
    for (const data in courseData) {
        courseData[data].id = data
        courseDataArray.push(courseData[data])
    }
    
    return {
        props: {
            courseData: courseDataArray,
            page: "Resources"
        }
    }
}

// Exports

export default Resources