import { useState } from "react";
import Aside from "./Aside";
import PersonalInformationForm from "./PersonalInformationForm";

export default function Main(){
    const [ data , updateData ] = useState({});
    const [ options , updateOptions ] = useState(
        {
            personalinfo : true,
            education : false,
            techskills : false,
            softskills : false,
            language : false
        }
    );
    return (
        <main 
        className="text-white m-[1rem] grid grid-cols-[1fr_3fr]">
            <Aside 
            options={options} 
            updateOptions={updateOptions} 
            options={options} />
            <div 
            className="m-[1rem] border-2 border-accent">
                { options.personalinfo && <PersonalInformationForm 
                updateData={updateData} />}
            </div>
        </main>
    )
}