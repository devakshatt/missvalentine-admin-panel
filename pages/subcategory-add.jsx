import SubcategoryAddForm from "../components/Category/SubcategoryAdd";
import ContainerWrapper from "../components/Dashboard/ContainerWrapper";
import withLayout from "../components/hocs/Layout";

const SubcategoryAdd = () => {
    return (
        <ContainerWrapper title="Add Subcategory" crumbName="Subcategory" >
            <SubcategoryAddForm />
        </ContainerWrapper>
    );
};

export default withLayout(SubcategoryAdd);
