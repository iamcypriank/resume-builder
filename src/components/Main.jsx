import { useState } from "react";
import Aside from "./Aside";
import PersonalInformationForm from "./PersonalInformationForm";
import Education from "./Education";
import Skills from "./Skills";
import Project from "./Project"; 
import Experience from "./Experience";

export default function Main({ data , updateData }){
    

    const [ options , updateOptions ] = useState(
        {
            personalData : true,
            education : false,
            techskills : false,
            softskills : false,
            language : false,
            experience : false,
            projects : false,
            certifications : false,
            achivements : false,
        }
    );

    const [ locked ,updateLocked ] =  useState(
        {
            personalData : false,
        }
    ) 

    return (
        <main 
        className="text-white m-[1rem] grid grid-cols-[1fr_3fr]">
            <Aside 
            updateOptions={updateOptions} 
            options={options} />
            <div 
            className="m-[1rem] border-2 border-accent">
                {/* personal information form */}
                { options.personalData && <PersonalInformationForm 
                updateData={updateData}
                locked={locked}
                updateLocked={updateLocked}
                data={data.personalData} />}

                {/* edcuation form */}
                { options.education && <Education
                data = {data.education} 
                updateData={updateData}/>}


                {/* techinical skills */}
                {options.techskills && <Skills 
                type="Technical Skills"
                objkey="technicalskills"
                data={data.technicalskills}
                updateData={updateData} />}

                {/* soft skills */}
                {options.softskills && <Skills 
                type="Soft Skills"
                objkey="softskills"
                data={data.softskills}
                updateData={updateData} />}


                {/* language */}
                {options.language && <Skills 
                type="Language"
                objkey="language"
                data={data.language}
                updateData={updateData} />}


                {options.experience && <Experience
                data={data.experience}
                updateData={updateData} />}

                {options.projects && <Project 
                data={data.projects}
                updateData={updateData} />}


                {options.certifications && <Skills 
                type="Certifications"
                objkey="certifications"
                data={data.certifications}
                updateData={updateData} />}

                {options.achivements && <Skills 
                type="Achivements"
                objkey="achivements"
                data={data.achivements}
                updateData={updateData} />}

            </div>
        </main>
    )
}