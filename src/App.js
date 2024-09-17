import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeOne from "./pages/HomeOne";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ScrollToTop from "react-scroll-to-top";
import HomeTwo from "./pages/HomeTwo";
import About from "./pages/About";
import Service from "./pages/Service";
import ExpressDeliveryDetails from "./pages/ExpressDeliveryDetails";
import DedicatedLogistics from "./pages/DedicatedLogistics";
import ScheduledDelivery from "./pages/ScheduledDelivery";
import TwentyFourSevenAvailability from "./pages/TwentyFourSevenAvailability";
import EcommerceLogistics from "./pages/EcommerceLogistics";
import SpecialHandlingDeliveries from "./pages/SpecialHandlingDeliveries";
import InsuranceAndTracking from "./pages/InsuranceAndTracking";
import ReturnManagement from "./pages/ReturnManagement";
import AllGreenDelivery from "./pages/AllGreenDelivery";
import PartsDelivery from "./pages/PartsDelivery";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import Pricing from "./pages/Pricing";
import Faq from "./pages/Faq";
import Contact from "./pages/Contact";
import RouteScrollToTop from "./elements/RouteScrollToTop";
import HomeThree from "./pages/HomeThree";
import HomeFour from "./pages/HomeFour";
import { useTranslation } from 'react-i18next';
import HomeFive from "./pages/HomeFive";
import Login from "./pages/auth/Login";
import TransportList from "./pages/TransportList";
import UsersList from "./pages/UsersList";

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  return (
    <div>
      <button onClick={() => i18n.changeLanguage('en')}>EN</button>
      <button onClick={() => i18n.changeLanguage('es')}>ES</button>
    </div>
  );
}

function App() {
  useEffect(() => {
    AOS.init({
      offset: 0,
      easing: "ease",
      once: true,
    });
    AOS.refresh();
  }, []);
  return (
    <BrowserRouter>
      <RouteScrollToTop />
      <Routes>
        <Route exact path='/' element={<HomeOne />} />
        <Route exact path='/home-2' element={<HomeTwo />} />
        <Route exact path='/home-3' element={<HomeThree />} />
        <Route exact path='/home-4' element={<HomeFour />} />
        <Route exact path='/home-5' element={<HomeFive />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/service' element={<Service />} />
        <Route exact path='/express-delivery-courier-montreal' element={<ExpressDeliveryDetails />} />
        <Route exact path='/dedicated-logistics-montreal' element={<DedicatedLogistics />} />
        <Route exact path='/24-7-availability-courier-montreal' element={<TwentyFourSevenAvailability />} />
        <Route exact path='/scheduled-delivery-courier-montreal' element={<ScheduledDelivery />} />
        <Route exact path='/ecommerce-logistics-courier-transport-montreal' element={<EcommerceLogistics />} />
        <Route exact path='/special-handling-deliveries-courier-transport-montreal' element={<SpecialHandlingDeliveries />} />
        <Route exact path='/insurance-and-tracking-courier-transport-montreal-deliveries' element={<InsuranceAndTracking />} />
        <Route exact path='/return-management-courier-transport-montreal' element={<ReturnManagement />} />
        <Route exact path='/all-green-deliveries-courier-transport-montreal' element={<AllGreenDelivery />} />
        <Route exact path='/parts-delivery-courier-transport-montreal' element={<PartsDelivery />} />
        
        <Route exact path='/blog' element={<Blog />} />
        <Route exact path='/blog-details' element={<BlogDetails />} />
        <Route exact path='/pricing' element={<Pricing />} />
        <Route exact path='/faq' element={<Faq />} />
        <Route exact path='/contact' element={<Contact />} />

        <Route exact path='/login' element={<Login />} />
        <Route exact path='/transport-list' element={<TransportList />} />
        <Route exact path='/users-list' element={<UsersList />} />
      </Routes>
      <ScrollToTop smooth color='#FA4318' />
    </BrowserRouter>
  );
}

export default App;
