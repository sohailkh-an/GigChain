import { NextResponse } from "next/server";
import clientPromise from "../../../utils/mongodb";
import User from "../../../models/user";
import bcrypt from "bcrypt";

export async function POST(request) {
  try {
    const client = await clientPromise;
    const db = client.db("GigChain");

    const { name, email, password } = await request.json();

    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    const existingUser = await db.collection("users").findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { message: "User with that email already exists" },
        { status: 409 }
      );
    }

    await db.collection("users").insertOne({
      name,
      email,
      passwordHash,
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
