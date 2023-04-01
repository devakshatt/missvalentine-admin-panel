import ContainerWrapper from "../components/Dashboard/ContainerWrapper";
import withLayout from "../components/hocs/Layout";
import AddProductContainer from "../components/Product/ProductAddForm";
import { getAllCategories } from "../services/adminApi";

const ProductAdd = () => {
    return (
        <ContainerWrapper >
            <AddProductContainer />
        </ContainerWrapper>
    );
}



const getAllCategoriesAndSave = async () => {
    const response = await getAllCategories();
    console.log("call")
    if (response) {
        console.log(response);
    }
    // if (response) {
    //     getProduct(pid).then(({ data }) => {
    //         let editData = data.data;
    //         let cate = response.data.data.filter((c) => c._id === editData.category._id);
    //         console.log(cate, response.data.data, editData.category._id);
    //         setSubCategories(cate.length > 0 ? cate[0].subcategories : []);

    //         editData.subCategories = editData.subCategories.map((sc) => sc._id);
    //         editData.category = editData.category._id;
    //         editData.price = editData.price || '';
    //         setInputData(editData);
    //     });
    //     //
    // }
};

export async function getStaticProps(ctx) {
    console.log("serverside")
    getAllCategoriesAndSave();

    return {
        props: {
            data: null
        }
    }
}

export default withLayout(ProductAdd);
