import { useRouter } from "next/router";

export default function ContainerWrapper(props) {
    const router = useRouter();
    const { title = "", crumbName = "" } = props;
    return (
        <div className="ec-content-wrapper">
            <div className="content">
                <div className="breadcrumb-wrapper d-flex align-items-center justify-content-between">
                    <div>
                        <h1>{title}</h1>
                        <p className="breadcrumbs">
                            <span>
                                <button onClick={() => router.push("/dashboard")}>Home</button>
                            </span>
                            <span>
                                <i className="mdi mdi-chevron-right" />
                            </span>
                            {crumbName}
                        </p>
                    </div>
                    <div>
                    </div>
                </div>
                {props.children}
            </div>
        </div>
    );
}

