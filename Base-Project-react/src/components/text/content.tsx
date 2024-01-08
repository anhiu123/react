import * as React from 'react';

interface Home1Props {
  content: string;

}

const content: React.FC<Home1Props> = ({ content  }) => {
  return (
    <div className=' mt-4 '>
     <h2>{content}</h2>
    </div>
  );
};


export default content;

