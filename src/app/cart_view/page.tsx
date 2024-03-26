import React, { FC } from 'react'

const page:FC = () => {
  return (
    <>
    <section className="page_breadcrumb" style={{background: 'url(/images/breadcrumb_bg.jpg)'}}>
        <div className="breadcrumb_overlay">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="breadcrumb_text wow fadeInUp">
                            <h1>Cart View</h1>
                            <ul>
                                <li><a href="#"><i className="fal fa-home-lg"></i> Home</a></li>
                                <li><a href="#">Cart View</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <section className="cart_view pt_120 xs_pt_80">
        <div className="container">
            <div className="row">
                <div className="col-lg-8 wow fadeInLeft">
                    <div className="cart_table_area">
                        <div className="table-responsive">
                            <table>
                                <thead>
                                    <tr>
                                        <th className="images">Image</th>
                                        <th className="name">Product Name</th>
                                        <th className="price">Price</th>
                                        <th className="qty">Quantity</th>
                                        <th className="total">Total</th>
                                        <th className="delete">Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="images">
                                            <img src="/images/cart_view_img_1.png" alt="cart" className="img-fluid w-100"/>
                                        </td>
                                        <td className="name">
                                            <a className="title" href="shop_details.html">Carrot Vegetables</a>
                                        </td>
                                        <td className="price">
                                            <p>$45.00</p>
                                        </td>
                                        <td className="qty">
                                            <div className="button_area">
                                                <button>-</button>
                                                <input type="text" placeholder="01"/>
                                                <button>+</button>
                                            </div>
                                        </td>
                                        <td className="total">
                                            <span>$45.00</span>
                                        </td>
                                        <td className="delete">
                                            <a className="del" href="#"><i className="fal fa-times-circle"></i></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="images">
                                            <img src="/images/cart_view_img_2.png" alt="cart" className="img-fluid w-100"/>
                                        </td>
                                        <td className="name">
                                            <a className="title" href="shop_details.html">Fresh Red Seedless</a>
                                        </td>
                                        <td className="price">
                                            <p>$80.00</p>
                                        </td>
                                        <td className="qty">
                                            <div className="button_area">
                                                <button>-</button>
                                                <input type="text" placeholder="02"/>
                                                <button>+</button>
                                            </div>
                                        </td>
                                        <td className="total">
                                            <span>$160.00</span>
                                        </td>
                                        <td className="delete">
                                            <a className="del" href="#"><i className="fal fa-times-circle"></i></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="images">
                                            <img src="/images/cart_view_img_3.png" alt="cart" className="img-fluid w-100"/>
                                        </td>
                                        <td className="name">
                                            <a className="title" href="shop_details.html">Beef Butter Cake</a>
                                        </td>
                                        <td className="price">
                                            <p>$50.00</p>
                                        </td>
                                        <td className="qty">
                                            <div className="button_area">
                                                <button>-</button>
                                                <input type="text" placeholder="01"/>
                                                <button>+</button>
                                            </div>
                                        </td>
                                        <td className="total">
                                            <span>$50.00</span>
                                        </td>
                                        <td className="delete">
                                            <a className="del" href="#"><i className="fal fa-times-circle"></i></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="images">
                                            <img src="/images/cart_view_img_4.png" alt="cart" className="img-fluid w-100"/>
                                        </td>
                                        <td className="name">
                                            <a className="title" href="shop_details.html">Orange Slice Mix</a>
                                        </td>
                                        <td className="price">
                                            <p>$75.00</p>
                                        </td>
                                        <td className="qty">
                                            <div className="button_area">
                                                <button>-</button>
                                                <input type="text" placeholder="03"/>
                                                <button>+</button>
                                            </div>
                                        </td>
                                        <td className="total">
                                            <span>$225.00</span>
                                        </td>
                                        <td className="delete">
                                            <a className="del" href="#"><i className="fal fa-times-circle"></i></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="images">
                                            <img src="/images/cart_view_img_5.png" alt="cart" className="img-fluid w-100"/>
                                        </td>
                                        <td className="name">
                                            <a className="title" href="shop_details.html">Fresh Mango Fruits</a>
                                        </td>
                                        <td className="price">
                                            <p>$60.00</p>
                                        </td>
                                        <td className="qty">
                                            <div className="button_area">
                                                <button>-</button>
                                                <input type="text" placeholder="01"/>
                                                <button>+</button>
                                            </div>
                                        </td>
                                        <td className="total">
                                            <span>$60.00</span>
                                        </td>
                                        <td className="delete">
                                            <a className="del" href="#"><i className="fal fa-times-circle"></i></a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <form>
                            <input type="text" placeholder="Coupon Code"/>
                            <button type="submit" className="common_btn">Apply Coupon <span></span></button>
                        </form>
                    </div>
                </div>
                <div className="col-lg-4 col-md-8">
                    <div className="cart_sidebar" id="sticky_sidebar">
                        <h3>Total Cart (03)</h3>
                        <div className="cart_sidebar_info">
                            <h4>Subtotal : <span>$250.00</span></h4>
                            <p>Delivery : <span>$53.00</span></p>
                            <p>Discount : <span>$12.00</span></p>
                            <h5>Total : <span>$315.00</span></h5>
                            <a className="common_btn" href="#">Checkout <i className="fas fa-long-arrow-right"></i>
                                <span></span></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default page