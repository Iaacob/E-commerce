import React from 'react'
import { Link } from 'react-router-dom'

function Layout() {
  return (
    <>
   
    
    <div className="site-branding-area">
        <div className="container">
            <div className="row">
                <div className="col-sm-6">
                    <div className="logo">
                        <h1><Link to="index.html">e<span>Electronics</span></Link></h1>
                    </div>
                </div>
                
                <div className="col-sm-6">
                    <div className="shopping-item">
                        <Link to="cart.html">Cart - <span className="cart-amunt">$800</span> <i className="fa fa-shopping-cart"></i> <span className="product-count">5</span></Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <div className="mainmenu-area">
        <div className="container">
            <div className="row">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                </div> 
                <div className="navbar-collapse collapse">
                    <ul className="nav navbar-nav">
                        <li className="active"><Link to="index.html">Home</Link></li>
                        <li><Link to="shop.html">Shop page</Link></li>
                        <li><Link to="single-product.html">Single product</Link></li>
                        <li><Link to="cart.html">Cart</Link></li>
                        <li><Link to="checkout.html">Checkout</Link></li>
                        <li><Link to="#">Category</Link></li>
                        <li><Link to="#">Others</Link></li>
                        <li><Link to="#">Contact</Link></li>
                    </ul>
                </div>  
            </div>
        </div>
    </div> </>
  )
}

export default Layout