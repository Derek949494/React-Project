import './App.css';
import {Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import MenuPage from './pages/MenuPage';



function App() {
  return (
      <div className='App'>
        <Header />
        <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/about' element={<AboutPage />} />
                <Route path='contact' element={<ContactPage />} />
                <Route path='menu' element={<MenuPage />} />
            </Routes>
        <Footer />
      </div>
  );
}

export default App;
