import ContainerWrapper from "../components/Dashboard/ContainerWrapper";
import withLayout from "../components/hocs/Layout";
import AddProductContainer from "../components/Product/ProductAddForm";
import { wrapper } from '../store/store';
import { fetchAllCategory } from '../store/categorySlice';

const ProductAdd = () => {
    return (
        <ContainerWrapper >
            <AddProductContainer />
        </ContainerWrapper>
    );
}

export const getServerSideProps = wrapper.getServerSideProps(
    (store) =>
        async ({ req, res }) => {
            await store.dispatch(fetchAllCategory());
        });

export default withLayout(ProductAdd);
