/* eslint-disable react/prop-types */
import "./GridContainer.scss";

export const GridContainer = ({ array, handleOption, grid, step }) => (
  <div className={grid}>
    {array.map(({ value, img }) => (
      <button
        key={value}
        className={`grid__item ${step}`}
        onClick={() => handleOption(value)}
      >
        <img
          className={`${step}`}
          src={img}
          alt={value}
        />
        <p className={`${step}`}>{value}</p>
      </button>
    ))}
  </div>
);
