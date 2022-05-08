import './App.css';
import Header from './pages/Header/Header';
import Home from './Home/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Blogs from './Blogs/Blogs';
import About from './About/About';
import Login from './Authentication/Login/Login';
import Register from './Authentication/Register/Register';
import NotFound from './NotFound/NotFound';
import InventoryDetail from './inventory/InventoryDetail/InventoryDetail';
import CheckOut from './CheckOut/CheckOut';
import RequireAuth from './Authentication/RequireAuth/RequireAuth';

function App() {
  return (
    <div className="App">
       <Header></Header>
       <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/item/:inventoryId" element={<InventoryDetail></InventoryDetail>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/blog" element={<Blogs></Blogs>}></Route>
        <Route path='/checkout' element={
          <RequireAuth>
            <CheckOut></CheckOut>
          </RequireAuth>
        }></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>

        </Routes>
    </div>
  );
}

export default App;
