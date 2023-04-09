import ContainerWrapper from "../components/Dashboard/ContainerWrapper";
import withLayout from "../components/hocs/Layout";
import SubcategoryList from "../components/Category/SubcategoryList";

const SubCategoryListContainer = () => {
    return (
        <ContainerWrapper title="View Subcategory" crumbName="Subcategory" >
            <SubcategoryList />
        </ContainerWrapper>
    );
};

export default withLayout(SubCategoryListContainer);
