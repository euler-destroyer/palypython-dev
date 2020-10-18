// Imports

import { useEffect } from "react"
import { useRouter } from "next/router"

// Redirect component

const Redirect = props => {
    const router = useRouter()
    useEffect(() => {
        router.replace("/resources/[course]/[page]", `/resources/${props.course}/intro`)
    })
    return (<></>)
}

// Page properties

export async function getServerSideProps(context) {
    return {
        props: {
            course: context.params.course
        }
    }
}

// Exports

export default Redirect