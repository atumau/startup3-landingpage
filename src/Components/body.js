import React from "react";
import "./style/body.css";
function App() {
  return (
    <div className="container body">
      <div className="row main mt-5">
        <div className="col-md-6 text-class">
          <h1 className="sign-up text-start text-white" data-aos="flip-right">
            Generate
          </h1>
          <h1 className="sign-up text-white" data-aos="flip-right">
            Awesome web
          </h1>
          <h1 className="sign-up text-white" data-aos="flip-right">
            Pages
          </h1>
          <p className="para mt-4 text-white" data-aos="fade-right">
            The most important part of this startup is samples. The samples form
            a set of 25 usable pages you can use as is or you can add new
            blocks.
          </p>
          <button className="butto mt-4">Learn More</button>
        </div>
        <div className="col-md-6 right">
          <h1>Sign Up Now</h1>
          <form className="p-2">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              className="form-control mt-4"
            />

            <input
              className="mt-4"
              type="password"
              id="password"
              name="password"
              placeholder="Your Password"
            />

            <div className="check gap-2 form-check mt-3">
              <input type="checkbox" className="form-check-input1" />
              <label className="form-check-label">
                I agree to the Terms of service
              </label>
            </div>

            <button type="button" className="btn btn-primary but2 mt-3">
              Sign Up
            </button>
            <div className="divider mb-3">
              <hr />
              <span className="or-text">or</span>
            </div>

            <button type="button" className="btn btn-primary but1">
              Login via Twitter
            </button>
            <div className="do-you mt-3">
              <p className="p-1">Do you have an account?</p>
              <a className="text-dark" href="#">
                &nbsp;Sign In
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
