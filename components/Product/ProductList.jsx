import Modal from 'react-modal';
import { toast } from 'react-toastify';
import { deleteProduct } from '../../services/adminApi';
import AppContext from '../../AppContext';
import { useContext, useState } from 'react';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: 600
    },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
// Modal.setAppElement('#root');
// Modal.setAppElement(document.getElementById('root'));


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

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        // subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }

    const handleDelete = (_id) => {
        try {
            deleteProduct(_id).then(({ data }) => {
                if (data.success) {
                    toast.success(data.message)
                } else
                    toast.error(data.message);
                closeModal()
            });
        } catch (e) {
            toast.error("Something went wrong");
        }

    }
    return (
        <div className="row">
            <Modal
                // appElement={document.getElementById('app')}

                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Delete Product"
            >
                {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2> */}
                <div className='row mb-2'>
                    <h6 className='col-10'>Delete Product</h6>
                    <button className='col-2 btn btn-danger' onClick={closeModal}>X</button>
                </div>
                <div>Are you sure? You want to delete {selectedProduct.name}</div>
                <div className='row mt-5 justify-content-center'>
                    <button className='col-4 btn btn-primary mx-3' onClick={() => handleDelete(selectedProduct._id)}>Sure</button>
                    <button className='col-4 btn btn-secondary mx-3' onClick={closeModal}>Cancel</button>
                </div>
            </Modal>
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
                                    {allProducts && allProducts.length ? allProducts?.map((product) => <tr key={`productlist-${product.name}${product.createdAt}`}>
                                        <td>
                                            <img
                                                className="tbl-thumb"
                                                src={product?.images[0]?.data}
                                                alt="Product Image"
                                            />
                                        </td>
                                        <td>{product.name.toUpperCase()}<br />{[product.slug]}<br />{product.category.name}</td>
                                        <td>{product.price || "-"}</td>
                                        <td>0/{product.inStock}</td>
                                        <td>{product.hidden ? "Disabled" : "ACTIVE"}</td>
                                        <td>{new Date(product.createdAt).toDateString()}</td>
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