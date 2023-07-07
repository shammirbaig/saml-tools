import React from "react";
import InputField from "../components/InputField";
import InputBox from "../components/InputBox";
import { useState } from "react";


const FormatPrivateKey = () => {
  const [PrivateKey, setPrivateKey] = useState("");
  const [PrivateKeyWithHeader, setPrivateKeyWithHeader] = useState("");
  const [PrivateKeyWithString, setPrivateKeytWithString] = useState("");




  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
        PrivateKey
    };

    fetch("url", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };



  return (
    <div className="content relative ml-12 w-full p-8">
      <h1 className="text-xl font-bold"> Format Private Key</h1>
      <p> Text under this section</p>

      
      <div className="mt-6 flex flex-wrap">
      <form onSubmit={handleSubmit}>
      <div className="w-full pt-4 pb-4 pr-4 lg:w-4/5">
      <InputBox onChange={(e)=>{setPrivateKey(e.target.value)}}title={"Private Key"} width={"100%"} height={"170px"}/>
      </div>
      </form>
      <div className="w-full mt-5 pt-4 pb-4  lg:w-4/5">
            <button type="submit" className="p-2 float-right  bg-green-600 text-white text-lg font-semibold">
              Format Private Key
            </button>
          </div>
      <div className="w-full pt-4 pb-4 pr-4 lg:w-4/5">
      <InputBox title={"Private Key with header"} width={"100%"} height={"170px"}/>
      </div>
      <div className="w-full pt-4 pb-4 pr-4 lg:w-4/5">
      <InputBox title={"Private Key in string format"} width={"100%"} height={"170px"}/>
      </div>
      </div>
    </div>
  );
}

export default FormatPrivateKey;