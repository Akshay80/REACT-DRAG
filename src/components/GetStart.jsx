import React from "react";

export default function GetStart() {
  return (
    <>
      <div className="container-fluid">
        <div className="row bgImage py-5">
          <div className="col-md-12">
            <div className="container">
              <h2 className="featurette-heading my-3 before text-center">
                Get started today for free
              </h2>
              <div className="boxContent">
                <p className="text-center fs-3 fw-light">
                  Trusted By Tens Of Thousands Of Data Scientists And Across The
                  Fortune 100.
                </p>
              </div>

              <div
                class="btn-group text-center d-block pt-5 pb-3"
                role="group"
                aria-label="Basic mixed styles example"
              >
                <button type="button" class="m-3 px-3 fs-5 btn btn-danger">
                  Create A Free Account
                </button>
                <button type="button" class="btn fs-5 btn-outline-danger px-5">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
