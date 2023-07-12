import './index.css';
import InputBox from './components/InputBox';
import Home from './pages/Home';
import Dummy from './pages/Dummy';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import SelfSignedCertificate from './pages/SelfSignedCertificate';
import FormatX509 from './pages/FormatX509';
import FormatPrivateKey from './pages/FormatPrivateKey';
import Base64 from './pages/Base64';

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
        <Route path="/base64" element={<Base64/>} />

      </Routes>
    </div>
        </div>
     
    </div>
  </Router>
  );
}

export default App;
