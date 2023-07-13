import React from "react";
import InputField from "../components/InputField";
import InputBox from "../components/InputBox";
import { useState } from "react";


const FormatX509 = () => {
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
      <h1 className="text-xl font-bold"> Format a X.509 Certificate</h1>
      <p> Text under this section</p>

      
      <div className="mt-6 w-full flex flex-wrap">
      <form className="w-full" onSubmit={handleSubmit}>
      <div className="w-full pt-4 pb-4 pr-4 lg:w-4/5">
      <InputBox onChange={(e)=>{setX509Cert(e.target.value)}}title={"X.509 Certificate"} width={"100%"} height={"170px"}/>
      </div>
      </form>
      <div className="w-full mt-5 pt-4 pb-4  lg:w-4/5">
            <button type="submit" className="p-2 float-right  bg-green-600 text-white text-lg font-semibold">
              Format X.509 Certificate
            </button>
          </div>
      <div className="w-full pt-4 pb-4 pr-4 lg:w-4/5">
      <InputBox title={"X.509 cert with header"} width={"100%"} height={"170px"}/>
      </div>
      <div className="w-full pt-4 pb-4 pr-4 lg:w-4/5">
      <InputBox title={"X.509 cert in string format"} width={"100%"} height={"170px"}/>
      </div>
      </div>
    </div>
  );
}

export default FormatX509;