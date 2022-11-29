import { React, useContext } from 'react'
import product from "../Product.json"
import { useParams, Link } from 'react-router-dom'
import { CartContext } from "./CartContext"


function Detalle() {

    const { AddToCart } = useContext(CartContext)

    const {id} = useParams() 
    const producto = product.find(p => p.id === parseInt(id))
    console.log(product)
    
  return (

    
    <>
    <div className="product-big-title-area">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="product-bit-title text-center">
                        <h2>Shop Now</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>

    
    <div className="single-product-area">
        <div className="zigzag-bottom"></div>
        <div className="container">
            
            <div className="row">

                <div className="col-md-4">
                    {/* <div className="single-sidebar">
                        <h2 className="sidebar-title">Search Products</h2>
                        <form action="">
                            <input type="text" placeholder="Search products..."/>
                            <input type="submit" value="Search"/>
                        </form>
                    </div> 

                    <div className="single-sidebar">
                        <h2 className="sidebar-title">Other Products</h2>
                        <div className="thubmnail-recent">
                            <img src="img/product-thumb-1.jpg" className="recent-thumb" alt=""/>
                            <h2><a href="">Sony Smart TV - 2015</a></h2>
                            <div className="product-sidebar-price">
                                <ins>$700.00</ins> <del>$800.00</del>
                            </div>                             
                        </div>
                        <div className="thubmnail-recent">
                            <img src="img/product-thumb-1.jpg" className="recent-thumb" alt=""/>
                            <h2><a href="">Sony Smart TV - 2015</a></h2>
                            <div className="product-sidebar-price">
                                <ins>$700.00</ins> <del>$800.00</del>
                            </div>                             
                        </div>
                        <div className="thubmnail-recent">
                            <img src="img/product-thumb-1.jpg" className="recent-thumb" alt=""/>
                            <h2><a href="">Sony Smart TV - 2015</a></h2>
                            <div className="product-sidebar-price">
                                <ins>$700.00</ins> <del>$800.00</del>
                            </div>                             
                        </div>
                        <div className="thubmnail-recent">
                            <img src="img/product-thumb-1.jpg" className="recent-thumb" alt=""/>
                            <h2><a href="">Sony Smart TV - 2015</a></h2>
                            <div className="product-sidebar-price">
                                <ins>$700.00</ins> <del>$800.00</del>
                            </div>                             
                        </div>
                    </div> */}
                    
                    {/* <div className="single-sidebar">
                        <h2 className="sidebar-title">Recent Posts</h2>
                        <ul>
                            <li><a href="">Sony Smart TV - 2015</a></li>
                            <li><a href="">Sony Smart TV - 2015</a></li>
                            <li><a href="">Sony Smart TV - 2015</a></li>
                            <li><a href="">Sony Smart TV - 2015</a></li>
                            <li><a href="">Sony Smart TV - 2015</a></li>
                        </ul>
                    </div> */}
                </div>  
                
                <div className="col-md-8">
                    
                    <div className="product-content-right">
                        <div className="product-breadcroumb">
                            <a href="">Home</a>
                            <a href="">Category Name</a>
                            <a href="">{producto.title}</a>
                        </div>
                        
                       
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="product-images">
                                    <div className="product-main-img">
                                        <img src={producto.img} alt=""/>
                                    </div>
                                    
                                    <div className="product-gallery">
                                        <img src={producto.img2} alt=""/>
                                        <img src={producto.img2} alt=""/>
                                        <img src={producto.img2} alt=""/>
                                        <img src={producto.img2} alt=""/>
                                    </div>
                                </div>
                            </div>
                           
                            <div className="col-sm-6">
                                <div className="product-inner">
                                    <h1 className="product-name">{producto.title}</h1>
                                    <div className="product-inner-price">
                                        <ins>${producto.precio}</ins> <del>${producto.precioAnterior}</del>
                                    </div>    
                                    
                                    
                                    <form action="" className="cart">
                                        <div className="quantity">
                                            <input type="number" size="4" className="input-text qty text" title="Qty" value="1" name="quantity" min="1" step="1"/>
                                        </div>
                                        <button onClick={() => AddToCart(producto)} className="add_to_cart_button" type="submit">Add to cart</button>
                                    </form>   
                                    
                                    <div className="product-inner-category">
                                        <p>Category: <a href="">{producto.categoria}</a>. Tags: <a href="">awesome</a>, <a href="">best</a></p>
                                    </div> 
                                    
                                    <div role="tabpanel">
                                        
                                        {/* <ul className="product-tab" role="tablist">
                                            <li role="presentation" className="active"><a href="#home" aria-controls="home" role="tab" data-toggle="tab">Description</a></li>
                                            <li role="presentation"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">Reviews</a></li>
                                        </ul> */}
                                        <h1>descripcion:</h1>
                                        
                                        <p>{producto.descripcion}</p>
                                        {/* <div className="tab-content">
                                            <div role="tabpanel" className="tab-pane fade in active" id="home">
                                                <h2>Product Description</h2>  
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tristique, diam in consequat iaculis, est purus iaculis mauris, imperdiet facilisis ante ligula at nulla. Quisque volutpat nulla risus, id maximus ex aliquet ut. Suspendisse potenti. Nulla varius lectus id turpis dignissim porta. Quisque magna arcu, blandit quis felis vehicula, feugiat gravida diam. Nullam nec turpis ligula. Aliquam quis blandit elit, ac sodales nisl. Aliquam eget dolor eget elit malesuada aliquet. In varius lorem lorem, semper bibendum lectus lobortis ac.</p>

                                                <p>Mauris placerat vitae lorem gravida viverra. Mauris in fringilla ex. Nulla facilisi. Etiam scelerisque tincidunt quam facilisis lobortis. In malesuada pulvinar neque a consectetur. Nunc aliquam gravida purus, non malesuada sem accumsan in. Morbi vel sodales libero.</p>
                                            </div>
                                            <div role="tabpanel" className="tab-pane fade" id="profile">
                                                <h2>Reviews</h2>
                                                <div className="submit-review">
                                                    <p><label for="name">Name</label> <input name="name" type="text"/></p>
                                                    <p><label for="email">Email</label> <input name="email" type="email"/></p>
                                                    <div className="rating-chooser">
                                                        <p>Your rating</p>

                                                        <div className="rating-wrap-post">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </div>
                                                    </div>
                                                    <p><label for="review">Your review</label> <textarea name="review" id="" cols="30" rows="10"></textarea></p>
                                                    <p><input type="submit" value="Submit"/></p>
                                                </div>
                                            </div>
                                        </div> */}
                                        
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        
                        
                    </div> 
                                  
                </div>
            </div>
        </div>
    </div>

    
    </>

    )
}

export default Detalle