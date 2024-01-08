import * as React from 'react';

interface Home1Props {
  title: string;

}

const titleForm: React.FC<Home1Props> = ({ title  }) => {
  return (
    <div className='text-center mt-4 font-bold ml-[-520px]'>
     <h2>{title}</h2>
    </div>
  );
};


export default titleForm;

