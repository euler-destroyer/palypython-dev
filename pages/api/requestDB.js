import fetch from "isomorphic-unfetch"
import {NextPageContent} from "next"
import Router from "next/router"
import Cookie from "js-cookie"
import qs from "querystring"
export default async function requestDB (context, message){
    console.log("requesting the db")
    let cookie
    if(context.req){
        cookie = context.req?.headers.cookie;
    }else{
        cookie = context
    }
    console.log("cookie", cookie) 
    console.log("message",message)
    if(message.variables){
        message.variables.cookie=cookie
    }
    const response = await fetch("https://palypython-database.mreconomical.repl.co", {
        headers: {
            'content-type': 'application/json',
            "cookie":cookie
        },
        body:JSON.stringify(message),
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
    })
    if(response.status === 401 && !context.req){
        Router.replace("/login")
        return
    }
    if(response.status===401 && context.req){
        context.res.writeHead(302,{
            Location:"/login"
        })
        context.res.end()
        return
    }
    const json = await response.json()
    console.log("requestDB is done")
    return json
}
