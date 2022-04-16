import React from "react";
import { ReactComponent as Acc } from "../images/acc.svg";
import { ReactComponent as Business } from "../images/bussiness.svg";
import { ReactComponent as Run } from "../images/run.svg";

export default function Boxes() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <div className="boxesHead">
              <h1 className="pb-5 text-center">
                Trusted by tens of thousands of data scientists and across the
                Fortune 100.
              </h1>
            </div>
          </div>
        </div>
        <div className="row pt-5">
          <div className="flexBox">
            <div className="logos">
              <img
                src="https://www.comet.ml/site/app/uploads/2021/07/uber-logo.png"
                alt=""
              />
            </div>

            <div className="logos">
              <img
                src="https://www.comet.ml/site/app/uploads/2020/02/Autodesk_Logo-svg-e1582743376730.png"
                alt=""
              />
            </div>

            <div className="logos">
              <img
                src="https://www.comet.ml/site/app/uploads/2020/01/ancestry1-b.jpg"
                alt=""
              />
            </div>

            <div className="logos">
              <img
                src="https://www.comet.ml/site/app/uploads/2020/01/cern-b.jpg"
                alt=""
              />
            </div>

            <div className="logos">
              <img
                src="https://www.comet.ml/site/app/uploads/2022/02/zappos-logo.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row bgGradiant">
          <div className="col-md-12">
          <div className="container">
            <div className="row boxPadding">
              <div className="col-md-4 col-sm-12">
                <div className="box">
                  <div className="svgBox">
                    <Acc />
                  </div>
                  <div className="boxContent">
                    <h1>Accelerate Development</h1>
                    <p>
                      Manage and optimize models across the entire ML lifecycle,
                      from experiment tracking to monitoring models in
                      production.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-12">
                <div className="box">
                  <div className="svgBox">
                    <Business />
                  </div>
                  <div className="boxContent">
                    <h1>Drive Business Value</h1>
                    <p>
                      Achieve your goals faster with the platform built to meet
                      the intense demands of enterprise teams deploying ML at
                      scale.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-12">
                <div className="box">
                  <div className="svgBox">
                    <Run />
                  </div>
                  <div className="boxContent">
                    <h1>Run Comet Anywhere</h1>
                    <p>
                      Supports your deployment strategy whether it’s private
                      cloud, on-premise servers, or hybrid.
                    </p>
                  </div>
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
