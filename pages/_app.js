import { wrapper } from "../store/store";
import { ToastContainer } from 'react-toastify';
import Head from 'next/head'
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.css'
import "../styles/main.scss";


function MyApp({ Component, ...rest }) {
    const { store, props } = wrapper.useWrappedStore(rest);
    const { pageProps } = props;
    const persistor = persistStore(store);

    return <Provider store={store}>
        <PersistGate persistor={persistor}>

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
        </PersistGate>

        <Component {...pageProps} />
    </Provider>
}

export default MyApp;
