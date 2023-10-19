/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import "./Range.scss";
import {
  Box,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
} from "@chakra-ui/react";

export const Range = ({ range, setRange, setIsError, isError }) => {
  const toFormatRange = (value) =>
  value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  const formatedRange = toFormatRange(range);

  const [editing, setIsEditing] = useState(false);
  const [editingValue, setEditingValue] = useState(formatedRange);

  const rangeInputValue = editingValue.replace(".", "");

  const onEscape = (event) => {
    if (event.key === "Escape") {
      setIsEditing(false);
    } else if (event.key === "Enter") {
      blurHandler(event);
    }
  };

  const blurHandler = (event) => {
    setIsEditing(false);
    if (Number(event.target.value) > 15000) {
      setIsError(true);
    } else {
      setEditingValue(toFormatRange(event.target.value));
      setIsError(false);
    }
  };

  const handleValueChange = (event) => {
    setRange(toFormatRange(event.target.value));
  };

  useEffect(() => {
    setRange(toFormatRange(editingValue));
  }, [editingValue]);

  return (
    <div className="range">
      <div className="lead-container">
        <div className="range-inner">
          <div className="range-kwh">
            <p>kWh:</p>
            {!editing ? (
              <span onClick={() => setIsEditing(true)}>{editingValue}</span>
            ) : (
              <input
                onKeyUp={onEscape}
                className="range-input"
                onChange={(event) => handleValueChange(event)}
                onBlur={blurHandler}
                type="text"
                defaultValue={editingValue}
              />
            )}

            {isError && <p className="error-message">Der Wert ist zu hoch</p>}
          </div>
          <Box>
            <Slider
              min={1000}
              max={15000}
              step={10}
              value={rangeInputValue}
              onChange={(val) => setEditingValue(toFormatRange(val))}
              aria-label="slider-ex-4"
            >
              <SliderTrack bg="#CBCBD4">
                <SliderFilledTrack bg="#D92134" />
              </SliderTrack>
              <SliderThumb boxSize={6} bg="#D92134"></SliderThumb>
            </Slider>
          </Box>
          <div className="range-minmax">
            <p>1.000</p>
            <p>15.000</p>
          </div>
        </div>
      </div>
    </div>
  );
};
