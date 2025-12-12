import React from 'react';
import "./quiz.css";


function page () {

    document.title="u r a sad? cat.";

    return (
        <div className="background">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWbH8_4KINOGDBBvTZ0ZeGJp1Vwkju2wYpmAul_g_Z2ettcePqlPGnesOW7F3c4wqyjuI&usqp=CAU" alt="lots of pats for you :3"/>
        <br/>
        <h3>You are a sad cat!</h3>
        <p>you are very questioning and logical. WONDERFUL!</p>
        <p>but maybe you are also very sad. No worries, use this site to make new friends and cheer yourself up :&#41;</p>
        <button className="button" onClick={()=>{window.location.href=window.location.origin}}>Back</button>
        </div>
)};

export default page;