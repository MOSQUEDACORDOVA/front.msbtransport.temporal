import React, { useEffect, useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaRegClock,
  FaTwitter,
} from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { SetSearchPopUp } from "../redux/stateSlice/clickActionSlice";
import store from "../redux/store/store";
import { useTranslation } from "react-i18next";
import axios from "axios";

function LanguageSwitcher() {
  const location = useLocation();
  const { i18n } = useTranslation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const lang = searchParams.get('lang');

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
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Estado de autenticación
  const [isUserType1, setIsUserType1] = useState(false); // Estado para el tipo de usuario
  const { t } = useTranslation();
  const navigate = useNavigate(); // Para redirigir

  useEffect(() => {
    const checkSession = async () => {
      const user = JSON.parse(localStorage.getItem('user')); // Obtener la variable 'user' del localStorage
      const token = localStorage.getItem('token'); // Obtener la variable 'token' del localStorage
      // console.log(user)
      // console.log(token)

      if (user && token) {  // Verificar si hay un token disponible
        try {
          // Realizar una llamada a la API para verificar la validez del token
          const response = await axios.get('https://production.backend.msbtransport.mosquedacordova.com/api/check-session', {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
          // console.log(user)
          // console.log(response)

          if (response.status === 200) {
            setIsAuthenticated(true); // La sesión está activa
            if (user.type === 1) {
              setIsUserType1(true);
            }
          }
        } catch (error) {
          console.error('Session expired or invalid', error);
          handleSessionExpired(); // Manejar la sesión expirada
        }
      } else {
        handleSessionExpired(); // Manejar la sesión expirada si no hay token
      }
    };

    checkSession();

    window.onscroll = () => {
      if (window.pageYOffset < 300) {
        setActive(false);
      } else if (window.pageYOffset > 300) {
        setActive(true);
      }
      return () => (window.onscroll = null);
    };
  }, []);

  const handleSessionExpired = () => {
    // Limpiar cualquier estado o almacenamiento relacionado con la sesión
    localStorage.removeItem('user'); // Remover el usuario del almacenamiento local
    setIsAuthenticated(false); // Establecer autenticación como falsa
    navigate('/login'); // Redirigir al login
  };

  const searchPopUp = useSelector((state) => state.clickAction.searchPopUp);
  const actionSearch = () => {
    store.dispatch(SetSearchPopUp(!searchPopUp));
  };

  useEffect(() => {
    let items = document.querySelectorAll(".menu-item-has-children > a");
    items.forEach((item) => {
      item.onclick = function () {
        this.parentElement.querySelector(".sub-menu").classList.toggle("active");
        this.classList.toggle("open");
      };
    });
  }, []);

  return (
    <>
      <header className='navbar-area'>
        <div className='navbar-top'>
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
        <nav className={active ? "navbar navbar-area-1 navbar-area navbar-expand-lg sticky-active" : "navbar navbar-area-1 navbar-area navbar-expand-lg border-bottom"}>
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
            <div className={open ? "collapse navbar-collapse sopen" : "collapse navbar-collapse"} id='transpro_main_menu'>
              <ul className='navbar-nav menu-open'>
                {isAuthenticated && isUserType1 && (
                  <li><Link to='/users-list'>{t('users')}</Link></li>
                )}
                <li><Link to='/transport-list'>{t('transport')}</Link></li>
                <li><LanguageSwitcher /></li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default NavbarOne;
