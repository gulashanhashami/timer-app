import { useState, useEffect } from "react";


export const Timer=()=>{
const [timer, setTimer] = useState(0);

useEffect(()=>{
    const id=setInterval(()=>{setTimer((prev_value)=>{ //callback
        console.log("here")   
        if(prev_value===19){
            clearInterval(id)
            return 0;
        }
        return prev_value+1})
    }, 500)  

    return ()=> {
        clearInterval(id);
    }
    
}, [])


    return (
        <>
      <h1>Timer: {timer} </h1>
        </>
    )
}