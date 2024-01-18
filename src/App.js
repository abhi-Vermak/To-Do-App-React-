import './App.css';
import {
  BrowserRouter as Router,
  Route, 
  Routes,
} from "react-router-dom";
import Login from './component/login/Login';
import Home from "./component/home/Home"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/login' element={ <Login/ >}></Route>
          <Route path='/home' element={ <Home/ >}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
