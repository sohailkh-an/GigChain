import { NextRequest, NextResponse } from "next/server";
import clientPromise from "../../../utils/mongodb";
// import { hashPassword } from '../../utils/auth';

export async function POST(request, response) {
  try {
    const client = await clientPromise;
    const db = client.db("GigChain");

    const reqBody = await request.json();
    console.log(reqBody);
    const { name, email, password } = reqBody;

    console.log(name);
    console.log(email);
    console.log(password);

    //   const hashedPassword = await hashPassword(password);

    const existingUser = await db.collection("Users").findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 409 }
      );
    }

    await db.collection("Users").insertOne({
      name,
      email,
      password,
    });

    return NextResponse.json(
      {
        message:
          "User registered successfully (Message coming from API endpoint",
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
