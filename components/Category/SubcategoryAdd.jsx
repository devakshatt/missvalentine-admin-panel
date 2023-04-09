import React, { useState, useContext, useEffect } from 'react';
import { createSubcategory, updateSubCategory } from '../../services/adminApi';
import { toast } from 'react-toastify';
import { useSearchParams } from 'next/navigation';
import AppContext from '../../AppContext';
import { useRouter } from 'next/router';
import Select from 'react-select';

const SubcategoryAddForm = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const context = useContext(AppContext);
    const { allCategory, allSubcategory } = context.state;

    const selectedId = searchParams.get('subcategoryId');
    const [selectedName, setSelectedName] = useState("");
    const [selectedCategory, setSelectedCategory] = useState({});

    useEffect(() => {
        if (selectedId) {
            const subcate = allSubcategory.find((_cate) => _cate._id == selectedId);
            setSelectedName(subcate.name)
            setSelectedCategory({
                value: subcate.category._id,
                label: subcate.category.name
            })
        }
    }, []);

    const handleSubmit = (event) => {
        if (!selectedName) {
            toast.warn("Please select a subcategory name")
            return;
        }
        if (!selectedCategory?.value) {
            toast.warn("Please select parent category")
            return;
        }
        event.preventDefault();
        if (selectedId) {
            updateSubCategory(
                {
                    name: selectedName,
                    category: selectedCategory.value,
                },
                selectedId
            )
                .then(({ data }) => {
                    if (data && data.success) {
                        toast.success(data.message);
                        router.push("/subcategory-list");
                    } else {
                        toast.error(data.message);
                    }
                    setSelectedName("");
                })
                .catch((err) => {
                    console.error(err);
                    toast.error('Something went wrong')
                }
                )
        } else {
            createSubcategory({
                name: selectedName,
                category: selectedCategory.value,
            })
                .then(({ data }) => {
                    if (data && data.success) {
                        toast.success(data.message);
                        router.push("/subcategory-list");
                    } else {
                        toast.error(data.message);
                    }
                    setSelectedName("");
                })
                .catch((err) => {
                    console.error(err);
                    toast.error('Something went wrong')
                }
                )
        }


    };
    return (
        <div className="ec-cat-list card card-default mb-24px">
            <div className="card-body">
                <div className="ec-cat-form">
                    <h4>Add New Sub Category</h4>
                    <div>
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
                                    placeholder="Enter subcategory name"
                                    onChange={(event) => setSelectedName(event.target.value)}
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="text" className="col-12 col-form-label">
                                Parent Category
                            </label>
                            <div className="col-12">
                                <Select
                                    defaultValue={[]}
                                    noOptionsMessage={() => "Please select parent category"}
                                    value={selectedCategory}
                                    onChange={setSelectedCategory}
                                    options={allCategory.map((c) => { return { value: c._id, label: c.name } })}
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
                                    {selectedId ? "Save Changes" : "Create"}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubcategoryAddForm;