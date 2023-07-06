import './index.css';
import InputBox from './components/InputBox';
import Home from './pages/Home';
import Dummy from './pages/Dummy';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";

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
      </Routes>
    </div>
        </div>
     
    </div>
  </Router>
  );
}

export default App;
