import Option from "./Option";

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
                img="src/assets/personal.svg"
                show={options.personalData} />
            </div>

            <div onClick={()=>{
                handle('education')
            }}>
                <Option 
                name="Education" 
                img="src/assets/education.svg"
                show={options.education} />
            </div>

            <div  onClick={()=>{
                handle('techskills')
            }}>
                <Option 
                name="Technical Skills" 
                img="src/assets/technicalskills.svg" 
                show={options.techskills} />
            </div>

           <div onClick={()=>{
                handle('softskills')
            }}>
             <Option 
             name="Soft Skills" 
             img="src/assets/softskills.svg" 
             show={options.softskills} />
           </div>

            <div onClick={()=>{
                handle('language')
            }}>
                <Option 
                name="Languages" 
                img="src/assets/languages.svg" 
                show={options
                .language} />
            </div>

             <div onClick={()=>{
                handle('experience')
            }}>
                <Option 
                name="Experience" 
                img="src/assets/job.svg"
                show={options.experience} />
            </div>

            <div onClick={()=>{
                handle('projects')
            }}>
                <Option 
                name="Projects" 
                img="src/assets/project.svg" 
                show={options.projects} />
            </div>

             <div onClick={()=>{
                handle('certifications')
            }}>
                <Option 
                name="Certifications" 
                img="src/assets/certificate.svg" 
                show={options.certifications} />
            </div>

            <div onClick={()=>{
                handle('achivements')
            }}>
                <Option 
                name="Achivements" 
                img="src/assets/achivement.svg"
                show={options.achivements} />
            </div>

        </aside>
    )
}