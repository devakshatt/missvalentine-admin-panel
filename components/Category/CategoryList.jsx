import React from 'react';
import AppContext from '../../AppContext';
import { useContext, useState } from 'react';
import ConfirmationModal from '../ConfirmationModal';
import { toast } from 'react-toastify';
import { deleteCategory } from '../../services/adminApi';

const CategoryList = () => {
    const context = useContext(AppContext);
    const { allCategory } = context.state;

    const [isOpen, setIsOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState({});

    console.log("allcate", allCategory)

    const handleOpenDeleteModal = (_cate) => {
        setIsOpen(true);
        setSelectedCategory(_cate)
    }

    const handleDeleteCategory = () => {
        const id = selectedCategory._id;
        try {
            deleteCategory(id).then(({ data }) => {
                if (data && data.success) {
                    toast.success(data.message)
                } else
                    toast.error(data.message);
                setIsOpen(false)
            });
        } catch (e) {
            toast.error("Something went wrong");
        }
    }
    return (
        <div className="ec-cat-list card card-default">
            <ConfirmationModal
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                heading={"Delete Category"}
                content={`Are you sure? You want to delete category: ${selectedCategory?.name}`}
                handleOk={() => handleDeleteCategory()}
            />
            <div className="card-body">
                <div className="table-responsive">
                    <table id="responsive-data-table" className="table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Sub Categories</th>
                                <th>Total Product</th>
                                <th>Total Sell</th>
                                <th>Status</th>
                                <th>Trending</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allCategory && allCategory.length ? allCategory?.map((_category) => <tr>

                                <td>{_category?.name}</td>
                                <td>
                                    <span className="ec-sub-cat-list">
                                        <span
                                            className="ec-sub-cat-count"
                                            title="Total Sub Categories"
                                        >
                                            {_category?.subcategories?.length}
                                        </span>
                                        {
                                            _category?.subcategories?.map((_subcate) =>
                                                <span className="ec-sub-cat-tag">{_subcate.name}</span>
                                            )
                                        }
                                    </span>
                                </td>
                                <td>{_category.products.length}</td>
                                <td>0</td>
                                <td>ACTIVE</td>
                                <td>
                                    <span className="badge badge-success">Top</span>
                                </td>
                                <td>
                                    <div className="btn-group mb-1">
                                        <button
                                            type="button"
                                            className="btn btn-outline-success"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-outline-success"
                                            onClick={() => handleOpenDeleteModal(_category)}
                                        >Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>) : <tr></tr>}

                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    );
};

export default CategoryList;