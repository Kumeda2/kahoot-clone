import { IoEyeOffOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import banner from "../assets/images/banner.webp";
import Input from "../UI/Input/Input";
import { useState } from "react";
import Button from "../UI/Button/Button";
import { errors, MIN_LENGTH } from "../utils/consts";
import { toast, Toaster } from "react-hot-toast";
import { useNavigate } from "react-router";
import { paths } from "../router/paths";
import { useEffect } from "react";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [validationDetails, setValidationDetails] = useState({
    upperCase: false,
    lowerCase: false,
    number: false,
    specialChar: false,
    properLength: false,
  });
  const [passwordStrength, setPasswordStrength] = useState(
    Array(4).fill(false)
  );
  const [isSignedUP, setIsSignedUP] = useState(false);

  const handlePasswordChange = (password) => {
    setPassword(password);
    validatePassword(password);
    checkPasswordStrength(password);
  };

  const checkPasswordStrength = (password) => {
    const levels = 4;
    const thresholds = [8, 12, 16, 20];
    const strength = Array.from(
      { length: levels },
      (_, i) => password.length >= thresholds[i]
    );
    setPasswordStrength(strength);
  };

  const validatePassword = (password) => {
    const upperCase = /[A-Z]/.test(password);
    const lowerCase = /[a-z]/.test(password);
    const number = /\d/.test(password);
    const specialChar = /[!@#$%^&*(),.?_":{}|<>]/.test(password);
    const properLength = password.length >= MIN_LENGTH;

    const isValid =
      properLength && upperCase && lowerCase && number && specialChar;

    setValidationDetails({
      properLength,
      upperCase,
      lowerCase,
      number,
      specialChar,
    });
    setIsValidPassword(isValid);
    return isValid;
  };

  const getErrorMessage = () => {
    if (!validationDetails.upperCase) return errors.UPPERCASE_ERROR;
    if (!validationDetails.lowerCase) return errors.LOWERCASE_ERROR;
    if (!validationDetails.number) return errors.NUMBER_ERROR;
    if (!validationDetails.specialChar) return errors.SPECIAL_CHAR_ERROR;
    if (!validationDetails.properLength) return errors.PROPER_LENGTH_ERROR;
    return null;
  };

  const validateEmail = (email) => {
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    setEmail(email);
    return isValid;
  };

  const validateForm = () => {
    const isValidEmail = validateEmail(email);
    const isValidUsername = username.length > 0;

    if (!isValidEmail) {
      toast.error("Invalid email");
    } else if (!isValidUsername) {
      toast.error("Invalid username");
    } else {
      navigate(paths.MAIN);
    }
  };

  return (
    <>
      <Toaster />
      <div className="auth">
        <div className="banner-holder">
          <img src={banner} alt="banner" />
        </div>
        <div className="wrapper">
          <div className="form-container">
            {!isSignedUP && (
              <>
                <form
                  className="login-form"
                  method="post"
                  noValidate
                  onSubmit={(e) => e.preventDefault()}
                >
                  <h1>Sign up</h1>
                  <div className="input-group">
                    <Input
                      placeholder="Username"
                      width={"100%"}
                      changeHandler={() => setUsername()}
                    />
                  </div>
                  <div className="input-group">
                    <Input
                      placeholder="Email"
                      width={"100%"}
                      changeHandler={validateEmail}
                    />
                  </div>
                  <div className="input-group">
                    <Input
                      type={!showPassword ? "password" : "text"}
                      placeholder="Password"
                      style={{ position: "relative" }}
                      changeHandler={handlePasswordChange}
                      width={"100%"}
                    />
                    <span className="password-icon">
                      {!showPassword ? (
                        <IoEyeOutline
                          onClick={() => setShowPassword((prev) => !prev)}
                        />
                      ) : (
                        <IoEyeOffOutline
                          onClick={() => setShowPassword((prev) => !prev)}
                        />
                      )}
                    </span>
                  </div>
                  {!isValidPassword && (
                    <p className="password-error">{getErrorMessage()}</p>
                  )}
                  <div className="password-strength">
                    {passwordStrength.map((strengthLevel, idx) => {
                      return (
                        <div
                          className={
                            strengthLevel
                              ? "strength-level strength-level-reached"
                              : "strength-level"
                          }
                          key={idx}
                        />
                      );
                    })}
                    <p>Password strength</p>
                  </div>
                  <Button
                    variant={"classic"}
                    size={"100%"}
                    clickHandler={validateForm}
                  >
                    Sign Up
                  </Button>
                </form>
                <div className="sign-in-link">
                  <p>Already have an account?</p>
                  <Button
                    variant={"outline"}
                    size={"40%"}
                    clickHandler={() => setIsSignedUP(true)}
                  >
                    Sign In
                  </Button>
                </div>
              </>
            )}

            {isSignedUP && (
              <>
                <form
                  className="login-form"
                  method="post"
                  noValidate
                  onSubmit={(e) => e.preventDefault()}
                >
                  <h1>Sign in</h1>
                  <div className="input-group">
                    <Input placeholder="Email" width={"100%"} />
                  </div>
                  <div className="input-group">
                    <Input
                      type={!showPassword ? "password" : "text"}
                      placeholder="Password"
                      style={{ position: "relative" }}
                      width={"100%"}
                    />
                    <span className="password-icon">
                      {!showPassword ? (
                        <IoEyeOutline
                          onClick={() => setShowPassword((prev) => !prev)}
                        />
                      ) : (
                        <IoEyeOffOutline
                          onClick={() => setShowPassword((prev) => !prev)}
                        />
                      )}
                    </span>
                  </div>
                  <Button variant={"classic"} size={"100%"}>
                    Sign In
                  </Button>
                </form>
                <div className="sign-in-link">
                  <p>Don't have an account?</p>
                  <Button
                    variant={"outline"}
                    size={"40%"}
                    clickHandler={() => setIsSignedUP(false)}
                  >
                    Sign Up
                  </Button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
