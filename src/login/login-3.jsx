import React from 'react';
const NEON_CONNECTION = 'postgresql://neondb_owner:npg_XEGaxv5K8fsY@ep-holy-sunset-a188y1nh-pooler.ap-southeast-1.aws.neon.tech/chinook?sslmode=require&channel_binding=require';
import { neon } from 'https://cdn.jsdelivr.net/npm/@neondatabase/serverless@1.0.2/+esm';
const sql = neon(NEON_CONNECTION);
import "./login-2.css";

function page() {

//carmen
document.title = "UnitedNekoLogin"

//naming
// if (document.readyState === 'complete') {
let usernameInput = document.getElementById("username");
let passwordInput = document.getElementById("password");
let signUpButton = document.getElementById("sign_up");
let logInButton = document.getElementById("log_in");

// event listeners
// signUpButton.addEventListener("click", SignUp);
// logInButton.addEventListener("click", LogIn);
// }

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
  console.log("stuck")
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


//Dylans

// const vineBtn2 = document.querySelector(".vine-btn2");
// try {
// vineBtn2.addEventListener("click", Vine)
// } catch {}
function Vine() {
  const defaults = {
    spread: 360,
    ticks: 400,
    decay: 0.94,
    startVelocity: 30,
  };

function shoot() {
  confetti({
    ...defaults,
    particleCount: 60,
    scalar: 3,
    shapes: ["emoji"],
    shapeOptions: {
      emoji: {
        value: ["🐈‍⬛", "🐈", "😹"],
      },
    },
  });
}

  setTimeout(shoot, 300);
};



function playAudio() {
  if (document.readyState === 'complete') {
  var x = document.getElementById("myAudio");
  x.play();
  }
}


return( 
<>
<head>
  <link rel="stylesheet" href="newpleasepleaseeeee.css" />
  {/* <!--importing the font from press start 2p--> */}
  <link rel="preconnect" href="https://fonts.googleapis.com"/>
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
  <link href="https://fonts.googleapis.com/css2?family=Sour+Gummy:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"/>
</head>


    <div className="center">
    <br/>
    <h2>Login Page!</h2>
    <br/>
    <input id="username" placeholder="Discord Username"/>
    <br/>
    <br/>
    <input id="password" type="password" placeholder="Password"/> 
    <br/>
    <br/>
    <button id="sign_up">Sign up</button>
    <button id="log_in">Log in</button>
        <img src="https://static.thenounproject.com/png/1009849-200.png" className="help1" height="20px" width="20px"/>
        <p className="hidden-text"> you should know your discord username...<br/>
            or you can go check it on discord <br/>
            and don't show people your password...duh...</p>
</div>
</>
)
};

export default page;
