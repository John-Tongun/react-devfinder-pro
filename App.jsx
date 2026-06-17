import { Routes, Route } from 'react-router-dom';
// Import the components
import Navbar from './components/Navbar';
//Import the pages
import Home from './Pages/Home';
import User from './Pages/User';
import Favorites from './Pages/Favorites';

export default function App () {
    return (
        <>
        <Navbar />
        <div className='container mt-4'>
            <Routes>
                <Route 
                path='/' 
                element={<Home />}
                />
                <Route 
                path='/' 
                element={<Favorites />}
                />
                <Route 
                path='/user/:username' 
                element={<User />}
                />
            </Routes>
        </div>
        </>
    );
}