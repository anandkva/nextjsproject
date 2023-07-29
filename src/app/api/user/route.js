// route.js

import { NextResponse } from "next/server";
import connectMongoDB from "@/libs/mongodb";
import Users from "@/models/user";
import User from "@/models/user";

export const POST = async (request) => {
  try {
    const { username, email, age } = await request.json();
    await connectMongoDB();

    const newUser = new Users({ username, email, age });
    const savedUser = await newUser.save();

    return NextResponse.json({ users: savedUser });
  } catch (error) {
    if (error.code === 11000) {
      // Duplicate key error (email already exists)
      return NextResponse.json({
        message: "Email already exists",
        status: 400,
      });
    } else {
      console.error("Error creating user:", error);
      return NextResponse.json({
        message: "Failed to create user",
        status: 500,
      });
    }
  }
};

export const GET = async () => {
  try {
    await connectMongoDB();

    const userList = await Users.find();
    const UserCount = await User.count()

    return NextResponse.json({
      users: userList,
      count: UserCount,
      status: 200,
    });
  } catch (error) {
    console.error("Error Get all users:", error);
    return NextResponse.json({
      message: "Failed to Get all users",
      status: 500,
    });
  }
};

export const PUT = async (request) => {
  try {
    const { id, username, email, age } = await request.json();
    await connectMongoDB();

    const updatedUser = await Users.findByIdAndUpdate(
      id,
      { username, email, age },
      { new: true }
    );

    if (!updatedUser) {
      return NextResponse.json({
        message: "User not found",
        status: 404,
      });
    }

    return NextResponse.json({ user: updatedUser, status: 200 });
  } catch (error) {
    console.error("Error updating user:", error);
    return NextResponse.json({
      message: "Failed to update user",
      status: 500,
    });
  }
};


export const DELETE = async (request) => {
  try {
    const { id } = await request.json();
    await connectMongoDB();

    const deletedUser = await Users.findByIdAndDelete(id);

    if (!deletedUser) {
      return NextResponse.json({
        message: "User not found",
        status: 404,
      });
    }

    return NextResponse.json({
      message: "User deleted successfully",
      status: 200,
    });
  } catch (error) {
    console.error("Error deleting user:", error);
    return NextResponse.json({
      message: "Failed to delete user",
      status: 500,
    });
  }
};