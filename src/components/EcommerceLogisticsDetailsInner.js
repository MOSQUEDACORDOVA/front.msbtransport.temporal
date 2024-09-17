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

const EcommerceLogisticsDetailsInner = () => {
  const { t } = useTranslation();
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      {/* service area start */}
      <div className='service-area pd-top-120 pd-bottom-120'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-lg-8'>
            <div className='service-details-wrap'>
              <div className='thumb'>
                <img src='assets/img/service-details/e-commerce-pickup-delivery-services-montreal-canada.png' alt='Transpro' />
                <div className='icon'>
                  <img src='assets/img/service/service-icon-3.png' alt='Transpro' />
                </div>
              </div>
              <h2>{t("ecommerceLogisticsTitle")}</h2>
              <p>{t("ecommerceLogisticsIntro")}</p>
              <p>{t("ecommerceLogisticsDescription")}</p>
              <br />
              <div className='row'>
                <div className='col-lg-6 align-self-center'>
                  <div className='thumb mb-lg-0 mb-4'>
                    <img src='assets/img/service-details/e-commerce-pickup-delivery-services-montreal-canada-msb-transports.png' alt='Transpro' />
                  </div>
                </div>
                <div className='col-lg-6 align-self-center'>
                  <h4 className='subtitle'>{t("ecommerceFulfillmentProcess")}</h4>
                  <ul className='list-inner-wrap'>
                    <li>{t("inventoryManagement")}</li>
                    <li>{t("orderProcessing")}</li>
                    <li>{t("pickingAndPacking")}</li>
                    <li>{t("shippingAndDelivery")}</li>
                    <li>{t("reverseLogistics")}</li>
                  </ul>
                </div>
              </div>
              <br />
              <h4 className='subtitle mt-3'>{t("ecommerceLogisticsForMontreal")}</h4>
              <ul className='list-inner-wrap'>
                <li>{t("inventoryManagementDescription")}</li>
                <li>{t("orderProcessingDescription")}</li>
                <li>{t("pickingAndPackingDescription")}</li>
                <li>{t("shippingAndDeliveryDescription")}</li>
                <li>{t("reverseLogisticsDescription")}</li>
              </ul>
              <br />
              <h4 className='subtitle mt-3'>{t("benefitsOfChoosingMSB")}</h4>
              <ul className='list-inner-wrap'>
                <li>{t("increasedEfficiency")}</li>
                <li>{t("reducedCosts")}</li>
                <li>{t("improvedCustomerSatisfaction")}</li>
                <li>{t("enhancedBrandReputation")}</li>
                <li>{t("scalability")}</li>
                <li>{t("realTimeVisibility")}</li>
                <li>{t("dedicatedAccountManagement")}</li>
                <li>{t("sustainablePractices")}</li>
              </ul>
              <br />
              <h4 className='subtitle mt-3'>{t("additionalServices")}</h4>
              <ul className='list-inner-wrap'>
                <li>{t("fulfillmentCenters")}</li>
                <li>{t("crossBorderShipping")}</li>
                <li>{t("apiIntegration")}</li>
                <li>{t("dataAnalytics")}</li>
              </ul>
              <br />
              <p className='last-para'>{t("ecommerceLogisticsClosingRemark")}</p>
              <br />
              <Link className='btn btn-base b-animate-4' to='https://secure.ontime360.com/sites/Msb/login.aspx?ReturnUrl=%2fsites%2fMsb%2f'>
                {t("scheduleDelivery")}
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
                      <Link to='/24-7-availability-courier-montreal'>
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

export default EcommerceLogisticsDetailsInner;
