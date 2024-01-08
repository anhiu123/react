
import Home1 from '../button';
import Title from '../text/titleForm';
import Input1 from '../form/input';
import Confom from '../button/confom';
import Content from '../text/content';
import Anh from '../image/anh'
import React, { useState } from 'react';
import Tab1 from "../tabcon/tab1";
import Tab2 from "../tabcon/tab2";

const LayoutWebsite = () => {

  const handleInputChange = (value: string) => {
    setConfirmationContent(value);
  };

  const [confirmationContent, setConfirmationContent] = useState('');

  const handleConfirmation = () => {
    alert(confirmationContent);
    setConfirmationContent("");
  }

  const [currentTab, setCurrentTab] = useState(1);
  const handleTabChange = (tabNumber1 : number) => {
    setCurrentTab(tabNumber1);
  };
    return (
      <div  className='column justify-center items-center'>
        <div className='flex justify-center items-center'>
        <Home1 buttonContent='Writing Topic' onClick={() => handleTabChange(1)} /> 
        <Home1 buttonContent='Form Your Essay' onClick={() => handleTabChange(2)} />
        </div> 
      
        {currentTab === 1 && <Tab1 />}
      {currentTab === 2 && <Tab2 />}
   

      </div>
   
    );
  };
export default LayoutWebsite;




     {/* <Title  title='Form Your Essay' />
        <Input1  onInputChange={handleInputChange}/>
       
        <div className='text-center mt-[-20px] font-bold '>
        <Confom  buttonContent='Generate Quizz' onClick={handleConfirmation}/>
        </div>

        <div className=" w-[680px] ml-[640px] border rounded-lg p-20 mt-5">
          <div className='ml-[-40px] mt-[-40px]'>
            <Anh/>
          </div>
           <div className='ml-[500px] mt-[-50px]'>
           <Title  title='Excess to 20 or more tools to convert PDF to Word....' />
           </div>
           <div className='mt-12'>
           <Content content='Before you know what kindness really isyou must lose things,feel the future dissolve in a momentlike salt in a weakened broth.What you held in your hand,what you counted and carefully saved...'/>
           </div>
        </div> */}
