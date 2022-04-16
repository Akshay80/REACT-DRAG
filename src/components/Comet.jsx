import React from "react";
import { ReactComponent as Teams } from "../images/teams.svg";
import { ReactComponent as Aca } from "../images/aca.svg";
import { ReactComponent as Indi } from "../images/indi.svg";

export default function Comet() {
  return (
    <>
      <div className="container-fluid">
        <div className="row bgGradiant">
          <div className="col-md-12">
          <div className="container">
          <h2 className="featurette-heading my-3 before text-center">Who is Comet for?</h2>
            <div className="row boxPadding beforeBox">
              <div className="col-md-4 col-sm-12">
                <div className="box">
                  <div className="svgBox">
                    <Teams />
                  </div>
                  <div className="boxContent">
                    <h1>Enterprise and Teams</h1>
                    <p>
                    Teams and organizations use Comet to improve visibility, collaboration, and productivity, driving business value from AI.
                    </p>
                    <p className="link">Learn More</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-12">
                <div className="box">
                  <div className="svgBox">
                    <Indi />
                  </div>
                  <div className="boxContent">
                    <h1>Individuals</h1>
                    <p>
                    Track, compare, explain, and reproduce your ML experiments. Leverage insights and data to build better models, faster.
                    </p>
                    <p className="link">Learn More</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-12">
                <div className="box">
                  <div className="svgBox">
                    <Aca />
                  </div>
                  <div className="boxContent">
                    <h1>Academics</h1>
                    <p>
                    Easily track, compare, explain, and reproduce your ML experiments. Publish reproducible papers and easily collaborate with colleagues.
                    </p>
                    <p className="link">Learn More</p>
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
