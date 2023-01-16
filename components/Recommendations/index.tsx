/* eslint-disable @next/next/no-img-element */
import React from "react";
import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { recommendationsData } from "./data";
import Slider from 'react-slick'


const Next = dynamic(() => import("../Icons/next.svg"), {
  ssr: false,
});

const Overlay = dynamic(() => import("../../shared/Overlay"), {
  ssr: false,
});

class Recommendations extends React.Component {

  renderArrows = () => {
    return (
      <div className="arrows">
        <div className="container">
          <div
            // onClick={() => this.slider.slickNext()}
            className="next cursor-pointer"
            style={{ backgroundColor: '#0a192f' }}
          >
            {/* <img style={{ width: '30px ', height: '30px', marginTop: "8px" }} src={Next.src} /> */}

            <span

              className="pe-7s-angle-right"></span>
          </div>
          <div
            // onClick={() => this.slider.slickPrev()}
            className="prev cursor-pointer"
          >
            {/* <img style={{ width: '30px ', height: '30px', marginTop: "8px", transform: 'rotate(180deg)' }} src={Next.src} /> */}
            <span className="pe-7s-angle-left"></span>
          </div>
        </div>
      </div>
    );
  };
  render() {
    return (
      <section
        style={{ margin: '0px auto', padding: '30px', marginBottom: '100px' }}
        id="testimonials-arch"
        className="testimonials section-padding position-re recommendation"
      >
        <div className="container-fluid position-re">
          <div className="row wow fadeInUp" data-wow-delay=".5s">
            <div className="col-lg-6">
              <Slider
                className="slic-item"
                {...{
                  // ref: (c) => (this.slider = c),
                  dots: false,
                  infinite: true,
                  arrows: false,
                  centerMode: true,
                  autoplay: true,
                  rows: 1,
                  slidesToScroll: 1,
                  slidesToShow: 3,
                  responsive: [
                    {
                      breakpoint: 1416,
                      settings: {
                        slidesToShow: 1,
                        centerMode: false,
                      },
                    },
                    {
                      breakpoint: 767,
                      settings: {
                        slidesToShow: 1,
                        centerMode: false,
                      },
                    },
                    {
                      breakpoint: 480,
                      settings: {
                        slidesToShow: 1,
                        centerMode: false,
                      },
                    },
                  ],
                }}
              >
                {recommendationsData.map(item => <div key={item.name} className="item">
                  <div className="info inf-lrg valign">
                    <div className="cont">
                      <div className="author">
                        <div className="img">
                          <Overlay>
                            <img className="avatar" src={item.avatar} alt={item.name} />
                          </Overlay>
                        </div>
                        <h6 style={{ fontSize: 17 }} className={"personName"}>
                          {item.name}
                        </h6>
                        <span style={{ opacity: 0.9, fontSize: 12, color: 'white' }} className={"italic"}>
                          {item.position}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="valign">
                    <div className="textA">
                      <p style={{ color: 'rgb(136, 146, 176)', fontSize: '18px' }}>

                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
                )}
              </Slider>
            </div>
          </div>
          {/* {this.renderArrows()} */}
        </div>
      </section>
    );
  }
}

export default Recommendations;
