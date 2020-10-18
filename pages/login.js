// Imports

import Layout from "../components/Layout"
import Link from "next/link"
import {useState} from "react"
const axios = require("axios")
import Cookie from "js-cookie"
//import hashCode from "../utils.js"
import { Formik, Field, Form } from "formik";
import requestDB from "./api/requestDB.js"

//const qs = require("qs")
// Contact page
import fetch from "isomorphic-unfetch"
const hashCode = s => s.split('').reduce((a,b)=>{a=((a<<5)-a)+b.charCodeAt(0);return a&a},0)
async function onSubmit(values){
    console.log("values are",values)
    const data = {
       // "operationName":"signLogin",
        "query":`
        {
            signLogin(username:"${values.username}",password:"${values.password}")
        }
        `
    }
    console.log("about to req")
    const result = await requestDB("test", data)
    console.log("at this point, result is ",result)
    console.log("after req")
    console.log("got json")
    console.log(result.data,"data")
    console.log(result.errors,"errors")
    console.log("result.errors === undefined",result.errors === undefined)
    if(result.errors === undefined){
        alert("successs"+JSON.stringify(result.data))
        Cookie.set("JWT",result.data.data.getNewSessionId.sessionId)
    }else{
        alert("error: "+result.errors[0].message)
    }
}
export default function Login(props){

    return(
        <Layout navTheme = "dark">
            <div className = "content">
                <h1>login</h1>
                <Formik
                    initialValues={{ username: "write a username here" }}
                    onSubmit={onSubmit}       
                >
                    <Form>
                        <Field name="username" type="text" />
                        <Field name="password" type="text" />
                        <button type="submit">Submit</button>
                    </Form>
                </Formik>
                <a href="/register">Don't have and account? register an account </a>
            </div>
        </Layout>
    )
}

// Page properties

export async function getServerSideProps(context) {
    return {
        props: {
            page: "Login"
        }
    }
}


