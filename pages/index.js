import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../services/authApi";
import { setLoginTrue } from "../store/authSlice";
import { useRouter } from 'next/router'

export default function Login() {
    const router = useRouter()

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    const changeHandler = (event) => {
        event.target.name === 'email'
            ? setEmail(event.target.value)
            : setPassword(event.target.value);
    };

    const submitHandler = async () => {
        const { data } = await login(
            email,
            password)
        console.log("Authent pre", data)

        if (data && data.token) {
            console.log("Authent", data)
            dispatch(setLoginTrue({ user: data.user, token: data.token }));
            router.push("/dashboard");
            // notification.success({ message: 'Sign in Successfully' });
            // router.push('/admin/dashboard');
        } else {
            // router.push('/');
        }
        // else notification.error({ message: 'Invalid user or password' });

    };

    return (
        <div className="container d-flex align-items-center justify-content-center form-height-login pt-24px pb-24px">
            <div className="row justify-content-center">
                <div className="col-lg-6 col-md-10">
                    <div className="card">
                        <div className="card-header bg-primary">
                            <div className="ec-brand">
                                <a href="index.html" title="Ekka">
                                    <img className="ec-brand-icon" src="assets/img/logo/logo-login.png" alt="" />
                                </a>
                            </div>
                        </div>
                        <div className="card-body p-5">
                            <h4 className="text-dark mb-5">Sign In</h4>
                            <div className="row">
                                <div className="form-group col-md-12 mb-4">
                                    <input name="email"
                                        onChange={changeHandler}
                                        value={email} type="email" className="form-control" id="email" placeholder="Email" />
                                </div>
                                <div className="form-group col-md-12 ">
                                    <input
                                        name="password"
                                        onChange={changeHandler}
                                        value={password}
                                        type="password" className="form-control" id="password" placeholder="Password" />
                                </div>
                                <div className="col-md-12">
                                    <div className="d-flex my-2 justify-content-between">
                                        <div className="d-inline-block mr-3">
                                            <div className="control control-checkbox">Remember me
                                                <input type="checkbox" />
                                                <div className="control-indicator" />
                                            </div>
                                        </div>
                                        <p><a className="text-blue" href="#">Forgot Password?</a></p>
                                    </div>
                                    <button type="submit" className="btn btn-primary btn-block mb-4" onClick={submitHandler}>Sign In</button>
                                    <p className="sign-upp">Don't have an account yet ?
                                        <a className="text-blue" href="sign-up.html">Sign Up</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
}

export async function getServerSideProps(ctx) {


    return {
        props: {
            data: null
        }
    }
}
