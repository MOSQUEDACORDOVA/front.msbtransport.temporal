import React from "react";
import TrackVisibility from "react-on-screen";
import CountUp from "react-countup";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const AboutOne = () => {
  const { t } = useTranslation();

  return (
    <div className='about-area pd-bottom-120'>
      <div className='container'>
        <div className='about-area-inner'>
          <div className='row'>
            <div className='col-lg-6'>
              <div className='about-thumb-wrap'>
                <img
                  className='img-1'
                  src='./assets/img/about/shape.png'
                  alt='Transpro'
                />
                <img
                  className='img-2'
                  src='./assets/img/about/fast-courier-services-montreal.jpg'
                  alt='Transpro'
                />
                <div className='exprience-wrap'>
                  <img src='./assets/img/about/shape-3.png' alt='Transpro' />
                  <div className='details'>
                    <p>{t('aboutSince')}</p>
                    <TrackVisibility once>
                      {({ isVisible }) =>
                        isVisible && (
                          <h1>
                            <CountUp delay={0} start={0} end={2014} />
                          </h1>
                        )
                      }
                    </TrackVisibility>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-6 align-self-center'>
              <div className='about-inner-wrap'>
                <div className='section-title mb-0'>
                  <h4 className='subtitle'>{t('aboutSubtitle2')}</h4>
                  <h2 className='title'>{t('aboutTitle2')}</h2>
                  <p className='content left-line'>{t('aboutContent')}</p>
                  <div className='row'>
                    <div className='col-xl-6 col-lg-12 col-md-6'>
                      <ul className='list-inner-wrap mb-mb-0 mb-3 mb-lg-3 mb-xl-0'>
                        <li>
                          <img src='./assets/img/icon/check.png' alt='Transpro' />
                          {t('aboutExperience')}
                        </li>
                        <li>
                          <img src='./assets/img/icon/check.png' alt='Transpro' />
                          {t('aboutExpertise')}
                        </li>
                        <li>
                          <img src='./assets/img/icon/check.png' alt='Transpro' />
                          {t('aboutReliability')}
                        </li>
                        <li>
                          <img src='./assets/img/icon/check.png' alt='Transpro' />
                          {t('aboutCustomerService')}
                        </li>
                        <li>
                          <img src='./assets/img/icon/check.png' alt='Transpro' />
                          {t('aboutPrice')}
                        </li>
                      </ul>
                    </div>
                    <div className='col-xl-6 col-lg-12 col-md-6 align-self-center'>
                      <div className='thumb'>
                        <img src='./assets/img/about/msb-transport-montreal-express-courrier-services.jpg' alt='Transpro' />
                      </div>
                    </div>
                  </div>
                  <div className='btn-wrap'>
                    <Link className='btn btn-base' to='/contact'>
                      {t('aboutContactUs')}
                    </Link>
                    <div className='author-wrap'>
                      <div className='thumb'>
                        <img src='./assets/img/about/mike-beyrouty.jpg' alt='Transpro' />
                      </div>
                      <div className='details'>
                        <img src='./assets/img/about/signature.png' alt='Transpro' />
                        <p>{t('aboutCEO')}</p>
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
  );
};

export default AboutOne;
