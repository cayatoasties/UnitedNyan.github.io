"use client"; 

let i=1;

function page() {

    // let updates=document.querySelector("update")
    const score=[0,0,0]
    const questions=[["1?","1a","1b","1c"],["2?","2a","2b","2c"],["3?","3a","3b","3c"]]

    let QUESTION = "", option_1 = "", option_2 = "", option_3 = "";

    function update(){
        console.log(i)
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

    
    function please_work() {
        //updates the text
        // if (i>questions.length) {
        //     throw new error('done')
        // }
        update();
        
        //updates the variables
        if (i<=questions.length){
            i+=1;
            console.log(i);
        }


    }
    

    return( 

        <div> 
            {/* ^setflex */}
        <div>
            {/* <img scr=" "> */}
            <h3 className="question">{questions[0][0]}</h3>
            <input type="radio" name="options"></input> <p className= "one">{questions[0][1]}</p>
            <input type="radio" name="options"></input> <p className="two">{questions[0][2]}</p>
            <input type="radio" name="options"></input> <p className="three">{questions[0][3]}</p>
        </div>
        <button className="p-9" onClick={please_work} >bloop</button>
        </div>
    )
};

export default page;