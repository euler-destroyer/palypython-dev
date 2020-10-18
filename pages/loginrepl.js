// Imports

import Layout from "../components/Layout"
import Link from "next/link"
import {useState} from "react"
const axios = require("axios")
import Cookie from "js-cookie"
//const qs = require("qs")
// Contact page
import fetch from "isomorphic-unfetch"

export default function Login(props){
    useState(()=>{
        if(typeof window !=="undefined"){
            document.getElementById("repl_auth").className = "loginEmbed"
            addEventListener("message", async(message) => {
                console.log(message)
                if (message.data === "auth_complete") {
                    const url = "https://palypython-database.mreconomical.repl.co"
                    const data = {
                        "operationName":"getNewSessionId",
                        "query":`
                        mutation getNewSessionId($username:String!){
                            getNewSessionId(username:$username){
                                sessionId
                                username
                            }
                        }
                        `,
                        "variables":{
                            "username":"test "
                        }
                    }
                    //const result = await axios.post(url, data);
                    //try fetch maybe insead?
                    const response = await fetch(url, {
                        headers: {
                            'content-type': 'application/json',
                        },
                        body:JSON.stringify(data),
                        method: 'POST', // *GET, POST, PUT, DELETE, etc.
                    })
                    const result = await response.json()
                    console.log(result.data)
                    Cookie.set("sessionId",result.data.data.getNewSessionId.sessionId)
                    Cookie.set("username",result.data.data.getNewSessionId.username)

                    alert("logged in")
                }
            })
        }
    },[])
    return(
            <Layout navTheme = "dark">
                <div className = "content">
                    <h3>Login</h3>
                    <div id="repl_auth" className="loginBrowser">
                        <iframe style = {{"width":"300px","height":"400px","border": "0","textAlign":"center"}} src="https://repl.it/auth_with_repl_site?domain=palypython-dev.roar123.repl.co"></iframe>
                    </div>
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


