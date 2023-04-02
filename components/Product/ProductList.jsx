import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllProducts } from '../../store/categorySlice';

function ProductList(props) {
    const allProductsState = useSelector(selectAllProducts);
    console.log("Prod", allProductsState);
    return (
        <div className="row">
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
                                    {allProductsState.map((product) => <tr>
                                        <td>
                                            <img
                                                className="tbl-thumb"
                                                src={product.images[0].data}
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
                                                    Info
                                                </button>
                                                <button
                                                    type="button"
                                                    className="btn btn-outline-success dropdown-toggle dropdown-toggle-split"
                                                    data-bs-toggle="dropdown"
                                                    aria-haspopup="true"
                                                    aria-expanded="false"
                                                    data-display="static"
                                                >
                                                    <span className="sr-only">Info</span>
                                                </button>
                                                <div className="dropdown-menu">
                                                    <a className="dropdown-item" href="#">
                                                        Edit
                                                    </a>
                                                    <a className="dropdown-item" href="#">
                                                        Delete
                                                    </a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>)}


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