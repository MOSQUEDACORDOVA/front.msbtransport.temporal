import React, { Fragment, Suspense } from "react";
import Preloader from "../../elements/Preloader";
const LoginView = React.lazy(() => import("../../components/LoginView"));
const Breadcrumb = React.lazy(() => import("../../components/Breadcrumb"));
const FooterBottomOne = React.lazy(() =>
  import("../../components/FooterBottomOne")
);
const NavbarDash = React.lazy(() => import("../../components/NavbarDash"));
const Login = () => {
  return (
    <>
      <Fragment>
        <Suspense fallback={<Preloader />}>
          {/* Navbar One */}
          <NavbarDash />

          {/* Blog View */}
          <LoginView />

          {/* Footer Bottom One */}
          <FooterBottomOne />
        </Suspense>
      </Fragment>
    </>
  );
};

export default Login;
