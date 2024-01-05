import React from "react";
import { Alignment } from "./Alignment";
import { LogosSection } from "./LogosSection";
import { Management } from "./Management";
import { Navigation } from "./Navigation";
import "./style.css";

export const ElementPortfolio = () => {
  return (
    <div className="element-portfolio">
      <Navigation
        className="navigation-instance"
        hasDiv={false}
        href="https://www.animaapp.com/?utm_source=figma-samples&utm_campaign=figma-portfolio22&utm_medium=figma-samples"
        href1="https://www.linkedin.com/in/tracy-c-nyc/"
        href2="mailto:tracy.chow.ca@gmail.com"
        property="desktop"
      />
      <div className="header">
        <div className="header-2">
          <div className="headline-subhead-3">
            <div className="headline-subhead-3">
              <img className="tracy-chow" alt="Tracy chow" src="tracy-chow.png" />
            </div>
            <p className="p">
              Director of Curriculum Candidate,
              <br />
              Chinese International School Hong Kong
            </p>
          </div>
          <img className="CIS-image" alt="Cis image" src="CIS-image-1.png" />
        </div>
      </div>
      <div className="logos-section-2">
        <p className="role-2">
          <span className="span">
            Role Description
            <br />
          </span>
          <span className="text-wrapper-5">(from Schrole)</span>
        </p>
        <p className="and-i-made-it-myself-2">
          The Director of Curriculum will play a vital role in overseeing and managing the development, implementation,
          and evaluation of our vertically and horizontally integrated whole school curriculum, which includes our
          Primary School bilingual curriculum, the Middle Years Programme, the CIS Years 10-11 curriculum and the IB
          Diploma Programme. The Director will collaborate to ensure that our educational programmes align with academic
          standards, meet the needs of our diverse learners, promote student success and support the school’s mission.
        </p>
      </div>
      <div className="skills-section">
        <div className="text-wrapper-6">Management</div>
        <Management
          className="design-component-instance-node-2"
          development="image.png"
          evaluation="evaluation-2.png"
          implementation="implementation-2.png"
          property1="default"
        />
        <div className="text-wrapper-7">Alignment</div>
        <Alignment
          academicStandards="academic-standards-2.png"
          className="design-component-instance-node-2"
          diverseLearners="diverse-learners-2.png"
          property1="default"
          schoolSMission="school-s-mission-2.png"
        />
      </div>
      <div className="frame-2">
        <LogosSection
          andIMadeItMyselfClassName="logos-section-4"
          className="logos-section-instance"
          divClassName="logos-section-3"
          property="desktop"
          text="What specifically attracts you to CIS?"
          text1="My upbringing was a symphony of cultures. Educated in Hong Kong, Canada, and the United States, I learned to speak multiple languages and navigate diverse perspectives. My parents, like CIS does for its students, instilled in me the values 仁, 義, 禮, 智, and 信. When I found a school upholding these same principles, I felt an instant connection. My journey, a tapestry woven from East and West, has nurtured my ability to build bridges, innovate, and solve problems not just for a single community, but for the global village we share. It is in a school filled with educators, students, and families who embrace these values that I long to collaborate with, to learn from, and to contribute my skills."
        />
        <LogosSection
          andIMadeItMyselfClassName="logos-section-4"
          className="logos-section-instance"
          divClassName="logos-section-3"
          property="desktop"
          text="How do you see your role as a member of a dual-language community?"
          text1="The Director of Curriculum will play a vital role in overseeing and managing the development, implementation, and evaluation of our vertically and horizontally integrated whole school curriculum, which includes our Primary School bilingual curriculum, the Middle Years Programme, the CIS Years 10-11 curriculum and the IB Diploma Programme. The Director will collaborate to ensure that our educational programmes align with academic standards, meet the needs of our diverse learners, promote student success and support the school’s mission."
        />
        <LogosSection
          andIMadeItMyselfClassName="logos-section-4"
          className="logos-section-instance"
          divClassName="logos-section-3"
          property="desktop"
          text="How have you impacted your current school / work place and wider community?"
          text1="The Director of Curriculum will play a vital role in overseeing and managing the development, implementation, and evaluation of our vertically and horizontally integrated whole school curriculum, which includes our Primary School bilingual curriculum, the Middle Years Programme, the CIS Years 10-11 curriculum and the IB Diploma Programme. The Director will collaborate to ensure that our educational programmes align with academic standards, meet the needs of our diverse learners, promote student success and support the school’s mission."
        />
        <LogosSection
          andIMadeItMyselfClassName="logos-section-4"
          className="logos-section-instance"
          divClassName="logos-section-3"
          property="desktop"
          text="How do you empower students / co-workers to be fully engaged as learners?"
          text1="The Director of Curriculum will play a vital role in overseeing and managing the development, implementation, and evaluation of our vertically and horizontally integrated whole school curriculum, which includes our Primary School bilingual curriculum, the Middle Years Programme, the CIS Years 10-11 curriculum and the IB Diploma Programme. The Director will collaborate to ensure that our educational programmes align with academic standards, meet the needs of our diverse learners, promote student success and support the school’s mission."
        />
        <LogosSection
          andIMadeItMyselfClassName="logos-section-4"
          className="logos-section-instance"
          divClassName="logos-section-3"
          property="desktop"
          text="What are your greatest strengths?"
          text1="The Director of Curriculum will play a vital role in overseeing and managing the development, implementation, and evaluation of our vertically and horizontally integrated whole school curriculum, which includes our Primary School bilingual curriculum, the Middle Years Programme, the CIS Years 10-11 curriculum and the IB Diploma Programme. The Director will collaborate to ensure that our educational programmes align with academic standards, meet the needs of our diverse learners, promote student success and support the school’s mission."
        />
      </div>
    </div>
  );
};
