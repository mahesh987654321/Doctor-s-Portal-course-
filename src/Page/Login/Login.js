import React from "react";
import {
  useSignInWithGoogle,
  useSignInWithEmailAndPassword,
  useUpdatePassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Spinner from "../../Spinner/Spinner";
import auth from "../firebaseInit";
import { useForm } from "react-hook-form";
import UserHooks from "../Hooks/UserHooks";
const Login = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, user1, loading1, error1] =
    useSignInWithEmailAndPassword(auth);
  let signInMethod;
  let navigate = useNavigate();
  let location = useLocation();
  const [token] = UserHooks(user || user1);
  let from = location.state?.from?.pathname || "/";
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  if (loading || loading1) {
    return <Spinner></Spinner>;
  }
  if (error || error1) {
    signInMethod = (
      <p className="text-red-500">{error?.message || error1?.message}</p>
    );
  }
  if (token) {
    navigate(from, { replace: true });
  }
  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
    console.log(data.email);
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold">Login</h2>
          {/* ********************** */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered w-full max-w-xs"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is required",
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Provide a valid email", // JS only: <p>error message</p> TS only support string
                  },
                })}
              />
              <label className="label">
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-red-600">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-red-600">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Enter your Password"
                className="input input-bordered w-full max-w-xs"
                {...register("password", {
                  required: {
                    value: true,
                    message: "password is required",
                  },
                  value: 6,
                  message: "Password must be 6 charecter ",
                })}
              />
              <label className="label">
                {errors.password?.type === "required" && (
                  <span className="label-text-alt text-red-600">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "pattern" && (
                  <span className="label-text-alt text-red-600">
                    {errors.password.message}
                  </span>
                )}
              </label>
              {signInMethod}

              <button className="btn btn-success">Login</button>
              <p>
                New to Doctor's House{" "}
                <Link className="text-primary" to="/signUp">
                  Create a new account
                </Link>
              </p>
            </div>
          </form>
          {/* ***************************** */}
          {/* ?*************** */}{/***************************** */}
          <div className="divider">OR</div>
          <button
            onClick={() => signInWithGoogle()}
            className="btn btn-outline btn-info"
          >
            Continue With Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
