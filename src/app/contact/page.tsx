import Script from 'next/script'
import React, { FC } from 'react'

const page: FC = () => {
  return (
    <>

      {/* <!--=========================
      BREADCRUMB START
    ==========================--> */}
      <section className="page_breadcrumb" style={{ background: 'url(/images/breadcrumb_bg.jpg)' }}>
        <div className="breadcrumb_overlay">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="breadcrumb_text wow fadeInUp">
                  <h1>Contact Us</h1>
                  <ul>
                    <li><a href="#"><i className="fal fa-home-lg"></i> Home</a></li>
                    <li><a href="#">Contact Us</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--=========================
      BREADCRUMB START
    ==========================-->


      <!--=========================
      CONTACT PAGE START
    ==========================--> */}
      <section className="contact pt_95 xs_pt_55">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-sm-6 col-lg-4 wow fadeInUp">
              <div className="contact_info">
                <span>
                  <img src="/images/contact_icon_1.png" alt="contact" className="img-fluid w-100" />
                </span>
                <h3> Address</h3>
                <p>16/A, Romadan House City Tower New York, United States</p>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 col-lg-4 wow fadeInUp">
              <div className="contact_info">
                <span>
                  <img src="/images/contact_icon_2.png" alt="contact" className="img-fluid w-100" />
                </span>
                <h3>Phone Number</h3>
                <a href="callto:01234567895">+880 1234 567895</a>
                <a href="callto:01234567895">+880 9876 543217</a>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 col-lg-4 wow fadeInUp">
              <div className="contact_info">
                <span>
                  <img src="/images/contact_icon_3.png" alt="contact" className="img-fluid w-100" />
                </span>
                <h3>Email Address</h3>
                <a href="mailto:example@gmail.com">example@gmail.com</a>
                <a href="mailto:jhondeo@gmail.com">jhondeo@gmail.com</a>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 col-lg-4 wow fadeInUp d-lg-none d-xl-block">
              <div className="contact_info">
                <span>
                  <img src="/images/contact_icon_4.png" alt="contact" className="img-fluid w-100" />
                </span>
                <h3>Website Address</h3>
                <a href="https://www.themefax.com/">exampleFreshmat.com</a>
                <a href="https://www.themefax.com/">exampleFreshmat.com</a>
              </div>
            </div>
          </div>
          <div className="row mt_50">
            <div className="col-lg-4 wow fadeInLeft d-none d-lg-block">
              <div className="contact_img">
                <img src="/images/contact_img.jpg" alt="contact" className="img-fluid w-100" />
              </div>
            </div>
            <div className="col-lg-8 wow fadeInRight">
              <div className="contact_form">
                <h3>Contact for Services</h3>
                <div className="row">
                  <div className="col-md-6">
                    <input type="text" placeholder="Your Name" />
                  </div>
                  <div className="col-md-6">
                    <input type="email" placeholder="Email Address" />
                  </div>
                  <div className="col-md-6">
                    <input type="text" placeholder="Phone Number" />
                  </div>
                  <div className="col-md-6">
                    <input type="text" placeholder="Subject" />
                  </div>
                  <div className="col-xl-12">
                    <textarea rows={6} placeholder="Write Message"></textarea>
                    <button type="submit" className="common_btn">Send A
                      Message<span></span></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt_120 wow fadeInUp xs_mt_80">
            <div className="col-12">
              <div className="contact_map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1824.8667200308832!2d90.42592680669435!3d23.828076048215905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c646adb2897f%3A0x4b007974289814ab!2sInternational%20Convention%20City%20Bashundhara%2C%20Joar%20Sahara%2C%20Khilkhet%20(Beside%20300ft%20Purbachal%20Link%20Road)%2C%20Purbachal%20Expy%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1697389294376!5m2!1sen!2sbd"
                  width="600" height="450" style={{ border: 0 }}  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default page