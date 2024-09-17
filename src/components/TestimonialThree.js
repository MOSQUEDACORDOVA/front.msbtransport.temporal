import React from "react";
import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";

const TestimonialThree = () => {
  const { t } = useTranslation();
  function SampleNextArrow(props) {
    const { className, onClick } = props;
    return <FaArrowLeft className={className} onClick={onClick} />;
  }
  function SamplePrevArrow(props) {
    const { className,  onClick } = props;
    return <FaArrowRight className={className} onClick={onClick} />;
  }
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
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
      {/* Start Testimonial area  */}
      <div className='testimonial-area-3'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4 d-flex'>
              <div className='section-title  text-left m-auto'>
              <span className='subtitles'>{t('testimonialsSubtitle')}</span>
                <h2 className='title'>{t('testimonialsTitle')}</h2>
        
              </div>
            </div>
            <div className='col-lg-8'>
              <div className='review-area style-01'>
                <div className='row'>
                  <div className='col-lg-12'>
                    <div className='testimonial-slider'>
                      <Slider {...settings}>
                        <div className='single-review'>
                          <div className='single-review-item'>
                            <div className='review-head'>
                              <div className='thumb'>
                                <img
                                  src='assets/img/testimonial/Kenworth.png'
                                  alt='reviewer images'
                                />
                              </div>
                              <div className='author-details'>
                                <h5 className='author'>Jamil Chamma</h5>
                                <span className='post'>Group Kenworth Montreal</span>
                                <ul className='rating'>
                                  <li>
                                    <FaStar />
                                  </li>
                                  <li>
                                    <FaStar />
                                  </li>
                                  <li>
                                    <FaStar />
                                  </li>
                                  <li>
                                    <FaStar />
                                  </li>
                                  <li>
                                    <FaStar />
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className='desciption'>
                              <p>
                              As a frequent user of transport services, I have experienced a wide range of service levels. However, my experience with MSB Transports stands out as exceptional. From the moment I contacted them, their professionalism and attention to detail were evident. The booking process was seamless, and they provided clear, upfront pricing without any hidden fees.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className='single-review'>
                          <div className='single-review-item'>
                            <div className='review-head'>
                              <div className='thumb'>
                                <img
                                  src='assets/img/testimonial/dimigration.png'
                                  alt='reviewer images'
                                />
                              </div>
                              <div className='author-details'>
                                <h5 className='author'>Dima B.</h5>
                                <span className='post'>D'immigration Services</span>
                                <ul className='rating'>
                                  <li>
                                    <FaStar />
                                  </li>
                                  <li>
                                    <FaStar />
                                  </li>
                                  <li>
                                    <FaStar />
                                  </li>
                                  <li>
                                    <FaStar />
                                  </li>
                                  <li>
                                    <FaStar />
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className='desciption'>
                            <p>I recently enlisted MSB Transports for an urgent merchandise shipment, and their service was exceptional. The process from start to finish was smooth and efficient. Their team handled my goods with great care, ensuring everything arrived in perfect condition. Their tracking system kept me updated throughout the journey, giving me peace of mind. Punctual delivery and competitive pricing were the cherries on top. Highly recommend DEF Logistics for reliable and professional merchandise transport.</p>
                            </div>
                          </div>
                        </div>

                        <div className='single-review'>
                          <div className='single-review-item'>
                            <div className='review-head'>
                              <div className='thumb'>
                                <img
                                  src='assets/img/testimonial/ads.png'
                                  alt='reviewer images'
                                />
                              </div>
                              <div className='author-details'>
                                <h5 className='author'>Maria G.</h5>
                                <span className='post'>Ads</span>
                                <ul className='rating'>
                                  <li>
                                    <FaStar />
                                  </li>
                                  <li>
                                    <FaStar />
                                  </li>
                                  <li>
                                    <FaStar />
                                  </li>
                                  <li>
                                    <FaStar />
                                  </li>
                                  <li>
                                    <FaStar />
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className='desciption'>
                            <p>My experience with MSB Transports was top-notch. They handled our bulk shipment with exceptional professionalism. Their attention to detail in packaging and handling assured that our products arrived in pristine condition. The customer service team was always accessible and helpful, providing timely updates on our shipment's status. The prompt and safe delivery of our goods speaks volumes about their dedication to quality service. I wholeheartedly recommend MSB Transports for any business's transport needs.</p>
                            </div>
                          </div>
                        </div>

                       

                       
                      </Slider>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Testimonial area  */}
    </>
  );
};

export default TestimonialThree;
