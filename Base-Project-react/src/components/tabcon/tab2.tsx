import * as React from 'react';
import Home1 from '../button';
import Title from '../text/titleForm';
import Input1 from '../form/input';
import Confom from '../button/confom';
import Content from '../text/content';
import Anh from '../image/anh'
import  { useState } from 'react';

const tab2 = () => {

    const handleInputChange = (value: string) => {
        setConfirmationContent(value);
      };
    
      const [confirmationContent, setConfirmationContent] = useState('');
    
      const handleConfirmation = () => {
        alert(confirmationContent);
        setConfirmationContent("");
      }

  return (
    <div >
      <div  className='column justify-center items-center'>
        <Title  title='Form Your Essay Đây Là Tab 2' />
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
        </div>

      </div>
    </div>
  );
};


export default tab2;