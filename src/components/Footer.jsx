import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container text-center">
        <p className="mb-1">Banasthali,Kathmandu</p>
        <p className="mb-1">
          Email:{" "}
          <a href="mailto:mandeepkopasal@clothshop.com" className="text-white">
            mandeepkopasal@clothshop.com
          </a>{" "}
          | Phone: +977 9800000000
        </p>
        <p className="mb-0">
          &copy; {new Date().getFullYear()} Cloth Shop. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
