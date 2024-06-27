import React,{useState} from "react";
function fetchs(){
         const URL="https://official-joke-api.appspot.com/random_joke";
    let[joks,setjoks]=useState({});
    const getnewjoks=async()=>{
        let Response=await fetch(URL);
        let jsonResponse=await Response.json()
        console.log(jsonResponse);
        setjoks({setup:jsonResponse.setup,punchline:jsonResponse.punchline});
    }
    
    return(
<>
<h1>fetch api</h1>
<p>shairy:{joks.setup}</p>
<p>shairy:{joks.punchline}</p>
<button onClick={getnewjoks}>click</button>
</>
    )
}
export default fetchs;