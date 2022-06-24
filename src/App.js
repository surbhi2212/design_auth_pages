import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import SignUp from './Components/Auth pages/SignUp';
import SignIn from './Components/Auth pages/SignIn';
import ForgetPassword from './Components/Auth pages/ForgetPassword';
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route element={<SignUp/>} path={'/'}/>
          <Route element={<SignIn/>} path={'/signin'} />
          <Route element={<ForgetPassword/>} path={'/forgetpassword'} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
