import React from "react";


function Footer() {
  return (
    <div className="footer">
      <footer className="py-2  fixed-bottom">
        <div className="container">
          <p className="m-0 text-center text-muted">
            Copyright &copy; Kat MODE4201 {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;