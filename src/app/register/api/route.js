import { NextResponse } from "next/server";
import clientPromise from "../../../../utils/mongodb";
import bcrypt from "bcrypt";

export async function POST(request) {
  try {
    const client = await clientPromise;
    const db = client.db("GigChain");

    const { name, email, password, userType} = await request.json();

    if(!name || !email || !password || !userType) {
      return NextResponse.json(
        { message: "Please fill in all fields" },
        { status: 400 }
      );
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const existingUser = await db.collection("users").findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 409 }
      );
    }

    await db.collection("users").insertOne({
      name,
      email,
      password: hashedPassword,
      userType,
    });

    return NextResponse.json(
      {
        message:
          "User registered successfully (Message coming from API endpoint)",
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}