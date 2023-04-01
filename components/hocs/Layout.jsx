import Footer from "../Footer";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";

const withLayout = (PageComponent) => {
  return function WithPage({ ...props }) {
    return (
      <div className="ec-header-fixed ec-sidebar-fixed ec-sidebar-dark ec-header-light" id="body">
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