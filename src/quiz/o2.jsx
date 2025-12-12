import React from 'react';
import "./quiz.css";


function page () {

    document.title="u r a EVIL CAT!";

    return (
        <div className="background">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrzmEs-sFjFf3ZnM3T1cSNOFZ5-NXFlM5YhNnyYv-Kr7Dt5v1liBzpWvRBerBOxcR08go&usqp=CAU" alt="seems like the computer deems you too evil to see your picture..."/>
        <br/>
        <h3>You are a Evil cat! Mwahahaha</h3>
        <p>you are proud to be called one of the most evil cats, use this site to gather your minions and take over the world!!!! &gt;:&#41;</p>
        <p>G00d LuCK with your EVILLL plans!</p>
        <button className="button" onClick={()=>{window.location.href=window.location.origin}}>Back</button>
        </div>
)};

export default page;