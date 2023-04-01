export default function ContainerWrapper(props) {
    return (
        <div className="ec-content-wrapper">
            <div className="content">
                <div className="breadcrumb-wrapper d-flex align-items-center justify-content-between">
                    <div>
                        <h1>Add Product</h1>
                        <p className="breadcrumbs">
                            <span>
                                <a href="index.html">Home</a>
                            </span>
                            <span>
                                <i className="mdi mdi-chevron-right" />
                            </span>
                            Product
                        </p>
                    </div>
                    <div>
                        <a href="product-list.html" className="btn btn-primary">

                            View All
                        </a>
                    </div>
                </div>
                {props.children}
            </div>
        </div>
    );
}

