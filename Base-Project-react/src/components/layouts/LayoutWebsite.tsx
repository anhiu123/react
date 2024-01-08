
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



