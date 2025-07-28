import { useState } from "react"
import Skills from "./Skills";
import Button from "./Button";
import { motion } from "motion/react"

export default function Project({ updateData , data }){
    const [ feature , updateFeature ] = useState(''); 
    const [ project , updateProject ] = useState({
        title : '',
        techstack : '',
        description : '',
        features : []
    })


    return (
        <div>
            <form 
            onSubmit={(e)=>{
                e.preventDefault();
                updateData(prev => ({...(prev || {}), projects : [...data,project]}))
                updateProject({
                    title : '',
                    techstack : '',
                    description : '',
                    features : []
                });


            }}>
                <label htmlFor="">Project Title <input 
                value={project.title}
                onChange={(e)=>{
                    updateProject({...project, title : e.target.value});
                }}
                required
                type="text" /></label>

                <label htmlFor="">Tech Stack <input
                value={project.techstack} 
                onChange={(e)=>{
                    updateProject({...project, techstack : e.target.value});
                }}
                required
                placeholder="format ( React, Springboot, MongoDB )"
                type="text" /></label>

                <label htmlFor="">Brief Description 
                    <textarea name="" id="" placeholder="write here" rows="4"
                    value={project.description}
                    required
                    onChange={(e)=>{
                        updateProject({...project, description : e.target.value})
                    }}
                    className="resize-none cols-4">  
                    </textarea>
                </label>

                <div 
                className="flex flex-col gap-4">
                    <label htmlFor="">
                        Features/Responsibilities <input type="text" name="" id=""
                        value={feature}
                        onChange={(e)=>{
                            updateFeature(e.target.value)
                        }} />
                    </label>
                    <div>
                        <motion.button
                        whileTap={{scale : 0.8}}
                        className="p-[.5em] text-white bg-green-800 font-medium rounded-md text-[.875rem] hover:bg-white hover:text-black"
                         onClick={(e)=>{
                            e.preventDefault();
                            if(feature && feature!=''){
                                updateProject({...project, features : [...project.features,feature]})
                                updateFeature('');
                            }    
                        }} >Add +</motion.button>
                        <ul 
                        className="mt-4 mb-4 flex flex-col gap-2">
                            {project.features.length!=0 ? 
                            project.features.map((item)=>{
                                return <li
                                className="flex gap-8 items-center bg-[rgba(64,226,172,0.1)] text-green-400 w-fit p-2 rounded-md" 
                                key={item}>{item} <motion.button
                                whileTap={{scale : 0.8}} 
                                onClick={(e)=>{
                                    e.preventDefault();
                                    const updated = project.features.filter((current)=> item!=current);
                                     updateProject({...project, features : updated})

                                }} ><img
                                className="h-[2rem]"  
                                src="src/assets/removered.svg"
                                alt="" /></motion.button> </li>
                            })
                            : null}
                        </ul>

                        
                    </div>
                </div>
                <div >
                    <Button type="submit" >Add +</Button>
                </div>
            </form>

            {/* renders the list */}
            <div className="grid grid-cols-[1fr_1fr] gap-8 m-4 max-lg:flex max-lg:flex-col">
                {data && data.length!=0 ?
                data.map(( item )=>{
                    return (
                        <motion.div
                        initial={{scale:0}}
                        animate={{scale : 1}} 
                        transition={{duration : 0.2}}
                        exit={{scale:0 , transition : {duration : 0.2}}}
                        key={item.title} className="relative bg-[rgba(64,226,172,0.1)] text-green-400 h-auto p-4 rounded-xl flex flex-col items-start">
                            <h2 className="text-[1.25rem]  font-bold">{item.title}</h2>
                            <p > <b className="font-medium">Tech Stack</b>: {item.techstack}</p>
                            <p> <b className="font-medium">Description</b>: {item.description}</p>
                            <p className="font-medium">Features/Responsibilities:</p>
                            <ul className="list-disc px-4">
                            {item.features.map(( item )=>{
                                return <li key={item}>{item}</li>
                            })}
                            </ul>
                            <div className="absolute top-4 right-4">
                                <Button type="delete" handle={function(){
                                    const updated = data.filter((current)=> current.title!=item.title);
                                    updateData(prev => ({...(prev||{}),projects : updated}));
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