import React from 'react';
import "./quiz.css";

function page () {

    document.title="u r a HAPPY CAT!";

    return (
        <div className="background">
        <img src="https://i.pinimg.com/originals/88/14/9b/88149b0400750578f4d07d9bc3fb0fee.gif" alt="<-- a pic of a very happy cat indeed"/>
        <br/>
        <h3>You are a happy cat!</h3>
        <p>constantly ready to make friends and having an optimistic outlook on life :&#41;</p>
        <button className="button" onClick={()=>{window.location.href=window.location.origin}}>Back</button>
        </div>
)};

export default page;