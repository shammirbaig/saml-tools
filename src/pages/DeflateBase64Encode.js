

import React from "react";
import InputField from "../components/InputField";
import InputBox from "../components/InputBox";
import { useState } from "react";


const DeflateBase64Encode = () => {
  const [X509Cert, setX509Cert] = useState("");
  const [X509CertWithHeader, setX509CertWithHeader] = useState("");
  const [X509CertWithString, setX509CertWithString] = useState("");




  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
        X509Cert
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
      <h1 className="text-xl font-bold"> Deflate + Base64 Encode</h1>
      <p> Text under this section</p>

      
      <div className="mt-6 flex flex-wrap">
      <form className="w-full" onSubmit={handleSubmit}>
      <div className="w-full pt-4 pb-4 pr-4 lg:w-4/5">
      <InputBox onChange={(e)=>{setX509Cert(e.target.value)}}title={"XML to be deflated and encoded"} width={"100%"} height={"170px"}/>
      </div>
      </form>
      <div className="w-full mt-5 pt-4 pb-4  lg:w-4/5">
            <button type="submit" className="p-2 float-right  bg-green-600 text-white text-lg font-semibold">
              Deflate and Encode XML
            </button>
          </div>
      <div className="w-full pt-4 pb-4 pr-4 lg:w-4/5">
      <InputBox title={"Deflated XML"} width={"100%"} height={"170px"}/>
      </div>
      <div className="w-full pt-4 pb-4 pr-4 lg:w-4/5">
      <InputBox title={"Deflated and Encoded XML"} width={"100%"} height={"170px"}/>
      </div>
      </div>
    </div>
  );
}

export default DeflateBase64Encode;