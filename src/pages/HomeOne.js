import React, { Fragment, Suspense } from "react";
import Preloader from "../elements/Preloader";
const BannerOne = React.lazy(() => import("../components/BannerOne"));
const AboutTwo = React.lazy(() => import("../components/AboutTwo"));
const VideoAreaOne = React.lazy(() => import("../components/VideoAreaOne"));
const ContactOne = React.lazy(() => import("../components/ContactOne"));
const CounterOne = React.lazy(() => import("../components/CounterOne"));
const FaqOne = React.lazy(() => import("../components/FaqOne"));
const FooterBottomOne = React.lazy(() =>
  import("../components/FooterBottomOne")
);
const FooterOne = React.lazy(() => import("../components/FooterOne"));
const NavbarOne = React.lazy(() => import("../components/NavbarOne"));
const PartnerOne = React.lazy(() => import("../components/PartnerOne"));
const PortfolioOne = React.lazy(() => import("../components/PortfolioOne"));
const ServiceOne = React.lazy(() => import("../components/ServiceOne"));
const TransportServiceAreaTwo = React.lazy(() => import("../components/TransportServiceAreaTwo"));
const TestimonialThree = React.lazy(() => import("../components/TestimonialThree"));
const WhyChooseUsTwo = React.lazy(() => import("../components/WhyChooseUsTwo"));
const SearchPopup = React.lazy(() => import("../elements/SearchPopup"));
const HomeOne = () => {
  return (
    <>
      <Fragment>
        <Suspense fallback={<Preloader />}>
          {/* Search Popup */}
          <SearchPopup />

          {/* Navbar One */}
          <NavbarOne />

          {/* Banner One */}
          <BannerOne />

          {/* Feature One */}
          {/* <FeatureOne /> */}

           {/* About Two */}
           <AboutTwo />

          {/* TransportServiceAreaTwo */}
          <TransportServiceAreaTwo />

          {/* Service One */}
          {/* <ServiceOne /> */}

          {/* Why Choose Us One */}
          {/* <WhyChooseUsOne /> */}

          {/* Why Choose Us Two */}
          <WhyChooseUsTwo />

          {/* Counter One */}

          <CounterOne />

          {/* Team One */}
          {/* <TeamOne /> */}

          {/* Contact One */}
          <div
            className='call-to-contact-area pd-top-240'
            style={{ background: "#F9F9F9" }}
          >
            <ContactOne />
          </div>

          {/* Testimonial Three */}
          <TestimonialThree />

          {/* Portfolio One */}
          <PortfolioOne />

          {/* Blog One */}
          {/* <BlogOne /> */}

          {/* Video Area One */}
          <VideoAreaOne />

          {/* Faq One */}
          <div className='faq-area pd-top-120'>
            <FaqOne />
          </div>

            {/* Partner One */}
            <PartnerOne />

          {/* Footer One */}
          <FooterOne />

          {/* Footer Bottom One */}
          <FooterBottomOne />
        </Suspense>
      </Fragment>
    </>
  );
};

export default HomeOne;
