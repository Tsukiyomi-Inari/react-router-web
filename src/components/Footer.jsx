import React from "react";



function Footer() {
  return (
    <div className="footer">
      <footer className="py-2  fixed-bottom opacity-50">
        <div className="container">
          <p className="m-0 text-center text-muted">
            Copyright &copy; <a href="https://github.com/Tsukiyomi-Inari" target="_blank" rel="noreferrer">Katherine Bellman  {new Date().getFullYear()} </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;