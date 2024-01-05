import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

export const Management = ({ property1, className }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div className={`management ${className}`}>
      <div
        className={`skill ${state.property1}`}
        onMouseLeave={() => {
          dispatch("mouse_leave");
        }}
        onMouseEnter={() => {
          dispatch("mouse_enter");
        }}
      >
        <img
          className="development"
          alt="Development"
          src={
            state.property1 === "variant-2"
              ? "development-3.png"
              : state.property1 === "variant-3"
              ? "development-4.png"
              : state.property1 === "variant-4"
              ? "development.png"
              : "development-2.png"
          }
        />
        <div className="headline-subhead-wrapper">
          <div className="headline-subhead">
            <div className="text-wrapper">Development</div>
          </div>
        </div>
      </div>
      <div
        className={`div property-1-0-${state.property1}`}
        onMouseLeave={() => {
          dispatch("mouse_leave_104");
        }}
        onMouseEnter={() => {
          dispatch("mouse_enter_104");
        }}
      >
        <img
          className="implementation"
          alt="Implementation"
          src={
            state.property1 === "variant-2"
              ? "implementation-3.png"
              : state.property1 === "variant-3"
              ? "implementation-4.png"
              : state.property1 === "variant-4"
              ? "implementation.png"
              : "implementation-2.png"
          }
        />
        <div className="headline-subhead-wrapper">
          <div className="headline-subhead">
            <div className="text-wrapper">Implementation</div>
          </div>
        </div>
      </div>
      <div
        className={`skill-2 property-1-2-${state.property1}`}
        onMouseLeave={() => {
          dispatch("mouse_leave_111");
        }}
        onMouseEnter={() => {
          dispatch("mouse_enter_111");
        }}
      >
        <img
          className="evaluation"
          alt="Evaluation"
          src={
            state.property1 === "variant-2"
              ? "evaluation-3.png"
              : state.property1 === "variant-3"
              ? "evaluation.png"
              : state.property1 === "variant-4"
              ? "image.png"
              : "evaluation-2.png"
          }
        />
        <div className="headline-subhead-wrapper">
          <div className="headline-subhead">
            <div className="text-wrapper">Evaluation</div>
          </div>
        </div>
      </div>
    </div>
  );
};

function reducer(state, action) {
  if (state.property1 === "variant-2") {
    switch (action) {
      case "mouse_leave":
        return {
          property1: "variant-4",
        };
    }
  }

  if (state.property1 === "variant-3") {
    switch (action) {
      case "mouse_leave_104":
        return {
          property1: "variant-4",
        };
    }
  }

  if (state.property1 === "variant-4") {
    switch (action) {
      case "mouse_leave_111":
        return {
          property1: "variant-3",
        };
    }
  }

  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        property1: "variant-2",
      };

    case "mouse_enter_104":
      return {
        ...state,
        property1: "variant-3",
      };

    case "mouse_enter_111":
      return {
        ...state,
        property1: "variant-4",
      };
  }

  return state;
}

Management.propTypes = {
  property1: PropTypes.oneOf(["variant-4", "variant-2", "variant-3", "default"]),
};
