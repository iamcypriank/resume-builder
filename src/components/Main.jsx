import { useState } from "react";
import Aside from "./Aside";
import PersonalInformationForm from "./PersonalInformationForm";
import Education from "./Education";
import Skills from "./Skills";
import Project from "./Project"; 
import Experience from "./Experience";
import Button from "./Button";
import { motion } from "motion/react";
import menuIcon from "../assets/menu.svg";
import closeIcon from "../assets/close.svg";
import qrCode from "../assets/qrcode.jpeg";
import upiLogo from "../assets/UPI-Logo.png";

export default function Main({ showDonation , setShowDonation ,   data , updateData }){

    const [ show , setShow ] = useState(false);
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
        className=" text-white m-[1rem] grid grid-cols-[1fr_3fr] max-lg:grid-cols-[auto_3fr] max-sm:flex max-sm:flex-col ">
            
            {
                !show ?
                <div className="sm:hidden mb-2 flex justify-end">
                    <button 
                    className="h-[3em] px-[1em] bg-btnbg rounded-md "
                    onClick={function(){
                    setShow(prev => !prev);
                }} ><img 
                className="h-[16px]" src={menuIcon}alt="Icon" /></button>
                </div> :

                <div className="sm:hidden mb-2 flex justify-end">
                    <button
                    className="h-[3em] px-[1em] bg-btnbg rounded-md "
                    onClick={function(){
                    setShow(prev => !prev);
                }} ><img 
                className="h-[16px]" src={closeIcon} alt="" /></button>
                </div>
            }
            { show && <motion.div 
            initial={{opacity : 0 ,scale : 0 , y : -500}}
            animate={{opacity : 1,scale : 1 , y : 0 }}
            transition={{duration : .15}}
            exit={{ opacity : 0 , y : -500 , transition : {duration : .15}}}
            className=" block sm:hidden"><Aside
            updateOptions={updateOptions} 
            options={options} /></motion.div> } 
            

            <div className="max-sm:hidden">
                <Aside updateOptions={updateOptions} options={options} />
            </div>
            
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
            { showDonation && 
            <motion.div 
            initial={{opacity : 0 ,scale : 0}}
            animate={{opacity : 1 ,scale : 1}}
            transition={{duration : 0.15}}
            className="flex flex-col gap-2 absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-md">
                <img
                className="h-auto w-[200px]"
                    src={qrCode} 
                    alt="icon" />
                <div className="flex ">
                    <img 
                    className="h-[16px]"
                    src={upiLogo} 
                    alt="" />
                    <p 
                className="text-[#727374] font-medium text-[12px]">cypriank@fifederal</p>
                </div>
                <Button 
                type="button"
                handle={()=>{
                    setShowDonation(false);
                }} >Close</Button>
                    

            </motion.div > }
        </main>
    )
}