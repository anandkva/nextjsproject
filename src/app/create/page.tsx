"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
// import { useRouter } from "next/router";
import axios, { AxiosResponse } from "axios";

interface User {
  username: string;
  email: string;
  age: number;
}

interface SuccessResponse {
  message: string;
  users: User[];
  status: number;
}

const CreateUser: React.FC = () => {
  // const router = useRouter();

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
      const response: AxiosResponse<SuccessResponse> = await axios.post(
        "/api/user",
        formData
      );
      setFormData({
        username: "",
        email: "",
        age: 0,
      });
      setResponseMessage(response.data.message);

      // if (response?.status === 200) {
      // router.push("/create"); // Now you can use router.push here
      // }
    } catch (error: any) {
      if (error.response?.message) {
        setResponseMessage(error.response.message);
      } else {
        setResponseMessage("Failed to create user");
      }
    }
  };

  return (
    <div>
      <h1>Create User</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Create User</button>
      </form>
      {responseMessage && <p>{responseMessage}</p>}
    </div>
  );
};

export default CreateUser;
