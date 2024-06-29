import React from "react";

function AppFooter() {
  return (
    <div className="container-fluid">
      <div className="footer">
        <div className="logo">
            <i className=" fas fa-bolt"></i>
            <a href="www.Google.com">Tech</a>
        </div>
        <ul className="socials">
            <li><a href="www.facebook.com"><i className="fab fa-facebook"></i> </a> </li>
            <li><a href="www.twitter.com"><i className="fab fa-twitter"></i> </a> </li>
            <li><a href="www.youtube.com"><i className="fab fa-youtube"></i> </a> </li>
            <li><a href="www.linkedin.com"><i className="fab fa-linkedin"></i> </a> </li>
            <li><a href="www.instagram.com"><i className="fab fa-instagram"></i> </a> </li>
        </ul>
      <div className="copyright">Copyright &copy; 2024 Qazi</div>
      </div>
    </div>
  );
}
export default AppFooter;
