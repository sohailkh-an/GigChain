import clientPromise from "@/utils/mongodb";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const client = await clientPromise;
    const db = client.db("GigChain");

    const reqBody = await request.json();
    const { email, password } = reqBody;
    console.log(email, password);

    const user = await db.collection("Users").findOne({ email });

    if (!user) {
      return new NextResponse(JSON.stringify({ message: "Email not found" }), {
        status: 404,
      });
    } else if (user.password !== password) {
      return new NextResponse(
        JSON.stringify({ message: "Password is incorrect" }),
        { status: 401 }
      );
    } else {
      return new NextResponse(
        JSON.stringify({ message: "User logged in successfully coming from API Endpoint" }),
        { status: 200 }
      );
    }

    return NextResponse.json(
        { message: "User registered successfully (Message coming from API endpoint" },
        { status: 201 }
      );
  } catch (error) {
    console.log(error);
  }
}
