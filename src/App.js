import './App.css';
import Header from './pages/Header/Header';
import Home from './Home/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Blogs from '../src/Blogs/Blogs';
import About from './About/About';
import Login from './Authentication/Login/Login';
import Register from './Authentication/Register/Register';
import NotFound from './NotFound/NotFound';
import RequireAuth from './Authentication/RequireAuth/RequireAuth';
import ItemDetail from './../src/inventory/ItemDetail/ItemDetail';
import Footer from './pages/Footer/Footer';

function App() {
  return (
    <div className="App">
       <Header></Header>
       <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/item/:itemId" element={
      <RequireAuth>
          <ItemDetail></ItemDetail>
      </RequireAuth>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/blog" element={<Blogs></Blogs>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>

        </Routes>
        <Footer></Footer>
    </div>
  );
}

export default App;
