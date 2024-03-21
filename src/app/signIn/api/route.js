import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import clientPromise from "../../../utils/mongodb";

export async function POST(request) {
  try {
    if (!email || !password) {
      return NextResponse.json(
        { message: "Email and password are required" },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db("GigChain");

    const { email, password } = await request.json();

    const user = await db.collection("users").findOne({ email });

    if (!user) {
      return NextResponse.json(
        { message: "User not found with the provided email" },
        {
          status: 404,
        }
      );
    }
    const passwordMatch = await bcrypt.compare(password, user.passwordHash);
    if (!passwordMatch) {
      return NextResponse.json(
        { message: "Password is incorrect" },
        { status: 401 }
      );
    }
    return NextResponse.json(
      {
        message: "User logged in successfully coming from API Endpoint",
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
  }
}
