import Button from "./Button";
import { useState } from "react";

export default function PersonalInformationForm({ data ,updateData }){
    const [ disable , setDisable ] =useState(false);
    const [ formData , updateFormData ] = useState({

        fname : '',
        lname : '',
        email : '',
        contact : '',
        linkedin : '',
        github : ''
        
    })

    function handleFormData(e){
        const { name , value } = e.target;
        updateFormData({...formData,[name] : value})
    }
    function handleSubmit(){
        updateData(prev => ({...( prev || {} ), personalData : formData }));
    }
    return (
        <form onSubmit={(e)=>{
            e.preventDefault();
            setDisable(true);
            handleSubmit(e);
        }} 
        className="p-[1rem] flex flex-col gap-2">

            <div 
            className="flex gap-[1rem] ">
                <label  htmlFor="" >First Name <input 
                className={ disable && "bg-primarybg border-2 border-accent"} 
                type="text" 
                name="fname"  
                value={formData.fname} 
                onChange={(e)=>{handleFormData(e)}} 
                required 
                disabled={disable} /></label>

                <label  htmlFor="" > Last Name <input 
                className={ disable && "bg-primarybg border-2 border-accent"} 
                type="text" 
                name="lname"  
                value={formData.lname} 
                onChange={(e)=>{handleFormData(e)}} 
                disabled={disable}  /></label>
            </div>

            <label htmlFor="" className="flex flex-col"> Email <input 
            className={ disable && "bg-primarybg border-2 border-accent"} 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={(e)=>{handleFormData(e)}} 
            required 
            disabled={disable}  /></label>

            <label htmlFor="" className="flex flex-col"> Contact <input 
            className={ disable && "bg-primarybg border-2 border-accent"} 
            type="tel" 
            name="contact" 
            minLength="10" 
            maxLength="10" 
            value={formData.contact} 
            onChange={(e)=>{handleFormData(e)}}  
            required disabled={disable}  /></label>

            <label htmlFor="" className="flex flex-col"> Linkedin <input 
            className={ disable && "bg-primarybg border-2 border-accent"} 
            type="text" 
            name="linkedin"  
            value={formData.linkedin} 
            onChange={(e)=>{handleFormData(e)}} 
            disabled={disable}  /></label>

            <label htmlFor="" className="flex flex-col"> Github <input 
            className={ disable && "bg-primarybg border-2 border-accent"} 
            type="text" 
            name="github"  
            value={formData.github} 
            onChange={(e)=>{handleFormData(e)}} 
            disabled={disable}  /></label>

            <div >{ (!disable) ?
                <Button type="submit">Save</Button> : 
                <Button type="button" handle={function (){
                    setDisable(false);
                }}>Edit</Button>
            }
            </div>
        </form>
    )
}