import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./validation";
//import './SignIn.css';
import useForm from "./useForm";
import { Link } from "react-router-dom";

const Register = ({ submitForm }) => {
  const { handleChange, handleForSubmit, values, errors } = useForm(submitForm);

  return (
    <div className="container-scroller">
      <div className="container-fluid page-body-wrapper full-page-wrapper">
        <div className="main-panel">
          <div className="content-wrapper">
            <div>
              <div className="d-flex align-items-center auth px-0">
                <div className="w-100 text-center mx-auto p-3 mt-2">
                  <div className="col-lg-4 mx-auto">
                    <div className="auth-form-light text-left py-5 px-4 px-sm-5">
                      <h4>New here?</h4>
                      <h6 className="font-weight-light">
                        Signing up is easy. It only takes a few steps
                      </h6>
                      <form className="pt-3">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            id="exampleInputUsername1"
                            placeholder="Username"
                            name="name"
                            value={values.name}
                            onChange={handleChange}
                          />
                          {errors.username && (
                            <p className="error">{errors.username}</p>
                          )}
                        </div>
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control form-control-lg"
                            id="exampleInputEmail1"
                            placeholder="Email"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                          />
                          {errors.email && (
                            <p className="error">{errors.email}</p>
                          )}
                        </div>
                        <div className="form-group">
                          <input
                            type="password"
                            className="form-control form-control-lg"
                            id="exampleInputPassword1"
                            placeholder="Password"
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                          />
                          {errors.password && (
                            <p className="error">{errors.password}</p>
                          )}
                        </div>
                        <div className="form-group">
                          <input
                            type="password"
                            className="form-control form-control-lg"
                            id="exampleInputPassword2"
                            placeholder="Confirm Password"
                            name="confirmPassword"
                            value={values.confirmPassword}
                            onChange={handleChange}
                          />
                          {errors.confirmPassword && (
                            <p className="error">{errors.confirmPassword}</p>
                          )}
                        </div>

                        <div className="m-4">
                          <div className=" form-check">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id="defaultUnchecked"
                              name="checkbox"
                            />
                            <label className="m-2 form-check-label text-muted">
                              {" "}
                              <i className="input-helper"></i>I agree to all
                              Terms & Conditions
                            </label>
                          </div>
                        </div>
                        <div className="mt-3">
                          <a
                            className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
                            onClick={handleForSubmit}
                          >
                            SIGN UP
                          </a>
                        </div>
                        <div className="text-center mt-4 font-weight-light">
                          Already have an account?{" "}
                          <Link to="/Login">Login</Link>
                        </div>
                      </form>
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
};
export default Register;
