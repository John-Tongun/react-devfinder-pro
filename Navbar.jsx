import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className='navbar navbar-dark navbar-expand-lg'>
            <div className='container'>
                <Link className='navbar-brand' to='/'>
                    DevFinder Pro
                </Link>
                
                <div className='navbar-nav'>
                    <Link className='nav-link' to='/'>
                        Home
                    </Link> 
                    <Link className='nav-link' to='/favorites'>
                        Favorites
                    </Link>
                </div>
            </div>
        </nav>
    );
}