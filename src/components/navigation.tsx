import Link from "next/link";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const Navigation = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <Link href="/" className="navbar-brand">
            GUVI
          </Link>
          <div className="collapse navbar-collapse float-right">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link href="/" className="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" href="/userList">
                  Users
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navigation;
