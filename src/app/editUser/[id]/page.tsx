"use client";

import { useState, useEffect, ChangeEvent } from "react";
import { useRouter } from "next/navigation";
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
  const router = useRouter();
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
      await axios
        .put(`/api/user`, {
          id: formData._id,
          username: formData.username,
          email: formData.email,
          age: formData.age,
        })
        .then((response) => {
          if (response?.status === 200) {
            router.push("/userList");
          }
          console.log("User updated successfully!");
        });
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  return (
    <div className="container">
      <br />
      <h1>Edit User</h1>

      <form>
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
        <div className="mb-3">
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
        <div className="mb-3">
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
        <button className="btn btn-primary" onClick={handleUpdateUser}>
          Update User
        </button>
      </form>
    </div>
  );
};

export default EditUserPage;
