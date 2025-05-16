import React from "react";

const Tooltip = ({
  children,
  title,
  className = "btn btn-dark",
}) => {
  return (
    <div className="custom-tippy">
        {children ? children : <button className={className}>{title}dasdsa</button>}
    </div>
  );
};

export default Tooltip;
