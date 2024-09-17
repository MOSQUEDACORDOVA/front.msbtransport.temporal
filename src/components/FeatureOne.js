import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";
const FeatureOne = () => {
  function SampleNextArrow(props) {
    const { className, onClick } = props;
    return <FaArrowLeft className={className} onClick={onClick} />;
  }
  function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return <FaArrowRight className={className} onClick={onClick} />;
  }
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <>
      {/* feature area start */}
      <div className='container'>
        <div className='feature-area mb-60'>
          <div className='row'>
            <div className='col-lg-4'>
              <div className='section-title mb-0'>
                
              <h2 className='title'>MSB TRANSPORT</h2>
                <h2 className='title'>WHAT WE OFFER</h2>
                
                <h4 className='subtitle'>OUR SERVICES</h4>
              </div>
            </div>
            <div className='col-lg-6 align-self-center'>
              <div className='section-title'>
                <p className='content left-line'>
                <strong>Your Reliable Delivery Partner in Montreal.</strong>  
                 </p><p>MSB Transport offers a wide range of delivery services to meet the needs of businesses of all sizes in Montreal. Our services include:</p>
                
              </div>
            </div>
          </div>
          <div className='feature-slider owl-carousel'>
            <Slider {...settings}>
              <div className='item'>
                <div className='feature-wrap bg-pink'>
                  <div className='icon'>
                    <img src='assets/img/icon/feature-1.png' alt='Transpro' />
                  </div>
                  <h5>EXPRESS DELIVERY</h5>
                  <p>
                  Express delivery within Montreal, with 2-hour pickup and delivery at competitive rates.
                  </p>
                </div>
              </div>
              <div className='item'>
                <div className='feature-wrap bg-ash'>
                  <div className='icon'>
                    <img src='assets/img/icon/feature-2.png' alt='Transpro' />
                  </div>
                  <h5>DEDICATED LOGISTICS</h5>
                  <p>
                  Delivery solutions for your business, including scheduled delivery, inventory management, and reverse logistics.
                  </p>
                </div>
              </div>
              <div className='item'>
                <div className='feature-wrap bg-sky'>
                  <div className='icon'>
                    <img src='assets/img/icon/feature-3.png' alt='Transpro' />
                  </div>
                  <h5>24/7 AVAILABILITY</h5>
                  <p>
                  We have drivers on the road 24/7/365 to meet your needs, no matter when or where they arise.
                  </p>
                </div>
              </div>
              <div className='item'>
                <div className='feature-wrap bg-ash'>
                  <div className='icon'>
                    <img src='assets/img/icon/feature-2.png' alt='Transpro' />
                  </div>
                  <h5>E-COMMERCE LOGISTICS</h5>
                  <p>
                  Fulfillment solutions for online businesses, including order fulfillment, shipping and tracking, and returns processing.
                  </p>
                </div>
              </div>
              <div className='item'>
                <div className='feature-wrap bg-ash'>
                  <div className='icon'>
                    <img src='assets/img/icon/feature-2.png' alt='Transpro' />
                  </div>
                  <h5>SPECIAL HANDLING</h5>
                  <p>
                  Special Handling Deliveries: Secure and reliable transport for sensitive or high-value items.
                  </p>
                </div>
              </div>
              <div className='item'>
                <div className='feature-wrap bg-ash'>
                  <div className='icon'>
                    <img src='assets/img/icon/feature-2.png' alt='Transpro' />
                  </div>
                  <h5>INSURANCE AND TRACKING</h5>
                  <p>
                  Your shipments, vital to your business and reputation, arrive safe with our priority on secure delivery.
                  </p>
                </div>
              </div>
              <div className='item'>
                <div className='feature-wrap bg-ash'>
                  <div className='icon'>
                    <img src='assets/img/icon/feature-2.png' alt='Transpro' />
                  </div>
                  <h5>RETURN MANAGEMENT</h5>
                  <p>
                  Your shipments, vital to your business and reputation, arrive safe with our priority on secure delivery.
                  </p>
                </div>
              </div>
              <div className='item'>
                <div className='feature-wrap bg-ash'>
                  <div className='icon'>
                    <img src='assets/img/icon/feature-2.png' alt='Transpro' />
                  </div>
                  <h5>ALL GREEN DELIVERY</h5>
                  <p>
                  Environmentally friendly practices, including electric vehicles and recycled packaging materials.
                  </p>
                </div>
              </div>
              <div className='item'>
                <div className='feature-wrap bg-ash'>
                  <div className='icon'>
                    <img src='assets/img/icon/feature-2.png' alt='Transpro' />
                  </div>
                  <h5>PARTS DELIVERY</h5>
                  <p>
                  We specialize in the rapid and dependable delivery of auto and truck parts, ensuring your business keeps moving. 
                  </p>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
      {/* feature area end */}
    </>
  );
};

export default FeatureOne;
