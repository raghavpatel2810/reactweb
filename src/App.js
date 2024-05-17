import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home.jsx';
import BlogPage from './pages/Blog/BlogPage.jsx';
import Logout from "./Components/User/Logout.js";
import Scroll from './Components/customComponents/Scroll.jsx';
import BlogDetailPage from './pages/Blog/BlogDetailPage.jsx';
import BlogEditPage from './pages/Blog/BlogEditPage.jsx';
import AddPage from './pages/Blog/AddPage.jsx';
import LoginPage from './pages/User/LoginPage.jsx';
import RegistrationPage from './pages/User/RegistrationPage.jsx';
import ProfilePage from './pages/User/ProfilePage.jsx';
import GeneralBlog from './pages/Blog/BlogListingGeneralPage.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Components/css/style.css';

function App() {
  return (
    
      <Router>
        <Scroll />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route  path="/logout" element={<Logout />} />
          <Route  path="/profile" element={<ProfilePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blogdetail/:iBlogId" element={<BlogDetailPage />} />
          <Route path="/editblog/:iBlogId" element={<BlogEditPage />} />
          <Route path="/addblog" element={<AddPage />} />
          <Route path="/generalblog" element={<GeneralBlog />} />
        </Routes>
      </Router>
    
  );
}

export default App;
