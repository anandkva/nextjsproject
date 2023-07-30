"use client";

import React from "react";

const Home: React.FC = () => {
  return (
    <>
      <div className="card">
        <div className="card-header">
          Simple CRUD with Next.js and TypeScript
        </div>
        <div className="card-body">
          This project is a simple example of how to create a CRUD (Create,
          Read, Update, Delete) application using Next.js and TypeScript. The
          application uses the following technologies:
        </div>

        <ul className="list-group list-group-flush">
          <li className="list-group-item">Next.js</li>
          <li className="list-group-item">TypeScript</li>
          <li className="list-group-item">MongoDB</li>
          <li className="list-group-item">Mongoose</li>
        </ul>
        <p className="card-text">
          The application allows users to create, read, update, and delete
          records in a MongoDB database. It uses only Next.js.
        </p>
      </div>
    </>
  );
};

export default Home;
