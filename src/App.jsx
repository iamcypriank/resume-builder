import Header  from './components/Header';
import Main  from './components/Main';
import { Fragment, useState } from 'react';
import Preview from './components/Preview';


function App() {
  const [ showPreview , setShowPreview ] = useState(false);
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
    <div className=''>
    <Header 
    showPreview={showPreview}
    setShowPreview={setShowPreview} />

    <hr 
    className='h-[3px] bg-accent' />

    <Main 
    data={data} 
    updateData={updateData} />

    {showPreview ? <Preview 
    data={data}
    setShowPreview={setShowPreview} />
    : null }
    </div >
    </>
  )
}

export default App
