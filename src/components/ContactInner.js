import React, { useRef } from "react";
import {
  FaCalculator,
  FaFileAlt,
  FaMapMarkerAlt,
  FaPencilAlt,
  FaPhoneAlt,
  FaRegEnvelope,
  FaUserAlt,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { toast, Toaster } from "react-hot-toast";
import { useTranslation } from 'react-i18next';
const ContactInner = () => {
  const { t } = useTranslation();
  const form = useRef();

const sendEmail = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/.netlify/functions/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: form.current.user_name.value,
                    email: form.current.user_email.value,
                    phone: form.current.phone.value,
                    message: form.current.message.value,
                }),
            });
            if (response.ok) {
                console.log('Email sent successfully!');
                // setFormData({ name: '', email: '', message: '' });
                // history.push('/contact-success');
            } else {
                console.error('Error sending email.');
            }
        } catch (error) {
            
            console.error('There was an error sending the email.', error);
        }
    };
  

  return (
    <>
      <Toaster position='bottom-center' reverseOrder={false} />
      {/* contact area start */}
      <div className='container'>
        <div className='contact-area mg-top-120 mb-120'>
          <div className='row g-0 justify-content-center'>
            <div className='col-lg-7'>
              <form netlify className='contact-form text-center' ref={form} onSubmit={sendEmail}>
                <h3>{t('getAQuote2')}</h3>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='single-input-inner'>
                      <label><FaUserAlt /></label>
                      <input type='text' placeholder={t('yourName')} name='user_name' />
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='single-input-inner'>
                      <label><FaRegEnvelope /></label>
                      <input type='text' placeholder={t('yourEmail')} name='user_email' />
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='single-input-inner'>
                      <label><FaCalculator /></label>
                      <input type='text' placeholder={t('phoneNumber')} name='phone'/>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='single-select-inner'>
                      <label><FaFileAlt /></label>
                      <select className='single-select'>
                        <option>{t('subject')}</option>
                        <option value={1}>{t('option1')}</option>
                      </select>
                    </div>
                  </div>
                  <div className='col-12'>
                    <div className='single-input-inner'>
                      <label><FaPencilAlt /></label>
                      <textarea placeholder={t('writeMessage')} defaultValue={""} id='message' />
                    </div>
                  </div>
                  <div className='col-12'>
                    <button className='btn btn-base' type='submit'>
                      {t('sendMessage')}
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className='col-lg-5'>
              <div className='contact-information-wrap'>
                <h3>{t('contactInformation')}</h3>
                <div className='single-contact-info-wrap'>
                  <h6>{t('contactNumber')}</h6>
                  <div className='media'>
                    <div className='icon'><FaPhoneAlt /></div>
                    <div className='media-body'>
                      <p>+1 438-876-8322</p>
                    </div>
                  </div>
                </div>
                <div className='single-contact-info-wrap'>
                  <h6>{t('mailAddress')}</h6>
                  <div className='media'>
                    <div className='icon' style={{ background: "#080C24" }}><FaRegEnvelope /></div>
                    <div className='media-body'>
                      <p>info@msbtransports.com</p>
                    </div>
                  </div>
                </div>
                <div className='single-contact-info-wrap mb-0'>
                  <h6>{t('officeLocation')}</h6>
                  <div className='media'>
                    <div className='icon' style={{ background: "#565969" }}><FaMapMarkerAlt /></div>
                    <div className='media-body'>
                      <p>9 Av. de la Baie de Valois,</p>
                      <p>Pointe-Claire QC H9S 5H2, Canada</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* contact area end */}
      <div className='contact-g-map'>
        <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2799.038719101302!2d-73.79355592320762!3d45.448875871073795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc93dcbd7eb2889%3A0x92843f30a65050b7!2s9%20Av.%20de%20la%20Baie%20de%20Valois%2C%20Pointe-Claire%2C%20QC%20H9S%205H2!5e0!3m2!1sen!2sca!4v1702688248759!5m2!1sen!2sca' />
      </div>
    </>
  );
};

export default ContactInner;