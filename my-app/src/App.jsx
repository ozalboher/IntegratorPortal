import './App.css';
import { NavLink, Route, Routes, Redirect } from "react-router-dom";
import { HomePage } from './Views/HomePage/HomePage';
import { AboutPage } from './Views/AboutPage/AboutPage';
import { NotFound } from './Views/NotFound/NotFound';
import { ProfilePage } from './Views/ProfilePage/ProfilePage';
function App() {
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
            <Route path="*" element={<NotFound />} />
          </Routes>
        </section>
      </main>
{/*       <footer>
        <p>© 2023 Oz Alboher</p>
      </footer> */}
    </div>
  );
}

export default App;
