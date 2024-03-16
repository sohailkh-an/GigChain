import { NextRequest } from "next/server";
import clientPromise from "../../utils/mongodb";

export async function POST(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db("GigChain"); // Replace 'yourDatabaseName' with the name of your database

    //insert random user data to test the connection
    // const newUser = await db.collection("Services").insertOne({
    //   category: "Graphic Design",
    //   thumbnailUrl: "https://servicesthumbnailbucket.s3.ap-south-1.amazonaws.com/image+2.png",
    //   serviceProvider: "Kamran Javaid",
    //   rating: "4.8",
    //   reviews: "478",
    //   description: "Another guy offering graphic design services starting at $100 delivered in 3 days",
    //   isFeatured: true,
    // });

    //insert another user random data
    // const newUser2 = await db.collection("Services").insertOne({
    //   category: "Graphic Design",
    //   thumbnailUrl: "https://servicesthumbnailbucket.s3.ap-south-1.amazonaws.com/image+76.png",
    //   serviceProvider: "Mehdi Hassan",
    //   rating: "5",
    //   reviews: "3478",
    //   description: "The only guy with professional graphic design services starting at $500 delivered in 3 weeks",
    //   isFeatured: true,
    // });


    const newUser3 = await db.collection("Services").insertOne({
      category: "Graphic Design",
      thumbnailUrl: "https://servicesthumbnailbucket.s3.ap-south-1.amazonaws.com/image+1.png",
      serviceProvider: "Talha Qamar",
      rating: "4.2",
      reviews: "574",
      description: "Luxury graphic design services starting at $1000 delivered in 14 days",
      isFeatured: true,
    });

    //fetch the user data

    const data = await db.collection("Services")
    .find({ isFeatured: true }) // Assuming there's a 'featured' field to filter by
    .toArray();

    if (data.length > 0) {
      return new Response(JSON.stringify(data), {
        headers: {
          "Content-Type": "application/json",
        },
      });
    } else {
      return new Response("No data found", {
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
    res
      .status(500)
      .json({ message: "Failed to connect to MongoDB", error: error.message });
  }
}
