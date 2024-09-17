import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ContactOne = () => {
  const { t } = useTranslation();

  return (
    <>
      <div>
        <img src='assets/img/contact/contact-best-courier-company-canada-montreal.png' alt='Transpro' />
        <div className='container'>
          <div className='row justify-content-end'>
            <div className='col-xl-6 col-lg-7'>
              <div className='cta-inner-wrap'>
                <div className='section-title style-white mb-0'>
                  <h4 className='subtitle style-2'>{t('contactSubtitle')}</h4>
                  <h2 className='title'>{t('contactTitle')}</h2>
                </div>
                <div className='single-cta-wrap'>
                  <div className='icon'>
                    <FaPhoneAlt />
                  </div>
                  <div className='details'>
                    <h6>{t('contactQuestion')}</h6>
                    <h3>+14388768322</h3>
                  </div>
                </div>
                <Link className='btn btn-base' to='/contact'>
                  {t('contactUsButton')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactOne;