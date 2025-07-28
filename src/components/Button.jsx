import removeIcon from "../assets/removered.svg"
import { motion } from "motion/react";

export default function Button({ children , handle , type  }){
    
    if(type=="button" || type=="submit"){
        return (
        <motion.button 
        whileTap={{scale : 0.8}}
            type={type}
            className={`h-[3em] px-[1em] text-white bg-btnbg font-medium rounded-md text-[.875rem] hover:bg-white hover:text-black`}
            onClick={(e)=>{
                if(type=="button" && handle){
                    e.preventDefault();
                    handle();
                }
            }} 
        >{children}</motion.button >
        )
    }



    if(type=="delete"){
        return (
            <motion.button 
            whileTap={{scale : 0.8}} 
            type={type}
            className={"  p-[.5em] text-white font-medium rounded-md text-[.875rem]"}
            onClick={handle} 
        ><img
        className="h-[2rem]"  
        src={removeIcon}
        alt="" /></motion.button >
        )
    }
    
}