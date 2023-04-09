import { useRouter } from "next/router";
import { useState, useContext, useEffect } from 'react';
import AppContext from "../AppContext";
import { getAllCategories, getAllProducts, getAllSubcategories } from "../services/adminApi";
import { toast } from "react-toastify";

export default function Sidebar() {
    const router = useRouter();
    const context = useContext(AppContext);
    const { state, setAllCategory, setAllSubcategory, setAllProducts, setRefreshData } = context;
    const { refreshData } = state;

    const [expandItem, setExpandItem] = useState("none");

    const handleNavigate = (endpoint) => {
        router.push(endpoint)
    };

    useEffect(() => {
        if (router.pathname.includes("category"))
            setExpandItem("category")
        if (router.pathname.includes("product"))
            setExpandItem("product")
    }, [router.pathname])

    const handleSideBarClick = (_item) => {
        setExpandItem(s => s == _item ? "none" : _item)
    }

    const handleGetAllProducts = async () => {
        console.log('Fetching all Products')
        const response = await getAllProducts();
        if (response.data) {
            console.log('Fetched all products', response.data?.data?.length)
            setAllProducts(response.data.data);
        }
    }

    const handleGetAllCategory = async () => {
        console.log('Fetching all categories')
        const response = await getAllCategories();
        if (response.data && response.data.success) {
            console.log('Fetched all categories', response.data?.data?.length)
            setAllCategory(response.data.data);
        }
    }

    const handleGetAllSubcategory = async () => {
        console.log('Fetching all subcategories')
        const response = await getAllSubcategories();
        if (response.data && response.data.success) {
            console.log('Fetched all subcategories', response.data?.data?.length)
            setAllSubcategory(response.data.data);
        }
    }


    useEffect(() => {
        if (refreshData.includes(true)) {
            doRefreshData(refreshData[0], refreshData[1], refreshData[2]);
            setRefreshData([false, false, false]);
        }
    }, [refreshData]);

    const doRefreshData = (refreshCate = true, refreshSubCate = true, refreshProduct = true) => {
        console.log("Refresh Data", refreshCate, refreshSubCate, refreshProduct)
        if (refreshCate) handleGetAllCategory();
        if (refreshSubCate) handleGetAllSubcategory();
        if (refreshProduct) handleGetAllProducts();
    }

    return (
        <div className="ec-left-sidebar ec-bg-sidebar">
            <div id="sidebar" className="sidebar ec-sidebar-footer">
                <div className="ec-brand">
                    <div className="p-2 m-0 ec-brand-name text-truncate text-center w-100">Admin
                    </div>
                </div>
                {/* begin sidebar scrollbar */}
                <div className="ec-navigation" data-simplebar>
                    {/* sidebar menu */}
                    <ul className="nav sidebar-inner" id="sidebar-menu">
                        {/* Dashboard */}
                        <li>
                            <a className="sidenav-item-link">
                                <i className="mdi mdi-view-dashboard-outline" />
                                <span onClick={() => handleNavigate("/dashboard")} className="nav-text">Dashboard</span>
                                <i className="mdi mdi-refresh btn" onClick={() => {
                                    toast.success("Refreshing Data...")
                                    doRefreshData(true, true, true)
                                }} >

                                </i>
                            </a>
                            <hr />
                        </li>
                        {/* Vendors */}
                        {/* <li className="has-sub">
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
                        </li> */}
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
                        <li className={`has-sub ${expandItem.includes("category") ? "active expand" : ""}`} onClick={() => handleSideBarClick("category")}>
                            <a className="sidenav-item-link">
                                <i className="mdi mdi-dns-outline" />
                                <span className="nav-text">Categories</span> <b className="caret" />
                            </a>
                            <div className={`collapse ${expandItem.includes("category") ? "show" : ""}`}>
                                <ul className="sub-menu" id="categorys" data-parent="#sidebar-menu">
                                    <li className="">
                                        <a className="sidenav-item-link" >
                                            <span onClick={() => handleNavigate("/category-add")} className="nav-text">Add Category</span>
                                        </a>
                                    </li>
                                    <li className="">
                                        <a className="sidenav-item-link" >
                                            <span onClick={() => handleNavigate("/category-list")} className="nav-text">Category List</span>
                                        </a>
                                    </li>
                                    <li className="">
                                        <a className="sidenav-item-link" >
                                            <span onClick={() => handleNavigate("/subcategory-add")} className="nav-text">Add Sub Category</span>
                                        </a>
                                    </li>
                                    <li className="">
                                        <a className="sidenav-item-link" >
                                            <span onClick={() => handleNavigate("/subcategory-list")} className="nav-text">Sub Category List</span>
                                        </a>
                                    </li>

                                </ul>
                            </div>
                        </li>
                        {/* Products */}
                        <li className={`has-sub ${expandItem.includes("product") ? "active expand" : ""}`} onClick={() => handleSideBarClick("product")}>
                            <a className="sidenav-item-link">
                                <i className="mdi mdi-palette-advanced" />
                                <span className="nav-text">Products</span> <b className="caret" />
                            </a>
                            <div className={`collapse ${expandItem.includes("product") ? "show" : ""}`}>
                                <ul className="sub-menu" id="products" data-parent="#sidebar-menu">

                                    <li className="">
                                        <a className="sidenav-item-link" >
                                            <span onClick={() => handleNavigate("/product-add")} className="nav-text">Add Product</span>
                                        </a>
                                    </li>
                                    <li className="">
                                        <a className="sidenav-item-link" >
                                            <span onClick={() => handleNavigate("/product-list")} className="nav-text">List Product</span>
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
                                        <a className="sidenav-item-link">
                                            <span onClick={() => handleNavigate("/dashboard")} className="nav-text">New Order</span>
                                        </a>
                                    </li>

                                    <li className="">
                                        <a className="sidenav-item-link">
                                            <span onClick={() => handleNavigate("/dashboard")} className="nav-text">Order History</span>
                                        </a>
                                    </li>
                                    <li className="">
                                        <a className="sidenav-item-link">
                                            <span className="nav-text">Order Detail</span>
                                        </a>
                                    </li>
                                    <li className="">
                                        <a className="sidenav-item-link">
                                            <span className="nav-text">Invoice</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        {/* Reviews */}
                        <li>
                            <a className="sidenav-item-link">
                                <i className="mdi mdi-star-half" />
                                <span className="nav-text">Reviews</span>
                            </a>
                        </li>
                        {/* Brands */}
                        <li>
                            <a className="sidenav-item-link">
                                <i className="mdi mdi-tag-faces" />
                                <span className="nav-text">Brands</span>
                            </a>
                            <hr />
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    );
}
