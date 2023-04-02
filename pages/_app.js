import { wrapper } from "../store/store";
import { ToastContainer } from 'react-toastify';
import Head from 'next/head'
import { Provider } from "react-redux";

import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.css'
import "../styles/main.scss";

function MyApp({ Component, ...rest }) {
    const { store, props } = wrapper.useWrappedStore(rest);
    const { pageProps } = props;

    return <Provider store={store}>

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
    </Provider>
}

export default MyApp;
