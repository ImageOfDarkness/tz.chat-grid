import React from "react";
import PropTypes from "prop-types";
import voskl from "../images/voskl.svg";

export default function Card({
  children,
  rect,
  big,
  className,
  color,
  gridArea,
  image,
}) {
  let finalClass = "card";
  finalClass += rect ? " card--rect" : "";
  finalClass += big ? " card--big" : "";
  finalClass += image ? " card--image" : "";
  finalClass += className ? ` ${className}` : "";
  finalClass += color ? ` card--${color}` : "";

  return (
    <div style={{ gridArea: gridArea }} class={finalClass}>
      {image && <img src={image} className="card__background" alt="" />}
      <div class="card__body">{children}</div>
      {image && <img src={voskl} className="card__voskl" alt="" />}
    </div>
  );
}

Card.propTypes = {
  color: PropTypes.oneOf(["gray", "white", "blue", "yellow"]),
};
