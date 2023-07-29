"use client";

import React from "react";

const Home = () => {
  return (
    <>
      <header>
        <h1>Simple CRUD with Next.js and TypeScript</h1>
        <p>
          This project is a simple example of how to create a CRUD (Create,
          Read, Update, Delete) application using Next.js and TypeScript.
        </p>
      </header>
      <main className="hero">
        <p>The application uses the following technologies:</p>
        <ul>
          <li>Next.js</li>
          <li>TypeScript</li>
          <li>MongoDB</li>
          <li>Mongoose</li>
        </ul>
        <p>
          The application allows users to create, read, update, and delete
          records in a MongoDB database. It uses only Next.js.
        </p>
      </main>
    </>
  );
};

export default Home;
