import { callApi } from '../utils/callApi';

const _id = '601bef27d29ac85814619ba3';

export const getAllCategories = () =>
    callApi({
        method: 'get',
        url: `/category/all`,
    });

export const getAllProducts = () =>
    callApi({
        method: 'get',
        url: `/product/all`,
    });

export const getAllSubcategories = () =>
    callApi({
        method: 'get',
        url: `/subcategory/all`,
    });

//get one ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export const getCategory = (id) =>
    callApi({
        method: 'get',
        url: `/category/${id}`,
    });

export const getProduct = (id) =>
    callApi({
        method: 'get',
        url: `/product/${id}`,
    });
export const getSubcategory = (id) =>
    callApi({
        method: 'get',
        url: `/subcategory/${id}`,
    });

//create ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export const createCategory = (data) =>
    callApi({
        method: 'post',
        url: `/category/create/${_id}`,
        data,
    });

export const createProduct = (data) =>
    callApi({
        method: 'post',
        url: `/product/create/${_id}`,
        data,
        options: {
            headers: {
                'Content-Type': 'multipart/form-data; boundary=something',
            },
        },
    });
export const createSubcategory = (data) =>
    callApi({
        method: 'post',
        url: `/subcategory/create/${_id}`,
        data,
    });

//Delete  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
export const deleteCategory = (pid) =>
    callApi({
        method: 'DELETE',
        url: `/category/${pid}/${_id}`,
    });
export const deleteProduct = (pid) =>
    callApi({
        method: 'delete',
        url: `/product/${pid}/${_id}`,
    });
export const deleteSubcategory = (pid) =>
    callApi({
        method: 'delete',
        url: `/subcategory/${pid}/${_id}`,
    });

//edit ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export const updateCategory = (data, cid) =>
    callApi({
        method: 'put',
        url: `/category/${cid}/${_id}`,
        data,
    });

export const updateSubCategory = (data, cid) =>
    callApi({
        method: 'put',
        url: `/subcategory/${cid}/${_id}`,
        data,
    });
