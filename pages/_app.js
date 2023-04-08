import { ToastContainer } from 'react-toastify';
import Head from 'next/head'
import { useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.css'
import "../styles/main.scss";
import AppContext from '../AppContext';


function MyApp({ Component, pageProps }) {
    const [auth, setAuth] = useState({
        authStatus: false,
        token: null,
        user: null
    });
    const [allCategory, setAllCategory] = useState([]);
    const [allProducts, setAllProducts] = useState([]);
    return <AppContext.Provider
        value={{
            state: {
                auth: auth,
                allCategory: allCategory,
                allProducts: allProducts
            },
            setAuth: setAuth,
            setAllCategory: setAllCategory,
            setAllProducts: setAllProducts
        }}
    >
        <Head>
            <title>Admin Panel- MissValentine</title>
        </Head>
        <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            theme="light"
        />
        <Component {...pageProps} />
    </AppContext.Provider>
}

export default MyApp;

// export default MyApp;
