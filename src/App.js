import './App.css';
import Home from './components/Home/Home';
import Signup from './components/Signup/Signup'
import 'bootstrap/dist/css/bootstrap.css'
import Login from './components/Login/Login';
import Create from './components/Create/Create';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import app from './firebase/config';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(app);




function App() {

  return (
    <div className="app">
      <BrowserRouter basename='olx-react'>
      <Routes>
        <Route path="/olx-react" element={<Home/>}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/create" element={<Create/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
