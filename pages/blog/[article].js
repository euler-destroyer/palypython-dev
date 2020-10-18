// Imports

const articleData = require("../../data/articles.json")
import {NextPageContent} from "next"

import Markdown from "markdown-to-jsx"
import Layout from "../../components/Layout"
import Section from "../../components/Section"
import ArticleHeader from "../../components/ArticleHeader"
import requestDB from "../api/requestDB.js"
import { Formik, Field, Form } from "formik";

// Blog article component

const BlogArticle = props => (
    <>
        <Layout navTheme = "dark">
            <Section>
                <div className = "article">
                    <div className = "content">
                        <ArticleHeader data = {props.data}/>
                        <div className = "markdown blog">
                            <Markdown>
                                {props.data.body}
                            </Markdown>
                        </div>
                    </div>
                </div>
            </Section>
        </Layout>
        <style jsx>{`
            .article {
                max-width: 800px;
                margin: auto;
                padding: 30px;
                padding-top: 0;

                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }

            .content {
                width: 100%;
                text-align: left;
            }
        `}</style>
    </>
)

// Page properties

export async function getServerSideProps(context) {
    const fs = require("fs")
    const article = context.params.article
    
    if (articleData[article] && !articleData[article].body) {
        articleData[article].body = fs.readFileSync(`data/blog/${article}.md`).toString()
    }

    return {
        props: {
            page: articleData[article] ? articleData[article].title : null,
            data: articleData[article] ? articleData[article] : null,
            sessionId:context.req.headers.cookie || null
        }
    }
}

// Exports

export default BlogArticle