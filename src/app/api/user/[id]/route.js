import { NextResponse } from "next/server";
import connectMongoDB from "@/libs/mongodb";
import Users from "@/models/user";

export const GET = async (request, { params }) => {
  try {
    const { id } = params;
    await connectMongoDB();

    const user = await Users.findOne({ _id: id });

    return NextResponse.json({
      user,
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
