import AppContext from "../AppContext";
import ContainerWrapper from "../components/Dashboard/ContainerWrapper";
import withLayout from "../components/hocs/Layout";
import { useContext, useEffect } from 'react';
import { getAllCategories } from "../services/adminApi";
import CategoryList from "../components/Category/CategoryList";
import CategoryAddForm from "../components/Category/CategoryAdd";

const categoryAdd = () => {
    // const context = useContext(AppContext);
    // const { setAllProducts } = context;

    // // const handleGetAllCategory = async () => {
    // //     console.log('Fetching all categories')
    // //     const response = await getAllCategories();
    // //     if (response.data) {
    // //         setAllProducts(response.data.data);
    // //     }
    // // }

    // useEffect(() => {
    //     handleGetAllCategory();
    // }, []);

    return (
        <ContainerWrapper >
            <CategoryAddForm />
        </ContainerWrapper>
    );
};

export default withLayout(categoryAdd);
