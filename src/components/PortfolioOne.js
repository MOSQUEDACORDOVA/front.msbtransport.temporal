import React from "react";
import { FaArrowLeft, FaArrowRight, FaPlus } from "react-icons/fa";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";

const PortfolioOne = () => {
  const { t } = useTranslation();

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
    speed: 1000,
    initialSlide: 1,
    autoplaySpeed: 5000,
    className: "center",
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: 3,
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
          slidesToShow: 1,
          arrows: false,
          centerMode: false,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className='portfolio-area pd-top-115' style={{ background: "url(assets/img/portfolio/fast-courier-express-montreal-area-msb-transport.jpg)" }}>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-8'>
            <div className='section-title style-white'>
              <h4 className='subtitle style-2'>{t('portfolioSubtitle')}</h4>
              <h2 className='title'>{t('portfolioTitle')}</h2>
              <p className='content'>{t('portfolioContent')}</p>
            </div>
          </div>
        </div>
        <div className='swiper-container'>
          <div className='swiper-wrapper'>
            <Slider {...settings}>
              <div className='swiper-slide'>
                <div className='single-portfolio-wrap'>
                  <div className='thumb'>
                    <img src='assets/img/portfolio/good-protein-msb-transports.png' alt='Transpro' />
                  </div>
                  <div className='portfolio-details'>
                    <div className='details'>
                      <p>{t('portfolioCategory1')}</p>
                      <h4>{t('portfolioTitle1')}</h4>
                    </div>
                    <a href='/service' className='icon'>
                      <FaPlus />
                    </a>
                  </div>
                </div>
              </div>
              <div className='swiper-slide'>
                <div className='single-portfolio-wrap'>
                  <div className='thumb'>
                    <img src='assets/img/portfolio/paccar-msb-transports.png' alt='Transpro' />
                  </div>
                </div>
              </div>
              <div className='swiper-slide'>
                <div className='single-portfolio-wrap'>
                  <div className='thumb'>
                    <img src='assets/img/portfolio/kenworth-msb-transports.png' alt='Transpro' />
                  </div>
                  <div className='portfolio-details'>
                    <div className='details'>
                      <p>{t('portfolioCategory1')}</p>
                      <h4>{t('portfolioTitle1')}</h4>
                    </div>
                    <a href='/service' className='icon'>
                      <FaPlus />
                    </a>
                  </div>
                </div>
              </div>
              <div className='swiper-slide'>
                <div className='single-portfolio-wrap'>
                  <div className='thumb'>
                    <img src='assets/img/portfolio/we-cook-msb-transports.png' alt='Transpro' />
                  </div>
                  <div className='portfolio-details'>
                    <div className='details'>
                      <p>{t('portfolioCategory1')}</p>
                      <h4>{t('portfolioTitle1')}</h4>
                    </div>
                    <a href='/service' className='icon'>
                      <FaPlus />
                    </a>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioOne;