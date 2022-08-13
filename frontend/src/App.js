import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { Footer } from './components/Footer/Footer';
import { Navbar } from './components/Navbar/Navbar';
import { Login } from './pages/Auth/Login/Login';
import { Register } from './pages/Auth/Register/Register';
import ProtectedRoute from './components/ProtectedRoutes';
import { Author } from './pages/Post-Author/Author';
import { Home } from './pages/Home/Home';
import { MyArticles } from './pages/My-Articles/MyArticles';
import { Settings } from './pages/Settings/Settings';
import { SinglePost } from './pages/Single-Post/SinglePost';
import { Write } from './pages/Write/Write';
import { EditSinglePost } from './pages/Edit-Post/EditSinglePost';

function App() {
  return (
    <div className="App_Container">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/post/:id" element={<SinglePost />} />
          <Route path="/updatePost/:id" element={<EditSinglePost />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/write"
            element={
              <ProtectedRoute>
                <Write />
              </ProtectedRoute>}
          />
          <Route path="/settings"
            element={
              <ProtectedRoute>
                <Settings />
              </ProtectedRoute>
            }
          />
          <Route path="/:url" element={<Author />} />
          {/*
          <MyArticles />
           */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
