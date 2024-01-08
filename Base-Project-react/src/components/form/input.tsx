import * as React from 'react';

interface InputProps {
  onInputChange: (value: string) => void;
}

const input : React.FC<InputProps> = ({ onInputChange }) => {
  
  const [inputValue, setInputValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
    onInputChange(value); // Gọi hàm từ prop để chuyển giá trị lên component cha
  };
  return (
    <div>
 <form className="max-w-2xl mx-auto mt-8 relative">
  <input 
    type="text"
    className="w-full h-[200px] p-4 mb-4 ml-[20px] border border-gray-300 rounded-md relative z-10"
    placeholder=""
    onChange={handleChange}
  />
  <label className="absolute top-0 left-0 p-4 text-gray-500 z-20 ms-5">Type or paste your topic here</label>
</form>

    </div>
  );
};

export default input;
