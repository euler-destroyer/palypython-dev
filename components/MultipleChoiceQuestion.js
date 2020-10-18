// Imports

import { useEffect } from "react"
import Button from"./Button"
import fetch from "isomorphic-unfetch"

export default function Problem({
    title,
    description,
    correctAnswer,
    incorrectAnswers,
}) {
    incorrectAnswers = incorrectAnswers.split(",")
    let answers = [correctAnswer, ...incorrectAnswers]
    answers.sort((a,b)=>Math.random()-0.5)
    const alphabet = ["a","b","c","d","e","f","g","h","i"]
    function anserQuestion(answer){
        document.getElementById(answer.toLowerCase().split(" ").join("-")).classList.add("selected")
        console.log(document.getElementById(answer.toLowerCase().split(" ").join("-")))
    }
    return (
        <>
            <h1>Multiple choice question:{title}</h1>
            <p>{description}</p>
            {
                answers.map((answer,index)=><div onClick={()=>{anserQuestion(answer)}} id={answer.toLowerCase().split(" ").join("-")} className={answer==correctAnswer  ?"correctAnswer" : "incorrectAnswer"}>
                             {`(${alphabet[index]}) ${answer}`}
                        </div>   )
            }
            <style jsx>{`
                .correctAnswer.selected {
                    background-color: green;
                }
                .correctAnswer.selected::after {
                    content: " (correct)";
                }
                .incorrectAnswer.selected {
                    background-color: red;
                }

                .incorrectAnswer.selected::after {
                    content: " (incorrect)";
                }
            `}</style>
        </>   
        
    )  
}