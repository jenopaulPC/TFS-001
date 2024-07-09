import React from "react";
import Input from "../../../../Components/input/Input";
import Button from "../../../../Components/button/Button";
import "./RegisterScreen.css";

const RegisterScreen = () => {
  return (
    <div className="container">
      <div
        className="d-flex justify-content-center"
        style={{ height: "100vh" }}
      >
        <div
          className="align-self-center my-5 col-lg-4 col-sm-8 my-sm-0 border p-3 p-sm-4 rounded-2 bg-white shadow-lg">
          <div className="text-center display-6 fw-bold">Register</div>
          <div className="row mt-4        ">
            <div>
              <Input id="usernsme" type="text" placeholder="Enter UserName" />
            </div>
          </div>

          <div className="row mt-4        ">
            <div>
              <Input id="email" type="email" placeholder="Enter Email" />
            </div>
          </div>

          <div className="row mt-4        ">
            <div>
              <Input
                id="mobile"
                type="number"
                placeholder="Enter Mobile Number"
              />
            </div>
          </div>

          <div className="row mt-4        ">
            <div>
              <Input id="address" type="textarea" placeholder="Enter Address" />
            </div>
          </div>
          
          <div className="row mt-4        ">
            <div>
              <Input id="address" type="password" placeholder="Enter Password" />
            </div>
          </div>
          
          <div className="row mt-4        ">
            <div>
              <Input id="address" type="password" placeholder="Re-Enter Password" />
            </div>
          </div>

          <div className=" text-center my-4">
            <Button
              text="Register"
              color="primary"
              className="col-12 col-lg-4 fw-bold"
            />
          </div>

          <div className="d-flex justify-content-center user-select-none">
            Aldready have an account?
            <a href="#" className="ms-2 fw-bold">
              Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterScreen;
