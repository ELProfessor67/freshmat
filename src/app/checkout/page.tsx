import React, { FC } from 'react'

const page: FC = () => {
    return (
        <>
            {/* <!--=========================
                    BREADCRUMB START
            ==========================--> */}
            <section className="page_breadcrumb" style={{background: 'url(/images/breadcrumb_bg.jpg)'}}>
                <div className="breadcrumb_overlay">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="breadcrumb_text wow fadeInUp">
                                    <h1>Checkout</h1>
                                    <ul>
                                        <li><a href="#"><i className="fal fa-home-lg"></i> Home</a></li>
                                        <li><a href="#">Checkout</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--=========================
            BREADCRUMB START
    ==========================--> */}


            {/* <!--=========================
            CHECKOUT START
    ==========================--> */}
            <section className="checkout pt_120 xs_pt_75">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 wow fadeInUp">
                            <form className="checkout_form">
                                <h3>Billing Details</h3>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="checkout_input_box">
                                            <label>Name *</label>
                                            <input type="text" placeholder="Name"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="checkout_input_box">
                                            <label>Email *</label>
                                            <input type="email" placeholder="Email"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="checkout_input_box">
                                            <label>Phone</label>
                                            <input type="email" placeholder="Phone"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="checkout_input_box">
                                            <label>Company Name</label>
                                            <input type="text" placeholder="Company Name"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="checkout_input_box">
                                            <label>Country *</label>
                                            <select className="select_2" name="state">
                                                <option value="AL">Country</option>
                                                <option value="">Japan</option>
                                                <option value="">Korea</option>
                                                <option value="">Singapore</option>
                                                <option value="">Thailand</option>
                                                <option value="">Kanada</option>
                                            </select>

                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="checkout_input_box">
                                            <label>City *</label>
                                            <select className="select_2" name="state">
                                                <option value="AL">City</option>
                                                <option value="">dhaka</option>
                                                <option value="">barisal</option>
                                                <option value="">khulna</option>
                                                <option value="">rajshahi</option>
                                                <option value="">bogura</option>
                                            </select>

                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="checkout_input_box">
                                            <label>State *</label>
                                            <input type="text" placeholder="State *"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="checkout_input_box">
                                            <label>Zip *</label>
                                            <input type="text" placeholder="Zip *"/>
                                        </div>
                                    </div>
                                    <div className="col-xl-12">
                                        <div className="checkout_input_box">
                                            <label>Address *</label>
                                            <input type="text" placeholder="Address *"/>
                                        </div>
                                    </div>
                                    <div className="col-xl-12">
                                        <div className="checkout_input_box">
                                            <label>Note</label>
                                            <textarea rows={5} placeholder="Note"></textarea>
                                        </div>
                                    </div>

                                </div>

                            </form>
                        </div>
                        <div className="col-lg-4 col-md-8">
                            <div className="cart_sidebar" id="sticky_sidebar">
                                <h3>Total Cart (03)</h3>
                                <div className="cart_sidebar_info">
                                    <h4>Subtotal : <span>$250.00</span></h4>
                                    <p>Delivery : <span>$53.00</span></p>
                                    <p>Discount : <span>$12.00</span></p>
                                    <h5>Total : <span>$315.00</span></h5>
                                    <a className="common_btn" href="#">Payment <i className="fas fa-long-arrow-right"></i>
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