import Image from 'next/image'
import { useState } from 'react';
import Select from 'react-select';
import { selectAllCategory, setAllSubcategory } from "../../store/categorySlice";
import { useDispatch, useSelector } from "react-redux";
import { allColours } from '../../utils/helperFunctions';
import ColorSelector from './ColorSelector';

const AddProductContainer = () => {
    const dispatch = useDispatch();
    //data
    const allCategoryState = useSelector(selectAllCategory);

    //states
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedSubcategory, setSelectedSubcategory] = useState("");


    const [fileList, setFileList] = useState([]);
    const [categories, setCategories] = useState([]);
    const [subCategories, setSubCategories] = useState([]);

    console.log('Testing', allCategoryState)
    console.log('Testing2', selectedCategory, allCategoryState.find((cate) => cate._id == selectedCategory))

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value)
    }
    const handleSubcategoryChange = (event) => {
        setSelectedSubcategory(event.target.value)
    }
    const handleSubmit = (e) => {
        console.log('Testing selectedCategory', selectedCategory)
    }
    return (
        <div className="row">
            <div className="col-12">
                <div className="card card-default">
                    <div className="card-header card-header-border-bottom">
                        <h2>Add Product</h2>
                    </div>
                    <div className="card-body">
                        <div className="row ec-vendor-uploads">
                            <div className="col-lg-4">
                                <div className="ec-vendor-img-upload">
                                    <div className="ec-vendor-main-img">
                                        <div className="avatar-upload">
                                            <div className="avatar-edit">
                                                <input
                                                    type="file"
                                                    id="imageUpload"
                                                    className="ec-image-upload"
                                                    accept=".png, .jpg, .jpeg"
                                                />
                                                <label htmlFor="imageUpload">
                                                    <Image
                                                        src="/images/icons/edit.svg"
                                                        width={18}
                                                        height={18}
                                                        className="svg_img header_svg"
                                                        alt="edit"
                                                    />
                                                </label>
                                            </div>
                                            <div className="avatar-preview ec-preview">
                                                <div className="imagePreview ec-div-preview">
                                                    <img
                                                        className="ec-image-preview"
                                                        src="/images/products/vender-upload-preview.jpg"
                                                        alt="edit"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="thumb-upload-set colo-md-12">
                                            <div className="thumb-upload">
                                                <div className="thumb-edit">
                                                    <input
                                                        type="file"
                                                        id="thumbUpload01"
                                                        className="ec-image-upload"
                                                        accept=".png, .jpg, .jpeg"
                                                    />
                                                    <label htmlFor="imageUpload">
                                                        <Image
                                                            src="/images/icons/edit.svg"
                                                            width={18}
                                                            height={18}
                                                            className="svg_img header_svg"
                                                            alt="edit"
                                                        />
                                                    </label>
                                                </div>
                                                <div className="thumb-preview ec-preview">
                                                    <div className="image-thumb-preview">
                                                        <img
                                                            className="image-thumb-preview ec-image-preview"
                                                            src="/images/products/vender-upload-thumb-preview.jpg"
                                                            alt="edit"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="thumb-upload">
                                                <div className="thumb-edit">
                                                    <input
                                                        type="file"
                                                        id="thumbUpload02"
                                                        className="ec-image-upload"
                                                        accept=".png, .jpg, .jpeg"
                                                    />
                                                    <label htmlFor="imageUpload">
                                                        <Image
                                                            src="/images/icons/edit.svg"
                                                            width={18}
                                                            height={18}
                                                            className="svg_img header_svg"
                                                            alt="edit"
                                                        />
                                                    </label>
                                                </div>
                                                <div className="thumb-preview ec-preview">
                                                    <div className="image-thumb-preview">
                                                        <img
                                                            className="image-thumb-preview ec-image-preview"
                                                            src="/images/products/vender-upload-thumb-preview.jpg"
                                                            alt="edit"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="thumb-upload">
                                                <div className="thumb-edit">
                                                    <input
                                                        type="file"
                                                        id="thumbUpload03"
                                                        className="ec-image-upload"
                                                        accept=".png, .jpg, .jpeg"
                                                    />
                                                    <label htmlFor="imageUpload">
                                                        <Image
                                                            src="/images/icons/edit.svg"
                                                            width={18}
                                                            height={18}
                                                            className="svg_img header_svg"
                                                            alt="edit"
                                                        />
                                                    </label>
                                                </div>
                                                <div className="thumb-preview ec-preview">
                                                    <div className="image-thumb-preview">
                                                        <img
                                                            className="image-thumb-preview ec-image-preview"
                                                            src="/images/products/vender-upload-thumb-preview.jpg"
                                                            alt="edit"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="thumb-upload">
                                                <div className="thumb-edit">
                                                    <input
                                                        type="file"
                                                        id="thumbUpload04"
                                                        className="ec-image-upload"
                                                        accept=".png, .jpg, .jpeg"
                                                    />
                                                    <label htmlFor="imageUpload">
                                                        <Image
                                                            src="/images/icons/edit.svg"
                                                            width={18}
                                                            height={18}
                                                            className="svg_img header_svg"
                                                            alt="edit"
                                                        />
                                                    </label>
                                                </div>
                                                <div className="thumb-preview ec-preview">
                                                    <div className="image-thumb-preview">
                                                        <img
                                                            className="image-thumb-preview ec-image-preview"
                                                            src="/images/products/vender-upload-thumb-preview.jpg"
                                                            alt="edit"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="thumb-upload">
                                                <div className="thumb-edit">
                                                    <input
                                                        type="file"
                                                        id="thumbUpload05"
                                                        className="ec-image-upload"
                                                        accept=".png, .jpg, .jpeg"
                                                    />
                                                    <label htmlFor="imageUpload">
                                                        <Image
                                                            src="/images/icons/edit.svg"
                                                            width={18}
                                                            height={18}
                                                            className="svg_img header_svg"
                                                            alt="edit"
                                                        />
                                                    </label>
                                                </div>
                                                <div className="thumb-preview ec-preview">
                                                    <div className="image-thumb-preview">
                                                        <img
                                                            className="image-thumb-preview ec-image-preview"
                                                            src="/images/products/vender-upload-thumb-preview.jpg"
                                                            alt="edit"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="thumb-upload">
                                                <div className="thumb-edit">
                                                    <input
                                                        type="file"
                                                        id="thumbUpload06"
                                                        className="ec-image-upload"
                                                        accept=".png, .jpg, .jpeg"
                                                    />
                                                    <label htmlFor="imageUpload">
                                                        <Image
                                                            src="/images/icons/edit.svg"
                                                            width={18}
                                                            height={18}
                                                            className="svg_img header_svg"
                                                            alt="edit"
                                                        />
                                                    </label>
                                                </div>
                                                <div className="thumb-preview ec-preview">
                                                    <div className="image-thumb-preview">
                                                        <img
                                                            className="image-thumb-preview ec-image-preview"
                                                            src="/images/products/vender-upload-thumb-preview.jpg"
                                                            alt="edit"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="ec-vendor-upload-detail">
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <label htmlFor="productname" className="form-label">
                                                Product name (optional)
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control slug-title"
                                                id="productname"
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="slug" className="form-label">
                                                Slug
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control slug-title"
                                                id="slug"
                                                name="slug" />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label">
                                                Select Category
                                            </label>
                                            <select
                                                name="categories"
                                                id="Categories"
                                                className="form-select"
                                                onChange={handleCategoryChange}
                                                value={selectedCategory}
                                            >
                                                <option
                                                    value=""
                                                    disabled
                                                >
                                                    Please Select Category
                                                </option>
                                                {allCategoryState?.map((cate, index) => (
                                                    <option
                                                        key={index}
                                                        value={cate._id}
                                                        name={cate.name}
                                                    >
                                                        {cate.name}
                                                    </option>
                                                ))}

                                            </select>

                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label">
                                                Select SubCategory (optional)
                                            </label>
                                            <select
                                                name="categories"
                                                id="Categories"
                                                className="form-select"
                                                onChange={handleSubcategoryChange}
                                                value={selectedSubcategory}
                                            >
                                                <option
                                                    value=""
                                                    disabled
                                                >
                                                    Please Select Category First
                                                </option>
                                                {selectedCategory && allCategoryState.find((cate) => cate._id == selectedCategory).subcategories?.map((cate, index) => (
                                                    <option
                                                        key={`select sub category ${index}`}
                                                        value={cate._id}
                                                        name={cate.name}
                                                    // onClick={() => handleCategoryChange(cate)}
                                                    >
                                                        {cate.name}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>

                                        <div className="col-md-4 mb-25">

                                            <label className="form-label">Colors</label>
                                            <ColorSelector />
                                        </div>
                                        <div className="col-md-8 mb-25">
                                            <label className="form-label">Size</label>
                                            <div className="form-checkbox-box">
                                                <div className="form-check form-check-inline">
                                                    <input
                                                        type="checkbox"
                                                        name="size1"
                                                        defaultValue="size"
                                                    />
                                                    <label>S</label>
                                                </div>
                                                <div className="form-check form-check-inline">
                                                    <input
                                                        type="checkbox"
                                                        name="size1"
                                                        defaultValue="size"
                                                    />
                                                    <label>M</label>
                                                </div>
                                                <div className="form-check form-check-inline">
                                                    <input
                                                        type="checkbox"
                                                        name="size1"
                                                        defaultValue="size"
                                                    />
                                                    <label>L</label>
                                                </div>
                                                <div className="form-check form-check-inline">
                                                    <input
                                                        type="checkbox"
                                                        name="size1"
                                                        defaultValue="size"
                                                    />
                                                    <label>XL</label>
                                                </div>
                                                <div className="form-check form-check-inline">
                                                    <input
                                                        type="checkbox"
                                                        name="size1"
                                                        defaultValue="size"
                                                    />
                                                    <label>XXL</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label">
                                                Price <span>( In INR )</span>
                                            </label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                id="price1"
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label">Quantity</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                id="quantity1"
                                            />
                                        </div>
                                        <div className="col-md-12">
                                            <label className="form-label">
                                                Sort Description (optional)
                                            </label>
                                            <textarea
                                                className="form-control"
                                                rows={2}
                                                defaultValue={""}
                                            />
                                        </div>
                                        <div className="col-md-12">
                                            <label className="form-label">Full Detail (optional)</label>
                                            <textarea
                                                className="form-control"
                                                rows={4}
                                                defaultValue={""}
                                            />
                                        </div>
                                        {/* <div className="col-md-12">
                                            <label className="form-label">
                                                Product Tags{" "}
                                                <span>
                                                    ( Type and make comma to separate tags )
                                                </span>
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="group_tag"
                                                name="group_tag"
                                                defaultValue=""
                                                placeholder=""
                                                data-role="tagsinput"
                                            />
                                        </div> */}
                                        <div className="col-md-12">
                                            <button onClick={handleSubmit} type="submit" className="btn btn-primary">
                                                Submit
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default AddProductContainer;
