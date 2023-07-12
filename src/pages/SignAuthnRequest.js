import React from "react";
import InputField from "../components/InputField";
import InputBox from "../components/InputBox";
import { useState } from "react";


const SignAuthnRequest = () => {
    const [PrivateKey, setPrivateKey] = useState("");
    const [PrivateKeyWithHeader, setPrivateKeyWithHeader] = useState("");
    const [PrivateKeyWithString, setPrivateKeytWithString] = useState("");
    const [SignAlg, setSignAlg] = useState("");




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
            <h1 className="text-xl font-bold"> Sign SAML AuthNRequest</h1>
            <p> Text under this section</p>

            <form className="w-full" onSubmit={handleSubmit}>
                <div className="mt-6 flex flex-wrap">

                    <div className="flex w-full">

                        <div className="w-full pt-4 pb-4 pr-4 lg:w-1/2">
                            <InputBox onChange={(e) => { setPrivateKey(e.target.value) }} title={"AuthNRequest XML"} width={"100%"} height={"170px"} />
                        </div>
                        <div className="w-full lg:w-1/2">
                            <div className="w-full pt-4 pb-4 pr-4 ">
                                <InputBox onChange={(e) => { setPrivateKey(e.target.value) }} title={"RelayState"} width={"100%"} height={"40px"} />
                            </div>
                            <div>
                                <InputField
                                    type="select"
                                    width={"100%"}
                                    options={[
                                        { value: "1", label: "http://www.w3.org/2000/09/xmldsig#dsa-sha1" },
                                        { value: "2", label: "http://www.w3.org/2000/09/xmldsig#rsa-sha1" },
                                    ]}
                                    label="Bits to generate the private key"
                                    required={true}
                                    defaultValue={"1024 Bits"}
                                    value={SignAlg}
                                    onChange={(e) => setSignAlg(e.target.value)}
                                />

                            </div>
                        </div>
                    </div>
                    <div className="flex w-full">

                        <div className="w-full pt-4 pb-4 pr-4 lg:w-1/2">
                            <InputBox onChange={(e) => { setPrivateKey(e.target.value) }} title={"Private Key"} width={"100%"} height={"170px"} />
                        </div>

                        <div className="w-full pt-4 pb-4 pr-4 lg:w-1/2 ">
                            <InputBox onChange={(e) => { setPrivateKey(e.target.value) }} title={"X509 Cert"} width={"100%"} height={"170px"} />


                        </div>
                    </div>

                </div>
                <div className="w-full  mt pt-4 pb-4 pr-4">
                    <button type="submit" className="p-2 float-right bg-green-600 text-white text-lg font-semibold">
                        Sign XML
                    </button>
                </div>
            </form>

            <div className="flex w-full">
                <form className="w-full lg:w-1/2" onSubmit={handleSubmit}>
                    <div className="w-full pt-4 pb-4 pr-4 ">
                        <InputBox onChange={(e) => { setPrivateKey(e.target.value) }} title={"XML with embedded Signature"} width={"100%"} height={"170px"} />
                    </div>
                </form>
                <div className="w-full lg:w-1/2 pt-4 pb-4 pr-4 ">
                    <InputBox onChange={(e) => { setPrivateKey(e.target.value) }} title={"Signature"} width={"100%"} height={"170px"} />
                </div>
            </div>
        </div>

    );
}

export default SignAuthnRequest;