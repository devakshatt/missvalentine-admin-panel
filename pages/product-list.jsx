import AppContext from "../AppContext";
import ContainerWrapper from "../components/Dashboard/ContainerWrapper";
import withLayout from "../components/hocs/Layout";
import ProductList from "../components/Product/ProductList";
import { useContext, useEffect } from 'react';

const ProductListPage = () => {
    const context = useContext(AppContext);
    const { setRefreshData } = context;

    useEffect(() => {
        setRefreshData([false, false, true]);
    }, []);

    return (
        <ContainerWrapper title="View Product" crumbName="Product" >
            <ProductList />
        </ContainerWrapper>
    );
}


export default withLayout(ProductListPage);
