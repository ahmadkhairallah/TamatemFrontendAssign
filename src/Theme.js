import React from "react";

const Theme = ({ children }) => {
  return (
    <div className="GlobalBG">
      <div className="whiteContainer">{children}</div>
    </div>
  );
};

export default Theme;
