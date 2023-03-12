import { useEffect } from "react";
import Checkbox from "@/Components/Checkbox";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: "",
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const handleOnChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "checkbox"
                ? event.target.checked
                : event.target.value
        );
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("login"));
    };

    return (
        <>
            <Head title="Log in" />

            <div className="d-flex align-items-center">
                <div className="home-btn d-none d-sm-block">
                    <a href="#">
                        <i className="fas fa-home h2 text-white"></i>
                    </a>
                </div>

                <div className="account-pages w-100 mt-5 mb-5">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-8 col-lg-6 col-xl-5">
                                <div className="card">
                                    <div className="card-body p-4">
                                        {/* <div className="text-center mb-4">
                                            <a href="index.html">
                                                <span>
                                                    <img
                                                        src="assets/images/logo-light.png"
                                                        alt=""
                                                        style={{ height: "22px" }}
                                                    />
                                                </span>
                                            </a>
                                        </div> */}

                                        <form
                                            onSubmit={submit}
                                            className="pt-2"
                                        >
                                            <div className="form-group mb-3">
                                                <label htmlFor="emailaddress">
                                                    Email address
                                                </label>
                                                <input
                                                    className="form-control"
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    value={data.email}
                                                    // required=""
                                                    autoComplete="username"
                                                    placeholder="Enter your email"
                                                    onChange={handleOnChange}
                                                />

                                                <InputError
                                                    message={errors.email}
                                                    className="mt-2"
                                                />
                                            </div>

                                            <div className="form-group mb-3">
                                                {canResetPassword && (
                                                    <Link
                                                        href={route(
                                                            "password.request"
                                                        )}
                                                        className="text-muted float-right"
                                                    >
                                                        <small>
                                                            Forgot your
                                                            password?
                                                        </small>
                                                    </Link>
                                                )}
                                                <label htmlFor="password">
                                                    Password
                                                </label>
                                                <input
                                                    className="form-control"
                                                    id="password"
                                                    type="password"
                                                    name="password"
                                                    value={data.password}
                                                    placeholder="Enter your password"
                                                    autoComplete="current-password"
                                                    onChange={handleOnChange}
                                                />
                                                <InputError
                                                    message={errors.password}
                                                    className="mt-2"
                                                />
                                            </div>

                                            <div className="custom-checkbox mb-3">
                                                <input
                                                    type="checkbox"
                                                    className="rounded"
                                                    value={data.remember}
                                                    onChange={handleOnChange}
                                                    name="remember"
                                                />
                                                <label
                                                    className="ml-1"
                                                    htmlFor="checkbox-signin"
                                                >
                                                    Remember me
                                                </label>
                                            </div>

                                            <div className="form-group mb-0 text-center">
                                                <button
                                                    className="btn btn-success btn-block"
                                                    type="submit"
                                                >
                                                    {" "}
                                                    Log In{" "}
                                                </button>
                                            </div>
                                        </form>

                                        <div className="row mt-3">
                                            <div className="col-12 text-center">
                                                <p className="text-muted mb-0">
                                                    Don't have an account?{" "}
                                                    <Link
                                                        href={route("register")}
                                                        className="text-dark ml-1"
                                                    >
                                                        <b>Sign Up</b>
                                                    </Link>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
