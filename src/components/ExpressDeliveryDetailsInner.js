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

const ServiceDetailsInner = () => {
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
                <img src='assets/img/service-details/2h-fast-delivery-courier-montreal.png' alt='Transpro' />
                <div className='icon'>
                  <img src='assets/img/service/service-icon-3.png' alt='Transpro' />
                </div>
              </div>
              <h2>{t("twoHourExpressDeliveryTitle")}</h2>
              <p>{t("twoHourExpressDeliveryIntro")}</p>
              <p>{t("twoHourExpressDeliveryDescription")}</p>
              <br />
              <div className='row'>
                <div className='col-lg-6 align-self-center'>
                  <div className='thumb mb-lg-0 mb-4'>
                    <img src='assets/img/service-details/2h-pickup-delivery-express-montreal-island.png' alt='Transpro' />
                  </div>
                </div>
                <div className='col-lg-6 align-self-center'>
                  <h4 className='subtitle'>{t("whyChooseMSBPlus")}</h4>
                  <ul className='list-inner-wrap'>
                    <li>{t("fastAndReliable")}</li>
                    <li>{t("convenient")}</li>
                    <li>{t("flexible")}</li>
                    <li>{t("affordable")}</li>
                    <li>{t("secure")}</li>
                    <li>{t("peaceOfMind")}</li>
                  </ul>
                </div>
              </div>
              <br />
              <h4 className='subtitle mt-3'>{t("howItWorks")}</h4>
              <ol className='list-inner-wrap'>
                <li>{t("getAQuote")}</li>
                <li>{t("scheduleYourPickup")}</li>
                <li>{t("relaxAndTrack")}</li>
              </ol>
              <br />
              <h4 className='subtitle mt-3'>{t("whatWeDeliver")}</h4>
              <ul className='list-inner-wrap'>
                <li>{t("documentsAndPaperwork")}</li>
                <li>{t("pallets")}</li>
                <li>{t("smallPackagesAndParcels")}</li>
                <li>{t("medicalSuppliesAndEquipment")}</li>
                <li>{t("giftsAndFlowers")}</li>
                <li>{t("electronicsAndComputers")}</li>
              </ul>
              <br />
              <h4 className='subtitle mt-3'>{t("whyChooseMSBPlusExplained")}</h4>
              <ul className='list-inner-wrap'>
                <li>{t("fastAndReliableExplained")}</li>
                <li>{t("convenientExplained")}</li>
                <li>{t("flexibleExplained")}</li>
                <li>{t("affordableExplained")}</li>
                <li>{t("peaceOfMindExplained")}</li>
              </ul>
              <br />
              <div className='video-thumb-wrap pt-1 pb-4'>
                <img src='assets/img/service-details/2h-fast-delivery-courier-montreal-transport-company-msb.png' alt='Transpro' />
              </div>
              <h4 className='subtitle mt-3'>{t("alternativeInformation")}</h4>
              <ul className='list-inner-wrap'>
                <li>{t("deliveryArea")}</li>
                <li>{t("deliveryTimes")}</li>
                <li>{t("pricing")}</li>
                <li>{t("insurance")}</li>
                <li>{t("customerSupport")}</li>
              </ul>
              <br />
              <p className='last-para'>{t("closingRemark")}</p>
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

export default ServiceDetailsInner;
