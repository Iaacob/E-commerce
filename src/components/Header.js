import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
   
    
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
                            <li className=" active">
                                <Link className="active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="active" aria-current="page" to="/cart">Cart</Link>
                            </li>
                            

                        </ul>
                    </div>
                </div>
            </nav>
     </>
  )
}

export default Header