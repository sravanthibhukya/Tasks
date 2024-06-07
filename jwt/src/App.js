
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RouteGuard from './Components/RouteGuard';
import Login from './Pages/Login';
import Home from './Pages/Home';

function App() {
  return (
    <Router>
    <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<RouteGuard><Home /></RouteGuard>} />
    </Routes>
</Router>
  );
}

export default App;
