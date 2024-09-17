import React from "react";
import {
  FaArrowRight,
  FaFacebookF,
  FaLinkedinIn,
  FaPaperPlane,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const FooterOne = () => {
  const { t } = useTranslation();

  return (
    <footer className='footer-area'>
      <div
        className='footer-top'
        style={{ backgroundImage: 'url("./assets/img/footer/bg.png")' }}
      >
        <div className='container'>
          <div className='row justify-content-center'>
            {/* Office Address */}
            <div className='col-lg-4 col-md-6'>
              <div className='single-footer-top'>
                <div className='icon'>
                  <img src='assets/img/icon/map-marker.png' alt='Transpro' />
                </div>
                <div className='details'>
                  <h6>{t('footerOfficeAddressTitle')}</h6>
                  <p>{t('footerOfficeAddress')}</p>
                </div>
              </div>
            </div>

            {/* Contact Us */}
            <div className='col-lg-4 col-md-6'>
              <div className='single-footer-top'>
                <div className='icon'>
                  <img src='assets/img/icon/phone.png' alt='Transpro' />
                </div>
                <div className='details'>
                  <h6>{t('footerContactUsTitle')}</h6>
                  <p>{t('footerContactEmail')}</p>
                  <p>{t('footerContactPhone')}</p>
                </div>
              </div>
            </div>

            {/* Working Hours */}
            <div className='col-lg-4 col-md-6'>
              <div className='single-footer-top after-none'>
                <div className='icon'>
                  <img src='assets/img/icon/clock.png' alt='Transpro' />
                </div>
                <div className='details'>
                  <h6>{t('footerWorkingHoursTitle')}</h6>
                  <p>{t('footerWorkingHoursWeekdays')}</p>
                  <p>{t('footerWorkingHoursWeekend')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='container'>
        <div className='row'>
          {/* About Widget */}
          <div className='col-xl-4 col-md-6'>
            <div className='widget widget_about'>
              <div className='thumb'>
                <img src='assets/img/logo-white.png' alt='Transpro' />
              </div>
              <div className='details'>
                <p>{t('footerAboutDescription')}</p>
                <ul className='social-media style-border'>
                  <li>
                    <a href='#'>
                      <FaFacebookF />
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <FaTwitter />
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <FaWhatsapp />
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <FaLinkedinIn />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Useful Links Widget */}
          <div className='col-xl-2 col-md-6'>
            <div className='widget widget_nav_menu'>
              <h4 className='widget-title'>{t('footerUsefulLinksTitle')}</h4>
              <ul>
                <li>
                  <Link to='/about'>
                    <FaArrowRight /> {t('footerLinkAboutUs')}
                  </Link>
                </li>
                <li>
                  <Link to='/service'>
                    <FaArrowRight /> {t('footerLinkServices')}
                  </Link>
                </li>
                <li>
                  <Link to='/contact'>
                    <FaArrowRight /> {t('footerLinkContactUs')}
                  </Link>
                </li>
                <li>
                  <Link to='/login'>
                    <FaArrowRight /> {t('Login')}
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Our Services Widget */}
          <div className='col-xl-2 col-md-6'>
            <div className='widget widget_nav_menu'>
              <h4 className='widget-title'>{t('footerOurServicesTitle')}</h4>
              <ul>
                <li>
                  <a href='/express-delivery-courier-montreal'>
                    <FaArrowRight /> {t('footerServiceExpressDelivery')}
                  </a>
                </li>
                <li>
                  <a href='/dedicated-logistics-montreal'>
                    <FaArrowRight /> {t('footerServiceDedicatedLogistics')}
                  </a>
                </li>
                <li>
                  <a href='/24-7-availability-courier-montreal'>
                    <FaArrowRight /> {t('footerService247Availability')}
                  </a>
                </li>
                <li>
                  <a href='/scheduled-delivery-courier-montreal'>
                    <FaArrowRight /> {t('footerServiceScheduledDelivery')}
                  </a>
                </li>
                <li>
                  <a href='/ecommerce-logistics-courier-transport-montreal'>
                    <FaArrowRight /> {t('footerServiceEcommerceLogistics')}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Subscribe Widget */}
          <div className='col-xl-4 col-md-6'>
            <div className='widget widget_subscribe'>
              <h4 className='widget-title'>{t('footerSubscribeTitle')}</h4>
              <p>{t('footerSubscribeDescription')}</p>
              <div className='single-subscribe-inner'>
                <input type='text' placeholder={t('footerSubscribePlaceholder')} />
                <a className='btn btn-base' href='#'>
                  <FaPaperPlane />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterOne;