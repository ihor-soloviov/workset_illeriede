/* eslint-disable react/prop-types */
import "./Container.scss";

export const Container = ({ children, className ="container" }) => (
  <div className={className}>{children}</div>
);
