// route.ts

import { NextResponse, NextRequest } from 'next/server';
import connectMongoDB from '@/libs/mongodb';
import Users, { IUser } from '@/models/user';
import CustomError from "@/components/customError";

export const POST = async (request: NextRequest): Promise<NextResponse> => {
  try {
    const { username, email, age } = await request.json();
    await connectMongoDB();

    const newUser: IUser = new Users({ username, email, age });
    const savedUser: IUser = await newUser.save();

    return NextResponse.json({ users: savedUser, status: 200 });
  } catch (error) {
  
    const err = error as CustomError;
    if (err instanceof CustomError && err.code === 11000) {
      // Duplicate key error (email already exists)
      return NextResponse.json({
        message: 'Email already exists',
        status: 400,
      });
    } else {
      console.error('Error creating user:', error);
      return NextResponse.json({
        message: 'Failed to create user',
        status: 500,
      });
    }
  }
};

export const GET = async (): Promise<NextResponse> => {
  try {
    await connectMongoDB();

    const userList: IUser[] = await Users.find();
    const userCount: number = await Users.countDocuments();

    return NextResponse.json({
      users: userList,
      count: userCount,
      status: 200,
    });
  } catch (error) {
    console.error('Error Get all users:', error);
    return NextResponse.json({
      message: 'Failed to Get all users',
      status: 500,
    });
  }
};

export const PUT = async (request: NextRequest): Promise<NextResponse> => {
  try {
    const { id, username, email, age } = await request.json();
    await connectMongoDB();

    const updatedUser: IUser | null = await Users.findByIdAndUpdate(
      id,
      { username, email, age },
      { new: true }
    );

    if (!updatedUser) {
      return NextResponse.json({
        message: 'User not found',
        status: 404,
      });
    }

    return NextResponse.json({ user: updatedUser, status: 200 });
  } catch (error) {
    console.error('Error updating user:', error);
    return NextResponse.json({
      message: 'Failed to update user',
      status: 500,
    });
  }
};

export const DELETE = async (request: NextRequest): Promise<NextResponse> => {
  try {
    const { id } = await request.json();
    await connectMongoDB();

    const deletedUser: IUser | null = await Users.findByIdAndDelete(id);

    if (!deletedUser) {
      return NextResponse.json({
        message: 'User not found',
        status: 404,
      });
    }

    return NextResponse.json({
      message: 'User deleted successfully',
      status: 200,
    });
  } catch (error) {
    console.error('Error deleting user:', error);
    return NextResponse.json({
      message: 'Failed to delete user',
      status: 500,
    });
  }
};
