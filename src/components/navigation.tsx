import Link from "next/link";
import React from "react";

const Navigation = () => {
  return (
    <>
      <nav>
        <label className="logo">GUVI</label>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/userList">Users</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default Navigation;
