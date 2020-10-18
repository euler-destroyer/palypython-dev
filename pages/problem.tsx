// Imports

import Layout from "../components/Layout"
import Section from "../components/Section"
import Link from "next/link"
import Problem from "../components/CodeProblem.tsx"
import { useRouter, withRouter } from "next/router";

// Resource card component

const PageProblem:React.FC = props => {
    const {
        query: { 
            title,
            description,
            defaultCode,
            language,
            returnUrl
         },
    } = useRouter();
    return(
        <>
            <Layout navTheme = "dark">
            <Problem
                title={title}
                description={description}
                defaultCode={defaultCode}
                language={language}
            /> 
            </Layout>
        </>
    )
}

// Page properties

export async function getServerSideProps(context) {
    return {
        props: {
            page: "Problem"
        }
    }
}

// Exports

export default PageProblem