import clientPromise from "../../../../utils/mongodb";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(request) {
  try {
    const client = await clientPromise;
    const db = client.db("GigChain");

    const { email, password } = await request.json();

    const user = await db.collection("users").findOne({ email });

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
