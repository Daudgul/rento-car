import React from "react";
import Style from './Footer.module.css'

const Footer = () => {
  return <div className={Style.footer}>
    <ul>
        <li>about</li>
        <li>contact us</li>
        <li>info</li>
        <li>projects</li>
        <li>review</li>
    </ul>
  </div>;
};

export default Footer;
