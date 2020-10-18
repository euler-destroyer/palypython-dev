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
        mutation addUser($username:String!){
            addUser(user:{username:$username, email:"${values.email}",pfp:"e",discordId:"e",points:1, badges:[]}) {
                pfp
                discordId
            }   
        }`,
        "variables":{
            "username":values.username
        }
        
    }
    console.log("about to req")
    const result = await requestDB("test", data)
    console.log("at this point, result is ",result)
    console.log("after req")
    //const result = await response.json()
    console.log("got json")
    console.log(result.data,"data")
    console.log(result.errors,"errors")
    //console.log("result.data.data.getNewSessionId.sessionId is ",result.data.data.getNewSessionId.sessionId)
    if(result.errors === undefined){
        alert("successs"+JSON.stringify(result.data))
        Cookie.set("JWT",result.data.data.getNewSessionId.sessionId)
    }else{
        alert("error"+JSON.stringify(result.errors))
    }
}
export default function Login(props){
    return(
        <Layout navTheme = "dark">
            <div className = "content">
                <h1>login</h1>
                <Formik
                    initialValues={{ username: "username", password:"password",email:"email" }}
                    onSubmit={onSubmit}       
                >
                    <Form>
                        <Field name="username" type="text" />
                        <Field name="password" type="text" />
                        <Field name="email" type="text" />
                        <button type="submit">Submit</button>
                    </Form>
                </Formik>
                <a href="/login">Aready have an account???? login </a>
            </div>
        </Layout>
    )
}

// Page properties

export async function getServerSideProps(context) {
    return {
        props: {
            page: "register"
        }
    }
}


