import React, { useState } from 'react';
import { createCategory, updateCategory } from '../../services/adminApi';
import { toast } from 'react-toastify';

const CategoryAddForm = () => {
    const [selectedId, setSelectedId] = useState(null);
    const [selectedName, setSelectedName] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();

        if (selectedId) {
            updateCategory(
                {
                    name: selectedName,
                },
                selectedId
            )
                .then(({ data }) => {
                    if (data && data.success) {
                        toast.success(data.message);
                        // Router.push('/admin/category');
                    } else {
                        toast.error(data.message);
                    }
                    setSelectedId(null)
                    setSelectedName("");
                })
                .catch((err) =>
                    toast.error('Something went wrong')
                )
        } else {
            createCategory({
                name: selectedName,
            })
                .then(({ data }) => {
                    if (data && data.success) {
                        toast.success(data.message);
                        // Router.push('/admin/category');
                    } else {
                        toast.error(data.message);
                    }
                    setSelectedName("");
                    setSelectedId(null)
                })
                .catch((err) =>
                    toast.error('Something went wrong')
                )
        }


    };
    return (
        <div className="ec-cat-list card card-default mb-24px">
            <div className="card-body">
                <div className="ec-cat-form">
                    <h4>Add New Category</h4>
                    <form>
                        <div className="form-group row">
                            <label htmlFor="text" className="col-12 col-form-label">
                                Name
                            </label>
                            <div className="col-12">
                                <input
                                    id="text"
                                    name="text"
                                    className="form-control here slug-title"
                                    type="text"
                                    value={selectedName}
                                    placeholder="Enter category name"
                                    onChange={(event) => setSelectedName(event.target.value)}
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="slug" className="col-12 col-form-label disabled">
                                Slug
                            </label>
                            <div className="col-12">
                                <input
                                    disabled
                                    id="slug"
                                    name="slug"
                                    className="form-control here set-slug"
                                    type="text"
                                    placeholder="This will be automatically generated."
                                />
                                <small>
                                    The “slug” is the URL-friendly version of the name. It is
                                    usually all lowercase and contains only letters, numbers,
                                    and hyphens.
                                </small>
                            </div>
                        </div>
                        {/* <div className="form-group row">
                            <label className="col-12 col-form-label">
                                Sort Description
                            </label>
                            <div className="col-12">
                                <textarea
                                    id="sortdescription"
                                    name="sortdescription"
                                    cols={40}
                                    rows={2}
                                    className="form-control"
                                    defaultValue={""}
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-12 col-form-label">
                                Full Description
                            </label>
                            <div className="col-12">
                                <textarea
                                    id="fulldescription"
                                    name="fulldescription"
                                    cols={40}
                                    rows={4}
                                    className="form-control"
                                    defaultValue={""}
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-12 col-form-label">
                                Product Tags{" "}
                                <span>( Type and make comma to separate tags )</span>
                            </label>
                            <div className="col-12">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="group_tag"
                                    name="group_tag"
                                    defaultValue=""
                                    placeholder=""
                                    data-role="tagsinput"
                                />
                            </div>
                        </div> */}
                        <div className="row">
                            <div className="col-12">
                                <button
                                    name="submit"
                                    type="submit"
                                    className="btn btn-primary"
                                    onClick={handleSubmit}
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CategoryAddForm;