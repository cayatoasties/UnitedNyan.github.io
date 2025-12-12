import React from 'react';
import "./quiz.css";
"use client"; 

let i=0;
let answer=0;

function page() {

    const score=[0,0,0];
    let last_answer =0;
    const questions=[["1?","1a","1b","1c"],["2?","2a","2b","2c"],["3?","3a","3b","3c"]];

    let QUESTION = "", option_1 = "", option_2 = "", option_3 = "";
    document.title = "CAT QUIZ";

    function update_text(){
        let question= document.querySelector(".question");
        let one= document.querySelector(".one");
        let two= document.querySelector(".two");
        let three= document.querySelector(".three");
        QUESTION=questions[i][0];
        option_1=questions[i][1];
        option_2=questions[i][2];
        option_3=questions[i][3];
        if (question && one && two && three) {
            question.textContent = QUESTION;
            one.textContent = option_1;
            two.textContent = option_2;
            three.textContent = option_3;  
        } 
    };

    function update_score(answer) {
        score[answer-1]+=1;
        last_answer=answer;
    }

    function evalscore() {
        console.log(score)
        let result=Math.max(...score);
        let rnum=score.indexOf(result)
        score.splice(1,rnum);
        if (Math.max(score)==result){
            return last_answer;
        } else {
            console.log(rnum)
            return rnum;
        }
    }

    function reroute() {
        window.location.href = "http://localhost:5173/"

    }

    function button_please_work() {
        // //updates the text
        // update_text();
        
        //updates the variables
        if(answer!=0){
            if (i<questions.length) {
                console.log (questions.length)
                console.log ("yay")
                i+=1;
                update_score(answer);
                console.log(i);
            } 
            if (i==questions.length) {
                let result=evalscore();
                console.log("bloop");
                console.log("b"+result);
                reroute();
            }
            
            update_text();
        }
        
        // console.log(answer);
        }

    
    return( 
        <div className="row"> 
        <div className="col">
            {/* <img scr=" "> */}
            <h3 className="question">{questions[0][0]}</h3>
            <div className="row">
                <input type="radio" name="options" onClick={()=>{answer=1}}></input> 
                <p className= "one">{questions[0][1]}</p>
            </div> <div className="row">
                <input type="radio" name="options" onClick={()=>{answer=2}}></input> 
                <p className="two">{questions[0][2]}</p>
            </div> <div className="row">
                <input type="radio" name="options" onClick={()=>{answer=3}}></input> 
                <p className="three">{questions[0][3]}</p>
            </div>
        </div>
        <div className="fire-btn hii" onClick={button_please_work} >bloop</div>
        </div>
    )
};

export default page;