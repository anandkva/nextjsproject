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
  useEffect(() => {
    axios.get<{ users: User[] }>("/api/user").then((res) => {
      setUsers(res.data.users);
    });
  }, []);

  const handleDeleteUser = async (userId: string) => {
    try {
      await axios.delete(`/api/user`, { data: { id: userId }});
      setUsers((prevUsers) => prevUsers.filter((user) => user._id !== userId));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>
              <Link href="/create">Add</Link>
            </th>
          </tr>
        </thead>
        {users.length > 0 &&
          users.map((user) => (
            <tr key={user._id}>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.age}</td>
              <td> <Link href={`/editUser/${user._id}`}>Edit</Link></td>
              <td>
                <button onClick={() => handleDeleteUser(user._id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
      </table>
    </>
  );
};
export default UserList;
