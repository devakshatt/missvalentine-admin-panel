import Image from 'next/image'
import { useState } from 'react';
import { selectAllCategory, setAllCategory } from "../../store/categorySlice";
import { useDispatch, useSelector } from "react-redux";
import {
    createProduct,
    getAllCategories,
    getProduct,
    deleteProduct,
} from '../../services/adminApi';
const AddProductContainer = () => {
    const dispatch = useDispatch();
    const [inputData, setInputData] = useState({
        name: '',
        shortDesc: '',
        description: '',
        category: '',
        subCategories: [],
        price: '',
        sizes: [],
        colors: [],
        hidden: false,
        images: [],
        errors: '',
    });
    const [fileList, setFileList] = useState([]);
    const [categories, setCategories] = useState([]);
    const [subCategories, setSubCategories] = useState([]);

    const allCategoryState = useSelector(selectAllCategory);

    console.log(allCategoryState)

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
                                    <form className="row g-3">
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
                                            >
                                                <optgroup label="Fashion">
                                                    <option value="t-shirt">T-shirt</option>
                                                    <option value="dress">Dress</option>
                                                </optgroup>
                                                <optgroup label="Furniture">
                                                    <option value="table">Table</option>
                                                    <option value="sofa">Sofa</option>
                                                </optgroup>
                                                <optgroup label="Electronic">
                                                    <option value="phone">I Phone</option>
                                                    <option value="laptop">Laptop</option>
                                                </optgroup>
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
                                            >
                                                <optgroup label="Fashion">
                                                    <option value="t-shirt">T-shirt</option>
                                                    <option value="dress">Dress</option>
                                                </optgroup>
                                                <optgroup label="Furniture">
                                                    <option value="table">Table</option>
                                                    <option value="sofa">Sofa</option>
                                                </optgroup>
                                                <optgroup label="Electronic">
                                                    <option value="phone">I Phone</option>
                                                    <option value="laptop">Laptop</option>
                                                </optgroup>
                                            </select>
                                        </div>

                                        <div className="col-md-4 mb-25">
                                            <label className="form-label">Colors</label>
                                            <input
                                                type="color"
                                                className="form-control form-control-color"
                                                id="exampleColorInput1"
                                                defaultValue="#ff6191"
                                                title="Choose your color"
                                            />
                                            <input
                                                type="color"
                                                className="form-control form-control-color"
                                                id="exampleColorInput2"
                                                defaultValue="#33317d"
                                                title="Choose your color"
                                            />
                                            <input
                                                type="color"
                                                className="form-control form-control-color"
                                                id="exampleColorInput3"
                                                defaultValue="#56d4b7"
                                                title="Choose your color"
                                            />
                                            <input
                                                type="color"
                                                className="form-control form-control-color"
                                                id="exampleColorInput4"
                                                defaultValue="#009688"
                                                title="Choose your color"
                                            />
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
                                            <button type="submit" className="btn btn-primary">
                                                Submit
                                            </button>
                                        </div>
                                    </form>
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
