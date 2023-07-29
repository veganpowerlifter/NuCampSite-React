import useEffect from'react';
import useDispatch from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import Footer from './components/Footer';
import CampsitesDirectoryPage from './pages/CampsitesDirectoryPage';
import CampsiteDetailPage from './pages/CampsiteDetailPage';
import './App.css';
import AboutPage from './pages/AboutPage';

function App() {

    const dispatch = useDispatch(); // https://learn.nucamp.co/mod/book/view.php?id=6046&chapterid=6273

    useEffect(() => {
        dispatch(fetchCampsites()); // https://learn.nucamp.co/mod/book/view.php?id=6046&chapterid=6273
    }, [dispatch]);

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