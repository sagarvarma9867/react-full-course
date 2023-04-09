import React,{useState} from "react";
const Index=()=>{
    const [count,setCount]=useState(10);
   

    const decrementCount=()=>{
        setCount(count-1);
    }

    const incrementCount=()=>{
        setCount((Count)=>{
            return Count+1
        });
        setCount((Count)=>{
            return Count+1
        });
    };


   


    return(
             <div >
                <button onClick={decrementCount}>-</button>
                <span>count:{count}</span>
                <button onClick={incrementCount}>+</button>
            </div>
    );
};
export default Index; 