import AppContext from "../AppContext";
import ContainerWrapper from "../components/Dashboard/ContainerWrapper";
import withLayout from "../components/hocs/Layout";
import { useContext, useEffect } from 'react';
import { getAllSubcategories } from "../services/adminApi";
import SubcategoryList from "../components/Category/SubcategoryList";

const SubCategoryListContainer = () => {
    const context = useContext(AppContext);
    const { setAllSubcategory } = context;

    const handleGetAllSubcategory = async () => {
        console.log('Fetching all subcategories')
        const response = await getAllSubcategories();
        if (response.data && response.data.success) {
            console.log('Fetched all subcategories', response.data)
            setAllSubcategory(response.data.data);
        }
    }

    useEffect(() => {
        handleGetAllSubcategory();
    }, []);

    return (
        <ContainerWrapper title="View Subcategory" crumbName="Subcategory" >
            <SubcategoryList />
        </ContainerWrapper>
    );
};

export default withLayout(SubCategoryListContainer);
