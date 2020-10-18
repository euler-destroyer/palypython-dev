// Imports

import Head from "next/head"

// Page metadata

const Metadata = props => (
    <>
        <Head>
            <meta charSet = "utf-8"></meta>
            <meta name = "description" content = "Python programming club for Palo Alto High School"></meta>
            <meta name = "viewport" content = "width = device-width"></meta>
            <title>{props.page ? `${props.page} - Paly Python` : "Paly Python"}</title>

            <meta property = "og:type" content = "website"></meta>
            <meta property = "og:site_name" content = "Paly Python"></meta>
            <meta property = "og:title" content = {props.page ? `Paly Python - ${props.page}` : "Paly Python"}></meta>
            <meta property = "og:description" content = "Python programming club for Palo Alto High School"></meta>
            <meta property = "og:image" content = "https://palypython.roar123.repl.co/images/palypython.png"></meta>

            <link href = "/images/palypython.png" rel = "icon"></link>
            <link href = "/styles/page.css" rel = "stylesheet"></link>
            <link href = "/styles/markdown.css" rel = "stylesheet"></link>
            <link href = "https://use.fontawesome.com/releases/v5.14.0/css/all.css" rel = "stylesheet" crossOrigin = "anonymous"></link>

            <script src = "https://cdnjs.cloudflare.com/ajax/libs/ace/1.4.7/ace.js"></script>
        </Head>
    </>
)

// Page

const App = ({ Component, pageProps }) => {
    // HTTPS redirect
//erdirect commented out for dev branch
    // if (typeof window !== "undefined") {
    //     if (location.protocol === "http:") {
    //         location.href = `https://palypython.com${location.pathname}`
    //     }
    // }

    // Render

    return (
        <>
            <Metadata page = {pageProps.page}></Metadata>
            <Component {...pageProps}></Component>
        </>
    )
}

// Exports

export default App