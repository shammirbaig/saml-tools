import React from "react";

const InputField = ({ type,width,defaultValue,label,className,required, value, onChange, options }) => {
  const renderInput = () => {
    switch (type) {
      case "text":
        return (
          <input style={{width,height:"40px", border: "0.75px solid #D3D3D3",
          outline: "none",
          padding:"8px"}} 
          onFocus={(e) => {
            e.target.style.borderColor = "#000000"; // Change the border color on focus
          }}
          onBlur={(e) => {
            e.target.style.borderColor = "#D3D3D3"; // Change the border color on focus
          }}
          required={required} type="text" value={value} onChange={onChange} />
        );
      case "select":
        return (
          <select style={{width,height:"40px", border: "0.75px solid #D3D3D3",
          outline: "none",
          padding:"8px"}} value={value} required={required}
          className={className}
          defaultValue={defaultValue}
          onFocus={(e) => {
            e.target.style.borderColor = "#000000"; // Change the border color on focus
          }}
          onBlur={(e) => {
            e.target.style.borderColor = "#D3D3D3"; // Change the border color on focus
          }}
          onChange={onChange}>
          
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        );

     case "email":
      return (
        <input style={{width,height:"40px", border: "0.75px solid #D3D3D3",
        outline: "none",
        padding:"8px"}} 
        onBlur={(e) => {
          e.target.style.borderColor = "#D3D3D3"; // Change the border color on focus
        }}
        onFocus={(e) => {
          e.target.style.borderColor = "#000000"; // Change the border color on focus
        }}
        required={required} type="email" value={value} onChange={onChange} />
      );
      
    
      // Add more cases for other input types as needed
      default:
        return null;
    }
  };

  return (
    <div className="w-full">
    <label className="block mb-1 font-medium">
  {`${label}${!required ? " (Optional)" : ""}`}
</label>

      {renderInput()}
    </div>
  );
};

export default InputField;
