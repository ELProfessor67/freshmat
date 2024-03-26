import React, { FC } from 'react'

const page: FC = () => {
    return (
        <>

            <section className="page_breadcrumb" style={{background: 'url(/images/breadcrumb_bg.jpg)'}}>
                <div className="breadcrumb_overlay">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="breadcrumb_text wow fadeInUp">
                                    <h1>Order Tracking</h1>
                                    <ul>
                                        <li><a href="#"><i className="fal fa-home-lg"></i> Home</a></li>
                                        <li><a href="#">Tracking</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="order_tracking pt_120 xs_pt_80">
                <div className="container">
                    <div className="row wow fadeInUp">
                        <div className="col-xl-5 col-md-8 col-lg-6 m-auto">
                            <div className="tracking_form">
                                <h2>Order Tracking</h2>
                                <p>Tracking Your Order Statue</p>
                                <form>
                                    <input type="text" placeholder="Order ID"/>
                                        <input type="email" placeholder="Email address"/>
                                            <button type="submit" className="common_btn">Track Order<span></span></button>
                                        </form>
                                    </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="tracking_info mt_70">
                                    <ul className="tracking_header wow fadeInUp">
                                        <li>
                                            <h4>Order Placed</h4>
                                            <p>May 30, 2023</p>
                                        </li>
                                        <li>
                                            <h4>Total Amount</h4>
                                            <p>$2565.52</p>
                                        </li>
                                        <li>
                                            <h4>Ship To</h4>
                                            <p>jhon deo</p>
                                        </li>
                                        <li>
                                            <h4>Order No</h4>
                                            <p>#25653</p>
                                        </li>
                                    </ul>

                                    <ul className="tracking_bar mt_75 wow fadeInUp">
                                        <li className="active">Order Pending</li>
                                        <li className="active">Order Processing</li>
                                        <li className="">On The Way</li>
                                        <li className="">Ready For Delivery</li>
                                    </ul>

                                    <div className="tracking_details mt_65 xs_mt_35 wow fadeInUp">
                                        <div className="table-responsive">
                                            <table>
                                                <thead>
                                                    <tr>
                                                        <th>Product</th>
                                                        <th>Quantity</th>
                                                        <th>Subtotal</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Cillum dolore tortor nisl X 01</td>
                                                        <td>03</td>
                                                        <td>$250.00</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Auctor gravida pellentesque X 02</td>
                                                        <td>03</td>
                                                        <td>$250.00</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Condimentum posuere consectetur X 01</td>
                                                        <td>02</td>
                                                        <td>$12.00</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Habitasse dictumst elementum X 01</td>
                                                        <td>04</td>
                                                        <td>$100.00</td>
                                                    </tr>
                                                </tbody>
                                                <tfoot>
                                                    <tr>
                                                        <td colSpan={2}>Total :</td>
                                                        <td>$100.00</td>
                                                    </tr>
                                                </tfoot>
                                            </table>
                                        </div>
                                        <a className="common_btn" href="#"><i className="fas fa-long-arrow-left"></i> Back To Order
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