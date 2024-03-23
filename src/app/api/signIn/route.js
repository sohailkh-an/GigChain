import {mongodb} from "../../../../lib/mongodb";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import User from "../../../../models/user";

export async function POST(request) {
  try {

    const { email, password } = await request.json();

    await mongodb();
    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json(
        { message: "Email not found" },
        {
          status: 404,
        }
      );
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return NextResponse.json(
        { message: "Incorrect password" },
        {
          status: 401,
        }
      );
    }

    return NextResponse.json(
      {
        message:
          "User registered successfully (Message coming from API endpoint",
      },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
  }
}
