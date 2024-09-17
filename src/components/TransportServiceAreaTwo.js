import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const TransportServiceAreaTwo = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className='transport-service-area style-03' style={{ backgroundColor: "#070C24" }}>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4'>
              <div className='section-title white text-left'>
                <Link className='btn btn-base subtitle style-03' to='/service'>
                  {t('ourServices')}
                </Link>
                <h2 className='title'>{t('whatWeCanDo')}</h2>
                <p className='sub-title'>
                  {t('serviceAreaDescription')}
                </p>
              </div>
            </div>
            <div className='col-lg-4'>
              <a href="/express-delivery-courier-montreal">
                <div className='single-service-item'>
                  <div className='service-image'>
                    <img
                      src='assets/img/service/express-delivery-msb-transport-courier.jpg'
                      className='img-fluid'
                      alt='service images'
                    />
                  </div>
                  <h3>{t('expressDeliveryTitle')}</h3>
                  <p>
                    {t('expressDeliveryDescription')}
                  </p>
                </div>
              </a>
            </div>
            <div className='col-lg-4'>
              <a href="/dedicated-logistics-montreal">  
                <div className='single-service-item'>
                  <div className='service-image'>
                    <img
                      src='assets/img/service/dedicated-logistics-transport-montreal.jpg'
                      className='img-fluid'
                      alt='service images'
                    />
                  </div>
                  <h3>{t('dedicatedLogisticsTitle')}</h3>
                  <p>
                    {t('dedicatedLogisticsDescription')}
                  </p>
                </div>
              </a> 
            </div>
            <div className='col-lg-4'>
              <a href="/24-7-availability-courier-montreal">  
                <div className='single-service-item'>
                  <div className='service-image'>
                    <img
                      src='assets/img/service/24-7-availability-transport-courier-services-montreal.jpg'
                      className='img-fluid'
                      alt='service images'
                    />
                  </div>
                  <h3>{t('247AvailabilityTitle')}</h3>
                  <p>{t('247AvailabilityDescription')}</p>
                </div>
              </a>  
            </div>
            <div className='col-lg-4'>
              <a href="/scheduled-delivery-courier-montreal">
                <div className='single-service-item'>
                  <div className='service-image'>
                    <img
                      src='assets/img/service/scheduled-delivery-courier-transport-services-montreal.jpg'
                      className='img-fluid'
                      alt='service images'
                    />
                  </div>
                  <h3>{t('scheduledDeliveryTitle')}</h3>
                  <p>{t('scheduledDeliveryDescription')}</p>
                </div>
              </a>   
            </div>
            <div className='col-lg-4'>
              <a href="/ecommerce-logistics-courier-transport-montreal">
                <div className='single-service-item'>
                  <div className='service-image'>
                    <img
                      src='assets/img/service/ecommerce-delivery-logistics-courier-montreal.jpg'
                      className='img-fluid'
                      alt='service images'
                    />
                  </div>
                  <h3>{t('ecommerceLogisticsTitle')}</h3>
                  <p>{t('ecommerceLogisticsDescription')}</p>
                </div>
              </a>  
            </div>
            <div className='col-lg-4'>
              <a href="/special-handling-deliveries-courier-transport-montreal">
                <div className='single-service-item'>
                  <div className='service-image'>
                    <img
                      src='assets/img/service/special-handling-courier-services-montreal.jpg'
                      className='img-fluid'
                      alt='service images'
                    />
                  </div>
                  <h3>{t('specialHandlingDeliveriesTitle')}</h3>
                  <p>{t('specialHandlingDeliveriesDescription')}</p>
                </div>
              </a>  
            </div>
            <div className='col-lg-4'>
              <a href="/parts-delivery-courier-transport-montreal">
                <div className='single-service-item'>
                  <div className='service-image'>
                    <img
                      src='assets/img/service/auto-parts-delivery-courier-montreal-area-msb-transports.jpg'
                      className='img-fluid'
                      alt='service images'
                    />
                  </div>
                  <h3>{t('partsDeliveryTitle')}</h3>
                  <p>{t('partsDeliveryDescription')}</p>
                </div>
              </a>
            </div>
            <div className='col-lg-4'>
              <a href="/return-management-courier-transport-montreal">
                <div className='single-service-item'>
                  <div className='service-image'>
                    <img
                      src='assets/img/service/return-management-courier-services-montreal-msb-transport.jpg'
                      className='img-fluid'
                      alt='service images'
                    />
                  </div>
                  <h3>{t('returnManagementTitle')}</h3>
                  <p>{t('returnManagementDescription')}</p>
                </div>
              </a>  
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TransportServiceAreaTwo;
