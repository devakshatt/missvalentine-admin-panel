import React from 'react';
import AppContext from '../../AppContext';
import { useContext, useState } from 'react';
import ConfirmationModal from '../ConfirmationModal';
import { toast } from 'react-toastify';
import { deleteCategory, deleteSubcategory } from '../../services/adminApi';
import { useRouter } from 'next/router';
import chroma from 'chroma-js';

const SubcategoryList = () => {
    const router = useRouter()
    const context = useContext(AppContext);
    const { state, setRefreshData } = context;
    const { allSubcategory } = state;

    const [isOpen, setIsOpen] = useState(false);
    const [selectedSubcategory, setSelectedSubcategory] = useState({});

    const handleOpenDeleteModal = (_cate) => {
        setIsOpen(true);
        setSelectedSubcategory(_cate)
    }

    const handleDeleteSubcategory = () => {
        const id = selectedSubcategory._id;
        try {
            deleteSubcategory(id).then(({ data }) => {
                if (data && data.success) {
                    toast.success(data.message)
                    setRefreshData([false, true, false])
                } else
                    toast.error(data.message);

                setIsOpen(false)
            });
        } catch (e) {
            toast.error("Something went wrong");
        }
    }

    let categoryColorForTag = {}
    allSubcategory.forEach(subcategory => {
        categoryColorForTag[subcategory?.category?._id] = chroma.random()
    })

    return (
        <div className="ec-cat-list card card-default">
            <ConfirmationModal
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                heading={"Delete Category"}
                content={`Are you sure? You want to delete sub category: ${selectedSubcategory?.name}`}
                handleOk={() => handleDeleteSubcategory()}
            />
            <div className="card-body">
                <div className="table-responsive">
                    <table id="responsive-data-table" className="table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Main Category</th>
                                <th>Total Product</th>
                                <th>Total Sell</th>
                                <th>Status</th>
                                <th>Trending</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allSubcategory && allSubcategory.length ? allSubcategory?.map((_subcategory) => <tr
                                key={_subcategory._id}
                            >
                                <td>{_subcategory?.name}</td>
                                <td>
                                    <span className="ec-sub-cat-list">
                                        <span
                                            className="ec-sub-cat-count"
                                            title="Total Sub Categories"
                                            style={{
                                                backgroundColor: categoryColorForTag[_subcategory?.category?._id] || chroma.random()
                                            }}
                                        >
                                            {_subcategory?.category?.name}
                                        </span>
                                    </span>
                                </td>
                                <td>{_subcategory.products.length}</td>
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
                                            onClick={() => router.push(`/subcategory-add?subcategoryId=${_subcategory._id}`)}
                                        >
                                            Edit
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-outline-success"
                                            onClick={() => handleOpenDeleteModal(_subcategory)}
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

export default SubcategoryList;