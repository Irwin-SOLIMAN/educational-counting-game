// import DifficultyArea from "../components/DifficultyArea";
// import { useState } from "react";
import PropTypes from "prop-types";
import { useEffect } from "react";

const Setting = ({
  setRange,
  setType,
  setproposallength,
  setOperator,
  range,
  proposallength,
  type,
  operator,
  winCounter,
  gamesStatus,
}) => {
  useEffect(() => {
    // Ensure range and proposallength are within bounds
    if (parseInt(proposallength) > parseInt(range)) {
      setproposallength(range);
    }
    if (type != "number") {
      if (range > 12) {
        setRange(12);
      }
    }
  }, [type, range, proposallength, setRange, setproposallength]);

  function handleChoiceType(e) {
    setType(e.target.value);
  }

  function handleChoiceOperator(e) {
    setOperator(e.target.value);
  }

  return (
    <>
      {winCounter === undefined && !gamesStatus && (
        <div className="Setting">
          <div className="Type">
            <div className="text">Type : </div>
            <button
              type="button"
              className={
                type === "number"
                  ? "btnNumber btnStyle2 smallSize minWidth"
                  : "btnNumber btnStyle1 smallSize minWidth"
              }
              value="number"
              onClick={(e) => handleChoiceType(e)}
            >
              Number
            </button>
            <button
              type="button"
              className={
                type === "letter"
                  ? "btnNumber btnStyle2 smallSize minWidth"
                  : "btnNumber btnStyle1 smallSize minWidth"
              }
              value="letter"
              onClick={(e) => handleChoiceType(e)}
            >
              Letter
            </button>
            <button
              type="button"
              className={
                type === "image"
                  ? "btnNumber btnStyle2 smallSize minWidth"
                  : "btnNumber btnStyle1 smallSize minWidth"
              }
              value="image"
              onClick={(e) => handleChoiceType(e)}
            >
              Image
            </button>
          </div>

          {type && (
            <div className="Operator">
              <div className="text">Operator : </div>
              <button
                type="button"
                className={
                  operator === "+"
                    ? "btnNumber btnStyle2 smallSize"
                    : "btnNumber btnStyle1 smallSize"
                }
                value="+"
                onClick={(e) => handleChoiceOperator(e)}
              >
                +
              </button>
              <button
                type="button"
                className={
                  operator === "-"
                    ? "btnNumber btnStyle2 smallSize"
                    : "btnNumber btnStyle1 smallSize"
                }
                value="-"
                onClick={(e) => handleChoiceOperator(e)}
              >
                -
              </button>
              {type === "number" && (
                <>
                  <button
                    type="button"
                    value="*"
                    className={
                      operator === "*"
                        ? "btnNumber btnStyle2 smallSize"
                        : "btnNumber btnStyle1 smallSize"
                    }
                    onClick={(e) => handleChoiceOperator(e)}
                  >
                    *
                  </button>
                  <button
                    type="button"
                    value="/"
                    className={
                      operator === "/"
                        ? "btnNumber btnStyle2 smallSize"
                        : "btnNumber btnStyle1 smallSize"
                    }
                    onClick={(e) => handleChoiceOperator(e)}
                  >
                    /
                  </button>
                </>
              )}
            </div>
          )}

          {operator && (
            <div>
              <div className="Range">
                <label htmlFor="range"> Range : {range}</label>
                <input
                  type="range"
                  id="range"
                  name="range"
                  value={range}
                  min="1"
                  max={type !== "number" ? "12" : "100"}
                  step="1"
                  onChange={(e) => {
                    setRange(e.target.value);
                    proposallength > range && setproposallength(e.target.value);
                  }}
                />
              </div>
              <div className="Length">
                <label htmlFor="Length">Length : {proposallength}</label>
                <input
                  type="range"
                  id="Length"
                  name="Length"
                  value={proposallength}
                  min="1"
                  max={range}
                  step="1"
                  onChange={(e) => setproposallength(e.target.value)}
                />
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

Setting.propTypes = {
  setRange: PropTypes.func,
  range: PropTypes.number,
  setType: PropTypes.func,
  type: PropTypes.string,
  setproposallength: PropTypes.func,
  proposallength: PropTypes.number,
  setOperator: PropTypes.func,
  operator: PropTypes.string,
  winCounter: PropTypes.number,
  gamesStatus: PropTypes.bool,
};

export default Setting;
