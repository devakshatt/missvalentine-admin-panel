import { useRouter } from "next/router";

export default function Sidebar() {
    const router = useRouter();
    const handleNavigate = (endpoint) => {
        router.push(endpoint)
    };

    return (
        <div className="ec-left-sidebar ec-bg-sidebar">
            <div id="sidebar" className="sidebar ec-sidebar-footer">
                <div className="ec-brand">
                    <a href="/dashboard" title="Ekka">
                        <img className="ec-brand-icon" src="/image/logo/ec-site-logo.png" alt="" />
                        <span className="ec-brand-name text-truncate">Home</span>
                    </a>
                </div>
                {/* begin sidebar scrollbar */}
                <div className="ec-navigation" data-simplebar>
                    {/* sidebar menu */}
                    <ul className="nav sidebar-inner" id="sidebar-menu">
                        {/* Dashboard */}
                        <li>
                            <a className="sidenav-item-link" href="index.html">
                                <i className="mdi mdi-view-dashboard-outline" />
                                <span className="nav-text">Dashboard</span>
                            </a>
                            <hr />
                        </li>
                        {/* Vendors */}
                        <li className="has-sub">
                            <a className="sidenav-item-link">
                                <i className="mdi mdi-account-group-outline" />
                                <span className="nav-text">Vendors</span> <b className="caret" />
                            </a>
                            <div className="collapse">
                                <ul className="sub-menu" id="vendors" data-parent="#sidebar-menu">
                                    <li className="">
                                        <a className="sidenav-item-link" href="vendor-card.html">
                                            <span className="nav-text">Vendor Grid</span>
                                        </a>
                                    </li>
                                    <li className="">
                                        <a className="sidenav-item-link" href="vendor-list.html">
                                            <span className="nav-text">Vendor List</span>
                                        </a>
                                    </li>
                                    <li className="">
                                        <a className="sidenav-item-link" href="vendor-profile.html">
                                            <span className="nav-text">Vendors Profile</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        {/* Users */}
                        <li className="has-sub">
                            <a className="sidenav-item-link">
                                <i className="mdi mdi-account-group" />
                                <span className="nav-text">Users</span> <b className="caret" />
                            </a>
                            <div className="collapse">
                                <ul className="sub-menu" id="users" data-parent="#sidebar-menu">
                                    <li>
                                        <a className="sidenav-item-link" href="user-card.html">
                                            <span className="nav-text">User Grid</span>
                                        </a>
                                    </li>
                                    <li className="">
                                        <a className="sidenav-item-link" href="user-list.html">
                                            <span className="nav-text">User List</span>
                                        </a>
                                    </li>
                                    <li className="">
                                        <a className="sidenav-item-link" href="user-profile.html">
                                            <span className="nav-text">Users Profile</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <hr />
                        </li>
                        {/* Category */}
                        <li className="has-sub">
                            <a className="sidenav-item-link">
                                <i className="mdi mdi-dns-outline" />
                                <span className="nav-text">Categories</span> <b className="caret" />
                            </a>
                            <div className="collapse">
                                <ul className="sub-menu" id="categorys" data-parent="#sidebar-menu">
                                    <li className="">
                                        <a className="sidenav-item-link" href="main-category.html">
                                            <span className="nav-text">Main Category</span>
                                        </a>
                                    </li>
                                    <li className="">
                                        <a className="sidenav-item-link" href="sub-category.html">
                                            <span className="nav-text">Sub Category</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        {/* Products */}
                        <li className="has-sub active expand">
                            <a className="sidenav-item-link">
                                <i className="mdi mdi-palette-advanced" />
                                <span className="nav-text">Products</span> <b className="caret" />
                            </a>
                            <div className="collapse show">
                                <ul className="sub-menu" id="products" data-parent="#sidebar-menu">
                                    <li className="active">
                                        <a className="sidenav-item-link" href="product-add.html">
                                            <span className="nav-text">Add Product</span>
                                        </a>
                                    </li>
                                    <li className="">
                                        <a className="sidenav-item-link" href="product-list.html">
                                            <span className="nav-text">List Product</span>
                                        </a>
                                    </li>
                                    <li className="">
                                        <a className="sidenav-item-link" href="product-grid.html">
                                            <span className="nav-text">Grid Product</span>
                                        </a>
                                    </li>
                                    <li className="">
                                        <a className="sidenav-item-link" href="product-detail.html">
                                            <span className="nav-text">Product Detail</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        {/* Orders */}
                        <li className="has-sub">
                            <a className="sidenav-item-link">
                                <i className="mdi mdi-cart" />
                                <span className="nav-text">Orders</span> <b className="caret" />
                            </a>
                            <div className="collapse">
                                <ul className="sub-menu" id="orders" data-parent="#sidebar-menu">
                                    <li className="">
                                        <a className="sidenav-item-link" href="new-order.html">
                                            <span className="nav-text">New Order</span>
                                        </a>
                                    </li>
                                    <li className="">
                                        <a className="sidenav-item-link" href="order-history.html">
                                            <span className="nav-text">Order History</span>
                                        </a>
                                    </li>
                                    <li className="">
                                        <a className="sidenav-item-link" href="order-detail.html">
                                            <span className="nav-text">Order Detail</span>
                                        </a>
                                    </li>
                                    <li className="">
                                        <a className="sidenav-item-link" href="invoice.html">
                                            <span className="nav-text">Invoice</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        {/* Reviews */}
                        <li>
                            <a className="sidenav-item-link" href="review-list.html">
                                <i className="mdi mdi-star-half" />
                                <span className="nav-text">Reviews</span>
                            </a>
                        </li>
                        {/* Brands */}
                        <li>
                            <a className="sidenav-item-link" href="brand-list.html">
                                <i className="mdi mdi-tag-faces" />
                                <span className="nav-text">Brands</span>
                            </a>
                            <hr />
                        </li>
                        {/* Authentication */}
                        <li className="has-sub">
                            <a className="sidenav-item-link">
                                <i className="mdi mdi-login" />
                                <span className="nav-text">Authentication</span> <b className="caret" />
                            </a>
                            <div className="collapse">
                                <ul className="sub-menu" id="authentication" data-parent="#sidebar-menu">
                                    <li className="">
                                        <a href="sign-in.html">
                                            <span className="nav-text">Sign In</span>
                                        </a>
                                    </li>
                                    <li className="">
                                        <a href="sign-up.html">
                                            <span className="nav-text">Sign Up</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        {/* Icons */}
                        <li className="has-sub">
                            <a className="sidenav-item-link">
                                <i className="mdi mdi-diamond-stone" />
                                <span className="nav-text">Icons</span> <b className="caret" />
                            </a>
                            <div className="collapse">
                                <ul className="sub-menu" id="icons" data-parent="#sidebar-menu">
                                    <li className="">
                                        <a className="sidenav-item-link" href="material-icon.html">
                                            <span className="nav-text">Material Icon</span>
                                        </a>
                                    </li>
                                    <li className="">
                                        <a className="sidenav-item-link" href="font-awsome-icons.html">
                                            <span className="nav-text">Font Awsome Icon</span>
                                        </a>
                                    </li>
                                    <li className="">
                                        <a className="sidenav-item-link" href="flag-icon.html">
                                            <span className="nav-text">Flag Icon</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        {/* Other Pages */}
                        <li className="has-sub">
                            <a className="sidenav-item-link">
                                <i className="mdi mdi-image-filter-none" />
                                <span className="nav-text">Other Pages</span> <b className="caret" />
                            </a>
                            <div className="collapse">
                                <ul className="sub-menu" id="otherpages" data-parent="#sidebar-menu">
                                    <li className="has-sub">
                                        <a href="404.html">404 Page</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    );
}
