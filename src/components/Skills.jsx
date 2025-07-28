import { useState } from "react"
import Button from "./Button";
import { motion, scale } from "motion/react";

export default function Skills({ type , updateData , data , objkey}){
    const [skill , updateSkill ] = useState('');
    
    return (
        <div>
            <form action="" 
            onSubmit={(e)=>{
                e.preventDefault();
                const updated = [...data,skill]
                updateData( prev => ({...(prev || {}), [objkey] : updated}))
                updateSkill('');
            }}
            className="items-end justify-center">
            <label htmlFor="">{type} <input type="text"
            value={skill}
            onChange={(e)=>{
                updateSkill(e.target.value);
            }}
            required /></label>
            <div className="flex flex-row gap-[1rem]"><Button 
            type="submit"  >Add +</Button>
            </div>
            

        </form>
        <div 
        className="m-4 p-4 flex flex-wrap gap-[1rem] ">
            { (data && data.length!=0) ?  
               data.map(( item )=>{
               return <motion.div
               initial={{scale:0}}
               animate={{scale : 1}} 
               transition={{duration : 0.2}}
               exit={{scale:0 , transition : {duration : 0.2}}}
               key={item} className="bg-[rgba(64,226,172,0.1)] text-green-400 flex p-[.5rem] gap-[1rem] justify-center items-center rounded-md">
                    <p className="font-[600]">{item}</p>
                    <Button type="delete" handle={function(){
                        const updated = data.filter((current)=> item!=current )
                        updateData( prev => ({...(prev || {}), [objkey] : updated}))
                    }} />
                </motion.div>
               })
               : null  }
        </div>
        </div>
    )
}