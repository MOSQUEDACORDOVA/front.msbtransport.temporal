import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";
import TrackVisibility from "react-on-screen";
import CountUp from "react-countup";
import ModalVideo from "react-modal-video";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const AboutTwo = () => {
  const [isOpen, setOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <>
      <div className='about-area-2 pd-top-120 pd-bottom-240'>
        <div className='container'>
          <div className='about-area-inner'>
            <div className='row'>
              <div className='col-lg-5 order-lg-2'>
                <div className='about-thumb-wrap mb-lg-0 mb-4'>
                  <img
                    className='img-1'
                    src='assets/img/about/shape.png'
                    alt='Transpro'
                  />
                  <img
                    className='img-2'
                    src='assets/img/about/courier-purolator-msb-transport-alternative-montreal.jpg'
                    alt='Transpro'
                  />
                  <img
                    className='img-3'
                    src='assets/img/about/courier-purolator-msb-transport.jpg'
                    alt='Transpro'
                  />
                  <div className='exprience-wrap'>
                    <img src='assets/img/about/shape-3.png' alt='Transpro' />
                    <div className='details'>
                      <TrackVisibility once>
                        {({ isVisible }) =>
                          isVisible && (
                            <h1>
                              +<CountUp delay={0} start={2014} end={10} />
                            </h1>
                          )
                        }
                      </TrackVisibility>
                      <p>{t('yearsExperience')}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-7 align-self-center order-lg-1'>
                <div className='about-inner-wrap ms-0'>
                  <div className='section-title mb-0'>
                    <h4 className='subtitle'>{t('aboutSubtitle')}</h4>
                    <h2 className='title mb-2'>{t('aboutTitle')}</h2>
                    <p>{t('aboutDescription')}</p>
                    <br />
                    <div className='row'>
                      <div className='col-xl-4 col-lg-12 col-md-4'>
                        <ul className='list-inner-wrap mb-mb-0 mb-3 mb-lg-3 mb-xl-0'>
                          <li>
                            <img
                              src='./assets/img/icon/check.png'
                              alt='Transpro'
                            />{" "}
                            {t('experience')}
                          </li>
                          <li>
                            <img
                              src='./assets/img/icon/check.png'
                              alt='Transpro'
                            />
                            {t('expertise')}
                          </li>
                        </ul>
                      </div>
                      <div className='col-xl-4 col-lg-12 col-md-4'>
                        <ul className='list-inner-wrap mb-mb-0 mb-3 mb-lg-3 mb-xl-0'>
                          <li>
                            <img
                              src='./assets/img/icon/check.png'
                              alt='Transpro'
                            />
                            {t('reliability')}
                          </li>
                          <li>
                            <img
                              src='./assets/img/icon/check.png'
                              alt='Transpro'
                            />
                            {t('customerService')}
                          </li>
                        </ul>
                      </div>
                      <div className='col-xl-4 col-lg-12 col-md-4'>
                        <ul className='list-inner-wrap mb-mb-0 mb-3 mb-lg-3 mb-xl-0'>
                          <li>
                            <img
                              src='./assets/img/icon/check.png'
                              alt='Transpro'
                            />
                            {t('price')}
                          </li>
                          <li>
                            <img
                              src='./assets/img/icon/check.png'
                              alt='Transpro'
                            />
                            {t('ecofriendly')}
                          </li>
                        </ul>
                      </div>
                    </div>
                    <br />
                    <div className='row'>
                      <div className='col-xl-6'>
                        <div className='single-about-wrap'>
                          <div className='icon'>
                            <img
                              src='assets/img/about/icon-1.png'
                              alt='Transpro'
                            />
                          </div>
                          <div className='details'>
                            <h6>{t('fastDelivery')}</h6>
                          </div>
                        </div>
                      </div>
                      <div className='col-xl-6'>
                        <div className='single-about-wrap'>
                          <div className='icon'>
                            <img
                              src='assets/img/about/icon-2.png'
                              alt='Transpro'
                            />
                          </div>
                          <div className='details'>
                            <h6>{t('247')}</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='btn-wrap'>
                      <Link className='btn btn-base' to='/about'>
                        {t('discoverMore')}
                      </Link>
                      <div className='video-wrap d-flex align-items-center gap-2'>
                        <div className='author-wrap'>
                          <div className='thumb'>
                            <img src='./assets/img/about/mike-beyrouty.jpg' alt='Transpro' />
                          </div>
                          <div className='details'>
                            <img
                              src='./assets/img/about/signature.png'
                              alt='Transpro'
                            />
                            <p>{t('ceoOfCompany')}</p>
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
        <ModalVideo
          channel='youtube'
          autoplay
          isOpen={isOpen}
          videoId='XM6kTQPzzpQ'
          onClose={() => setOpen(false)}
        />
      </div>
    </>
  );
};

export default AboutTwo;