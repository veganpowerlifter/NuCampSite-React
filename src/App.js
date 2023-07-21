import { Routes, Route } from 'react-router-dom';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import Header from './components/header';
import Footer from './components/Footer';
import CampsitesDirectoryPage from './pages/CampsitesDirectoryPage';
import CampsiteDetailPage from './pages/CampsiteDetailPage';
import './App.css';
import AboutPage from './pages/AboutPage';

function App() {
    return (
        <div className='App'>
            <Header />
            <Routes>
                <Route path='about' element={<AboutPage />}></Route>
            <Route
                    path='directory/:campsiteId'
                    element={<CampsiteDetailPage />}
                />
                <Route path='/' element={<HomePage />} />
                <Route path='contact' element={<ContactPage />} />
                <Route path='directory' element={<CampsitesDirectoryPage />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;