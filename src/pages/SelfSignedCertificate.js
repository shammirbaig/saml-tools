import React from "react";
import InputField from "../components/InputField";
import InputBox from "../components/InputBox";
import { useState } from "react";


const SelfSignedCertificate = () => {
  const [Country, setCountryName] = useState("");
  const [Locality, setLocality] = useState("");
  const [State, setState] = useState("");
  const [OrganizationUnit, setOrganizationUnit] = useState("");
  const [Organization, setOrganization] = useState("");
  const [Email, setEmail] = useState("");
  const [CommonName, setCommonName] = useState("");
  const [BitsPrivateKey, setBitsPrivateKey] = useState("");
  const [ValidDays, setValidDays] = useState("");
  const [DigestAlgorithm, setDigestAlgorithm] = useState("");
  const [Passphrase, setPassphrase] = useState("");






  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      Country,
      Locality,
      State,
      OrganizationUnit,
      Organization,
      Email,
      CommonName,
      BitsPrivateKey,
      ValidDays,
      DigestAlgorithm,
      Passphrase,
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
      <h1 className="text-xl font-bold"> Generate Self Signed Certificates</h1>
      <p> Text under this section</p>


      <form onSubmit={handleSubmit} >
        <div className="mt-6 flex flex-wrap">
          <div className="w-full pt-4 pb-4 pr-4 lg:w-1/2">
            <InputField
              type="text"
              width={"100%"}
              label="Country Name"
              required={true}
              value={Country}
              onChange={(e) => setCountryName(e.target.value)}
            />
          </div>
          <div className="w-full pt-4 pb-4 pr-4 lg:w-1/2">
            <InputField
              type="text"
              width={"100%"}
              label="Locality"
              required={false}
              value={Locality}
              onChange={(e) => setLocality(e.target.value)}
            />
          </div>
          <div className="w-full pt-4 pb-4 pr-4 lg:w-1/2">
            <InputField
              type="text"
              width={"100%"}
              label="State or Province Name"
              required={true}
              value={State}
              onChange={(e) => setState(e.target.value)}
            />
          </div>
          <div className="w-full pt-4 pb-4 pr-4 lg:w-1/2">
            <InputField
              type="text"
              width={"100%"}
              label="Organization Unit Name"
              required={true}
              value={OrganizationUnit}
              onChange={(e) => setOrganizationUnit(e.target.value)}
            />
          </div>
          <div className="w-full pt-4 pb-4 pr-4 lg:w-1/2">
            <InputField
              type="text"
              width={"100%"}
              label="Organziation"
              required={true}
              value={Organization}
              onChange={(e) => setOrganization(e.target.value)}
            />
          </div>
          <div className="w-full pt-4 pb-4 pr-4 lg:w-1/2">
            <InputField
              type="email"
              width={"100%"}
              label="Email"
              required={false}
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="w-full pt-4 pb-4 pr-4 lg:w-1/2">
            <InputField
              type="text"
              width={"100%"}
              label="Common Name or Domain"
              required={true}
              value={CommonName}
              onChange={(e) => setCommonName(e.target.value)}
            />
          </div>
          <div className="w-full pt-4 pb-4 pr-4 lg:w-1/2">
            <InputField
              type="select"
              width={"100%"}
              options={[
                { value: "1024", label: "1024 Bits" },
                { value: "2056", label: "2056 Bits" },
              ]}
              label="Bits to generate the private key"
              required={true}
              defaultValue={"1024 Bits"}
              value={BitsPrivateKey}
              onChange={(e) => setBitsPrivateKey(e.target.value)}
            />
          </div>
          <div className="w-full pt-4 pb-4 pr-4 lg:w-1/2">
            <InputField
              type="text"
              width={"100%"}
              label="Valid days"
              required={true}
              value={ValidDays}
              onChange={(e) => setValidDays(e.target.value)}
            />
          </div>
          <div className="w-full pt-4 pb-4 pr-4 lg:w-1/2">
            <InputField
              type="select"
              width={"100%"}
              options={[
                { value: "SHA512", label: "SHA512" },
                { value: "SHA384", label: "SHA384" },
              ]}
              label="Digest Algorithm"
              required={true}
              defaultValue={"1024 Bits"}
              value={DigestAlgorithm}
              onChange={(e) => setDigestAlgorithm(e.target.value)}
            />
          </div>

          <div className="w-full pt-4 pb-4 pr-4 lg:w-1/2">
            <InputField
              type="text"
              width={"100%"}
              label="Passphrase to protect the private key"
              required={false}
              value={Passphrase}
              onChange={(e) => setPassphrase(e.target.value)}
            />
          </div>


          <div className="w-full mt-36 pt-4 pb-4 pr-4 lg:w-1/2">
            <button type="submit" className="p-2 bg-green-600 text-white text-lg font-semibold">
              Generate Self-Signed Certificate
            </button>
          </div>

        </div>
      </form>
      <div className="mt-6 flex flex-wrap">
      <div className="w-full pt-4 pb-4 pr-4 lg:w-1/2">
      <InputBox title={"Private Key"} width={"100%"} height={"170px"}/>
      </div>
      <div className="w-full pt-4 pb-4 pr-4 lg:w-1/2">
      <InputBox title={"X.509 cert"} width={"100%"} height={"170px"}/>
      </div>
      <div className="w-full pt-4 pb-4 pr-4 lg:w-1/2">
      <InputBox title={"CSR"} width={"100%"} height={"170px"}/>
      </div>
      </div>
    </div>
  );
}

export default SelfSignedCertificate;