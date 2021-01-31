import React, { useState } from "react";
import "../../styles/newsletter.scss";
import { newsletter } from "../../apiCalls/newsletterApi";

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
      // console.log(values);
    event.preventDefault();

    newsletter({email})
    .then((values) => {
      // console.log(values, email);
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
      }
    })
      .catch(error => {
            console.log('Error fetching and parsing data', error);
     });
  };
  // console.log(values);
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


  return (
    <div className="newsletterSection">
      {successMessage()}
      {errorMessage()}
      <p className="newsletter__newsletterHeading">Newsletter</p>
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

      <p>{JSON.stringify(values)}</p>
    </div>
  );
}

export default Newsletter;
