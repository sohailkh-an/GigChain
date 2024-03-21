// import { PrismaClient }  require('@prisma/client');
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

// This should be the default export for Next.js API routes
export async function GET(req, res) {

  await prisma.$connect();
  if (req.method !== 'GET') {
    // If not a POST request, send a 405 Method Not Allowed response
    return res.status(405).json({ message: "Method Not Allowed. Try POST" });
  }

  try {

    // Create a new testUser
    // await prisma.testUser.create({
    //   data: {
    //     name: "Sina Bathaie",
    //     email: "sina.bathaie@vevo.com",
    //     passwordHash: "thisissinapassword",
    //   },
    // });

    // Find the first testUser
    const testUsers = await prisma.testUser.findMany();

    // Check if data is not null instead of checking data.length
    if (data) {
      return NextResponse.json(data);
    } else {
      return NextResponse.json({ message: "No testUser found" });
    }
  } catch (error) {
    console.error("Failed to connect to MongoDB 22March", error);

    // Send the error message in the response
    return NextResponse.json({ message: "Failed to connect to MongoDB" });
  } finally {
    // Disconnect from Prisma
    await prisma.$disconnect();
  }
}
