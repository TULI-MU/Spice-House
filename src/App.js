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
import Footer from './pages/Footer/Footer';
import AddItems from './AddItems/AddItems';
import MyItems from './AddItems/MyItems/MyItems';
import ResetPassword from './ResetPassword/ResetPassword';
import Update from './Update/Update';
import Action from './Action/Action';
import Inventory from '../src/Inventory/Inventory';
import { Toaster } from 'react-hot-toast';


function App() {
  return (
    <div className="App">
      <Toaster></Toaster>
       <Header></Header>
       <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path='/updateto/:id' element={<RequireAuth>
          <Update></Update>
        </RequireAuth>}></Route>
        <Route path='/manage' element={<RequireAuth>
          <Action></Action>
        </RequireAuth>}></Route>
        <Route path='/inventory' element={<RequireAuth>
          <Inventory></Inventory>
        </RequireAuth>}></Route>
        <Route path='/additems' element={<RequireAuth>
          <AddItems></AddItems>
        </RequireAuth>}>
        </Route>
      <Route path='/myitems' element={
          <RequireAuth>
          <MyItems></MyItems>
          </RequireAuth>
        }></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/blog" element={<Blogs></Blogs>}></Route>


        <Route path="/signin" element={<Login></Login>}></Route>
        <Route path='/resetPassword' element={<ResetPassword></ResetPassword>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>

        </Routes>
        <Footer></Footer>
    </div>
  );
}

export default App;
