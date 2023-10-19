import './App.css';
import { useState, useEffect } from 'react';
import { NavLink, Route, Routes } from "react-router-dom";
import { HomePage } from './Views/HomePage/HomePage';
import { AboutPage } from './Views/AboutPage/AboutPage';
import { NotFound } from './Views/NotFound/NotFound';
import { ProfilePage } from './Views/ProfilePage/ProfilePage';
import { ProjectsPage } from './Views/ProjectsPage/ProjectsPage';
import { Modal } from './Components/Modal/Modal';
import { Login } from './Components/Login/Login';
import { SignUp } from './Components/SignUp/SignUp';

function App() {
  
  const [showModal, setShowModal] = useState(false);
  const [showLogin, setShowLogin] = useState(true);
  const [showSuccessMsg, setShowSuccessMsg] = useState(false);

  useEffect(() => {
    showModal && setShowLogin(true);
  }, [showModal]);



  const handleModal = () => {
    setShowModal(!showModal);
  };







  return (
    <div className="App">
      <header className="App-header">
       <nav className="nav-links">
        <div className="nav-left">
          <ul>
            <li><NavLink to="/home" className="nav-link underline-effect" activeclassname="active-link">Home</NavLink></li>
          </ul>
        </div>
        <div className='nav-right'>
        <ul>
        <li onClick={handleModal}>Login</li>
        </ul>
        <ul>
        <li><NavLink to="/profile" className="nav-link underline-effect" activeclassname="active-link">Profile</NavLink></li>
        </ul>
        <ul>
        <li><NavLink to="/about" className="nav-link underline-effect" activeclassname="active-link">About</NavLink></li>
        </ul>
        </div>
       </nav>
      </header>
      <main>
        <section className="page-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          {showModal && (
            <Modal showModal={showModal} setShowModal={setShowModal} >
              {showLogin && (
                <Login showLogin={showLogin} setShowLogin={setShowLogin} showSuccessMsg={showSuccessMsg} setShowSuccessMsg={setShowSuccessMsg} setShowModal={setShowModal} />
              )}
              <SignUp showLogin={showLogin} setShowLogin={setShowLogin} setShowSuccessMsg={setShowSuccessMsg} />
            </Modal>
          )}
        </section>
      </main>
{/*       <footer>
        <p>© 2023 Oz Alboher</p>
      </footer> */}
    </div>
  );
}

export default App;
