import React, { useEffect, useState } from "react";
import Input from "../../../../Components/input/Input";
import Button from "../../../../Components/button/Button";
import axios from "axios";
import { Link } from "react-router-dom";

const Login = () => {
  //onchange fucntions state
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  //checking user give formet is corret
  const [isBooleanEmail, setIsBooleanEmail] = useState(false);
  const [isBooleanPassword, setIsBooleanPassword] = useState(false);

  //Useeffect
  useEffect(()=>{

  },[])

  //function

  // checking Email
  function checkEmail(emailAddress) {
    let atSymbol = emailAddress.indexOf("@");
    let dotSymbol = emailAddress.lastIndexOf(".");
    let spaceSymbol = emailAddress.indexOf(" ");
    let domainNames = [".com", ".in", ".gov", ".edu", ".net", ".mil"];
    let lastDomainString = "",
      flag = 0;
    for (let i = dotSymbol; i < emailAddress.length; i++) {
      lastDomainString += emailAddress[i];
    }
    for (let i = 0; i < domainNames.length; i++) {
      if (lastDomainString === domainNames[i]) {
        flag = 1;
      }
    }
    if (flag == 0) {
      return false;
    }
    if (
      atSymbol != -1 &&
      atSymbol != 0 &&
      dotSymbol != -1 &&
      dotSymbol != 0 &&
      dotSymbol > atSymbol + 1 &&
      emailAddress.length > dotSymbol + 1 &&
      spaceSymbol == -1
    ) {
      return true;
    } else {
      return false;
    }
    return 0;
  }
  ///passworkcheck
  function checkPassword(password) {
    const minLength = 8;
    if (password.length >= minLength) {
      return true;
    } else {
      return false;
    }
    // const hasUpperCase = /[A-Z]/.test(password);
    // const hasLowerCase = /[a-z]/.test(password);
    // const hasNumbers = /[0-9]/.test(password);
    // const hasSpecialChars = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    // return password.length >= minLength && hasUpperCase && hasLowerCase && hasNumbers && hasSpecialChars;
  }

  //   ///updating value
  function upadatingEmail(event) {
    const { value } = event.target;
    checkEmail(event.target.value)
      ? setIsBooleanEmail(true)
      : setIsBooleanEmail(false);
    setEmailValue((pre) => {
      return pre, value;
    });
  }
  function upadatingPassword(event) {
    const { value } = event.target;
    checkPassword(event.target.value)
      ? setIsBooleanPassword(true)
      : setIsBooleanPassword(false);
    setPasswordValue((pre) => {
      return pre, value;
    });
  }
  //final submit
  function finalSubmit() {
    if (isBooleanEmail && isBooleanPassword) {
      axios
        .post("/api", { email: emailValue, password: passwordValue })
        .then(() => {
          console.log("send sucess");
        })
        .catch((error) => {
          console.log("error :" + error);
        });
    }
  }

  console.log(emailValue, isBooleanEmail);
  console.log(passwordValue, isBooleanPassword);
  return (
    <div className="d-flex   bg-white " style={{ height: "100vh" }}>
      <form
        className=" row col-11 col-lg-4 m-auto border shadow-lg rounded-2"
        accessKey=""
        method="post"
      >
        <div className="text-center p-4 display-6 fw-bold">Login</div>
        <div className=" col-12 mt-4">
          <Input
            type="text"
            placeholder="Enter email"
            onChange={upadatingEmail}
            value={emailValue}
          />
        </div>
        <div className="col-12 mt-4">
          <Input
            type="password"
            placeholder="Enter password"
            onChange={upadatingPassword}
            value={passwordValue}
          />
        </div>
        <p className="text-end">forgot password</p>
        <div className="text-center mt-3">
          <Button
            text="Login"
            className="col-5"
            color="primary"
            onClick={finalSubmit}
          />
        </div>
        <div className="my-4 text-center">
          <p className="">
            If you don't have accout, 
            <Link to='' className="text-blod fw-bold text-danger">Sign up</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
