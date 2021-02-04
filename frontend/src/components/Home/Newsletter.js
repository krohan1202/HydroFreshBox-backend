import React, { useState } from "react";
import "../../styles/newsletter.scss";
import Arrow from "../../assets/arrow.svg";
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
      console.log(values, email);
      if (values.error) {
        setValues({ ...values, error: values.error, success: false });
        console.log(values.error, success);
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
      <div style={{ display: values.success ? true : "none" }} >
        New account has been created!
      </div>
    );
  };

  const errorMessage = () => {
    return (
      <div style={{ display: values.error ? "" : "none" }} >
        {error}
      </div>
    );
  };


  return (
    <div className="newsletterSection">
      {successMessage()}
      {errorMessage()}
      <p className="newsletter__newsletterHeading">NEWSLETTER</p>

      <div className="newsletter__firstHeading">
        <span className="newsletter__firstHeading--subscribe">Subscribe</span>
        <span className="newsletter__firstHeading--toGet">to get</span>
      </div>
      <div>
        <p className="newsletter__secondHeading--latestUpdates">the latest updates</p>
      </div>

      <div className="newsletter__emailPart">
          <form>
            
              <input
              className="newsletter__emailBox"
                onChange={handleChange("email")}
                type="email"
                value={email}
                placeholder="Email address"
                pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$" required
              />
            
              <button className="newsletter__subscribeBtn" onClick={onSubmit}>
                <img id="newsletter__subscribeBtn--arrow" src={Arrow} /> Subscribe
              </button>
            
          </form>
        </div>

      {/* <p>{JSON.stringify(values)}</p> */}
    </div>
  );
}

export default Newsletter;
