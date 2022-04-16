import React from "react";
import Fast from "../images/newFast.png";
export default function Services() {
  return (
    <>
      <div className="container-fluid">
        <div className="row divBG">
          <div className="col-md-12">
            <div className="container ">
              <div className="row featurette py-5">
                <div className="col-12 col-lg-5 contentWrapperRight">
                  <h2 className="featurette-heading">Fast Integration</h2>
                  <p className="lead">
                    Add a single line of code to your notebook or script and
                    start tracking your experiments. Works wherever you run your
                    code, with any machine learning library, and for any machine
                    learning task.
                  </p>
                </div>
                <div className="col-12 col-lg-7">
                  <div className="imgService text-center">
                    <img src={Fast} alt="" />
                  </div>
                  <div className="text-end">
                    <button className="btn btn-danger px-5 fs-5">Run</button>
                  </div>
                </div>
              </div>
              <div className="row featurette align-items-center flex-row-reverse py-5">
                <div className="col-12 col-lg-5 contentWrapperLeft">
                  <h2 className="featurette-heading">Compare Experiments</h2>
                  <p className="lead">
                    Easily compare experiments—code, hyperparameters, metrics,
                    predictions, dependencies, system metrics, and more—to
                    understand differences in model performance.
                  </p>
                </div>
                <div className="col-12 col-lg-7">
                  <div className="imgService text-center">
                    <img
                      src="https://www.comet.ml/site/app/uploads/2020/01/Compare-Experiments-pic.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="row featurette py-5">
                <div className="col-12 col-lg-5 contentWrapperRight">
                  <h2 className="featurette-heading">Debug. Monitor. Alert.</h2>
                  <p className="lead">
                    Monitor your models during every step from training to
                    production. Get alerts when something is amiss, and debug
                    your models to address the issue.
                  </p>
                </div>
                <div className="col-12 col-lg-7">
                  <div className="imgService text-center">
                    <img
                      src="https://www.comet.ml/site/app/uploads/2021/04/Comet-MPM-Homepage-Image-768x425.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="row featurette align-items-center flex-row-reverse py-5">
                <div className="col-12 col-lg-5 contentWrapperLeft">
                  <h2 className="featurette-heading">Workspaces & Reports</h2>
                  <p className="lead">
                    Increase productivity, collaboration, and visibility across
                    data scientists, data science teams, and even your business
                    stakeholders.
                  </p>
                </div>
                <div className="col-12 col-lg-7">
                  <div className="imgService text-center">
                    <img
                      src="https://www.comet.ml/site/app/uploads/2020/12/Screen-Shot-2020-12-02-at-2.11.52-PM-1-768x375.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="row featurette py-5">
                <div className="col-12 col-lg-5 contentWrapperRight">
                  <h2 className="featurette-heading">Panels</h2>
                  <p className="lead">
                    Build custom visualizations based on experiments and model
                    data, or use community provided ones. Debug, explain and
                    visualize with no limits.
                  </p>
                </div>
                <div className="col-12 col-lg-7">
                  <div className="imgService text-center">
                    <img
                      src="https://www.comet.ml/site/app/uploads/2020/08/Code-your-Own-PS-1-768x344.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
