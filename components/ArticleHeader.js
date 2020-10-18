// Imports

import Author from "./Author"

// Article header component

const ArticleHeader = props => (
    <>
        <div className = "article">
            <div className = "title">{props.data.title}</div>
            <div className = "desc">{props.data.description}</div>
            <div className = "author-date">
                <div className = "authors">
                    {props.data.authors.map(person => <Author link = {person.link} image = {person.image} name = {person.name} key = {person.name} />)}
                </div>
                <div className = "date">{new Date(props.data.date).toLocaleString()}</div>
            </div>
        </div>
        <img className = "img" src = {props.data.image}></img>
        <style jsx>{`
            .author-date {
                width: 100%;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-between;
                margin-bottom: 20px;
            }

            .article {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }

            .authors {
                display: flex;
                flex-direction: row;
            }

            .date {
                padding-right: 10px;
            }

            .title {
                font-size: 2rem;
                font-weight: 600;
                margin-bottom: 10px;
            }

            .desc {
                font-size: 1.1rem;
                color: rgb(100, 100, 100);
                margin-bottom: 30px;
            }

            .img {
                width: 100%;
                height: max(300px, 50vh);
                object-fit: cover;
                margin-bottom: 30px;
            }
        `}</style>
    </>
)

// Exports

export default ArticleHeader
