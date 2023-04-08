import { toast } from 'react-toastify';
import { deleteProduct } from '../../services/adminApi';
import AppContext from '../../AppContext';
import { useContext, useState } from 'react';
import ConfirmationModal from '../ConfirmationModal';

function ProductList(props) {
    const context = useContext(AppContext);
    const { allProducts } = context.state;

    console.log("Prod", allProducts);
    const [selectedProduct, setSelectedProduct] = useState({});
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal(product) {
        setSelectedProduct(product)
        setIsOpen(true);
    }

    const handleDelete = () => {
        const { _id } = selectedProduct;
        try {
            deleteProduct(_id).then(({ data }) => {
                if (data.success) {
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
        <div className="row">
            <ConfirmationModal
                isOpen={modalIsOpen}
                setIsOpen={setIsOpen}
                heading={"Delete Category"}
                content={`Are you sure? You want to delete category: ${selectedProduct?.name}`}
                handleOk={() => handleDelete()}
            />

            <div className="col-12">
                <div className="card card-default">
                    <div className="card-body">
                        <div className="table-responsive">
                            <table
                                id="responsive-data-table"
                                className="table"
                                style={{ width: "100%" }}
                            >
                                <thead>
                                    <tr>
                                        <th>Product</th>
                                        <th>Name/Slug/Category</th>
                                        <th>Price</th>
                                        <th>Sold/InStock</th>
                                        <th>Status</th>
                                        <th>UpdatedAt/CreadedAt</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {allProducts && allProducts.length ? allProducts?.map((product) => <tr key={`productlist-${product?.name}${product?.createdAt}`}>
                                        <td>
                                            <img
                                                className="tbl-thumb"
                                                src={product?.images?.length && product?.images[0]?.data}
                                                alt="Product Image"
                                            />
                                        </td>
                                        <td>{product?.name.toUpperCase()}<br />{[product?.slug]}<br />{product?.category?.name}</td>
                                        <td>{product?.price || "-"}</td>
                                        <td>0/{product?.inStock}</td>
                                        <td>{product?.hidden ? "Disabled" : "ACTIVE"}</td>
                                        <td>{new Date(product?.createdAt).toDateString()}</td>
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
                                                    onClick={() => openModal(product)}>Delete
                                                </button>

                                            </div>
                                        </td>
                                    </tr>) : <tr></tr>}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductList;