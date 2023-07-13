import './index.css';
import InputBox from './components/InputBox';
import Home from './pages/Home';
import Dummy from './pages/Dummy';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SelfSignedCertificate from './pages/SelfSignedCertificate';
import FormatX509 from './pages/FormatX509';
import FormatPrivateKey from './pages/FormatPrivateKey';
import Base64 from './pages/Base64';
import UrlEncodeDecode from './pages/UrlEncodeDecode';
import DeflateBase64Encode from './pages/DeflateBase64Encode';
import InflateBase64Decode from './pages/InflateBase64Decode';
import SignAuthnRequest from './pages/SignAuthnRequest';
import SignResponse from "./pages/SignResponse";
import SignLogoutRequest from './pages/SignLogoutRequest';
import SignLogoutResponse from './pages/SignLogoutResponse';
import SignMetadata from './pages/SignMetadata';
import VerifyAuthnRequest from './pages/VerifyAuthnRequest';
import VerifyResponse from './pages/VerifyResponse';
import VerifyLogoutRequest from './pages/VerifyLogoutRequest';
import VerifyLogoutResponse from './pages/VerifyLogoutResponse';
import AttributesExtractor from './pages/AttributesExtractor';
import XmlPrettyPrint from './pages/XmlPrettyPrint';



function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <div className="flex">
          <div>
            <Sidebar />
          </div>
          <div className="flex-grow mt-32">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dummy" element={<Dummy />} />
              <Route path="/self-sign-certificate" element={<SelfSignedCertificate />} />
              <Route path="/format-x509-certificate" element={<FormatX509 />} />
              <Route path="/format-private-key" element={<FormatPrivateKey />} />
              <Route path="/base64" element={<Base64 />} />
              <Route path="/url-encode-decode" element={<UrlEncodeDecode />} />
              <Route path="/deflate-base64-encode" element={<DeflateBase64Encode />} />
              <Route path="/base64-decode-inflate" element={<InflateBase64Decode />} />
              <Route path="/sign/authnrequest" element={<SignAuthnRequest />} />
              <Route path="/sign/response" element={<SignResponse />} />
              <Route path="/sign/logoutrequest" element={<SignLogoutRequest />} />
              <Route path="/sign/logoutresponse" element={<SignLogoutResponse />} />
              <Route path="/sign/metadata" element={<SignMetadata/>}/>
              <Route path="/verify/authnrequest" element={<VerifyAuthnRequest/>}/>
              <Route path="/verify/response" element={<VerifyResponse/>}/>
              <Route path="/verify/logoutrequest" element={<VerifyLogoutRequest/>}/>
              <Route path="/verify/logoutresponse" element={<VerifyLogoutResponse/>}/>
              <Route path="/attributes-extractor" element={<AttributesExtractor/>}/>
              <Route path="/xml-pretty-print" element={<XmlPrettyPrint/>}/>


            </Routes>
          </div>
        </div>


      </div>
    </Router>
  );
}

export default App;
