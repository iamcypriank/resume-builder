import { useState } from "react"
import Button from "./Button";
import { motion } from "motion/react"
 
export default function Education({ data , updateData }){
    const [ formData , updateFormData ] = useState({
        degree : '',
        institute : '',
        location : '',
        start : '',
        end : '',  
    });


    function handleSubmit(){
        if(formData.start<=formData.end) {
         
            updateFormData({
                    degree : '',
                    institute : '',
                    location : '',
                    start : '',
                    end : '',  
                })
            data = [...data,formData];
            updateData(prev => ({...(prev || {}), education : data }))
        }
    }

    function handleForm(key,value){
        updateFormData({...formData, [key] : value });
    }

    function handleDelete(degree){
        const updated = data.filter((item)=> degree!=item.degree );
        updateData(prev => ({...prev,education : updated}));
    }
    return (
        <div>
        <form action=""
        onSubmit={(e)=>{
            e.preventDefault();
            handleSubmit();
        }}>
            <label htmlFor=""> University/Institue
                <input 
                type="text" 
                required
                value={formData.institute}
                onChange={(e)=>{
                    handleForm('institute',e.target.value);
                }} />
            </label>
            <label htmlFor=""> Degree
                <input
                 type="text"
                 value={formData.degree}
                required
                onChange={(e)=>{
                    handleForm('degree',e.target.value);
                }} />
            </label>
            <div 
            className="flex gap-[1rem]" >
                <label htmlFor=""> Start
                <input 
                type="number"
                min="1950"
                max="2050" 
                required
                value={formData.start}
                onChange={(e)=>{
                    handleForm('start',e.target.value);
                }} />
            </label>
            <label htmlFor=""> End
                <input 
                type="number" 
                min="1950"
                max="2050" 
                required
                value={formData.end}
                onChange={(e)=>{
                    handleForm('end',e.target.value);
                }} />
            </label>
            </div>
            <label htmlFor=""> Location
                <input 
                type="text" 
                required
                value={formData.location}
                onChange={(e)=>{
                    handleForm('location',e.target.value);
                }} />
            </label>
            <div>
                <Button type="submit" >Add +</Button>
            </div> 
                            
        </form>
        <div className="grid grid-cols-[1fr_1fr] gap-8 m-4 ">
            { data && data.length!=0 ?
             data.map((item)=>{
                return (<motion.div
               initial={{scale:0}}
               animate={{scale : 1}} 
               transition={{duration : 0.15}}
               exit={{scale:0 , transition : {duration : 0.2}}}
                className="relative bg-[rgba(64,226,172,0.1)] text-green-400 h-auto p-4 rounded-xl flex flex-col items-start "
                 key={item.degree}>
                    <h2 
                    className="text-[1.25rem]  font-bold">{item.degree} </h2>
                    <p>{item.institute}</p>
                    <p>{item.location}</p>
                    <p>{item.start}-{item.end}</p>
                        <div className="absolute top-4 right-4">
                        <Button 
                        type="delete" 
                         handle={()=>{
                        handleDelete(item.degree)}}></Button>
                        </div>
                </motion.div>)
             })
             : null }
        </div>
        </div>
    )
}