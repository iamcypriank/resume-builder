import Header  from './components/Header';
import Main  from './components/Main';
import { Fragment, useState } from 'react';
import Preview from './components/Preview';
import { motion } from "motion/react";
import Button from './components/Button';
import closeIcon from "./assets/close.svg";

function App() {
  const [ show , setShow ] = useState(true);
  const [ showPreview , setShowPreview ] = useState(false);
  const [ showDonation , setShowDonation ] =useState(false);
  const [ data , updateData ] = useState({
          personalData : {
          fname : '',
          lname : '',
          email : '',
          contact : '',
          linkedin : '',
          github : '' ,  
          },
          experience : [],
          education : [],
          technicalskills : [],
          softskills : [],
          language : [],
          projects :[],
          certifications : [],
          achivements : [],
  
      }
      );
  
  return (
    <>
    <Header 
    showPreview={showPreview}
    setShowPreview={setShowPreview} />
    

   
    { show &&   <div >
     <hr 
    className='h-[2px] bg-accent' />
    <div className='flex justify-center items-center gap-2'>
    <motion.button 
    onClick={()=>{
      setShowDonation(true);
    }}
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: -8 }}
    transition={{ duration: 0.5 }}
    className="text-[12px] text-rose-400 text-center mt-4 font-medium"
    > Found this useful? Support the developer 🩷  </motion.button >
    <motion.button
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    onClick={()=>{
      setShow(false)
    }}>
      <img 
    src={closeIcon}
    className='h-[16px]'
     />
    </motion.button>
    </div>

    </div> }
    
    
    <hr 
    className='h-[2px] bg-accent' />

    <Main 
    showDonation={showDonation}
    setShowDonation={setShowDonation}
    data={data} 
    updateData={updateData} />

    {showPreview ? <Preview 
    data={data}
    setShowPreview={setShowPreview} />
    : null }
    </>
  )
}

export default App
