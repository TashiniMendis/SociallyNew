import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
//import './SignIn.css';
import "./validation";
import useForm from "./useForm";

const Login = ({ submitForm }) => {
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
                      <div className="text-left text-primary">
                        <h3>
                          <b>Socially</b>
                        </h3>{" "}
                      </div>

                      <form className="pt-3">
                        <div className="form-group">
                          <label>Email</label>
                          <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                          />
                          {errors.email && (
                            <p className="error">{errors.email}</p>
                          )}
                        </div>
                        <div className="form-group">
                          <label>Password</label>
                          <input
                            type="password"
                            className="form-control"
                            id="exampleInputPassword1"
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                          />
                          {errors.password && (
                            <p className="error">{errors.password}</p>
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
                              <i className="input-helper"></i>Remember me
                            </label>
                          </div>
                        </div>
                        <div className="mt-3 mb-3">
                        
                        
                             <Link to="/navi" className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"  role="button" type="submit"  >SIGN IN</Link>  
                          
                        </div>
                        <div className="row">
                          <div className="col font-weight-light">
                            {" "}
                            <Link to="/" className="text-primary">
                              Don't have an Account?
                            </Link>
                          </div>
                          <div className="col font-weight-light">
                            <Link to="" className=" text-primary">
                              Forgotten Password?
                            </Link>
                          </div>
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
export default Login;
