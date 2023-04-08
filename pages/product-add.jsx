import AppContext from "../AppContext";
import ContainerWrapper from "../components/Dashboard/ContainerWrapper";
import withLayout from "../components/hocs/Layout";
import AddProductContainer from "../components/Product/ProductAddForm";
import { useContext, useEffect } from 'react';
import { getAllCategories } from "../services/adminApi";

const ProductAdd = () => {
    const context = useContext(AppContext);
    const { setAllCategory } = context;

    const handleGetAllCategory = async () => {
        console.log('Fetching all categories')
        const response = await getAllCategories();
        if (response.data && response.data.success) {
            setAllCategory(response.data.data);
        }
    }

    useEffect(() => {
        handleGetAllCategory();
    }, []);

    return (
        <ContainerWrapper >
            <AddProductContainer />
        </ContainerWrapper>
    );
}

export default withLayout(ProductAdd);
