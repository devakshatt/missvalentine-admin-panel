import AppContext from "../AppContext";
import ContainerWrapper from "../components/Dashboard/ContainerWrapper";
import withLayout from "../components/hocs/Layout";
import { useContext, useEffect } from 'react';
import CategoryList from "../components/Category/CategoryList";

const categoryList = () => {
    const context = useContext(AppContext);
    const { setRefreshData } = context;

    useEffect(() => {
        setRefreshData([true, false, false]);
    }, []);

    return (
        <ContainerWrapper title="View Category" crumbName="Category" >
            <CategoryList />
        </ContainerWrapper>
    );
};

export default withLayout(categoryList);
