"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";

interface User {
  _id: string;
  username: string;
  email: string;
  age: number;
}
const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [Loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    axios.get<{ users: User[] }>("/api/user").then((res) => {
      setUsers(res.data.users);
    });
  }, []);

  const handleDeleteUser = async (userId: string) => {
    try {
      await axios.delete(`/api/user`, { data: { id: userId } });
      setUsers((prevUsers) => prevUsers.filter((user) => user._id !== userId));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <>
      <div className="mx-auto" style={{ margin: "auto", padding: "30px" }}>
        <Link href="/create" className="btn btn-primary">
          Add
        </Link>
      </div>

      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Age</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        {users.length > 0 ? (
          users.map((user, index) => (
            <tr key={user._id}>
              <th scope="row">{index + 1}</th>
              <th scope="row">{user.username}</th>
              <td>{user.email}</td>
              <td>{user.age}</td>
              <td>
                {" "}
                <Link
                  className="btn btn-success"
                  href={`/editUser/${user._id}`}
                >
                  Edit
                </Link>
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDeleteUser(user._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <th>Loading ... </th>
          </tr>
        )}
      </table>
    </>
  );
};
export default UserList;
