import React, { Fragment, Suspense } from "react";
import Preloader from "../elements/Preloader";
const Breadcrumb = React.lazy(() => import("../components/Breadcrumb"));
const FooterBottomOne = React.lazy(() =>
  import("../components/FooterBottomOne")
);
const FooterOne = React.lazy(() => import("../components/FooterOne"));
const NavbarOne = React.lazy(() => import("../components/NavbarOne"));
const TwentyFourSevenAvailabilityDetailsInner = React.lazy(() =>
  import("../components/TwentyFourSevenAvailabilityDetailsInner")
);
const SearchPopup = React.lazy(() => import("../elements/SearchPopup"));
const TwentyFourSevenAvailability = () => {
  return (
    <>
      <Fragment>
        <Suspense fallback={<Preloader />}>
          {/* Search Popup */}
          <SearchPopup />

          {/* Navbar One */}
          <NavbarOne />

          {/* Breadcrumb */}
          <Breadcrumb title={"24/7 AVAILABILITY"} />

          {/* Service Details Inner */}
          <TwentyFourSevenAvailabilityDetailsInner />

          {/* Footer One */}
          <FooterOne />

          {/* Footer Bottom One */}
          <FooterBottomOne />
        </Suspense>{" "}
      </Fragment>
    </>
  );
};

export default TwentyFourSevenAvailability;
