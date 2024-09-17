import React from "react";
import { useTranslation } from "react-i18next";

const FaqOne = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div className='container p-sm-0'>
        <div className='row'>
          <div className='col-xl-6 col-lg-5 order-lg-2'>
            <div className='thumb text-center mb-4 mb-lg-0'>
              <img src='assets/img/faq/faq-msb-transports-night.png' alt='Transpro' />
            </div>
          </div>
          <div className='col-xl-6 col-lg-7 order-lg-1'>
            <div className='section-title'>
              <h4 className='subtitle'>{t('faqSubtitle')}</h4>
              <h2 className='title'>{t('faqTitle')}</h2>
              <p className='content'>{t('faqContent')}</p>
            </div>
            <div className='accordion faq-accordion' id='accordionExample'>
              <div className='accordion-item single-accordion-inner'>
                <h2 className='accordion-header' id='headingOne'>
                  <button
                    className='accordion-button'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#collapseOne'
                    aria-expanded='true'
                    aria-controls='collapseOne'
                  >
                    {t('faqQuestion1')}
                  </button>
                </h2>
                <div
                  id='collapseOne'
                  className='accordion-collapse collapse show'
                  aria-labelledby='headingOne'
                  data-bs-parent='#accordionExample'
                >
                  <div className='accordion-body'>
                    {t('faqAnswer1')}
                  </div>
                </div>
              </div>
              <div className='accordion-item single-accordion-inner'>
                <h2 className='accordion-header' id='headingTwo'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#collapseTwo'
                    aria-expanded='false'
                    aria-controls='collapseTwo'
                  >
                    {t('faqQuestion2')}
                  </button>
                </h2>
                <div
                  id='collapseTwo'
                  className='accordion-collapse collapse'
                  aria-labelledby='headingTwo'
                  data-bs-parent='#accordionExample'
                >
                  <div className='accordion-body'>
                    {t('faqAnswer2')}
                  </div>
                </div>
              </div>
              <div className='accordion-item single-accordion-inner'>
                <h2 className='accordion-header' id='headingThree'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#collapseThree'
                    aria-expanded='false'
                    aria-controls='collapseThree'
                  >
                    {t('faqQuestion3')}
                  </button>
                </h2>
                <div
                  id='collapseThree'
                  className='accordion-collapse collapse'
                  aria-labelledby='headingThree'
                  data-bs-parent='#accordionExample'
                >
                  <div className='accordion-body'>
                    {t('faqAnswer3')}
                  </div>
                </div>
              </div>
              <div className='accordion-item single-accordion-inner'>
                <h2 className='accordion-header' id='headingFour'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#collapseFour'
                    aria-expanded='false'
                    aria-controls='collapseFour'
                  >
                    {t('faqQuestion4')}
                  </button>
                </h2>
                <div
                  id='collapseFour'
                  className='accordion-collapse collapse'
                  aria-labelledby='headingFour'
                  data-bs-parent='#accordionExample'
                >
                  <div className='accordion-body'>
                    {t('faqAnswer4')}
                  </div>
                </div>
              </div>
              <div className='accordion-item single-accordion-inner'>
                <h2 className='accordion-header' id='headingFive'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#collapseFive'
                    aria-expanded='false'
                    aria-controls='collapseFive'
                  >
                    {t('faqQuestion5')}
                  </button>
                </h2>
                <div
                  id='collapseFive'
                  className='accordion-collapse collapse'
                  aria-labelledby='headingFive'
                  data-bs-parent='#accordionExample'
                >
                  <div className='accordion-body'>
                    {t('faqAnswer5')}
                  </div>
                </div>
              </div>
              {/* Add more accordion items here if needed */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqOne;
