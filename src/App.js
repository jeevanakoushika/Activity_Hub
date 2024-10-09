import './input.css';
import './App.css';
import Navbar from './components/NavBar';
import Home from './components/Home';
import Events from './components/Events';
import Clubs from './components/Clubs';
import Sports from './components/Sports';
import Contact from './components/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Footer from './components/Footer';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
function App() {
  return (
   
    <Router>

      <Navbar />
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/events' element={<Events />} />
        <Route path='/clubs' element={<Clubs />} />
        <Route path='/sports' element={<Sports />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/signin' element={<LoginForm />} />
        <Route path='/signup' element={<SignUpForm />} />
      </Routes>
      <Footer />
      
    </Router>
    
    
  );
}

export default App;
