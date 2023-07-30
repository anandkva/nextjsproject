import { NextResponse, NextRequest } from 'next/server';
import connectMongoDB from '@/libs/mongodb';
import Users, { IUser } from '@/models/user';

export const GET = async (
  request: NextRequest,
  { params }: { params: { id: string } }
): Promise<NextResponse> => {
  try {
    const { id } = params;

    if (!id) {
      return NextResponse.json({
        message: 'Please provide a user ID',
        status: 400,
      });
    }

    await connectMongoDB();

    const user: IUser | null = await Users.findOne({ _id: id });

    if (!user) {
      return NextResponse.json({
        message: 'User not found',
        status: 404,
      });
    }

    return NextResponse.json({
      user,
      status: 200,
    });
  } catch (error) {
    console.error('Error Get user:', error);
    return NextResponse.json({
      message: 'Failed to Get user',
      status: 500,
    });
  }
};
