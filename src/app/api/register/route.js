import { NextResponse } from "next/server";
import { mongodb } from "../../../../lib/mongodb";
import User from "../../../../models/user";
import bcrypt from "bcrypt";

export async function POST(request) {
  try {
    const { name, email, password, userType } = await request.json();

    console.log(name, email, password, userType);

    if (!name || !email || !password || !userType) {
      return NextResponse.json(
        { message: "Please fill in all fields" },
        { status: 400 }
      );
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    console.log(hashedPassword);

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 409 }
      );
    }
    await mongodb();
    await User.create({ name, email, password: hashedPassword, userType });

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
