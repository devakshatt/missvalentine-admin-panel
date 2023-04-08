import Image from 'next/image'
import { useState } from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { sizeoptions } from '../../utils/helperFunctions';
import ColorSelector from './ColorSelector';
import { createProduct } from '../../services/adminApi';
import { toast } from 'react-toastify';
import { useContext, useEffect } from 'react';
import AppContext from '../../AppContext';


const animatedComponents = makeAnimated();

const AddProductContainer = () => {

    //data
    const context = useContext(AppContext);
    const { allCategory } = context.state;

    //states
    const [selectedId, setSelectedId] = useState("");
    const [selectedName, setSelectedName] = useState("");
    const [selectedSlug, setSelectedSug] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedSubcategory, setSelectedSubcategory] = useState([]);
    const [selectedColors, setSelectedColors] = useState([]);
    const [selectedSizes, setSelectedSizes] = useState([]);
    const [selectedPrice, setSelectedPrice] = useState(100);
    const [selectedQty, setSelectedQty] = useState(1);
    const [selectedShortDescription, setSelectedShortDescription] = useState("");
    const [selectedDescription, setSelectedDescription] = useState("");
    const [selectedProductHidden, setSelectedProductHidden] = useState(false);


    const [selectedImageList, setSelectedImageList] = useState({});
    const [selectedImageListUrl, setSelectedImageListUrl] = useState({});

    const handleImagesChange = (event) => {
        const index = event.target.name;
        const imagesList = { ...selectedImageList };
        imagesList[`image${index}`] = event.target.files[0];
        setSelectedImageList(imagesList);

        if (event.target.files[0]) {
            const imagesListUrl = { ...selectedImageListUrl };
            imagesListUrl[`image${index}`] = URL.createObjectURL(event.target.files[0]);
            setSelectedImageListUrl(imagesListUrl)
        }
    };

    const handleImageRemove = (index) => {
        const imagesList = { ...selectedImageList };
        delete imagesList[`image${index}`];
        setSelectedImageList(imagesList);

        const imagesListUrl = { ...selectedImageListUrl };
        delete imagesListUrl[`image${index}`];
        setSelectedImageListUrl(imagesListUrl)

    }

    const toggleProductHidden = () => {
        setSelectedProductHidden(!selectedProductHidden)
    }
    const handleCategoryChange = (newvalue) => {
        setSelectedCategory(newvalue)
        setSelectedSubcategory([])
    }
    const handleSubcategoryChange = (newvalue) => {
        setSelectedSubcategory(newvalue)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Testing On submit', selectedImageList, selectedId, selectedProductHidden,
            selectedName, selectedCategory, selectedSubcategory, selectedColors, selectedSizes)
        let formData = new FormData();
        formData.append('name', selectedName);
        formData.append('shortDesc', selectedShortDescription);
        formData.append('description', selectedDescription);
        formData.append('category', selectedCategory.value);
        formData.append('price', selectedPrice);
        formData.append('hidden', selectedProductHidden);
        formData.append('sizes', JSON.stringify(selectedSizes.map(item => item.value)));
        formData.append('colors', JSON.stringify(selectedColors.map(item => item.value)));
        formData.append('subCategories', JSON.stringify(selectedSubcategory.map(item => item.value)));

        console.log(formData);
        // if (pid) {
        //     formData.append('isEdit', true);
        //     for (var i in inputData.images) {
        //         formData.append('oldImages', JSON.stringify(inputData.images[i]));
        //     }
        // }

        //for Images
        const fileListAsArray = Array.from(Object.values(selectedImageList));
        for (let i in fileListAsArray) {
            console.log("fileImage", fileListAsArray[i]);
            formData.append('images', fileListAsArray[i]);
        }

        createProduct(formData)
            .then(({ data }) => {
                if (data && data.success) {
                    toast.success(data.message)
                    // if (pid) {
                    //     deleteProduct(pid).then(({ data }) => {
                    //         notification.success({ message: 'Product Updated Successfully' });
                    //         Router.push('/admin/product');
                    //     });
                } else {
                    toast.error(data.message)
                }
            })
            .catch((err) =>
                toast.error('something went wrong')
            );
    };

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
                                                    name={0}
                                                    onChange={handleImagesChange}
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
                                            <div className="avatar-edit avatar-delete">
                                                <div
                                                    id="imageDelete"
                                                    className="ec-image-upload"
                                                    onClick={() => handleImageRemove(0)}
                                                />
                                                <label htmlFor="imageDelete">
                                                    <Image
                                                        src="/images/icons/delete.svg"
                                                        width={18}
                                                        height={18}
                                                        className="svg_img header_svg"
                                                        alt="edit"
                                                    />
                                                </label>

                                            </div>
                                            <div className="avatar-preview ec-preview">
                                                <div className="imagePreview ec-div-preview">
                                                    {<img
                                                        className="ec-image-preview"
                                                        src={"image0" in selectedImageList ? selectedImageListUrl["image0"] : "/images/products/vender-upload-preview.jpg"}
                                                        alt="edit"
                                                    />}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="thumb-upload-set colo-md-12">
                                            {[1, 2, 3, 4, 5, 6].map((imageIndex, index) => {
                                                return <div className="thumb-upload" key={`imagethumb-${imageIndex}`}>
                                                    <div className="thumb-edit">
                                                        <input
                                                            type="file"
                                                            id="thumbUpload01"
                                                            className="ec-image-upload"
                                                            accept=".png, .jpg, .jpeg"
                                                            name={imageIndex}
                                                            onChange={handleImagesChange}
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
                                                    <div className="thumb-delete">
                                                        <div
                                                            type="file"
                                                            id="thumbUploadDelete"
                                                            className="ec-image-upload"
                                                            accept=".png, .jpg, .jpeg"
                                                            name={imageIndex}
                                                            onClick={() => handleImageRemove(0)}
                                                        />
                                                        <label htmlFor="imageUpload">
                                                            <Image
                                                                src="/images/icons/delete.svg"
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
                                                                src={`image${imageIndex}` in selectedImageList ? selectedImageListUrl[`image${imageIndex}`] : "/images/products/vender-upload-preview.jpg"}
                                                                alt="edit"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            }
                                            )}


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
                                                value={selectedName}
                                                onChange={(e) => setSelectedName(e.target.value)}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="slug" className="form-label">
                                                Slug
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control slug-title disabled"
                                                id="slug"
                                                name="slug"
                                                disabled
                                                placeholder='Slug Will be generated automatically'
                                                value={selectedSlug}
                                                onChange={(e) => setSelectedSug(e.target.value)}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label">
                                                Select Category
                                            </label>
                                            <Select
                                                components={animatedComponents}
                                                defaultValue={[]}
                                                noOptionsMessage={() => "Please select category"}
                                                value={selectedCategory}
                                                onChange={handleCategoryChange}
                                                options={allCategory.map((c) => { return { value: c._id, label: c.name } })}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label">
                                                Select SubCategory (optional)
                                            </label>
                                            {<Select
                                                closeMenuOnSelect={false}
                                                components={animatedComponents}
                                                defaultValue={[]}
                                                isMulti
                                                noOptionsMessage={() => "Please select category first."}
                                                value={selectedSubcategory}
                                                onChange={handleSubcategoryChange}
                                                options={allCategory.find((cate) => cate._id == selectedCategory.value)?.subcategories?.map((c) => { return { value: c._id, label: c.name } })}
                                            />}
                                        </div>

                                        <div className="col-md-6 mb-25">
                                            <label className="form-label">Colors</label>
                                            <ColorSelector defaultValue={[]}
                                                components={animatedComponents}
                                                value={selectedColors}
                                                onChange={setSelectedColors}
                                            />
                                        </div>
                                        <div className="col-md-6 mb-25">
                                            <label className="form-label">Size</label>
                                            <Select
                                                closeMenuOnSelect={false}
                                                components={animatedComponents}
                                                defaultValue={[]}
                                                isMulti
                                                options={sizeoptions}
                                                value={selectedSizes}
                                                onChange={setSelectedSizes}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label">
                                                Price <span>( In INR )</span>
                                            </label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                id="price1"
                                                min={1}
                                                value={selectedPrice}
                                                onChange={(e) => setSelectedPrice(e.target.value)}
                                            />
                                        </div>

                                        <div className="col-md-6">
                                            <label className="form-label">Quantity (In Stock)</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                id="quantity1"
                                                min={1}
                                                value={selectedQty}
                                                onChange={(e) => setSelectedQty(e.target.value)}
                                            />
                                        </div>


                                        <div className="col-md-12">
                                            <label className="form-label">
                                                Sort Description (optional)
                                            </label>
                                            <textarea
                                                className="form-control"
                                                rows={2}
                                                value={selectedShortDescription}
                                                onChange={(e) => setSelectedShortDescription(e.target.value)}
                                                placeholder='write a short description about the product.'
                                            />
                                        </div>
                                        <div className="col-md-12">
                                            <label className="form-label">Full Detail (optional)</label>
                                            <textarea
                                                className="form-control"
                                                rows={4}
                                                value={selectedDescription}
                                                onChange={(e) => setSelectedDescription(e.target.value)}
                                                placeholder='write a full description about the product.'
                                            />
                                        </div>
                                        <div className="col-md-12">
                                            <label className="form-label">Product Status?</label>
                                            <div className="form-checkbox-box">
                                                <div className="form-check form-check-inline">
                                                    <label>Active</label>
                                                    <input type="checkbox" name="active"
                                                        checked={!selectedProductHidden} onChange={toggleProductHidden} />
                                                </div>
                                                <div className="form-check form-check-inline">
                                                    <label>Disabled</label>
                                                    <input type="checkbox" name="disabled"
                                                        checked={selectedProductHidden} onChange={toggleProductHidden} />
                                                </div>
                                            </div>
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
