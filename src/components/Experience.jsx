import { useState } from "react";
import Button from "./Button";
import { motion } from "motion/react";
 

export default function Experience({ data , updateData }){
    const [ present , updatePresent ] = useState(false);
    const [id , updateId ] = useState(0);
    const [ responsibilities , updateResponsibilities ] = useState(''); 
    const [ experience , updateExperience ] = useState({
            id : id,
            company : '',
            jobTitle : '',
            start : '',
            end : '',
            location : '',
            responsibilities : []
    })


    // formats date
    function formatDate(value) {
        const [year, month] = value.split("-");
        const date = new Date(year, month - 1);
        const formatted = `${date.toLocaleString('default', { month: 'short' })} ${date.getFullYear()}`;
        return formatted;
    }

    

    return(
        <div>
            <form 
            onSubmit={(e)=>{
                const fStart = formatDate(experience.start);
                let fEnd = '';
                if(!present){
                    fEnd = formatDate(experience.end);
                }else{
                    fEnd ="Present"
                }
                const newId = id+1;
                updateId(newId);
                updatePresent(false);
                e.preventDefault();
                // updateExperience({...experience, start : start , end : end })
                updateData(prev=> ({...(prev || {} ), experience : [...data,{...experience,start : fStart , end : fEnd }]}))
                updateExperience({
            id : id,
            company : '',
            jobTitle : '',
            start : '',
            end : '',
            location : '',
            responsibilities : []
    })
            }}>
                <label htmlFor="">Job Title <input 
                type="text"
                value={experience.jobTitle}
                onChange={(e)=>{
                    updateExperience({...experience,jobTitle : e.target.value})
                }}
                required /></label>

                <label htmlFor="">Company<input 
                type="text"
                value={experience.company}
                onChange={(e)=>{
                    updateExperience({...experience, company : e.target.value})
                }}
                required /></label>

                <label htmlFor="">Location<input 
                type="text"
                value={experience.location}
                onChange={(e)=>{
                    updateExperience({...experience, location : e.target.value})
                }}
                required /></label>
                <div className="flex flex-col gap-2">
                    <div className="flex gap-4 ">
                        <label htmlFor="" className=" flex gap-2 ">Start<input 
                    type="month"
                    value={experience.start}
                    onChange={(e)=>{
                        updateExperience({...experience, start : e.target.value})
                    }}
                    required />
                    </label>
        
                    <label htmlFor="">End<input
                    disabled={present} 
                    type="month"
                    value={experience.end}
                    onChange={(e)=>{
                        updateExperience({...experience, end : e.target.value})
                    }}
                    required /></label>
                    </div >
                     <div className="px-1 flex gap-2 justify-end">
                        <input type="checkbox" checked={present} onChange={()=>{
                            updatePresent(!present);
                        }} />
                        <label htmlFor="" >Currently working</label>
                     </div>
                    </div>

                    <label htmlFor="">
                        Responsibilities <input type="text" name="" id=""
                        value={responsibilities}
                        onChange={(e)=>{
                            updateResponsibilities(e.target.value)
                        }} />
                    </label>
                    <div>
                        <motion.button
                        whileTap={{scale : 0.8}}
                        className="p-[.5em] text-white bg-green-800 font-medium rounded-md text-[.875rem] hover:bg-white hover:text-black"
                         onClick={(e)=>{
                            e.preventDefault();
                            if(responsibilities && responsibilities!=''){
                                updateExperience({...experience, responsibilities : [...experience.responsibilities,responsibilities]})
                                updateResponsibilities('');
                            }    
                        }} >Add +</motion.button>
                        <ul 
                        className="mt-4 mb-4 flex flex-col gap-2">
                            {experience.responsibilities.length!=0 ? 
                            experience.responsibilities.map((item)=>{
                                return <li
                                className="flex gap-8 items-center bg-[rgba(64,226,172,0.1)] text-green-400 w-fit p-2 rounded-md" 
                                key={item}>{item}<button onClick={(e)=>{
                                    e.preventDefault();
                                    const updated = experience.responsibilities.filter((current)=> item!=current);
                                     updateExperience({...experience, responsibilities : updated})
                                }} ><img
                                className="h-[2rem]"  
                                src="src/assets/removered.svg"
                                alt="" /></button> </li>
                            })
                            : null}
                        </ul>
                    </div>
                    <div>
                        <Button type="submit" >Add +</Button>
                     </div> 

            </form>
            
            {/* renders experience */}
             <div className="grid grid-cols-[1fr_1fr] gap-8 m-4">
                {data && data.length!=0 ?
                   data.map(( item )=>{
                        return (
                            <motion.div
                            initial={{scale:0}}
                            animate={{scale : 1}} 
                            transition={{duration : 0.15}}
                            exit={{scale:0 , transition : {duration : 0.2}}} 
                            key={item.id} className=" p-4 relative bg-[rgba(64,226,172,0.1)] text-green-400 h-auto  rounded-xl flex flex-col items-start">
                                <h2 className="text-[1.25rem]  font-bold">{item.jobTitle}</h2>
                                <p className="font-medium"> {item.company} - {item.location}</p>
                                <p className="font-medium">{item.start} - {item.end} </p>
                                <ul className="list-disc px-4">
                                {item.responsibilities.map(( item )=>{
                                    return <li key={item}>{item}</li>
                                 })}
                                </ul>
                                <div className="absolute top-4 right-4">
                                <Button type="delete" handle={function(){
                                    const updated = data.filter((current)=> current.id!=item.id);
                                    updateData(prev => ({...(prev||{}), experience : updated}));
                                }} />
                                </div>          
                            </motion.div>
                                )
                            }) 
                            : null }
                        </div>
        </div>
    )
}