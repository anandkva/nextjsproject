"use client";

import React from "react";
import Link from "next/link";
import Footer from "@/components/footer";

const Home: React.FC = () => {
  return (
    <>
      <div className="container my-3">
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
          <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <div className="lc-block mb-3">
              <div>
                <h2 className="fw-bold display-4">
                  The Full-Stack CRUD Project: Next.js + TypeScript + MongoDB!
                  💻🚀<p></p>
                  <p></p>
                </h2>
              </div>
            </div>
            <div className="lc-block mb-3">
              <div>
                <p className="lead">
                  Experience the full-stack power of Next.js 13, TypeScript, and
                  Mongoose! This app provides seamless CRUD functionality,
                  enabling you to effortlessly create, list, edit, and delete
                  users.
                </p>
              </div>
            </div>

            <div className="lc-block d-grid gap-2 d-md-flex justify-content-md-start">
              <Link className="btn btn-primary px-4 me-md-2" href={"/userList"}>
                Check UserList
              </Link>
            </div>
          </div>
          <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
            <div className="lc-block">
              <img
                className="rounded-start"
                src="https://res.cloudinary.com/practicaldev/image/fetch/s--Vxs8aFt8--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/mimf7dkcbafm7u647ln3.png"
                alt="Photo by Diego PH"
                width="100%"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
