import './App.css';
import { Footer } from './components/Footer/Footer';
import { Navbar } from './components/Navbar/Navbar';
import { Login } from './pages/Auth/Login/Login';
import { Register } from './pages/Auth/Register/Register';
import { Author } from './pages/Author/Author';
import { Home } from './pages/Home/Home';
import { MyArticles } from './pages/My-Articles/MyArticles';
import { Settings } from './pages/Settings/Settings';
import { SinglePost } from './pages/Single-Post/SinglePost';
import { Write } from './pages/Write/Write';

function App() {
  return (
    <div className="App_Container">
      <Navbar />
      {/* <Home /> */}
      {/* <SinglePost /> */}
      {/* <Login /> */}
      {/* <Register /> */}
      {/* <Write /> */}
      {/* <Settings /> */}
      {/* <MyArticles /> */}
      <Author />
      <Footer />
    </div>
  );
}

export default App;
