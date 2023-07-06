import React, { useState, useRef } from 'react';

const InputBox = ({ title, height, width }) => {
  const inputRef = useRef(null);
  const [copied, setCopied] = useState(false);

  const copyText = async () => {
    try {
      await navigator.clipboard.writeText(inputRef.current.value);
      setCopied(true);
    } catch (error) {
      console.error('Failed to copy text:', error);
    }
  };

  return (
    <div className='px-4 py-4'>
      <div className="flex flex-row justify-between items-center" style={{width}}>
      <h3>{title}</h3>
      <button className="bg-slate-700 px-1 py-1 rounded-sm my-1 text-white" onClick={copyText}>{copied ? 'Copied!' : 'Copy'}</button>
      </div>
      <textarea
        ref={inputRef}
        type="text"
        className="border-solid rounded-sm px-1 py-1"
        style={{ height, width ,border: "0.75px solid #D3D3D3"}}
      />
      
    </div>
  );
};

export default InputBox;
