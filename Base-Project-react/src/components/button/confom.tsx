import * as React from 'react';

interface Home1Props {
  buttonContent: string;
  onClick: () => void;
}

const confom: React.FC<Home1Props> = ({ buttonContent , onClick }) => {
  return (
    <div >
      <button onClick={onClick}  className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded w-[680px]  ms-10 mt-10 ">
        {buttonContent}
      </button>
    </div>
  );
};


export default confom;
