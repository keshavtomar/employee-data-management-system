import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Home from './screens/Home'
import Form from './screens/AddEmployee'

function App() {
  return (
    <div>
      <Router>
        <div>
          {/* <p>It sucks</p> */}
          <Routes>
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/addEmployee" element={<Form />} />
            <Route exact path="/" element={<Home />} />
          </Routes>
        </div>
      </Router >
    </div>
  );
}

export default App;
