import AppContext from "../AppContext";
import ContainerWrapper from "../components/Dashboard/ContainerWrapper";
import withLayout from "../components/hocs/Layout";
import ProductList from "../components/Product/ProductList";
import { useContext, useEffect } from 'react';
import { getAllProducts } from "../services/adminApi";

const ProductListPage = () => {
    const context = useContext(AppContext);
    const { setAllProducts } = context;


    const handleGetAllProducts = async () => {
        console.log('Fetching all Products')
        const response = await getAllProducts();
        if (response.data) {
            setAllProducts(response.data.data);
        }
    }

    useEffect(() => {
        handleGetAllProducts();
    }, []);

    return (
        <ContainerWrapper title="View Product" crumbName="Product" >
            <ProductList />
        </ContainerWrapper>
    );
}


export default withLayout(ProductListPage);
