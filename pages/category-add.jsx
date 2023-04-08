import ContainerWrapper from "../components/Dashboard/ContainerWrapper";
import withLayout from "../components/hocs/Layout";
import CategoryAddForm from "../components/Category/CategoryAdd";

const categoryAdd = () => {
    return (
        <ContainerWrapper title="Add Category" crumbName="Category" >
            <CategoryAddForm />
        </ContainerWrapper>
    );
};

export default withLayout(categoryAdd);
