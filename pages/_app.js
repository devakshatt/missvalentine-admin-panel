import { wrapper } from "../store/store";
import 'bootstrap/dist/css/bootstrap.css'

import "../styles/main.scss";

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
}

export default wrapper.withRedux(MyApp);
