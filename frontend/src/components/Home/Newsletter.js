import React, { useState } from "react";
import $ from "jquery";
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
        console.log(values.error, values.success);
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

  var vidAnimation = $('.success');
    
    const handleMouseMove = ((e) => {
        e.persist();
        
        vidAnimation.css({
            'transition': "0.5s ease",
            'opacity': 0,
            'z-index': -1
        });
    });

  const successMessage = () => {

    return (
      <div className="success" style={{ display: values.success ? true : "none" }} >
        <div className="newsletter__successMessage--background"></div>
        <div className="scale-in-top newsletter__successMessage">
          <div className="x" onClick={handleMouseMove}>
          </div>
          <p className="newsletter__successMessage--text">Congrats! You are now subscribed. 🎉</p>
        </div>
      </div>
    );
  };

  const errorMessage = () => {
    return (
      <div className="newsletter__errMessage" style={{ display: values.error ? "" : "none" }} >
        Oops! {error}
      </div>
    );
  };


  return (
    <>
    <div className="newsletterSection">
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
          {successMessage()}
          {errorMessage()}
        </div>
      {/* <p>{JSON.stringify(values)}</p> */}
    </div>

   </>
  );
}

export default Newsletter;
