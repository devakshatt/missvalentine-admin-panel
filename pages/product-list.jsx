import ContainerWrapper from "../components/Dashboard/ContainerWrapper";
import withLayout from "../components/hocs/Layout";
import ProductList from "../components/Product/ProductList";

const ProductListPage = () => {
    return (
        <ContainerWrapper title="View Product" crumbName="Product" >
            <ProductList />
        </ContainerWrapper>
    );
}


export default withLayout(ProductListPage);
