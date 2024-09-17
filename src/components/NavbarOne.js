import React, { useEffect, useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaRegClock,
  FaTwitter,
} from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { SetSearchPopUp } from "../redux/stateSlice/clickActionSlice";
import store from "../redux/store/store";
import { useLocation } from 'react-router-dom';
import { useTranslation } from "react-i18next"; // Import useTranslation

// Define the LanguageSwitcher component

function LanguageSwitcher() {
  const location = useLocation();
  const { i18n } = useTranslation();

  useEffect(() => {
    // Extract 'lang' query parameter from URL
    const searchParams = new URLSearchParams(location.search);
    const lang = searchParams.get('lang');

    // Change language if 'lang' parameter is present
    if (lang && i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
  }, [location, i18n]);

  return (
    <div>

      <Link to={`${location.pathname}?lang=en`}>EN</Link>&nbsp; &nbsp; 
      <Link to={`${location.pathname}?lang=fr`}>FR</Link>
 
    </div>
  );
}

const NavbarOne = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    window.onscroll = () => {
      if (window.pageYOffset < 300) {
        setActive(false);
      } else if (window.pageYOffset > 300) {
        setActive(true);
      }
      return () => (window.onscroll = null);
    };
  }, []);

  const searchPopUp = useSelector((state) => state.clickAction.searchPopUp);
  const actionSearch = () => {
    store.dispatch(SetSearchPopUp(!searchPopUp));
  };

  let items = document.querySelectorAll(".menu-item-has-children > a");
  for (let i in items) {
    if (items.hasOwnProperty(i)) {
      items[i].onclick = function () {
        this.parentElement.querySelector(".sub-menu").classList.toggle("active");
        this.classList.toggle("open");
      };
    }
  }

  return (
    <>
      <header className='navbar-area'>
        <div className='navbar-top'>
          <Link className='main-logo' to='/home'>
            <div className='logo d-none d-xl-block'>
              <img src='/assets/img/logo.png' alt='Transpro' />
            </div>
          </Link>
          <div className='nav-phone-wrap'>
            <FaPhoneAlt />
            {t('phone')}
          </div>
          <div className='container p-lg-0'>
            <div className='row'>
              <div className='col-lg-10 col-md-9 text-md-start text-center'>
                <ul className='topbar-left'>
                  <li>
                    {t('address')}
                  </li>
                  <li>
                    <FaRegClock />
                    {t('hours')}
                  </li>
                </ul>
              </div>
              <div className='col-lg-2 col-md-3'>
                <ul className='topbar-right social-area text-md-end text-center'>
                  <li><Link to='#'><FaFacebookF aria-hidden='true' /></Link></li>
                  <li><Link to='#'><FaTwitter aria-hidden='true' /></Link></li>
                  <li><Link to='#'><FaLinkedinIn aria-hidden='true' /></Link></li>
                  <li><Link to='#'><FaInstagram aria-hidden='true' /></Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <nav className={active ? "navbar navbar-area-1 navbar-area navbar-expand-lg sticky-active" : "navbar navbar-area-1 navbar-area navbar-expand-lg"}>
          <div className='container nav-container'>
            <div className='responsive-mobile-menu'>
              <button onClick={() => setOpen(!open)} className={open ? "menu toggle-btn d-block d-lg-none open" : "menu toggle-btn d-block d-lg-none"} data-target='#transpro_main_menu' aria-expanded='false' aria-label='Toggle navigation'>
                <span className='icon-left' />
                <span className='icon-right' />
              </button>
            </div>
            <div className='logo'>
              <Link to='/'><img src='assets/img/logo-2.png' alt='Transpro' /></Link>
            </div>
            <div className='nav-left-part'></div>
            <div className='nav-right-part nav-right-part-mobile'>
              <span className='search-bar-btn cursor-pointer ps-5' onClick={actionSearch}>
                {/* Search Icon SVG */}
              </span>
              <Link className='btn btn-base' to='/contact'>
                {t('getAQuote')}
              </Link>
            </div>
            <div className={open ? "collapse navbar-collapse sopen" : "collapse navbar-collapse"} id='transpro_main_menu'>
              <ul className='navbar-nav menu-open'>
                <li><Link to='/'>{t('home')}</Link></li>
                <li><Link to='/about'>{t('aboutUs')}</Link></li>
                <li className='menu-item-has-children'>
                  <Link to='#'>{t('services')}</Link>
                  <ul className='sub-menu'>
                    <li><Link to='/express-delivery-courier-montreal'>{t('twoHourDelivery')}</Link></li>
                    <li><Link to='/dedicated-logistics-montreal'>{t('dedicatedLogistics')}</Link></li>
                    <li><Link to='/24-7-availability-courier-montreal'>{t('availability')}</Link></li>
                    <li><Link to='/scheduled-delivery-courier-montreal'>{t('scheduledDelivery')}</Link></li>
                    <li><Link to='/ecommerce-logistics-courier-transport-montreal'>{t('ecommerceLogistics')}</Link></li>
                    <li><Link to='/special-handling-deliveries-courier-transport-montreal'>{t('specialHandling')}</Link></li>
                    <li><Link to='/insurance-and-tracking-courier-transport-montreal-deliveries'>{t('insuranceTracking')}</Link></li>
                    <li><Link to='/return-management-courier-transport-montreal'>{t('returnManagement')}</Link></li>
                    <li><Link to='/all-green-deliveries-courier-transport-montreal'>{t('allGreenDelivery')}</Link></li>
                    <li><Link to='/parts-delivery-courier-transport-montreal'>{t('partsDelivery')}</Link></li>
                    <li><Link to='/service'>{t('allServices')}</Link></li>
                  </ul>
                </li>
                <li><Link to='/contact'>{t('contactUs')}</Link></li>
                <li><LanguageSwitcher /></li>
              </ul>
            </div>
            <div className='nav-right-part nav-right-part-desktop'>
              <span className='search-bar-btn cursor-pointer ps-5' onClick={actionSearch}>
                {/* Search Icon SVG */}
              </span>
              
              <Link className='btn btn-base' to='https://secure.ontime360.com/sites/Msb/login.aspx?ReturnUrl=%2fsites%2fMsb%2f'>
                {t('scheduleDelivery')}
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default NavbarOne;
