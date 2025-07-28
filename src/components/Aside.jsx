import Option from "./Option";
import PersonalInformationForm from "./PersonalInformationForm";

import personalInformationIcon from "../assets/personal.svg";
import educationIcon from "../assets/education.svg";
import technicalskillsIcon from "../assets/technicalskills.svg";
import softskillsIcon from "../assets/softskills.svg";
import languageIcon from "../assets/languages.svg";
import experienceIcon from "../assets/job.svg";
import projectIcon from "../assets/project.svg";
import certificateIcon from "../assets/certificate.svg";
import achivementIcon from "../assets/achivement.svg";


export default function Aside({ options , updateOptions }){
    function handle(key){
        const temp = {
            personalData : false,
            education : false,
            techskills : false,
            softskills : false,
            language : false,
            experience : false,
            projects : false,
            achivements: false,
        }
        updateOptions({...temp, [key] : true })
    }

    return (
        <aside 
        className="flex flex-col">
            <div onClick={()=>{
                
                handle('personalData')
            }}>
                
                <Option 
                name="Personal Information" 
                img={personalInformationIcon}
                show={options.personalData} />
            </div>

            <div onClick={()=>{
                handle('education')
            }}>
                <Option 
                name="Education" 
                img={educationIcon}
                show={options.education} />
            </div>

            <div  onClick={()=>{
                handle('techskills')
            }}>
                <Option 
                name="Technical Skills" 
                img={technicalskillsIcon} 
                show={options.techskills} />
            </div>

           <div onClick={()=>{
                handle('softskills')
            }}>
             <Option 
             name="Soft Skills" 
             img={softskillsIcon}
             show={options.softskills} />
           </div>

            <div onClick={()=>{
                handle('language')
            }}>
                <Option 
                name="Languages" 
                img={languageIcon}
                show={options
                .language} />
            </div>

             <div onClick={()=>{
                handle('experience')
            }}> 
                <Option 
                name="Experience" 
                img={experienceIcon}
                show={options.experience} />
            </div>

            <div onClick={()=>{
                handle('projects')
            }}>
                <Option 
                name="Projects" 
                img={projectIcon}
                show={options.projects} />
            </div>

             <div onClick={()=>{
                handle('certifications')
            }}>
                <Option 
                name="Certifications" 
                img={certificateIcon}
                show={options.certifications} />
            </div>

            <div onClick={()=>{
                handle('achivements')
            }}>
                <Option 
                name="Achivements" 
                img={achivementIcon}
                show={options.achivements} />
            </div>

        </aside>
    )
}