import Option from "./Option";

export default function Aside({ options , updateOptions }){
    function handle(key){
        const temp = {
            personalinfo : false,
            education : false,
            techskills : false,
            softskills : false,
            language : false
        }
        updateOptions({...temp,[key] : true })
    }

    return (
        <aside 
        className="flex flex-col">
            <div onClick={()=>{
                handle('personalinfo')
            }}>
                <Option 
                name="Personal Information" 
                img="src/assets/personal.svg"
                show={options.personalinfo} />
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
                show={options.language} />
            </div>

        </aside>
    )
}