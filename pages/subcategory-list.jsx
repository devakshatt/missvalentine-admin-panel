import ContainerWrapper from "../components/Dashboard/ContainerWrapper";
import withLayout from "../components/hocs/Layout";
import SubcategoryList from "../components/Category/SubcategoryList";
import AppContext from "../AppContext";
import { useContext, useEffect } from 'react';

const SubCategoryListContainer = () => {
    const context = useContext(AppContext);
    const { setRefreshData } = context;

    useEffect(() => {
        setRefreshData([false, true, false]);
    }, []);
    return (
        <ContainerWrapper title="View Subcategory" crumbName="Subcategory" >
            <SubcategoryList />
        </ContainerWrapper>
    );
};

export default withLayout(SubCategoryListContainer);
