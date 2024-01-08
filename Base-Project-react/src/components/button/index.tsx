import * as React from 'react';

interface Home1Props {
  buttonContent: string;
}

const home1: React.FC<Home1Props> = ({ buttonContent }) => {
  const [isActive, setIsActive] = React.useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };
  return (
    <div>
        <button
      className={`bg-green-500 hover:bg-green-600 text-grey font-bold py-2 px-4 rounded w-80  ms-10 mt-10 ${isActive ? 'bg-green-500 text-grey' : 'bg-white text-black'}`}
      onClick={handleClick}
    >
      {buttonContent}
    </button>
    </div>
  );
};


export default home1;
