import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";
import { useTranslation } from "react-i18next"; // Import useTranslation

const PartnerOne = () => {
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
    infinite: true,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          arrows: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <>
      {/*partner-area start*/}
      <div className='partner-area pd-top-90 pd-bottom-120'>
        <div className='container'>
        <div className='row justify-content-center'>
        <div className='col-lg-7'>
          <div className='section-title text-center'>
            <h4 className='subtitle'>{t('happyClientsSubtitle')}</h4>
            <h2 className='title'>{t('happyClientsTitle')}</h2>
            <p className='content'>{t('happyClientsContent')}</p>
          </div>
        </div>
      </div>

          <div className='partner-slider owl-carousel'>
            <Slider {...settings}>
            <div className='item'>
                <div className='thumb'>
                  <img src='assets/img/partner/good-protein-client.jpg' alt='Transpro' />
                </div>
              </div>
              
              <div className='item'>
                <div className='thumb'>
                  <img src='assets/img/partner/smart-technologies-client.jpg' alt='Transpro' />
                </div>
              </div>
              
              <div className='item'>
                <div className='thumb'>
                  <img src='assets/img/partner/paccar.png' alt='Transpro' />
                </div>
              </div>
              <div className='item'>
                <div className='thumb'>
                  <img src='assets/img/partner/kenworth-msb-client.jpg' alt='Transpro' />
                </div>
              </div>
              <div className='item'>
                <div className='thumb'>
                  <img src='assets/img/partner/mazda-msb-transport-client.jpg' alt='Transpro' />
                </div>
              </div>
              <div className='item'>
                <div className='thumb'>
                  <img src='assets/img/partner/honda-msb-client.jpg' alt='Transpro' />
                </div>
              </div>
              <div className='item'>
                <div className='thumb'>
                  <img src='assets/img/partner/volkzwagen.jpg' alt='Transpro' />
                </div>
              </div>
              <div className='item'>
                <div className='thumb'>
                  <img src='assets/img/partner/nissan-msb-client.jpg' alt='Transpro' />
                </div>
              </div>
              <div className='item'>
                <div className='thumb'>
                  <img src='assets/img/partner/audi-msb-partner.jpg' alt='Transpro' />
                </div>
              </div>
              <div className='item'>
                <div className='thumb'>
                  <img src='assets/img/partner/we-cook-msb-client.jpg' alt='Transpro' />
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
      {/*partner-area end*/}
    </>
  );
};

export default PartnerOne;
