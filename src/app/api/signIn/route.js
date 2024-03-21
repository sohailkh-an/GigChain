import { NextResponse } from "next/server";
import { connectToDatabase } from "../../../../utils/server-helpers";
import prisma from "../../../../prisma";

export async function POST(request) {
  try {
    // const client = await clientPromise;
    // const db = client.db("GigChain");

    const reqBody = await request.json();
    const { email, password } = reqBody;
    console.log(email, password);

    await connectToDatabase();

    // const user = await prisma.User.findOne({ email });

    const user = await prisma.User.findUnique({
      where: {
        email: email,
      },
    });

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
        JSON.stringify({
          message: "User logged in successfully coming from API Endpoint",
        }),
        { status: 200 }
      );
    }
  } catch (error) {
    console.log(error);
  }
}
