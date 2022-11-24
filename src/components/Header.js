import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
    <div className="header-area">
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <div className="user-menu">
                        <ul>
                            <li><a href="#"><i className="fa fa-user"></i> My Account</a></li>
                            <li><a href="#"><i className="fa fa-heart"></i> Wishlist</a></li>
                            <li><a href="cart.html"><i className="fa fa-user"></i> My Cart</a></li>
                            <li><a href="checkout.html"><i className="fa fa-user"></i> Checkout</a></li>
                            <li><a href="#"><i className="fa fa-user"></i> Login</a></li>
                        </ul>
                    </div>
                </div>
                
                <div className="col-md-4">
                    <div className="header-right">
                        
                        <ul className="list-unstyled list-inline">
                            <li className="dropdown dropdown-small">
                                <a data-toggle="dropdown" data-hover="dropdown" className="dropdown-toggle" href="#"><span className="key">currency :</span><span className="value">USD </span><b className="caret"></b></a>
                                <ul className="dropdown-menu">
                                    <li><a href="#">USD</a></li>
                                    <li><a href="#">INR</a></li>
                                    <li><a href="#">GBP</a></li>
                                </ul>
                            </li>

                            <li className="dropdown dropdown-small">
                                <a data-toggle="dropdown" data-hover="dropdown" className="dropdown-toggle" href="#"><span className="key">language :</span><span className="value">English </span><b className="caret"></b></a>
                                <ul className="dropdown-menu">
                                    <li><a href="#">English</a></li>
                                    <li><a href="#">French</a></li>
                                    <li><a href="#">German</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
   
    
   <div className="site-branding-area">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="logo">
                                <h1 ><Link to="/"style={{textDecoration: 'none'}}>e<span>MercadoNegro</span></Link></h1>
                            </div>
                        </div>

                        <div className="col-sm-6"> <Link to="/cart">
                            <div className="shopping-item">
                                <i className="fa fa-shopping-cart icon-large" style={{color: 'grey'}}></i> <span className="product-count"></span> 
                            </div></Link>
                        </div>
                    </div>
                </div>
            </div>
    
    <nav className="navbar navbar-expand-lg mainmenu-area " style={{ height: '70px' }}>
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" style={{ justifyContent: 'center' }}>
                        <ul className="nav navbar-nav">
                            <li className="nav-item">
                                <Link className="active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="active" aria-current="page" to="/cart">Cart</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="active" aria-current="page" to="/shop">Shop page</Link>
                            </li>
                            <li><a href="single-product.html">Single product</a></li>
                            <li className="nav-item">
                                <Link className="active" aria-current="page" to="/checkout">Checkout</Link>
                            </li>
                            <li><a href="#">Category</a></li>
                            <li><a href="#">Others</a></li>
                            <li><a href="#">Contact</a></li>

                        </ul>
                    </div>
                </div>
            </nav>
     </>
  )
}

export default Header