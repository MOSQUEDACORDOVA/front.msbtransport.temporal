import React, { useState } from "react";
import {
  FaArrowRight,
  FaPhoneAlt,
  FaPlay,
  FaRegEnvelope,
  FaRegFileAlt,
  FaRegFilePdf,
  FaSearch,
} from "react-icons/fa";
import ModalVideo from "react-modal-video";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const ScheduledDeliveryDetailsInner = () => {
  const [isOpen, setOpen] = useState(false);
  const { t } = useTranslation();
  return (
    <>
      {/* service area start */}
      <div className='service-area pd-top-120 pd-bottom-120'>
  <div className='container'>
    <div className='row justify-content-center'>
      <div className='col-lg-8'>
        <div className='service-details-wrap'>
          <div className='thumb'>
            <img src='assets/img/service-details/parts-delivery-msb-transports-company-montreal.png' alt='Transpro' />
            <div className='icon'>
              <img src='assets/img/service/service-icon-3.png' alt='Transpro' />
            </div>
          </div>
          <h2>{t('partsDeliveryTitle')}</h2>
          <p>{t('partsDeliveryIntro')}</p>
          <p>{t('partsDeliveryDescription')}</p>
          <br />
          <div className='row'>
            <div className='col-lg-6 align-self-center'>
              <div className='thumb mb-lg-0 mb-4'>
                <img src='assets/img/service-details/parts-delivery-msb-transports-company-montreal-2.png' alt='Transpro' />
              </div>
            </div>
            <div className='col-lg-6 align-self-center'>
              <h4 className='subtitle'>{t('partsDeliveryBenefitsTitle')}</h4>
              <ul className='list-inner-wrap'>
                <li>{t('partsDeliveryBenefit1')}</li>
                <li>{t('partsDeliveryBenefit2')}</li>
                <li>{t('partsDeliveryBenefit3')}</li>
                <li>{t('partsDeliveryBenefit4')}</li>
                <li>{t('partsDeliveryBenefit5')}</li>
                <li>{t('partsDeliveryBenefit6')}</li>
              </ul>
            </div>
          </div>
          <br />
          <div id="unwavering-reliability">
            <h4 className='subtitle mt-3'>{t('partsDeliveryBenefitsExplainedTitle')}</h4>
            <p>
              <ul className='list-inner-wrap'>
                <li>{t('partsDeliveryExplained1')}</li>
                <li>{t('partsDeliveryExplained2')}</li>
                <li>{t('partsDeliveryExplained3')}</li>
                <li>{t('partsDeliveryExplained4')}</li>
                <li>{t('partsDeliveryExplained5')}</li>
              </ul>
            </p>
          </div>
          <br />
          <div id="flexible-solutions">
            <h4 className='subtitle mt-3'>{t('partsDeliveryPeaceOfMindTitle')}</h4>
            <ul className='list-inner-wrap'>
              <li>{t('partsDeliveryPeaceOfMind1')}</li>
            </ul>
          </div>
          <br />
          <p className='last-para'>
            {t('partsDeliveryClosingStatement')}
          </p>
          <br />
          <Link className='btn btn-base b-animate-4' to='https://secure.ontime360.com/sites/Msb/login.aspx?ReturnUrl=%2fsites%2fMsb%2f'>
            {t('partsDeliveryCTA')}
          </Link>
        </div>
      </div>


            <div className='col-lg-4'>
              <div className='sidebar-area'>
                <div className='widget widget_search'>
                  <form className='search-form'>
                    <div className='form-group'>
                      <input type='text' placeholder= {t('searchPlaceholder')} /> 
                    </div>
                    <button className='submit-btn' type='submit'>
                      <FaSearch />
                    </button>
                  </form>
                </div>
                <div className='widget widget_catagory'>
                  <h4 className='widget-title'>
                  {t('serviceList')}
                    <span className='dot' />
                  </h4>
                  <ul className='catagory-items'>
                    <li>
                      <Link to='/express-delivery-courier-montreal'>
                      {t('twoHourDelivery')}{" "}
                        <span>
                          <FaArrowRight />
                        </span>
                      </Link>
                    </li>
                    <li>
                    <Link to='/dedicated-logistics-montreal'>
                    {t('dedicatedLogistics')}{" "}
                        <span>
                          <FaArrowRight />
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to='/24-7-availability-courier-transport-montreal'>
                      {t('availability')}{" "}
                        <span>
                          <FaArrowRight />
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to='/scheduled-delivery-courier-montreal'>
                      {t('scheduledDelivery')}{" "}
                        <span>
                          <FaArrowRight />
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to='/ecommerce-logistics-courier-transport-montreal'>
                      {t('ecommerceLogistics')}{" "}
                        <span>
                          <FaArrowRight />
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to='/special-handling-deliveries-courier-transport-montreal'>
                      {t('specialHandling')}{" "}
                        <span>
                          <FaArrowRight />
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to='/insurance-and-tracking-courier-transport-montreal-deliveries'>
                      {t('insuranceTracking')}{" "}
                        <span>
                          <FaArrowRight />
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to='/return-management-courier-transport-montreal'>
                      {t('returnManagement')}{" "}
                        <span>
                          <FaArrowRight />
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to='/all-green-deliveries-courier-transport-montreal'>
                      {t('allGreenDelivery')}{" "}
                        <span>
                          <FaArrowRight />
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to='/parts-delivery-courier-transport-montreal'>
                      {t('partsDelivery')}{" "}
                        <span>
                          <FaArrowRight />
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
                {/* <div className='widget widget_download'>
                  <h4 className='widget-title'>
                    DOWNLOAD BROCHURE
                    <span className='dot' />
                  </h4>
                  <ul className='download-items'>
                    <li>
                      <a href='#'>
                        {" "}
                        <FaRegFilePdf /> DOWNLOAD PDF
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        {" "}
                        <FaRegFileAlt /> DOWNLOAD DOC{" "}
                      </a>
                    </li>
                  </ul>
                </div> */}
                <div
            className='widget widget_support text-center mb-0'
            style={{
              background: "url(assets/img/widget/support-bg.png)",
            }}
          >
            <h4 className='widget-title style-white'>
              {t('pickupAndDeliveryTitle')} <span className='dot' />
            </h4>
            <p>{t('pickupAndDeliveryDescription')}</p>
            <p className='contact'>
              <FaRegEnvelope />
              {t('contactEmail')}
            </p>
            <p className='contact mb-0'>
              <FaPhoneAlt />
              {t('contactPhone')}
            </p>
          </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* service area end */}
      <ModalVideo
        channel='youtube'
        autoplay
        isOpen={isOpen}
        videoId='XM6kTQPzzpQ'
        onClose={() => setOpen(false)}
      />
    </>
  );
};

export default ScheduledDeliveryDetailsInner;
