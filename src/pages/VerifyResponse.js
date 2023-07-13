import React from "react";
import InputField from "../components/InputField";
import InputBox from "../components/InputBox";
import { useState } from "react";


const VerifyResponse = () => {
    const [PrivateKey, setPrivateKey] = useState("");
    const [PrivateKeyWithHeader, setPrivateKeyWithHeader] = useState("");
    const [PrivateKeyWithString, setPrivateKeytWithString] = useState("");
    const [SignAlg, setSignAlg] = useState("");
    const [SPEntityId, setSPEntityId] = useState("");
    const [TargetUrl, setTargetUrl] = useState("");
    const [IdPEntityId, setIdPEntityId] = useState("");
    const [SPAttribute, setSPAttribute] = useState("");
    const [RelayState, setRelayState] = useState("");
    const [RequestId, setRequestId] = useState("");
    
    
    




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
        <div className="content relative ml-12 mb-10 w-full p-8">
            <h1 className="text-xl font-bold"> Verify SAML Response</h1>
            <p> Text under this section</p>

            <form className="w-full" onSubmit={handleSubmit}>
                <div className="mt-6 flex flex-wrap">

                    <div className="flex w-full">

                        <div className="w-full pt-4 pb-4 pr-4 lg:w-1/2">
                            <InputBox onChange={(e) => { setPrivateKey(e.target.value) }} title={"SAML Response"} width={"100%"} height={"170px"} />
                        </div>
                        <div className="w-full lg:w-1/2">
                            <div className="">
                                <InputField
                                    type="text"
                                    width={"100%"}
                                    label="IdP EntityId"
                                    required={true}
                                    value={IdPEntityId}
                                    onChange={(e) => setIdPEntityId(e.target.value)}
                                />
                            </div>
                            <div className="mt-5">
                                <InputField
                                    type="text"
                                    width={"100%"}
                                    label="SP EntityId"
                                    required={true}
                                    value={SPEntityId}
                                    onChange={(e) => setSPEntityId(e.target.value)}
                                />
                            </div>
                           
                            <div className="mt-5">
                                <InputField
                                    type="text"
                                    width={"100%"}
                                    label="SP Attribute Consume Service Endpoint"
                                    required={true}
                                    value={SPAttribute}
                                    onChange={(e) => setSPAttribute(e.target.value)}
                                />
                            </div>
                            <div className="mt-5">
                                <InputField
                                    type="text"
                                    width={"100%"}
                                    label="Target URL, Destination of the AuthN Request"
                                    required={true}
                                    value={TargetUrl}
                                    onChange={(e) => setTargetUrl(e.target.value)}
                                />
                            </div>
                            <div className="mt-5">
                            <InputField
                                type="text"
                                width={"100%"}
                                label="Request ID"
                                required={true}
                                value={RequestId}
                                onChange={(e) => setRequestId(e.target.value)}
                            />
                        </div>
                        </div>
                    </div>
                    <div className="flex w-full">

                        <div className="w-full pt-4 pb-4 pr-4 lg:w-1/2">
                            <InputBox onChange={(e) => { setPrivateKey(e.target.value) }} title={"Private Key of the Service Provider"} width={"100%"} height={"170px"} />
                        </div>

                        <div className="w-full pt-4 pb-4 pr-4 lg:w-1/2 ">
                            <InputBox onChange={(e) => { setPrivateKey(e.target.value) }} title={"X.509 cert of the Identity Provider (to check Signature)"} width={"100%"} height={"170px"} />


                        </div>
                    </div>

                </div>
                
                <div className="w-full  mt pt-4 pb-4 pr-4">
                    <button type="submit" className="p-2 float-right bg-green-600 text-white text-lg font-semibold">
                        Verify SAML Response
                    </button>
                </div>
            </form>


        </div>

    );
}

export default VerifyResponse;