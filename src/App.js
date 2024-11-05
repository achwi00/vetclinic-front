import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import MainPage from './views/MainPage'
import Login from './views/Login'
import Dashboard from './views/Dashboard'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </Router>
  );
}

export default App;
