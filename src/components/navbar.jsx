import './styles/navbar.css';
import { Link } from  'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import DataContext from '../state/dataContext';


function Navbar(){

    const user = useContext(DataContext).user;
    const cart = useContext(DataContext).cart;
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">My Online Store</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/catalog">Products</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/admin">Admin</Link>
                        </li>
                    </ul>
                    <div className="d-flex">
                        <div className='btn btn-outline-light me-3'>
                            {user.name}
                        </div>
                        <Link to="/cart" className='cartLink' >
                            <FontAwesomeIcon icon={faShoppingCart} style={{color: 'white', margin: '5px 10px', height: '25px'}}/>
                                <span class="translate-middle badge rounded-pill bg-danger cartQty">
                                {cart.length}
                                </span>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;