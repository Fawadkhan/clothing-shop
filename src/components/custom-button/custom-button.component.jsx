import React from "react";
import './custom-button.styles.scss'

const CustomButton = ({ children, isGoogleSignIn, ...otherButtonProps }) => (
  <button className={`${isGoogleSignIn ? "google-button" : '' } custom-button`} {...otherButtonProps}>
    {children}
  </button>
);
export default CustomButton;
