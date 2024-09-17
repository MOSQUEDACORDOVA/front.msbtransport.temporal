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

const DedicatedLogisticsDetailsInner = () => {
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
                  <img src='assets/img/service-details/dedicated-logistics-montreal.png' alt='Transpro' />
                  <div className='icon'>
                    <img
                      src='assets/img/service/service-icon-3.png'
                      alt='Transpro'
                    />
                  </div>
                </div>
                <h2>MSB Transport's Dedicated Logistics Montreal</h2>
                <p>
                Navigate the dynamic Montreal business landscape with MSB Transport's customized Dedicated Logistics Montreal service.
                </p>
                <p>
In the dynamic and ever-evolving world of business, efficiency and responsiveness are the keys to success. In Montreal, where industry thrives and competition is fierce, efficient logistics solutions are essential for businesses to thrive and achieve their goals. MSB Transport recognizes the unique needs and challenges faced by businesses in this dynamic market, and we offer Dedicated Logistics within Montreal, a tailor-made service that caters to the specific requirements of businesses across various sectors.</p>
                <br />

                <h4 className='subtitle mt-3'>Tailored Solutions for Every Need</h4>
                
                <p>Align our tailored logistics solutions with your unique business requirements, ensuring optimized efficiency, cost-effectiveness, and overall success.</p>
                <br />

                <div className='row'>
                  <div className='col-lg-6 align-self-center'>
                    <div className='thumb mb-lg-0 mb-4'>
                      <img src='assets/img/service-details/dedicated-logistic-services-montreal-msb-transport.png' alt='Transpro' />
                    </div>
                  </div>
                  <div className='col-lg-6 align-self-center'>
                    <h4 className='subtitle'>Why Choose MSB Plus?</h4>
                    <ul className='list-inner-wrap'>
                      <li> Fast and Reliable</li>
                      <li> Convenient</li>
                      <li> Flexible</li>
                      <li> Affordable</li>
                      <li> Secure</li>
                      <li> Peace of Mind</li>
                    </ul>
                  </div>
                </div>

                <br />
                <h4 className='subtitle mt-3'>Expert Guidance and Support</h4>
                <p>
                Our team of logistics experts provides comprehensive support, real-time updates, and proactive guidance throughout the entire logistics journey.
                </p>
                <br />
                <h4 className='subtitle mt-3'>Scalable to Meet Your Growing Needs</h4>
                <p>
                Expand your logistics operations with ease as we seamlessly adapt to your evolving requirements, ensuring unwavering support.
                </p>
                <br />
                <h4 className='subtitle mt-3'>Experience the Benefits</h4>
                <p>
                Partner with MSB Transport and reap the rewards of:
                </p>
                <ul className='list-inner-wrap'>
                <li>  Enhanced efficiency and productivity</li>
                      <li> Cost-effective logistics solutions</li>
                      <li> Reduced stress and peace of mind</li>
                      <li> Data-driven insights for informed decision-making</li>
                      <li> Environmentally conscious practices</li>
                  </ul>

                  <br />
                <h4 className='subtitle mt-3'>Your Partner for Sustainable Growth</h4>
                <p>
                MSB Transport is your trusted logistics partner, empowering businesses to optimize their supply chains, reduce costs, enhance efficiency, and achieve their growth objectives.
                </p>
                <br />
                <h4 className='subtitle mt-3'>Embark on a Journey of Success</h4>
                <p>
                Schedule a free consultation today to transform your supply chain operations and propel your business forward.
                </p>
                <p className='last-para'>
                MSB Transport: Your Logistics Partner for Success in Montreal
                </p>

              
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

export default DedicatedLogisticsDetailsInner;
