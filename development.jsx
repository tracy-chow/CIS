import React from "react";
import { Skill } from "./Skill";
import "./style.css";

export const Development = () => {
  return (
    <div className="development">
      <div className="frame">
        <div className="close-wrapper">
          <div className="close">
            <div className="overlap-group">
              <img className="line" alt="Line" src="line-2.svg" />
            </div>
          </div>
        </div>
        <div className="about-header">
          <div className="div">
            <img className="img" alt="Development" src="development.png" />
            <Skill
              className="skill-instance"
              divClassName="skill-2"
              hasDiv={false}
              headlineSubheadClassName="design-component-instance-node"
              text="DEVELOPMENT"
              visible={false}
            />
          </div>
          <div className="bio-text">
            Project-Based Learning
            <br />
            <br />
            STEAM
            <br />
            <br />
            IB Curriculum
          </div>
        </div>
      </div>
    </div>
  );
};
