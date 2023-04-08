import ContainerWrapper from "../components/Dashboard/ContainerWrapper";
import withLayout from "../components/hocs/Layout";
import { wrapper } from '../store/store';
import { fetchAllProducts } from '../store/categorySlice';
import ProductList from "../components/Product/ProductList";

const ProductListPage = () => {
    return (
        <ContainerWrapper >
            <ProductList />
        </ContainerWrapper>
    );
}

export const getServerSideProps = wrapper.getServerSideProps(
    (store) =>
        async ({ req, res }) => {
            console.log("asdasdasd")
            await store.dispatch(fetchAllProducts());
        });

export default withLayout(ProductListPage);
