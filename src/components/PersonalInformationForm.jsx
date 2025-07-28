import Button from "./Button";
import { useState } from "react";

export default function PersonalInformationForm({ locked , updateLocked , data ,updateData }){
    const [ disable , setDisable ] =useState(locked.personalData);
    const [ formData , updateFormData ] = useState(data)
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
            updateLocked({...locked,personalData : true });
            handleSubmit(e);
        }} 
        >

            
                <label  htmlFor="" >First Name <input 
                className={ disable ? "bg-primarybg border-2 border-accent" : ""} 
                type="text" 
                name="fname"  
                value={formData.fname} 
                onChange={(e)=>{handleFormData(e)}} 
                required 
                disabled={disable} /></label>

                <label  htmlFor="" > Last Name <input 
                className={ disable ? "bg-primarybg border-2 border-accent" : ""} 
                type="text" 
                name="lname"  
                value={formData.lname} 
                onChange={(e)=>{handleFormData(e)}} 
                disabled={disable}  /></label>
            

            <label htmlFor=""> Email <input 
             className={ disable ? "bg-primarybg border-2 border-accent" : ""}
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={(e)=>{handleFormData(e)}} 
            required 
            disabled={disable}  /></label>

            <label htmlFor="" > Contact <input 
             className={ disable ? "bg-primarybg border-2 border-accent" : ""}
            type="tel" 
            name="contact" 
            minLength="10" 
            maxLength="10" 
            value={formData.contact} 
            onChange={(e)=>{handleFormData(e)}}  
            required disabled={disable}  /></label>

            <label htmlFor="" > Linkedin <input 
             className={ disable ? "bg-primarybg border-2 border-accent" : ""}
            type="text" 
            name="linkedin"  
            value={formData.linkedin} 
            onChange={(e)=>{handleFormData(e)}} 
            disabled={disable}  /></label>

            <label htmlFor=""> Github <input 
             className={ disable ? "bg-primarybg border-2 border-accent" : ""}
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