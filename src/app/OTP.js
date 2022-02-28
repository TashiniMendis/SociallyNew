import React, {useState} from "react";
//import './SignIn.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const OTP = () => {

  const [otp, setOtp] = useState(new Array(4).fill(""));

  const handleChange = (element, index) => {
      if (isNaN(element.value)) return false;

      setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

      if (element.nextSibling) {
          element.nextSibling.focus();
      }
  };

    return (
    <div className="container-scroller">
      <div className="container-fluid page-body-wrapper full-page-wrapper">
        <div className="main-panel">
          <div className="content-wrapper">
            <div>
              <div className="d-flex align-items-center auth px-2">
                <div className="w-100 text-center mx-auto p-4 mt-2">
                  <div className="col-lg-4 mx-auto">
                  
                    <div className="auth-form-light py-5 px-4 px-sm-5">
                      <h4 className=" text-center  mt-2">One Time Passward has been sent to your email</h4>
                      <div className="otp-box ">
                      {otp.map((data, index) => {
                        return (
                          
                            <input
                                className="otp-field "
                                type="text"
                                name="otp"
                                maxLength="1"
                                key={index}
                                value={data}
                                onChange={e => handleChange(e.target, index)}
                                onFocus={e => e.target.select()}
                            />
                         
                        );
                    })}
                   
                      <h6 className=" text-center mt-3">Enter OTP</h6>

                      </div>
                      <div className="mt-3"><a className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" onClick={e =>
                                alert("Entered OTP is " + otp.join(""))
                            } >Submit</a>
                      </div>
                      <div className="text-center mt-4 font-weight-light"> <a className="text-primary" href="/user-pages/login">Re-sent OTP</a>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}
export default OTP