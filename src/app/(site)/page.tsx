import Crousel from "@/components/Crousel";
import FruiteCrousel from "@/components/FruiteCrousel";
import { getCategories, getProduct } from "@/http";
import { ICRes, IPRes, IProduct, Icategory } from "@/types";
import { AxiosResponse } from "axios";
import Image from "next/image";
import Link from "next/link";

async function allProduct():Promise<IProduct[] | []> {
  try {
    const res:AxiosResponse<IPRes<IProduct>> = await getProduct();
    return res.data.products;
  } catch (error) {
    return [];
  }
  
}
async function allCategory():Promise<Icategory[] | []> {
  try {
    const res:AxiosResponse<ICRes<Icategory>> = await getCategories();
    return res.data.categories;
  } catch (error) {
    return [];
  }
  
}

export const revalidate = 3600 // revalidate at most every hour

export default async function Home() {
  const products = await allProduct();
  const categories = await allCategory();
  return (
    <>
      
      <section className="banne_3">
        <div className="container">
          <div className="row">
            <div className="col-xl-8">
              <div className="banner_content">
                <Crousel/>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="row">
                <div className="col-xl-12 col-md-6">
                  <div className="banne_3_add_item" style={{ background: 'url(/images/banner_3_add_bg_1.jpg)' }}>
                    <div className="text">
                      <h4>Summer Offer</h4>
                      <h2>Healthy Organic Food</h2>
                      <a className="common_btn" href="shop_details.html">shop now <span></span></a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-12 col-md-6">
                  <div className="banne_3_add_item" style={{ background: 'url(/images/banner_3_add_bg_2.jpg)' }}>
                    <div className="text">
                      <h4>Special Offer</h4>
                      <h2>Fresh Organic Food</h2>
                      <a className="common_btn" href="shop_details.html">shop now <span></span></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    
      <section className="categories_2 pt_110 xs_pt_70">
        <div className="container">
          <div className="row">
            <div className="col-xl-5">
              <div className="section_heading heading_left mb_20">
                <h2>What Do You Looking For</h2>
              </div>
            </div>
          </div>
          <div className="slider_padding">
            <FruiteCrousel categories={categories}/>
            
          </div>
        </div>
      </section>


      <section className="popular_products pt_115 xs_pt_75">
        <div className="container">
          <div className="row">
            <div className="col-xl-5 m-auto">
              <div className="section_heading mb_50">
                <h2>Our Popular Products</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-7 m-auto">
              <div className="product_filter mb_25">
                <button className=" active" data-filter="*">All Products</button>
                {
                  categories.map((data:Icategory) => (
                    <button data-filter={`.${data.name}`}>{data.name}</button>
                  ))
                }
              </div>
            </div>
          </div>
          <div className="row grid">
            {
              products.map((data:IProduct) => (
                <div className={"col-xl-3 col-sm-6 col-lg-4 drinks " + data.productCategory}>
                  <div className="single_product">
                    <div className="single_product_img">
                      <img src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${data.images[0]}`} alt="Product" className="img_fluid w-100" />
                      <ul>
                        <li><a href="#" data-bs-toggle="modal" data-bs-target="#cart_popup_modal"><i
                          className="far fa-shopping-basket"></i></a></li>
                        <li><a href="#"><i className="far fa-eye"></i></a></li>
                        <li><a href="#"><i className="far fa-heart"></i></a></li>
                      </ul>
                    </div>
                    <div className="single_product_text">
                      <span className="rating">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                        <i className="far fa-star"></i>
                      </span>
                      <Link className="title" href={`/products/${data.slug}`}>{data.name}</Link>
                      <p>${data.price}.00 <del>${Math.floor(data.price + Math.random()*50)}</del> </p>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </section>

      <div className="cart_popup_modal">
        <div className="modal fade" id="cart_popup_modal" data-bs-backdrop="static" data-bs-keyboard="false"
          aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              <div className="modal-body">
                <div className="row align-items-center">
                  <div className="col-xl-6 col-md-6">
                    <div className="cart_popup_modal_img">
                      <img src="/images/home2_product_img_4.jpg" alt="Product img-fluid w-100" />
                    </div>
                  </div>
                  <div className="col-xl-6 col-md-6">
                    <div className="product_det_text">
                      <h2 className="details_title">Nestle Nescafe ClassNamclassNameic Instant</h2>
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
                        <a className="common_btn" href="#"><i className="far fa-shopping-basket"></i>
                          Add To
                          Cart
                          <span></span></a>
                        <a className="love" href="#"><i className="far fa-heart"></i></a>
                      </div>
                      <p className="category"><span>Category:</span>Coffee</p>
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
  );
}
