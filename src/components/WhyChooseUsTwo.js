import React from "react";
import { useTranslation } from "react-i18next";

const WhyChooseUsTwo = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className='wcu-area-2 pd-top-115' style={{ backgroundImage: "url(assets/img/wcu/bg-2.png)" }}>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-6'>
              <div className='section-title style-white text-center'>
                <h4 className='subtitle style-2'>{t('whyChooseUsSubtitle')}</h4>
                <h2 className='title'>{t('whyChooseUsTitle')}</h2>
                <p className='content'>{t('whyChooseUsContent')}</p>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-4'>
              <div className='single-wcu-wrap style-2'>
                <div className='icon'>
                  <img src='assets/img/wcu/icon-4.png' alt='Transpro' />
                </div>
                <div className='details'>
                  <h6>{t('fastCourierServiceTitle')}</h6>
                  <p>{t('fastCourierServiceDescription')}</p>
                </div>
              </div>
              <div className='single-wcu-wrap style-2'>
                <div className='icon'>
                  <img src='assets/img/wcu/icon-5.png' alt='Transpro' />
                </div>
                <div className='details'>
                  <h6>{t('safetyAndReliabilityTitle')}</h6>
                  <p>{t('safetyAndReliabilityDescription')}</p>
                </div>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='thumb text-center'>
                <img src='assets/img/wcu/courier-purolator.jpg' alt='Transpro' />
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='single-wcu-wrap style-2'>
                <div className='icon'>
                  <img src='assets/img/wcu/icon-6.png' alt='Transpro' />
                </div>
                <div className='details'>
                  <h6>{t('247AvailabilityTitle2')}</h6>
                  <p>{t('247AvailabilityDescription2')}</p>
                </div>
              </div>
              <div className='single-wcu-wrap style-2'>
                <div className='icon'>
                  <img src='assets/img/wcu/icon-7.png' alt='Transpro' />
                </div>
                <div className='details'>
                  <h6>{t('onlineTrackingTitle')}</h6>
                  <p>{t('onlineTrackingDescription')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUsTwo;
