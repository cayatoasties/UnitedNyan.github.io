import React from "react";
const NEON_CONNECTION = 'postgresql://neondb_owner:npg_XEGaxv5K8fsY@ep-holy-sunset-a188y1nh-pooler.ap-southeast-1.aws.neon.tech/chinook?sslmode=require&channel_binding=require';
import { neon } from 'https://cdn.jsdelivr.net/npm/@neondatabase/serverless@1.0.2/+esm';
import "./login.css";
const sql = neon(NEON_CONNECTION);

        
function page() {

    //naming
    let usernameInput = document.getElementById("username");
    let passwordInput = document.getElementById("password");
    // let signUpButton = document.getElementById("sign_up");
    // let logInButton = document.getElementById("log_in");

    // // event listeners
    // signUpButton.addEventListener("click", SignUp);
    // logInButton.addEventListener("click", LogIn);

    // making table
    async function createUsersTable() {
        try {
            await sql`
                CREATE TABLE IF NOT EXISTS Users (
                    Name text UNIQUE NOT NULL, 
                    Password text NOT NULL,
                    Tag text
                );
            `;
            console.log("yay table created!");
        } catch (error) {
            console.error("help theres an error in creating table:", error);
        }
    }

    //execute tablemaking
    createUsersTable();


    // sign uppp
    async function SignUp() {
        const name = usernameInput.value.trim();
        const password = passwordInput.value.trim();
        
        if (!name || !password) {
            alert("please enter both Username and Password");
            return;
        }

        try {
            // keying in new stuff in table
            const result = await sql`
                INSERT INTO Users (Name, Password, Tag)
                VALUES (${name}, ${password}, NULL);
            `;
            //pop up
            alert(`welcome ${name}!`);
            console.log("Insert result:", result);
            
        } catch (error) {
            if (error.message.includes('duplicate key value')) {
                alert(`this '${name}' already exists`);
            } else {
                alert("sorry ur sign up failed, pls check console!!");
                console.error("Sign Up Error:", error);
            }
        }
    }


    // log in
    async function LogIn() {
        const name = usernameInput.value.trim();
        const password = passwordInput.value.trim();
        
        if (!name || !password) {
            alert("Please enter both Username and Password.");
            return;
        }

        try {
            //check if password is correct
            const user = await sql`
                SELECT Name, Password
                FROM Users 
                WHERE Name = ${name} AND Password = ${password} 
                LIMIT 1;
            `;
            //login successful
            if (user.length === 1) {
                alert(`hello ${name}!`);
                console.log("User data:", user[0]);
            //login unsuccessful
            } else {
                alert("login FAILED!! incorrect username and password >:(");
            }
            //cry
        } catch (error) {
            alert("sorry login failed, pls check console");
            console.error("Login Error:", error);
        }
    }

    return (
    <div>
    <br/>
    <p className="font">Login Page!</p>
    <img src="https://static.vecteezy.com/system/resources/thumbnails/044/610/087/small/3d-black-and-white-color-speech-bubble-balloon-icon-sticker-memo-keyword-planner-text-box-banner-png.png" className="speech-frame"/>
    <img src="https://miro.medium.com/1*XLjWOhXLAr7yihw9NT-6vQ.jpeg" className="cat"/>
        <h1 className="deets">Username:</h1>
        <img src="https://static.thenounproject.com/png/1009849-200.png" className="help1" height="20px" width="20px"/>
        <p className="hidden-text">you should know your discord username...<br/>
            or you can go check it on discord</p>

        <h1 className="deets-pw">Password:</h1>
        <img src="https://static.thenounproject.com/png/1009849-200.png" className="help2" height="20px" width="20px"/>
        <p className="hidden-text-below">don't show people your password...duh...</p>
    <input id="username" placeholder="Discord Username"></input>
    <br/>
    <br/>
    <input id="password" type="password" placeholder="Password"/> 
    <br/>
    <br/>
    <button id="sign_up">Sign up</button>
    <button id="log_in">Log in</button>
    </div>
)
};

export default page;