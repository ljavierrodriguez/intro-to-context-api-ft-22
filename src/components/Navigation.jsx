import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ContextUser } from '../context/UserContext'
import { Context } from '../context/StoreGlobal'

const Navigation = () => {
    const { cart } = useContext(Context)
    const { currentUser, login, logout } = useContext(ContextUser);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container px-4 px-lg-5">
                <Link className="navbar-brand" to="/">
                    Start Bootstrap
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/shop">
                                Shop
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/shop/1/detail">
                                Detail
                            </Link>
                        </li>
                        {
                            !!currentUser ?
                                (
                                    <>
                                        <li className="nav-item">
                                            <a className="nav-link" href='/#'>
                                                {currentUser.email}
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <button className='btn btn-dark' onClick={logout}>Logout</button>
                                        </li>
                                    </>
                                ) : (
                                    <li className="nav-item">
                                        <button className='btn btn-dark' onClick={login}>Login</button>
                                    </li>
                                )
                        }
                        {/* <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                id="navbarDropdown"
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Shop
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li>
                                    <a className="dropdown-item" href="#!">
                                        All Products
                                    </a>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#!">
                                        Popular Items
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#!">
                                        New Arrivals
                                    </a>
                                </li>
                            </ul>
                        </li> */}
                    </ul>
                    <form className="d-flex">
                        <button className="btn btn-outline-dark" type="submit">
                            <i className="bi-cart-fill me-1" />
                            Cart
                            <span className="badge bg-dark text-white ms-1 rounded-pill">
                                {cart.length}
                            </span>
                        </button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Navigation