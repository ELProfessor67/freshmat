import ProductGallery from '@/components/ProductGallery'
import { getProduct, getSingleProduct } from '@/http'
import { IProduct } from '@/types'
import { AxiosResponse } from 'axios'
import { redirect } from 'next/navigation'
import Script from 'next/script'
import React, { FC } from 'react'

interface IProps
{
    params: {
        slug: string
    }
}

interface IRes
{
    success: boolean,
    product: IProduct
}


async  function getProductDeatils(slug:string):Promise<IProduct | null>{
    try {
        const res:AxiosResponse<IRes> = await getSingleProduct(slug);
        return res.data.product
    } catch (error) {
        return null;
    }
}

const page: FC<IProps> = async ({params}) => {
    const product = await getProductDeatils(params.slug);
    if(!product){
        redirect("/");
        return
    }
    return (
        <>

            {/* <!--=========================
        BREADCRUMB START
    ==========================-->  */}
            <section className="page_breadcrumb" style={{ background: 'url(..//images/breadcrumb_bg.jpg)' }}>
                <div className="breadcrumb_overlay">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="breadcrumb_text wow fadeInUp">
                                    <h1>Shop Details</h1>
                                    <ul>
                                        <li><a href="#"><i className="fal fa-home-lg"></i> Home</a></li>
                                        <li><a href="#">Shop Details</a></li>
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
        SHOP DETAILS START
    ==========================--> */}
            {/* <ProductGallery/> */}
            <section className="shop_details pt_120 xs_pt_80">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-md-8 col-lg-6 wow fadeInLeft">
                            <ProductGallery images={product.images}/>
                            
                        </div>
                        <div className="col-xl-4 col-md-10 col-lg-6 wow fadeInUp">
                            <div className="product_det_text">
                                <h2 className="details_title">{product.name}</h2>
                                <p className="rating">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star-half-alt"></i>
                                    <i className="far fa-star"></i>
                                    <span>Review (20)</span>
                                </p>
                                <p className="price">${product.price} <del>$12.00</del></p>
                                <div className="details_short_description">
                                    <h3>Description</h3>
                                    <p>{product.shortdescription}</p>
                                </div>
                                <div className="details_quentity_area">
                                    <p><span>Qti Weight</span> (in kg) :</p>
                                    <div className="button_area">
                                        <button>-</button>
                                        <input type="text" placeholder="01" />
                                        <button>+</button>
                                    </div>
                                    <h3>= $10.50</h3>
                                </div>
                                <div className="details_cart_btn">
                                    <a className="common_btn" href="#"><i className="far fa-shopping-basket"></i> Add To Cart
                                        <span></span></a>
                                    <a className="love" href="#"><i className="far fa-heart"></i></a>
                                </div>
                                <p className="category"><span>Category:</span> {product.productCategory}</p>
                                <p className="sku"><span>SKU:</span> woo-hoodie-with-logo</p>
                                <ul className="tags">
                                    <li>Tags:</li>
                                    <li><a href="#">Black Coffee, </a></li>
                                    <li><a href="#">Popular,</a></li>
                                    <li><a href="#">Top Sell</a></li>
                                </ul>
                                <ul className="share">
                                    <li>Share with friends:</li>
                                    <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                    <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                    <li><a href="#"><i className="fab fa-behance"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6 d-none d-xl-block wow fadeInRight">
                            <div className="shop_details_banner">
                                <img src="/images/details_banner_img.png" alt="banner" className="img-fluid w-100" />
                                <div className="text">
                                    <h4>Daily Offer</h4>
                                    <h3>Fresh Organic Food Up To 65% Off</h3>
                                    <a className="common_btn" href="shop_details.html">shop now <i
                                        className="fas fa-long-arrow-right"></i>
                                        <span></span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt_120 xs_mt_80 wow fadeInUp">
                        <div className="col-12">
                            <div className="shop_det_content_area">
                                <nav>
                                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                        <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab"
                                            data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home"
                                            aria-selected="true">Description</button>
                                        <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab"
                                            data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile"
                                            aria-selected="false"> Information</button>
                                        <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab"
                                            data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact"
                                            aria-selected="false">Reviews</button>
                                    </div>
                                </nav>
                                <div className="tab-content" id="nav-tabContent">
                                    <div className="tab-pane fade show active" id="nav-home" role="tabpanel"
                                        aria-labelledby="nav-home-tab" >
                                        <div className="shop_det_description">
                                            <p>{product.shortdescription}</p>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="nav-profile" role="tabpanel"
                                        aria-labelledby="nav-profile-tab">
                                        <div className="shop_det_additional_info">
                                            <h3>Additional Information</h3>
                                            <div className="table-responsive">
                                                <table>
                                                    <tbody>
                                                        <tr>
                                                            <td>Weight</td>
                                                            <td>2 kg</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Dimensions</td>
                                                            <td>10 × 6 × 3 cm</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Width</td>
                                                            <td>7.5” - 8.75”</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Hight</td>
                                                            <td>5.5” - 6.75”</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="nav-contact" role="tabpanel"
                                        aria-labelledby="nav-contact-tab" >
                                        <div className="shop_det_review_area">
                                            <div className="row">
                                                <div className="col-lg-8">
                                                    <h2>(15) Reviews</h2>
                                                    <div className="single_review">
                                                        <div className="img">
                                                            <img src="/images/testimonial_img_1.jpg" alt="Reviewer"
                                                                className="img-fluid w-100" />
                                                        </div>
                                                        <div className="text">
                                                            <h4>Hasnat Abdullah <span>May 8, 2023</span></h4>
                                                            <span className="rating">
                                                                <i className="fas fa-star"></i>
                                                                <i className="fas fa-star"></i>
                                                                <i className="fas fa-star"></i>
                                                                <i className="fas fa-star"></i>
                                                                <i className="far fa-star"></i>
                                                            </span>
                                                            <p>Lorem ipsum is simply free text used by copytyping refreshing.
                                                                Neque
                                                                porro est is a rem ipsum qu
                                                                ia qued inventore veritatis et quasi architecto beatae</p>
                                                        </div>
                                                    </div>
                                                    <div className="single_review">
                                                        <div className="img">
                                                            <img src="/images/testimonial_img_2.jpg" alt="Reviewer"
                                                                className="img-fluid w-100" />
                                                        </div>
                                                        <div className="text">
                                                            <h4>Sinthis Mou <span>May 8, 2023</span></h4>
                                                            <span className="rating">
                                                                <i className="fas fa-star"></i>
                                                                <i className="fas fa-star"></i>
                                                                <i className="fas fa-star"></i>
                                                                <i className="fas fa-star"></i>
                                                                <i className="fas fa-star-half-alt"></i>
                                                            </span>
                                                            <p>Lorem ipsum is simply free text used by copytyping refreshing.
                                                                Neque
                                                                porro est is a rem ipsum qu
                                                                ia qued inventore veritatis et quasi architecto beatae</p>
                                                        </div>
                                                    </div>
                                                    <div className="single_review">
                                                        <div className="img">
                                                            <img src="/images/testimonial_img_3.jpg" alt="Reviewer"
                                                                className="img-fluid w-100" />
                                                        </div>
                                                        <div className="text">
                                                            <h4>Samira Khanom <span>May 8, 2023</span></h4>
                                                            <span className="rating">
                                                                <i className="fas fa-star"></i>
                                                                <i className="fas fa-star"></i>
                                                                <i className="fas fa-star"></i>
                                                                <i className="fas fa-star-half-alt"></i>
                                                                <i className="far fa-star"></i>
                                                            </span>
                                                            <p>Lorem ipsum is simply free text used by copytyping refreshing.
                                                                Neque
                                                                porro est is a rem ipsum qu
                                                                ia qued inventore veritatis et quasi architecto beatae</p>
                                                        </div>
                                                    </div>
                                                    <div className="pagination mt_25">
                                                        <ul className="pagination justify-content-end">
                                                            <li className="page-item">
                                                                <a className="page-link" href="#" aria-label="Previous">
                                                                    <i className="far fa-angle-double-left"></i>
                                                                </a>
                                                            </li>
                                                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                                                            <li className="page-item"><a className="page-link active" href="#">2</a>
                                                            </li>
                                                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                                                            <li className="page-item">
                                                                <a className="page-link" href="#" aria-label="Next">
                                                                    <i className="far fa-angle-double-right"></i>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4">
                                                    <div className="review_input_area">
                                                        <h2>Write A Review</h2>
                                                        <p>
                                                            Select Your Rating :
                                                            <span>
                                                                <i className="fas fa-star"></i>
                                                                <i className="fas fa-star"></i>
                                                                <i className="fas fa-star"></i>
                                                                <i className="fas fa-star"></i>
                                                                <i className="fas fa-star"></i>
                                                            </span>
                                                        </p>
                                                        <form>
                                                            <div className="review_input_box">
                                                                <label>Name *</label>
                                                                <input type="text" placeholder="Name" />
                                                            </div>
                                                            <div className="review_input_box">
                                                                <label>Email *</label>
                                                                <input type="email" placeholder="Email" />
                                                            </div>
                                                            <div className="review_input_box">
                                                                <label>Write Review *</label>
                                                                <textarea rows={5} placeholder="Write your review"></textarea>
                                                            </div>
                                                            <button type="submit" className="common_btn">Submit Review
                                                                <span> </span></button>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--=========================
        SHOP DETAILS END
    ==========================-->


    <!--=========================
        RELATED PRODUCT START
    ==========================--> */}
            <section className="related_product pt_115 xs_pt_75">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 wow fadeInLeft">
                            <div className="section_heading heading_left mb_15">
                                <h4>Our Blog Post</h4>
                                <h2>Latest News & Articles</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row related_slider">
                        <div className="col-xl-3 wow fadeInUp">
                            <div className="single_product">
                                <div className="single_product_img">
                                    <img src="/images/product_img_1.jpg" alt="Product" className="img_fluid w-100" />
                                    <ul>
                                        <li><a href="#"><i className="far fa-eye"></i></a></li>
                                        <li><a href="#"><i className="far fa-heart"></i></a></li>
                                    </ul>
                                </div>
                                <div className="single_product_text">
                                    <a className="title" href="shop_details.html">Lemon Meat Bone</a>
                                    <p>$20.00 <del>$25.00</del> </p>
                                    <a className="cart_btn" href="shop_details.html" data-bs-toggle="modal"
                                        data-bs-target="#cart_popup_modal"><i className="far fa-shopping-basket"></i> Add To Cart
                                        <span></span></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 wow fadeInUp">
                            <div className="single_product">
                                <div className="single_product_img">
                                    <img src="/images/product_img_2.jpg" alt="Product" className="img_fluid w-100" />
                                    <ul>
                                        <li><a href="#"><i className="far fa-eye"></i></a></li>
                                        <li><a href="#"><i className="far fa-heart"></i></a></li>
                                    </ul>
                                </div>
                                <div className="single_product_text">
                                    <a className="title" href="shop_details.html">Fresh Red Seedless</a>
                                    <p>$12.00 <del>$10.00</del> </p>
                                    <a className="cart_btn" href="shop_details.html" data-bs-toggle="modal"
                                        data-bs-target="#cart_popup_modal"><i className="far fa-shopping-basket"></i> Add To Cart
                                        <span></span></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 wow fadeInUp">
                            <div className="single_product">
                                <div className="single_product_img">
                                    <img src="/images/product_img_3.jpg" alt="Product" className="img_fluid w-100" />
                                    <ul>
                                        <li><a href="#"><i className="far fa-eye"></i></a></li>
                                        <li><a href="#"><i className="far fa-heart"></i></a></li>
                                    </ul>
                                </div>
                                <div className="single_product_text">
                                    <a className="title" href="shop_details.html">Carrot Vegetables</a>
                                    <p>$33.00 <del>$28.00</del> </p>
                                    <a className="cart_btn" href="shop_details.html" data-bs-toggle="modal"
                                        data-bs-target="#cart_popup_modal"><i className="far fa-shopping-basket"></i> Add To Cart
                                        <span></span></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 wow fadeInUp">
                            <div className="single_product">
                                <div className="single_product_img">
                                    <img src="/images/product_img_4.jpg" alt="Product" className="img_fluid w-100" />
                                    <ul>
                                        <li><a href="#"><i className="far fa-eye"></i></a></li>
                                        <li><a href="#"><i className="far fa-heart"></i></a></li>
                                    </ul>
                                </div>
                                <div className="single_product_text">
                                    <a className="title" href="shop_details.html">Bengal Beef Bone</a>
                                    <p>$12.00 <del>$10.00</del> </p>
                                    <a className="cart_btn" href="shop_details.html" data-bs-toggle="modal"
                                        data-bs-target="#cart_popup_modal"><i className="far fa-shopping-basket"></i> Add To Cart
                                        <span></span></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 wow fadeInUp">
                            <div className="single_product">
                                <div className="single_product_img">
                                    <img src="/images/product_img_5.jpg" alt="Product" className="img_fluid w-100" />
                                    <ul>
                                        <li><a href="#"><i className="far fa-eye"></i></a></li>
                                        <li><a href="#"><i className="far fa-heart"></i></a></li>
                                    </ul>
                                </div>
                                <div className="single_product_text">
                                    <a className="title" href="shop_details.html">Carrot Vegetables</a>
                                    <p>$45.00 <del>$50.00</del> </p>
                                    <a className="cart_btn" href="shop_details.html" data-bs-toggle="modal"
                                        data-bs-target="#cart_popup_modal"><i className="far fa-shopping-basket"></i> Add To Cart
                                        <span></span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="cart_popup_modal">
                <div className="modal fade" id="cart_popup_modal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1}
                    aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            <div className="modal-body">
                                <div className="row align-items-center">
                                    <div className="col-xl-6">
                                        <div className="cart_popup_modal_img">
                                            <img src="/images/home2_product_img_4.jpg" alt="Product img-fluid w-100" />
                                        </div>
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="product_det_text">
                                            <h2 className="details_title">Nestle Nescafe Classic Instant</h2>
                                            <p className="rating">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star-half-alt"></i>
                                                <i className="far fa-star"></i>
                                                <span>Review (20)</span>
                                            </p>
                                            <p className="price">$10.50 <del>$12.00</del></p>
                                            <div className="details_quentity_area">
                                                <p><span>Qti Weight</span> (in kg) :</p>
                                                <div className="button_area">
                                                    <button>-</button>
                                                    <input type="text" placeholder="01" />
                                                    <button>+</button>
                                                </div>
                                                <h3>= $10.50</h3>
                                            </div>
                                            <div className="details_cart_btn">
                                                <a className="common_btn" href="#"><i className="far fa-shopping-basket"></i> Add To
                                                    Cart
                                                    <span></span></a>
                                                <a className="love" href="#"><i className="far fa-heart"></i></a>
                                            </div>
                                            <p className="category"><span>Category:</span> Coffee</p>
                                            <ul className="tags">
                                                <li>Tags:</li>
                                                <li><a href="#">Black Coffee, </a></li>
                                                <li><a href="#">Popular,</a></li>
                                                <li><a href="#">Top Sell</a></li>
                                            </ul>
                                            <ul className="share">
                                                <li>Share with friends:</li>
                                                <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                                <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                                <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                                <li><a href="#"><i className="fab fa-behance"></i></a></li>
                                            </ul>
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

export default page