import React, { FC } from 'react'

const Footer: FC = () => {
  return (
    <>
      <footer className="mt_200 xs_mt_160" id='footer'>
        <div className="footer_overlay">
          <div className="container">
            <div className="footer_info" style={{ background: 'url(/images/footer_info_bg.jpg)' }}>
              <div className="row wow fadeInUp">
                <div className="col-lg-3 col-sm-6">
                  <div className="footer_info_item">
                    <div className="icon">
                      <img src="/images/footer_info_icon_1.png" alt="Icon" className="img-fluid w-100" />
                    </div>
                    <div className="text">
                      <h3>Free Shipping</h3>
                      <p>Worldwide</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="footer_info_item">
                    <div className="icon">
                      <img src="/images/footer_info_icon_2.png" alt="Icon" className="img-fluid w-100" />
                    </div>
                    <div className="text">
                      <h3>Helpline</h3>
                      <p>+1256 25632 565</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="footer_info_item">
                    <div className="icon">
                      <img src="/images/footer_info_icon_3.png" alt="Icon" className="img-fluid w-100" />
                    </div>
                    <div className="text">
                      <h3>24/7 Support</h3>
                      <p>Free For Customers</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="footer_info_item">
                    <div className="icon">
                      <img src="/images/footer_info_icon_4.png" alt="Icon" className="img-fluid w-100" />
                    </div>
                    <div className="text">
                      <h3>Returns</h3>
                      <p>30 Days Free Exchanges</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-between">
              <div className="col-lg-3 col-md-8">
                <div className="footer_logo_area">
                  <a className="footer_logo" href="index.html">
                    <img src="/images/footer_logo.png" alt="Freshmat" className="img-fluid w-100" />
                  </a>
                  <p>Lorem ipsum dolor sit amet, cons ectetur adipiscing elit sed.</p>
                  <span>Hello to : <a href="mailto:support@mail.com">support@mail.com</a></span>
                  <ul>
                    <li><span>Follow :</span></li>
                    <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                    <li><a href="#"><i className="fab fa-google-plus-g"></i></a></li>
                    <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-sm-6 col-md-4">
                <div className="footer_link">
                  <h3>Category</h3>
                  <ul>
                    <li><a href="shop.html">Milk & Dairy</a></li>
                    <li><a href="shop.html">Coffee & Drinks</a></li>
                    <li><a href="shop.html">Fresh & Fruits</a></li>
                    <li><a href="shop.html">Fresh Dessert</a></li>
                    <li><a href="shop.html">Cleaning Essential</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-sm-6 col-md-4">
                <div className="footer_link">
                  <h3>Quick Links</h3>
                  <ul>
                    <li><a href="#">Aarong Dairy</a></li>
                    <li><a href="#">Alshifa Natural</a></li>
                    <li><a href="#">Agro Acres</a></li>
                    <li><a href="#">Service</a></li>
                    <li><a href="#">News</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-sm-6 col-md-4">
                <div className="footer_link">
                  <h3>Our Services</h3>
                  <ul>
                    <li><a href="#">Agriculture</a></li>
                    <li><a href="#">Organic Products</a></li>
                    <li><a href="#">Milk Sweet</a></li>
                    <li><a href="#">Delivery Service</a></li>
                    <li><a href="#">Fresh Vegetables</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-sm-6 col-md-4">
                <div className="footer_link">
                  <h3>Contact Us</h3>
                  <ul>
                    <li><a href="about_us.html">About Us</a></li>
                    <li><a href="sign_in.html">Sign In</a></li>
                    <li><a href="sign_up.html">Sign Up</a></li>
                    <li><a href="contact.html">Contact Us</a></li>
                    <li><a href="team.html">Team</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="footer_copyright mt_75">
                  <p>Copyright @ Freshmat 2023. All right reserved.</p>
                  <ul>
                    <li>Payment by :</li>
                    <li>
                      <img src="/images/footer_payment_icon_1.jpg" alt="payment" className="img-fluid w-100" />
                    </li>
                    <li>
                      <img src="/images/footer_payment_icon_2.jpg" alt="payment" className="img-fluid w-100" />
                    </li>
                    <li>
                      <img src="/images/footer_payment_icon_3.jpg" alt="payment" className="img-fluid w-100" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* <!--=========================
        FOOTER END
    ==========================-->


    <!--==========================
        SCROLL BUTTON START
    ===========================--> */}
      <div className="progress-wrap">
        <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
      </div>
      {/* <!--==========================
        SCROLL BUTTON END
    ===========================--> */}
    </>
  )
}

export default Footer;