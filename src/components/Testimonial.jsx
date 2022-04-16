import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function Testimonial() {
  let settings = {
    dots: true,
    focusOnSelect: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 376,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="container-fluid">
        <div className="row bgGradiant">
          <div className="col-md-12">
            <div className="container">
              <h2 className="featurette-heading my-3 before text-center">
                Testimonials
              </h2>
              <div className="row boxPadding beforeBox">
                <Slider {...settings}>
                  <div className="box testimonial">
                    <div className="testBox">
                      <img
                        src="https://www.comet.ml/site/app/themes/comet_theme/dist/images/quote.png"
                        alt=""
                      />
                    </div>
                    <div className="boxContent">
                      <p>
                        I’ve spent a good amount of time evaluating Comet’s
                        competitors and alternatives and concluded that Comet is
                        the best solution. None of the other products have the
                        simplicity, ease of use and feature set that Comet has.
                      </p>
                    </div>
                    <div className="userInfo">
                      <img
                        src="https://www.comet.ml/site/app/uploads/2020/02/vsanh-150x150.jpeg"
                        alt=""
                      />
                      <div className="userContent">
                        <h1>Eden Dolev</h1>
                        <p>Software Engineer, Dstillery</p>
                      </div>
                    </div>
                  </div>
                  <div className="box testimonial">
                    <div className="testBox">
                      <img
                        src="https://www.comet.ml/site/app/themes/comet_theme/dist/images/quote.png"
                        alt=""
                      />
                    </div>
                    <div className="boxContent">
                      <p>
                        I’ve spent a good amount of time evaluating Comet’s
                        competitors and alternatives and concluded that Comet is
                        the best solution. None of the other products have the
                        simplicity, ease of use and feature set that Comet has.
                      </p>
                    </div>
                    <div className="userInfo">
                      <img
                        src="https://www.comet.ml/site/app/uploads/2020/02/vsanh-150x150.jpeg"
                        alt=""
                      />
                      <div className="userContent">
                        <h1>Eden Dolev</h1>
                        <p>Software Engineer, Dstillery</p>
                      </div>
                    </div>
                  </div>
                  <div className="box testimonial">
                    <div className="testBox">
                      <img
                        src="https://www.comet.ml/site/app/themes/comet_theme/dist/images/quote.png"
                        alt=""
                      />
                    </div>
                    <div className="boxContent">
                      <p>
                        I’ve spent a good amount of time evaluating Comet’s
                        competitors and alternatives and concluded that Comet is
                        the best solution. None of the other products have the
                        simplicity, ease of use and feature set that Comet has.
                      </p>
                    </div>
                    <div className="userInfo">
                      <img
                        src="https://www.comet.ml/site/app/uploads/2020/02/vsanh-150x150.jpeg"
                        alt=""
                      />
                      <div className="userContent">
                        <h1>Eden Dolev</h1>
                        <p>Software Engineer, Dstillery</p>
                      </div>
                    </div>
                  </div>
                  <div className="box testimonial">
                    <div className="testBox">
                      <img
                        src="https://www.comet.ml/site/app/themes/comet_theme/dist/images/quote.png"
                        alt=""
                      />
                    </div>
                    <div className="boxContent">
                      <p>
                        I’ve spent a good amount of time evaluating Comet’s
                        competitors and alternatives and concluded that Comet is
                        the best solution. None of the other products have the
                        simplicity, ease of use and feature set that Comet has.
                      </p>
                    </div>
                    <div className="userInfo">
                      <img
                        src="https://www.comet.ml/site/app/uploads/2020/02/vsanh-150x150.jpeg"
                        alt=""
                      />
                      <div className="userContent">
                        <h1>Eden Dolev</h1>
                        <p>Software Engineer, Dstillery</p>
                      </div>
                    </div>
                  </div>
                  <div className="box testimonial">
                    <div className="testBox">
                      <img
                        src="https://www.comet.ml/site/app/themes/comet_theme/dist/images/quote.png"
                        alt=""
                      />
                    </div>
                    <div className="boxContent">
                      <p>
                        I’ve spent a good amount of time evaluating Comet’s
                        competitors and alternatives and concluded that Comet is
                        the best solution. None of the other products have the
                        simplicity, ease of use and feature set that Comet has.
                      </p>
                    </div>
                    <div className="userInfo">
                      <img
                        src="https://www.comet.ml/site/app/uploads/2020/02/vsanh-150x150.jpeg"
                        alt=""
                      />
                      <div className="userContent">
                        <h1>Eden Dolev</h1>
                        <p>Software Engineer, Dstillery</p>
                      </div>
                    </div>
                  </div>
                  <div className="box testimonial">
                    <div className="testBox">
                      <img
                        src="https://www.comet.ml/site/app/themes/comet_theme/dist/images/quote.png"
                        alt=""
                      />
                    </div>
                    <div className="boxContent">
                      <p>
                        I’ve spent a good amount of time evaluating Comet’s
                        competitors and alternatives and concluded that Comet is
                        the best solution. None of the other products have the
                        simplicity, ease of use and feature set that Comet has.
                      </p>
                    </div>
                    <div className="userInfo">
                      <img
                        src="https://www.comet.ml/site/app/uploads/2020/02/vsanh-150x150.jpeg"
                        alt=""
                      />
                      <div className="userContent">
                        <h1>Eden Dolev</h1>
                        <p>Software Engineer, Dstillery</p>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
