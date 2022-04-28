import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

// Styles
import './App.css';

// Components
import Header from "./components/Header/Header";
import Landing from './components/Landing/Landing';
import Login from "./components/Login/Login";
import Errorpage from "./components/Errorpage/Errorpage";
import Footer from "./components/Footer/Footer";
import LoginForm from "./components/Login/LoginForm/LoginForm"
import GuidelinePage from "./components/Guidleinepage/Guidelinepage";
import Locationdetail from "./components/Locationdetail/Locationdetail";
import Hospitaldetailpage from "./components/Hospitaldetaipage/Hospitaldetaipage";
import Volunteerdetailpage from "./components/Volunteerdetailpage/Volunteerdetailpage";

function App() {
  return (
    <>
    <Header />

    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/loginvolunteer" element={<LoginForm usernameID="volunteer_username" passwordID="volunteer_password"/>} />
        <Route path="/loginhospital" element={<LoginForm usernameID="employee_username" passwordID="employee_password" />} />
        <Route path="/guideline" element={<GuidelinePage />}/>
        <Route path="/locationdetails/:location" element={<Locationdetail />} />
        <Route path="/Hospitaldetailpage" element={<Hospitaldetailpage/>} />
        <Route path="/Volunteerdetailpage" element={<Volunteerdetailpage/>} />
        <Route path="*" element={<Errorpage />} />
      </Routes>
    </Router>

    <Footer />
    </>
  );
}

export default App;
