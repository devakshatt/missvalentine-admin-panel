import Footer from "../Footer";
import { useRouter } from 'next/router'
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import React, { useEffect, useContext } from 'react';
import AppContext from "../../AppContext";
import { setAuthHeaderAxios } from "../../utils/callApi";

const withLayout = (PageComponent) => {
  return function WithPage({ ...props }) {
    const router = useRouter()
    const context = useContext(AppContext);
    const { state } = context;

    useEffect(() => {
      // on initial load - run auth check 
      console.log('Inside Component Auth State', state.auth.authStatus)
      if (!state.auth.authStatus) {
        router.push('/');
      } else {
        setAuthHeaderAxios(state.auth.token);
      }

      // // on route change start - hide page content by setting authorized to false  
      // const hideContent = () => setAuthorized(false);
      // router.events.on('routeChangeStart', hideContent);

      // // on route change complete - run auth check 
      // router.events.on('routeChangeComplete', authCheck)

      // // unsubscribe from events in useEffect return function
      // return () => {
      //   router.events.off('routeChangeStart', hideContent);
      //   router.events.off('routeChangeComplete', authCheck);
      // }

      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);



    return (
      <div className="ec-header-fixed ec-sidebar-fixed ec-sidebar-light ec-header-light compact-spacing" id="body">

        {/* <div className="ec-header-fixed ec-sidebar-fixed ec-sidebar-light ec-header-light" id="body"> */}
        {/* ec-header-fixed ec-sidebar-fixed ec-sidebar-light ec-header-light compact-spacing */}
        <div className="wrapper">
          {/* LEFT MAIN SIDEBAR */}
          <Sidebar />
          {/* PAGE WRAPPER */}
          <div className="ec-page-wrapper">
            {/* Header */}
            <Navbar />
            {/* CONTENT WRAPPER */}
            <PageComponent />
            {/* Footer */}
            <Footer />
          </div>
        </div>
      </div>
    );
  };
};

export default withLayout;