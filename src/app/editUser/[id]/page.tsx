"use client";

import { useState, useEffect, ChangeEvent } from "react";
import axios from "axios";

interface User {
  _id: string;
  username: string;
  email: string;
  age: number;
}

interface UserTwo {
  user: {
    _id: string;
    username: string;
    email: string;
    age: number;
  };
}

interface PageProps {
  params: { id: string };
}

const EditUserPage: React.FC<PageProps> = ({ params }) => {
  const [formData, setFormData] = useState<User>({
    _id: "",
    username: "",
    email: "",
    age: 0,
  });

  const fetchUserDetails = async () => {
    try {
      const response = await axios.get<UserTwo>(`/api/user/${params.id}`);
      setFormData(response.data.user);
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };

  useEffect(() => {
    fetchUserDetails();
  }, []);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleUpdateUser = async () => {
    try {
      await axios.put(`/api/user`, {
        id: formData._id,
        username: formData.username,
        email: formData.email,
        age: formData.age,
      });
      console.log("User updated successfully!");
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  return (
    <div>
      <h2>Edit User</h2>
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
      <button onClick={handleUpdateUser}>Update User</button>
    </div>
  );
};

export default EditUserPage;
