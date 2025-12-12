import React from 'react';
import "./quiz.css";
"use client"; 

let i=0;
let answer=0;

function page() {

    const score=[0,0,0];
    let last_answer =0;
    const questions=
    [["when taking a big poop on the toilet, u were scrolling on ur phone and found a funny cat reel. when u lean back u fell into the toilet!!   whats ur first thought?","save me!! i need to change my clothes","its time to find some brownies","i will throw poop at other people"],
    ["in the toilet sewer u walked and found skibidi toilet, what do u do?","run away and cry","say hi to make a new friend","use a toilet brush to whack skibidi toilet"],
    ["Skibidi toilet says: lemme bring you somewhere   *Gets teleported into outer space*   U find that the world is sick, what do you do:","ask skibidi toilet why is this happening","call your friend and come up with a plan to save the world","go knock on thanos’ door"]];

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

    function reroute(result) {
        console.log(result);
        if (result==0){
            window.location.href = window.location.href+'/third_ending'
        } else if (result==1){
            window.location.href = window.location.href+'/first_ending'
        } else if (result==2){
            window.location.href = window.location.href+'/second_ending'
        } else {
            window.location.href = window.location.href+'/whaet?'
        }
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
                reroute(result);
            }
            
            update_text();
        }
        
        // console.log(answer);
        }

    
    return( 
    <div className="fill">
    <div className="background col">
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
        <div className="fire-btn hii" onClick={button_please_work} >Next Question!!</div>
    </div>
    </div>
    )
};

export default page;