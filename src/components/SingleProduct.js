import { React, useContext } from 'react'
import product from "../Product.json"
import { Link } from 'react-router-dom'
import {CartContext} from "./CartContext"

function SingleProduct() {
    const { AddToCart } = useContext(CartContext)

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

                        {
                            product.map(
                                (elemento) =>
                                    <div className="col-md- col-sm-6">
                                        <div className="single-shop-product">
                                            <div className="product-upper">
                                                <img src={elemento.img} width="300px" alt="" />
                                            </div>
                                            <h2>{elemento.title}</h2>
                                            <h2><Link to={"/detalle/"+elemento.id}>Ver detalles</Link></h2>

                                            <div className="product-carousel-price">
                                                <ins>${elemento.precio}</ins> <del>{elemento.precioAnterior}</del>
                                            </div>

                                            <div className="product-option-shop">
                                                <Link to="/cart" className="add_to_cart_button" onClick={() => AddToCart(elemento)} data-quantity="1" data-product_sku="" data-product_id="70" rel="nofollow">Add to cart</Link>
                                            </div>
                                        </div>
                                    </div>
                            )
                        }
                    </div>

                    
                </div>
            </div>
        </>

    )
}

export default SingleProduct;