import { ToastContainer } from 'react-toastify';
import Head from 'next/head'
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.css'
import "../styles/main.scss";
import AppContext from '../AppContext';
import usePersistState from '../utils/usePersistState';
import { useEffect } from 'react';
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {
    const router = useRouter()
    const [auth, setAuth] = usePersistState("auth", {
        authStatus: false,
        token: null,
        user: null
    });
    const [history, setHistory] = usePersistState("history", "/");
    const [allCategory, setAllCategory] = usePersistState("allCategory", []);
    const [allProducts, setAllProducts] = usePersistState("allProducts", []);
    const [allSubcategory, setAllSubcategory] = usePersistState("allCategory", []);
    //categories,subcategories,products
    const [refreshData, setRefreshData] = usePersistState("refreshData", [true, true, true]);

    useEffect(() => {
        setHistory(router.asPath)
    }, [router.asPath])

    return <AppContext.Provider
        value={{
            state: {
                history,
                auth: auth,
                allCategory: allCategory,
                allProducts: allProducts,
                allSubcategory: allSubcategory,
                refreshData: refreshData
            },
            setHistory,
            setAuth: setAuth,
            setAllCategory: setAllCategory,
            setAllProducts: setAllProducts,
            setAllSubcategory: setAllSubcategory,
            setRefreshData: setRefreshData
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
