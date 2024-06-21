/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import "./login.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/reducers";
import InputFields from "../../../ui-elements/inputfields/labeledInput/inputFields";
import ValidateEmail from "../../../regexExpressions/emailValidation";
import ValidateMobile from "../../../regexExpressions/mobileValidation";
import countries from "../../../utils/country";
import hostels from "../../../utils/hostel";
import { useLocation, useNavigate } from "react-router-dom";
import MessagePopup from "../../../ui-elements/messagePopup/messagePopup"
import client from "../../../apolloClient";
import { useSignInUserMutation, useSignUpUserMutation } from "../../../generated/graphql";

type LoginProps = {};

const Login: React.FC<LoginProps> = () => {
  const { device } = useSelector((state: RootState) => state.windowSize);
  const location = useLocation();
  const navigate = useNavigate();
  const [name, setName] = useState<string>("");
  const [nameError, setNameError] = useState<boolean>(false);

  const [email, setEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<boolean>(false);
  const [emailErrorMsg, setEmailErrorMsg] = useState<string>(
    "Please enter your email"
  );

  const [password, setPassword] = useState<string>("");
  const [passwordError, setPasswordError] = useState<boolean>(false);

  const [confirmPass, setConfirmPass] = useState<string>("");
  const [confirmPassError, setConfirmPassError] = useState<boolean>(false);
  const [confirmPassErrorMsg, setConfirmPassErrorMsg] = useState<string>(
    "Please enter your passeword"
  );

  const [phn, setPhn] = useState<string>("");
  const [phnError, setPhnError] = useState<boolean>(false);
  const [phnErrorMsg, setPhnErrorMsg] = useState<string>(
    "Please enter your number"
  );

  const [gender, setGender] = useState<string>("");
  const [genderError, setGenderError] = useState<boolean>(false);

  const [college, setCollege] = useState<string>("");
  const [collegeError, setCollegeError] = useState<boolean>(false);

  const [type, setType] = useState<string>("");
  const [typeError, setTypeError] = useState<boolean>(false);

  const [country, setCountry] = useState<string>("");
  const [countryError, setCountryError] = useState<boolean>(false);

  const [isIITM, setIsIITM] = useState<boolean>(false);
  const [isIITMError, setIsIITMError] = useState<boolean>(false);

  const [clas, setClas] = useState<string>("");
  const [clasError, setClasError] = useState<boolean>(false);

  const [hostel, setHostel] = useState<string>("");
  const [hostelError, setHostelError] = useState<boolean>(false);

  const [collegeAddress, setCollegeAddress] = useState<string>("");
  const [collegeAddressError, setCollegeAddressError] = useState<boolean>(false);

  const [ErrorMsg, setErrorMsg] = useState<string>("Error in registering..");
    const [signUpUserMutation, { data, loading, error }] = useSignUpUserMutation();
  const [signInUserMutation, { data : loginData, loading : loginLoading, error: loginError }] = useSignInUserMutation();

  const [showRegister, setShowRegister] = useState(location.pathname === "register");


  const [mobileShowRegister, setMobileShowRegister] = useState(false);
  const changeGender = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setGender(event.target.value);
  };
  const changeIsIITM = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    if (event.target.value === "T") {
      setIsIITM(true);
      setCollege("IITM");
    } else setIsIITM(false);
  };
  const changeClas = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setClas(event.target.value);
  };
  const changeHostel = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setHostel(event.target.value);
  };
  const changeType = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setType(event.target.value);
  };
  const changeCountry = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setCountry(event.target.value);
  };
  const changeCollege = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setCollege(event.target.value);
  };
  const changeConfirmPass = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setConfirmPass(event.target.value);
  };
  const changePhn = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setPhn(event.target.value);
  };
  const changeEmail = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setEmail(event.target.value);
  };
  const changePassword = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setPassword(event.target.value);
  };
  const changeName = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setName(event.target.value);
  };

  const changeCollegeAddress = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setCollegeAddress(event.target.value);
  };


  const handleLogin = async () => {
    setEmailError(false);
    setPasswordError(false);
    if (email === "" || email === null || email === undefined) {
      setEmailError(true);
      return;
    }
    if (!ValidateEmail(email)) {
      setEmailErrorMsg("Please enter a valid email address");
      setEmailError(true);

      return;
    }
    if (password === "" || password === null || password === undefined) {
      setPasswordError(true);
      return;
    }
    try {
      await signInUserMutation({
        variables: {
          data: {
            email,
            password: password,
          },
        },
      });
    } catch (err: any) {
      console.error(err);
      if (err.message === "Account not found") {
        setErrorMsg("Account not found");
      } else if (err.message === "Invalid Credential") {
        setErrorMsg("Invalid Credential");
      } else {
        setErrorMsg("Error in logging in..");
      }
    }
  };
  const handleRegister = async () => {
    console.log("1")
    setNameError(false);
    setPhnError(false);
    setConfirmPassError(false);
    setCollegeError(false);
    setTypeError(false);
    setGenderError(false);
    setIsIITMError(false);
    setCountryError(false);
    setEmailError(false);
    setPasswordError(false);
    setHostelError(false);
    setClasError(false);
    setTypeError(false);
    setCollegeAddressError(false);

    console.log("2")
    if (name === "" || name === null || name === undefined) {
      setNameError(true);
      return;
    }
    console.log("3")
    if (email === "" || email === null || email === undefined) {
      setEmailError(true);
      return;
    }
    console.log("4")
    if (!ValidateEmail(email)) {
      setEmailErrorMsg("Please enter a valid email address");
      setEmailError(true);

      return;
    }
    console.log("5")
    if (password === "" || password === null || password === undefined) {
      setPasswordError(true);
      return;
    }
    console.log("6")
    if (
      confirmPass === "" ||
      confirmPass === null ||
      confirmPass === undefined
    ) {
      setConfirmPassError(true);
      return;
    }
    console.log("7")
    if (password !== confirmPass) {
      setConfirmPassErrorMsg("passwords are not the same");
      setConfirmPassError(true);
      return;
    }
    console.log("8")
    if (phn === "" || phn === null || phn === undefined) {
      setPhnError(true);
      return;
    }
    console.log("9")
    if (!ValidateMobile(phn)) {
      setPhnErrorMsg("Please enter a valid phone number");
      setPhnError(true);

      return;
    }
    console.log("10")
    if (gender === "" || gender === null || gender === undefined) {
      setGenderError(true);
      return;
    }
    console.log("11")
    if (type === "" || type === null || type === undefined) {
      setTypeError(true);
      return;
    }
    console.log("12")
    if (isIITM === null || isIITM === undefined) {
      setIsIITMError(true);

      return;
    }

    if ( type === "college" && isIITM && (hostel === "" || hostel === null || hostel === undefined)) {
      setCollege("IIT MADRAS");
      setCollegeAddress("Chennai, TamilNadu")
      setCountry("TamilNadu")
      setHostelError(true)
      return ;
    }
    
    console.log("13")
    // if (college === "" || college === null || college === undefined) {
    //   setCollegeError(true);
    //   return;
    // }
    if (
      type === "college" && !isIITM &&
      (college === "" || college === null || college === undefined) && 
      (country === "" || country === null || country === undefined) &&
      (collegeAddress === "" || collegeAddress === null || collegeAddress === undefined)
      ) {
        setCollegeError(true);
        setCountryError(true);
        setCollegeAddressError(true);
        return;
      }
      console.log("14")
      // if (isIITM && (hostel === "" || hostel === null || hostel === undefined)) {
      //   setHostelError(true);
      //   return;
      // }
      if(
        type==="professional" &&
        (college === "" || college === null || college === undefined) && 
        (country === "" || country === null || country === undefined)
      ){
        setCollegeAddress("professional")
        setCollegeError(true)
        setCountryError(true)
      }
      console.log("15")
      // if (country === "" || country === null || country === undefined) {
      //   setCountryError(true);
      //   return;
      // }
    console.log("16")
    // if (collegeAddress === "" || collegeAddress === null || collegeAddress === undefined) {
    //   setCollegeAddressError(true);
    //   return;
    // }
    console.log("17")

    try {
      console.log("1")
      await signUpUserMutation({
        variables: {
          data: {
            name,
            email: email.toLowerCase(),
            password: confirmPass,
            mobile: phn,
            organization:college,
            gender,
            country,
            type,
            isIITM,
            hostel,
            collegeAddress

          },
        },
      });
      console.log("2")
    } catch (e: any) {
      console.log(e);
      if (e.message === "User already created. Login to continue") {
        setErrorMsg("User already created. Login to continue");
      } else setErrorMsg("Error in Registering. Try again");
    }
  };
  useEffect(() => {
    if (data) {
      client.resetStore();
      navigate("/");
    }
  }, [data]);

  useEffect(() => {
    if (loginData?.signInUser) {
      client.resetStore();
      navigate('/')
    }
  }, [loginData]);

  return device === "laptop" ?
    (
      <div className="login-page-wrapper">
        <div
          className={`container ${showRegister ? "left-panel-active" : "right-panel-active"
            }`}
        >
          {(loading || loginLoading) && (
            <>
              <MessagePopup
                message={"Loading..."}
                position={"top-center"}
                category={"info"}
              />
              <MessagePopup 
                message={'Registrations for Terraquake Events and Workshops has been Closed'}
                position={'top-right'}
                category={'warning'}
                delay={2}
              />
            </>
          )}
          {error && (
            <MessagePopup
              message={ErrorMsg}
              position={"top-center"}
              category={"warning"}
              delay={3}
            />
          )}
          {loginError && (
            <MessagePopup
              message={ErrorMsg}
              position={"top-center"}
              category={"warning"}
              delay={3}
            />
          )}
          <div className="login-or-register">
            <div className={`login-container ${showRegister ? "register" : ""}`}>
              <InputFields
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  changeEmail(e)
                }
                type="email"
                label="E-mail"
                error={emailError}
                errorMsg={emailErrorMsg}
                required
              ></InputFields>

              <InputFields
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  changePassword(e)
                }
                type="password"
                error={passwordError}
                errorMsg="Please enter your password"
                label="Password"
                required
              ></InputFields>

              <button className="login-button" onClick={handleLogin} style={{ background: "rgb(45, 72, 131)", color: "white", border: "2px solid white" }}> LOGIN</button>
            </div>
            <div className="register-container">
              <div className={`details ${device}`}>
                <InputFields
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    changeName(e)
                  }
                  type="name"
                  page="register"
                  label="Name"
                  error={nameError}
                  errorMsg="Please enter your name"
                  required
                ></InputFields>
                <InputFields
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    changeEmail(e)
                  }
                  type="E-mail"
                  page="register"
                  label="Email"
                  error={emailError}
                  errorMsg={emailErrorMsg}
                  required
                ></InputFields>

                <InputFields
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    changePassword(e)
                  }
                  type="password"
                  page="register"
                  label="Password"
                  error={passwordError}
                  errorMsg="please enter your password"
                  required
                ></InputFields>
                <InputFields
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    changeConfirmPass(e)
                  }
                  type="password"
                  page="register"
                  label="Confirm Password"
                  error={confirmPassError}
                  errorMsg={confirmPassErrorMsg}
                  required
                ></InputFields>
                <InputFields
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    changePhn(e)
                  }
                  type="Phone No"
                  page="register"
                  label="Phone No"
                  error={phnError}
                  errorMsg={phnErrorMsg}
                  required
                ></InputFields>

                <div className={`form-dropdown-box`}>
                  <div className={`form-dropdown-label ${device}`}>Gender*</div>
                  <select
                    className={`form-dropdown ${device}`}
                    onChange={changeGender}
                  >
                    <option value="" className={`form-dropdown-option ${device}`}>
                      Select
                    </option>
                    <option
                      value="M"
                      className={`form-dropdown-option ${device}`}
                    >
                      Male
                    </option>
                    <option
                      value="F"
                      className={`form-dropdown-option ${device}`}
                    >
                      Female
                    </option>
                    <option
                      value="O"
                      className={`form-dropdown-option ${device}`}
                    >
                      Other/Prefer not to say
                    </option>
                  </select>
                  {genderError ? (
                    <div className={`dropdown-error ${device}`}>
                      Please select gender
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div className={`form-dropdown-box`}>
                  <div className={`form-dropdown-label ${device}`}>Type*</div>
                  <select
                    onChange={changeType}
                    className={`form-dropdown ${device}`}
                  >
                    <option value="" className={`form-dropdown-option ${device}`}>
                      Select
                    </option>
                    <option
                      value="college"
                      className={`form-dropdown-option ${device}`}
                    >
                      College
                    </option>
                    <option
                      value="professional"
                      className={`form-dropdown-option ${device}`}
                    >
                      Professional
                    </option>
                  </select>
                  {typeError ? (
                    <div className={`dropdown-error ${device}`}>
                      Please select type
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                {type === "school" ? (
                  <InputFields
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      changeClas(e)
                    }
                    type="text"
                    page="register"
                    label="Class"
                    error={clasError}
                    errorMsg="please enter your class"
                    required
                  ></InputFields>
                ) : (
                  <div className={`form-dropdown-box`}>
                    <div className={`form-dropdown-label ${device}`}>
                      IITM Student*
                    </div>
                    <select
                      onChange={changeIsIITM}
                      className={`form-dropdown ${device}`}
                    >
                      <option
                        value="F"
                        className={`form-dropdown-option ${device}`}
                      >
                        No
                      </option>
                      {type === "college" && (
                        <option
                          value="T"
                          className={`form-dropdown-option ${device}`}
                        >
                          Yes
                        </option>
                      )}
                    </select>
                  </div>
                )}
                {type !== "college" ? (
                  <InputFields
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      changeCollege(e)
                    }
                    type="Organization"
                    page="register"
                    label={type === "school" ? "School" : "Organization"}
                    error={collegeError}
                    errorMsg={
                      type === "school"
                        ? "please enter name of school"
                        : "please enter name of organization"
                    }
                    required
                  ></InputFields>
                ) : isIITM ? (
                  <div className="form-dropdown-box">
                    <div className={`form-dropdown-label ${device}`}>Hostel*</div>
                    <select
                      onChange={changeHostel}
                      className={`form-dropdown ${device}`}
                    >
                      <option
                        value=""
                        className={`form-dropdown-option ${device}`}
                      >
                        Select
                      </option>
                      {hostels.map((hostel) => (
                        <option
                          value={hostel}
                          className={`form-dropdown-option ${device}`}
                        >
                          {hostel}
                        </option>
                      ))}
                    </select>
                    {hostelError ? (
                      <div className={`dropdown-error ${device}`}>
                        Please select hostel
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                ) : (
                  <InputFields
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      changeCollege(e)
                    }
                    type="College"
                    page="register"
                    label="College"
                    error={collegeError}
                    errorMsg="please enter name of college"
                    required
                  ></InputFields>

                )}
                {/* {!isIITM && 
                              <InputFields
                              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                setPersonalIdFile(e.target.files![0]);
                                setPersonalIdFileError(false)
                                setPersonalId(e.target.files![0].name || "");
                              }}
                              type="file"
                              page="register"
                              errorMsg={personalIdFileErrorMsg}
                              error={personalIdFileError}
                              label="Photo ID Proof (.pdf, .jpg, .jpeg, .png)"
                              required
                              placeholder="Upload your verification document here"
                              theme='light'
                              />
                            } */}
               {!isIITM && <div className="form-dropdown-box">
                  <div className={`form-dropdown-label `}>State*</div>
                  <select
                    onChange={changeCountry}
                    className={`form-dropdown ${device}`}
                  >
                    <option
                      value=""
                      className={`form-dropdown-option ${device}`}
                    >
                      Select
                    </option>
                    {countries.map((country) => (
                      <option
                        value={country}
                        className={`form-dropdown-option ${device}`}
                      >
                        {country}
                      </option>
                    ))}
                  </select>
                  {countryError ? (
                    <div className={`dropdown-error ${device}`}>
                      please select state
                    </div>
                  ) : (
                    ""
                  )}
                </div>}
                {type === "college" && !isIITM &&
                  <InputFields
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      changeCollegeAddress(e)
                    }
                    type="CollegeAddress"
                    page="register"
                    label="College Address"
                    error={collegeAddressError}
                    errorMsg="please enter the college address"
                    required
                  ></InputFields>
                }

              </div>
              <div className="register-Wrapper" style={{ display: "flex", justifyContent: "center" }}>
                <button onClick={handleRegister} style={{ background: "rgb(45, 72, 131)", color: "white", border: "2px solid white" }}>REGISTER</button>
              </div>
            </div>
            <div className="overlay-container">
              <div className="overlay">
                <div className="overlay-panel overlay-left">
                  <h1 className="overlay-heading" style={{ color: "white" }}>Already registered ?</h1>
                  <h3>Login here</h3>
                  <button
                    className="login-from-register"
                    id="lfr"
                    onClick={() => setShowRegister(false)}
                    style={{ background: "rgb(45, 72, 131)", color: "white", border: "2px solid white" }}
                  >
                    LOGIN
                  </button>
                </div>
                <div className="overlay-panel overlay-right">
                  <h1 className="overlay-heading" style={{ color: "white" }}>Book your slots now!</h1>
                  <h3>Register here</h3>
                  <button
                    className="register-from-login"
                    id="rfl"
                    onClick={() => setShowRegister(true)}
                    style={{ background: "rgb(45, 72, 131)", color: "white", border: "2px solid white" }}
                  >
                    REGISTER
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
    :
    (
      <div
        className={`mobile-container ${mobileShowRegister ? "register-active" : "login-active"
          }`}
      >
        {(loading || loginLoading) && (
          <MessagePopup
            message={"Loading..."}
            position={"top-center"}
            category={"info"}
          />
        )}
        {error && (
          <MessagePopup
            message={ErrorMsg}
            position={"top-center"}
            category={"warning"}
            delay={3}
          />
        )}
        {loginError && (
          <MessagePopup
            message={ErrorMsg}
            position={"top-center"}
            category={"warning"}
            delay={3}
          />
        )}
        <div className="mobile-login-or-register">
          <div
            className={`mobile-login-container ${mobileShowRegister ? "register-active" : "login-active"
              }`}
          >
            <h2 className="overlay-heading">Book your slots now!</h2>
            <div className="mobile-login-heading">LOGIN</div>
            <InputFields
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                changeEmail(e)
              }
              type="text"
              label="E-mail"
              error={emailError}
              errorMsg={emailErrorMsg}
              required
            ></InputFields>

            <InputFields
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                changePassword(e)
              }
              type="password"
              error={passwordError}
              errorMsg="please enter your password"
              label="Password"
              required
            ></InputFields>
            <div>
              <button className="login-button" onClick={handleLogin} style={{ background: "rgb(45, 72, 131)", color: "white", border: "2px solid white", padding: "10px", borderRadius: "3px", margin: "25% 0 25% 0", cursor: "pointer" }}> LOGIN</button>
            </div>

            {/* <div className="mobile-login-forgot-password">
              <h4>Forgot your password ?</h4>
            </div> */}
            <div className="to-register">
              <h4>
                Didn't register?
                <span
                style={{color:"#22E6C2"}}
                  className="mobile-register-from-login"
                  id="rfl"
                  onClick={() => setMobileShowRegister(true)}
                >
                  Register
                </span>
              </h4>
            </div>
          </div>
          <div
            className={`mobile-register-container ${mobileShowRegister ? "register-active" : "login-active"
              }`}
          >
            <h2>Register</h2>

            <div className={`register-container ${device}`}>
              <div className={`details ${device}`}>
                <InputFields
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    changeName(e)
                  }
                  type="name"
                  page="register"
                  label="Name"
                  error={nameError}
                  errorMsg="Please enter your name"
                  required
                ></InputFields>
                <InputFields
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    changeEmail(e)
                  }
                  type="E-mail"
                  page="register"
                  label="Email"
                  error={emailError}
                  errorMsg={emailErrorMsg}
                  required
                ></InputFields>

                <InputFields
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    changePassword(e)
                  }
                  type="password"
                  page="register"
                  label="Password"
                  error={passwordError}
                  errorMsg="please enter your password"
                  required
                ></InputFields>
                <InputFields
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    changeConfirmPass(e)
                  }
                  type="password"
                  page="register"
                  label="Confirm Password"
                  error={confirmPassError}
                  errorMsg={confirmPassErrorMsg}
                  required
                ></InputFields>
                <InputFields
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    changePhn(e)
                  }
                  type="Phone No"
                  page="register"
                  label="Phone No"
                  error={phnError}
                  errorMsg={phnErrorMsg}
                  required
                ></InputFields>

                <div className={`form-dropdown-box`}>
                  <div className={`form-dropdown-label ${device}`}>Gender*</div>
                  <select
                    className={`form-dropdown ${device}`}
                    onChange={changeGender}
                  >
                    <option value="" className={`form-dropdown-option ${device}`}>
                      Select
                    </option>
                    <option
                      value="M"
                      className={`form-dropdown-option ${device}`}
                    >
                      Male
                    </option>
                    <option
                      value="F"
                      className={`form-dropdown-option ${device}`}
                    >
                      Female
                    </option>
                    <option
                      value="O"
                      className={`form-dropdown-option ${device}`}
                    >
                      Other/Prefer not to say
                    </option>
                  </select>
                  {genderError ? (
                    <div className={`dropdown-error ${device}`}>
                      Please select gender
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div className={`form-dropdown-box`}>
                  <div className={`form-dropdown-label ${device}`}>Type*</div>
                  <select
                    onChange={changeType}
                    className={`form-dropdown ${device}`}
                  >
                    <option value="" className={`form-dropdown-option ${device}`}>
                      Select
                    </option>
                    <option
                      value="college"
                      className={`form-dropdown-option ${device}`}
                    >
                      College
                    </option>
                    <option
                      value="professional"
                      className={`form-dropdown-option ${device}`}
                    >
                      Professional
                    </option>
                  </select>
                  {typeError ? (
                    <div className={`dropdown-error ${device}`}>
                      Please select type
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                {type === "school" ? (
                  <InputFields
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      changeClas(e)
                    }
                    type="text"
                    page="register"
                    label="Class"
                    error={clasError}
                    errorMsg="please enter your class"
                    required
                  ></InputFields>
                ) : (
                  <div className={`form-dropdown-box`}>
                    <div className={`form-dropdown-label ${device}`}>
                      IITM Student*
                    </div>
                    <select
                      onChange={changeIsIITM}
                      className={`form-dropdown ${device}`}
                    >
                      <option
                        value="F"
                        className={`form-dropdown-option ${device}`}
                      >
                        No
                      </option>
                      {type === "college" && (
                        <option
                          value="T"
                          className={`form-dropdown-option ${device}`}
                        >
                          Yes
                        </option>
                      )}
                    </select>
                  </div>
                )}
                {type !== "college" ? (
                  <InputFields
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      changeCollege(e)
                    }
                    type="Organization"
                    page="register"
                    label={type === "school" ? "School" : "Organization"}
                    error={collegeError}
                    errorMsg={
                      type === "school"
                        ? "please enter name of school"
                        : "please enter name of organization"
                    }
                    required
                  ></InputFields>
                ) : isIITM ? (
                  <div className="form-dropdown-box">
                    <div className={`form-dropdown-label ${device}`}>Hostel*</div>
                    <select
                      onChange={changeHostel}
                      className={`form-dropdown ${device}`}
                    >
                      <option
                        value=""
                        className={`form-dropdown-option ${device}`}
                      >
                        Select
                      </option>
                      {hostels.map((hostel) => (
                        <option
                          value={hostel}
                          className={`form-dropdown-option ${device}`}
                        >
                          {hostel}
                        </option>
                      ))}
                    </select>
                    {hostelError ? (
                      <div className={`dropdown-error ${device}`}>
                        Please select hostel
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                ) : (
                  <InputFields
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      changeCollege(e)
                    }
                    type="College"
                    page="register"
                    label="College"
                    error={collegeError}
                    errorMsg="please enter name of college"
                    required
                  ></InputFields>

                )}
                {/* {!isIITM && 
                              <InputFields
                              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                setPersonalIdFile(e.target.files![0]);
                                setPersonalIdFileError(false)
                                setPersonalId(e.target.files![0].name || "");
                              }}
                              type="file"
                              page="register"
                              errorMsg={personalIdFileErrorMsg}
                              error={personalIdFileError}
                              label="Photo ID Proof (.pdf, .jpg, .jpeg, .png)"
                              required
                              placeholder="Upload your verification document here"
                              theme='light'
                              />
                            } */}
               {!isIITM && <div className="form-dropdown-box">
                  <div className={`form-dropdown-label `}>State*</div>
                  <select
                    onChange={changeCountry}
                    className={`form-dropdown ${device}`}
                  >
                    <option
                      value=""
                      className={`form-dropdown-option ${device}`}
                    >
                      Select
                    </option>
                    {countries.map((country) => (
                      <option
                        value={country}
                        className={`form-dropdown-option ${device}`}
                      >
                        {country}
                      </option>
                    ))}
                  </select>
                  {countryError ? (
                    <div className={`dropdown-error ${device}`}>
                      please select state
                    </div>
                  ) : (
                    ""
                  )}
                </div>}
                {type === "college" && !isIITM &&
                  <InputFields
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      changeCollegeAddress(e)
                    }
                    type="CollegeAddress"
                    page="register"
                    label="College Address"
                    error={collegeAddressError}
                    errorMsg="please enter the college address"
                    required
                  ></InputFields>
                }

              </div>
              <div className="reg-button-mob">
                <button className="mobile-register" onClick={handleRegister} style={{ background: "rgb(45, 72, 131)", color: "white", borderRadius: "5px", fontSize: "15px", border: "2px solid white", cursor: "pointer" }}>
                  REGISTER
                </button>
              </div>
              <div className="to-login">
                <h4>
                  Already registered?{" "}
                  <span style={{cursor:"pointer"}}
                    className="mobile-login-from-register"
                    id="lfr"
                    onClick={() => setMobileShowRegister(false)}
                  >
                    Login
                  </span>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Login