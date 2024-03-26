import Link from 'next/link'

export default function NotFound() {
    return (
        <>
            <section className="page_breadcrumb" style={{background: 'url(/images/breadcrumb_bg.jpg)'}}>
                <div className="breadcrumb_overlay">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="breadcrumb_text wow fadeInUp">
                                    <h1>Error/404</h1>
                                    <ul>
                                        <li><a href="#"><i className="fal fa-home-lg"></i> Home</a></li>
                                        <li><a href="#">Error/404</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="error_page pt_120 xs_pt_80">
                <div className="container">
                    <div className="row wow fadeInUp">
                        <div className="col-xl-6 col-sm-9 col-md-8 col-lg-7 m-auto">
                            <div className="error_text">
                                <div className="img">
                                    <img src="/images/error_img.png" alt="Error" className="img-fluid w-100"/>
                                </div>
                                <h3>Opos! Nothing Was Found</h3>
                                <p>Something went wrong, Looks like this page doesn't exist anymore.</p>
                                <Link className="common_btn" href="/"> <i className="fas fa-long-arrow-left"></i> go back home
                                    <span></span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}