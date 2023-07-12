import React from "react";
import InputField from "../components/InputField";
import InputBox from "../components/InputBox";
import { useState } from "react";


const Base64 = () => {
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
            <h1 className="text-xl font-bold"> Encode/Decode Base64</h1>
            <p> Text under this section</p>


            <div className="mt-6 flex flex-wrap">
                <div className="flex w-full">
                    <form className="w-full lg:w-1/2" onSubmit={handleSubmit}>
                        <div className="w-full pt-4 pb-4 pr-4 ">
                            <InputBox  onChange={(e) => { setPrivateKey(e.target.value) }} title={"XML to be Base64 Encode"} width={"100%"} height={"170px"} />
                        </div>
                    </form>
                    <div className="w-full pt-4 pb-4 pr-4 lg:w-1/2 ">
                        <InputBox onChange={(e) => { setPrivateKey(e.target.value) }} title={"Base64 Encoded XML"} width={"100%"} height={"170px"} />
                    </div>
                </div>
                <div className="w-full  mt pt-4 pb-4 pr-4">
                <button type="submit" className="p-2 float-right bg-green-600 text-white text-lg font-semibold">
                 Base64 Encode XML
                </button>
              </div>
    
                <div className="flex w-full">
                    <form className="w-full lg:w-1/2" onSubmit={handleSubmit}>
                        <div className="w-full pt-4 pb-4 pr-4 ">
                            <InputBox onChange={(e) => { setPrivateKey(e.target.value) }} title={"XML to be Base64 Decode"} width={"100%"} height={"170px"} />
                        </div>
                    </form>
                    <div className="w-full lg:w-1/2 pt-4 pb-4 pr-4 ">
                        <InputBox onChange={(e) => { setPrivateKey(e.target.value) }} title={"Base64 Decoded XML"} width={"100%"} height={"170px"} />
                    </div>
                </div>
                <div className="w-full pt-4 pb-4 pr-4">
                <button type="submit" className="p-2 float-right bg-green-600 text-white text-lg font-semibold">
                Base64 Decode XML
                </button>
              </div>
    
            </div>
        </div>
    );
}

export default Base64;