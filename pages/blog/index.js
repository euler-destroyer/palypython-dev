// Imports

const articleData = require("../../data/articles.json")

import { useState, useEffect } from "react"
import Layout from "../../components/Layout"
import Section from "../../components/Section"
import ArticlePreview from "../../components/ArticlePreview"
import SearchBar from "../../components/SearchBar"
import Button from "../../components/Button"

// Blog page

const Blog = props => {
    // Article state

    const [query, updateQuery] = useState("")
    const [visibleArticles, updateArticles] = useState(props.articleData)
    const [articleLength, updateArticleLength] = useState(4)

    // Search filter

    useEffect(() => {
        updateArticles(props.articleData.filter(article => article.title.toLowerCase().includes(query.toLowerCase())))
    }, [query])

    // Show more articles

    function showMore() {
        updateArticleLength(visibleArticles.length - articleLength >= 4 ? articleLength + 4 : visibleArticles.length)
    }

    // Render

    return (
        <>
            <Layout navTheme = "dark">
                <Section height = "calc(100vh - var(--nav-height))">
                    <div className = "blog-title">Blog</div>
                    <div className = "blog-container">
                        <SearchBar updateQuery = {updateQuery} />
                        {visibleArticles.slice(0, articleLength).map(data => <ArticlePreview article = {data} key = {data.id} />)}
                        {visibleArticles.length !== articleLength && visibleArticles.length > 4 &&
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

export async function getServerSideProps() {
    const articles = []
    for (const data in articleData) {
        articleData[data].id = data
        articles.push(articleData[data])
    }
    
    return {
        props: {
            articleData: articles,
            page: "Blog"
        }
    }
}

// Exports

export default Blog