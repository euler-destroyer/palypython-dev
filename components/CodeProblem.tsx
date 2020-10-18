// Imports

import { useEffect } from "react"
import Button from"./Button"
import fetch from "isomorphic-unfetch"
import Link from "next/link";
import { useRouter } from 'next/router'

let problemCount:number = Number((typeof window !== 'undefined') || 0);

 const Problem:React.FC<{title:string, language:string, description:string, defaultCode:string}> = props=> {
    console.log("Problem recieved props",props )
    const router = useRouter()
    problemCount++
    // Problem id
    // if(!props.language){
    //     props.language="python"
    // }

    const uniqueId = props.title ? props.title.split(" ").map(word => word.toLowerCase()).join("-") :problemCount.toString()
    let editor
    function str2ab(str) {
        var buf = new ArrayBuffer(str.length*2); // 2 bytes for each char
        for (var i=0, strLen=str.length; i < strLen; i++) {
            buf[i] = str.charCodeAt(i);
        }
        console.log("buffer is",buf)
        var bufView = new Uint8Array([...[0x00, 0x61, 0x73, 0x6d],buf]);
        console.log("bufView is",bufView)
        return buf;
    }

    useEffect(() => {
        // Load problem


        if (typeof window !== "undefined") {
            const parsedLanguage = props.language == "assembly" 
                ? "assembly_x86" 
                : (props.language || "python")
            console.log("parsedLanguage is",parsedLanguage)
            editor = ace.edit(document.getElementById(`editor-${uniqueId}`), {
                
                mode: `ace/mode/${parsedLanguage}`,
                theme: "ace/theme/textmate",
                fontFamily: "Roboto Mono",
                fontSize: 15,
                cursorStyle: "smooth"
            })

            if (props.defaultCode) {
                editor.setValue(props.defaultCode, -1)
            } 
        }
    }, [])

    function runCode() {
        const codeInput = editor.getValue()
        if (props.language === "javascript") {
            // Evaluate JS
            let Output = ""
            console.logMsg = console.log
            console.log = data => {
                Output = `${Output}${data}\n`
            }
            
             console.logMsg ("runCOde called with js")
            try{
            eval(codeInput)
            }catch(e){
                Output+= e
            }
            console.logMsg ("after eval")
            let result = Output
            console.logMsg ("result is",result)
            document.getElementById(`code-output-${uniqueId}`).innerText += `${result} \n`
            console.logMsg(document.getElementById(`code-output-${uniqueId}`))
        } else if (props.language=="html"){
            console.log("HTML called")
            let outputIframe = document.getElementById(`code-output-iframe-${uniqueId}`)
            if(!outputIframe){
                outputIframe = document.createElement(`iframe`)
                outputIframe.id = `code-output-iframe-${uniqueId}`
                outputIframe.style.border = "0"
                outputIframe.style.width = "100%"
                outputIframe.style.height = "100%"
                //outputIframe.referrerpolicy = "no-referrer"
                document.getElementById(`code-output-${uniqueId}`).appendChild(outputIframe)
                const script = outputIframe.contentDocument.createElement("script");
                // Add script content
                // script.innerHTML = `
                //     window.onerror = function(error) {
                //         // do something clever here
                //         alert(error); // do NOT do this for real!
                //     };
                // `;
                // Append
                outputIframe.contentDocument.head.appendChild(script);
            
            }
            outputIframe.sandbox = "allow-scripts allow-modals"
            outputIframe.srcdoc = codeInput
            console.log("outputIframe",outputIframe)
            //document.getElementById(`code-output-${uniqueId}`).innerHTML = codeInput//`<iframe srcdoc="${codeInput}"></iframe>`
    
            // try{
            //     outputIframe.contentDocument;
            // }
            // catch(err){
            //     document.getElementById(`code-output-${uniqueId}`).innerText = err
            // }
        
        }else if (props.language=="golang"){
            
            fetch("https://go-eval.atticuskuhn.repl.co", {
                method: "POST",
                body: codeInput
            })
            .then(res => res.text())
            .then(data => {
                document.getElementById(`code-output-${uniqueId}`).innerText = `${data} \n`
            })
        }else if(props.language == "assembly"){
            var importObject = { imports: { i: arg => console.log(arg) } };
             WebAssembly.instantiate(str2ab(codeInput), importObject)
             .then(results => {
                const res = results.instance.exports.e();
                console.log(res,"res")
                document.getElementById(`code-output-${uniqueId}`).innerText += `${res}\n`

            })
            .catch(e=>{
                document.getElementById(`code-output-${uniqueId}`).innerText += `${e}\n`

            })
            
        }else {
            // Evaluate python
            
            fetch("https://Eval-Server.atticuskuhn.repl.co/tests/endpoint", {
                method: "POST",
                body: JSON.stringify({
                    "code": codeInput
                })
            })
            .then(res => res.text())
            .then(data => {
                document.getElementById(`code-output-${uniqueId}`).innerText = `${data} \n`
            })
        }
    }

    // Render

    return (
        <>
            <div>


                <h2>{props.title}</h2>
                {props.description}
                <div className = "row">
                    <div id = "editor-content">
                        <div className = "editor" id = {`editor-${uniqueId}`}/>
                        <div id = "editor-control"/>
                    </div>
                    <div id = "output-container">
                        <div className = "output" id = {`code-output-${uniqueId}`}></div>
                        <div id = "run-button" onClick = {runCode}>
                            Run Code in {props.language ?? "python"}
                        </div>
                       {router.pathname !== "/problem" ?
                        <Link href={{ pathname: '/problem', query:props}}><a>Open problem in new tab</a></Link>
                       : null
                       }
                    </div>
                </div>
            </div>
            <style jsx>{`
                .row {
                    display: flex;
                    flex-direction: row;
                    margin: 20px 0;
                }

                #output-container {
                    height: 250px;
                    position: relative;
                    width: 50%;
                    border: 1px solid black;
                    border-left: none;
                    padding: 10px;    
                    font-family: "Lucida Console", Courier, monospace;
                    overflow: auto;
                }
                
                #run-button {
                    font-family: "Source Sans Pro", sans-serif;
                    position: absolute;
                    z-index: 1;
                    right: 10px;
                    top: 10px;
                    padding: 5px;
                    border: 1px solid black;
                    border-radius: 4px;
                    cursor: pointer;
                    background-color: #FFFFFF;
                }

                #editor-content {
                    width: 50%;
                    font-family: "Lucida Console", Courier, monospace !important;
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;
                    align-items: center;
                    transition-duration: 300ms;
                    white-space: pre;
                }

                .editor {
                    width: 100%;
                    height: 250px;
                    font-family: "Lucida Console", Courier, monospace !important;
                    border: 1.5px solid #333333;
                    transition-duration: 300ms;
                    white-space: pre;
                    -webkit-user-select: auto;
                    user-select: auto;
                    -webkit-user-drag: none;
                    padding: 2px 0;
                }

                .display_code_editor * {
                    white-space: pre;
                    width: 100%;
                    height:100px;
                    font-family: "Lucida Console", Courier, monospace !important;
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;
                    align-items: center;
                    margin-top: 36px;
                    transition-duration: 300ms;
                }

                .editor .ace_marker-layer .ace_bracket * {
                    margin-top: 1px !important;
                    margin-left: 0.5px !important;
                    font-family: "Lucida Console", Courier, monospace !important;
                }

                .editor * {
                    font-family: "Lucida Console", Courier, monospace !important;
                }

                .editor .ace_text-layer .ace_entity * {
                    color: #7B2CB3 !important;
                    font-family: "Lucida Console", Courier, monospace !important;
                }
                
                #editor-control * {
                    width: 100%;
                    font-family: "Lucida Console", Courier, monospace !important;
                    display: flex;
                    flex-direction: row;
                    justify-content: flex-end;
                    align-items: center;
                    margin-top: 16px;
                    transition-duration: 300ms;
                }

                .ace_content * {
                    font-family: "Lucida Console", Courier, monospace !important;
                }
            `}</style>
        </>
    )
    
}
export default Problem