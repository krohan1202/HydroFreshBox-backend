import React, { useState } from "react";
import { newsletter } from "./newsletterApi";

function Newsletter() {

  const [values, setValues] = useState({
    email: "",
    error: "",
    success: false,
  });

  const { email, error, success } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = (event) => {
      console.log(values);
    event.preventDefault();

    // setValues({ ...values, error: false });
    newsletter({email})
      .then((values) => {
        console.log(values, email);
        if (error === true) {
          setValues({ ...values, error: error, success: false });
          console.log(error, success);
        } else {
          setValues({
            ...values,
            email: "",
            error: "",
            success: true,
          });
          console.log(error, success);
        }
      })
      .catch(console.log("Error in signup"));
  };

  const successMessage = () => {
    return (
      <div>
        <div>
          <div style={{ display: success ? "" : "none" }} >
            New account has been created!
          </div>
        </div>
      </div>
    );
  };

  const errorMessage = () => {
    return (
      <div>
        <div>
          <div style={{ display: error ? "" : "none" }} >
            {error}
          </div>
        </div>
      </div>
    );
  };

  function signUpForm() {
    return (
      <div>
        <div>
          <form>
            <div>
              <label>Email</label>
              <input
                onChange={handleChange("email")}
                type="email"
                value={email}
              />
            </div>
            <button onClick={onSubmit}>
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
  return (
    <div>
      {successMessage()}
      {errorMessage()}
      <h1>Testing</h1>
      {signUpForm()}
      <p>{JSON.stringify(values)}</p>
    </div>
  );
}

export default Newsletter;
