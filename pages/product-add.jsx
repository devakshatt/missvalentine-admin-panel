import ContainerWrapper from "../components/Dashboard/ContainerWrapper";
import withLayout from "../components/hocs/Layout";
import AddProductContainer from "../components/Product/ProductAddForm";

const ProductAdd = () => {
    return (
        <ContainerWrapper title="Add Product" crumbName="Product" >
            <AddProductContainer />
        </ContainerWrapper>
    );
}

export default withLayout(ProductAdd);
