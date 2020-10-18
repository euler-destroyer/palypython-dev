// Imports

import Link from "next/link"

// Article preview component

const ArticlePreview = props => (
    <>  
        <Link href = "/blog/[article]" as = {`/blog/${props.article.id}`}>
            <a className = "article-preview">
                <img src = {props.article.thumbnail} className = "image" />
                <div className = "text">
                    <div className = "title">{props.article.title || "Title"}</div>
                    <div className = "body">{props.article.description}</div>
                </div>
            </a>
        </Link>
        <style jsx>{`
            .article-preview {
                display: flex;
                flex-direction: row;
                align-items: center;
                text-decoration: none;
                padding: 10px;
                margin: 10px 40px 0 40px;
                transition-duration: 0.2s;
                border-radius: 8px;
                border: 1px solid white;
            }

            .article-preview:hover {
                border-color: rgb(200, 200, 220);
                transform: translateY(-1px);
            }

            .image {
                width: 100px;
                height: 100px;
                border-radius: 4px;
                object-fit: cover;
                margin-right: 20px;
            }

            .text {
                display: flex;
                flex-direction: column;
            }

            .title {
                font-size: 1.5rem;
                letter-spacing: 0.4px;
                font-weight: 600;
                color: black;
                margin-bottom: 10px;
            }

            .body {
                color: var(--text-dark);
            }
        `}</style>
    </>
)

// Exports

export default ArticlePreview