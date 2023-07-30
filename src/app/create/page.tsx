"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

interface User {
  username: string;
  email: string;
  age: number;
}

interface SuccessResponse {
  users: User[];
  status: number;
}

const CreateUser: React.FC = () => {
  const router = useRouter();

  const [formData, setFormData] = useState<User>({
    username: "",
    email: "",
    age: 0,
  });
  const [responseMessage, setResponseMessage] = useState<string>("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();
    try {
      await axios.post("/api/user", formData).then((response) => {
        setFormData({
          username: "",
          email: "",
          age: 0,
        });
        setResponseMessage(response.data.message);

        if (response?.status === 200) {
          router.push("/userList");
        }
      });
    } catch (error: any) {
      if (error.response?.message) {
        setResponseMessage(error.response.message);
      } else {
        setResponseMessage("Failed to create user");
      }
    }
  };

  return (
    <div className="container">
      <h1>Create User</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="username">
            Username:
          </label>
          <input
            className="form-control"
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label className="form-label" htmlFor="email">
            Email:
          </label>
          <input
            className="form-control"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label className="form-label" htmlFor="age">
            Age:
          </label>
          <input
            className="form-control"
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
          />
        </div>
        <br />
        <button className="btn btn-primary" type="submit">Create User</button>
      </form>
      {responseMessage && <p>{responseMessage}</p>}
    </div>
  );
};

export default CreateUser;
