import React from "react";
import { Anchor } from "antd";

const { Link } = Anchor;


const onChange = (link) => {
  console.log("Anchor:OnChange", link);
};


function AppHeader() {
  return (
    <div className="container-fluid">
      <div className="header">
        <div className="logo">
          <i className="fas fa-bolt">
            <a href="http://www.google.com">Tech</a>
          </i>
        </div>
        <Anchor targetOffset={65} affix={false} onChange={onChange}>
          <Link href="#hero" title=" Home" />
          <Link href="#about" title=" About" />
          <Link href="#feature" title=" Features" />
          <Link href="#works" title=" How It Works" />
          <Link href="#pricing" title=" Pricing" />
          <Link href="#contact" title=" Contact" />
        </Anchor>
      </div>
    </div>
  );
}

export default AppHeader;
