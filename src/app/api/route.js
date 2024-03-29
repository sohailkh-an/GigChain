import { NextResponse } from "next/server";
import {mongodb} from "../../../lib/mongodb";
import Service from "../../../models/service";

export async function POST(req, res) {
  try {

    await mongodb();

    await Service.create({
      category: "Graphic Design",
      thumbnailUrl: "https://servicesthumbnailbucket.s3.ap-south-1.amazonaws.com/image+2.png",
      serviceProvider: "Kamran Javaid",
      rating: "4.8",
      reviews: "478",
      description: "Another guy offering graphic design services starting at $100 delivered in 3 days",
      isFeatured: true,
    });

    //insert another user random data
    await Service.create({
      category: "Graphic Design",
      thumbnailUrl: "https://servicesthumbnailbucket.s3.ap-south-1.amazonaws.com/image+76.png",
      serviceProvider: "Mehdi Hassan",
      rating: "5",
      reviews: "3478",
      description: "The only guy with professional graphic design services starting at $500 delivered in 3 weeks",
      isFeatured: true,
    });

    await Service.create({
      category: "Graphic Design",
      thumbnailUrl: "https://servicesthumbnailbucket.s3.ap-south-1.amazonaws.com/image+1.png",
      serviceProvider: "Talha Qamar",
      rating: "4.2",
      reviews: "574",
      description: "Luxury graphic design services starting at $1000 delivered in 14 days",
      isFeatured: true,
    });

    await Service.create({
      category: "Graphic Design",
      thumbnailUrl: "https://servicesthumbnailbucket.s3.ap-south-1.amazonaws.com/image+78.png",
      serviceProvider: "Talha Qamar",
      rating: "4.2",
      reviews: "574",
      description: "Luxury graphic design services starting at $1000 delivered in 14 days",
      isFeatured: true,
    });

    await Service.create({
      category: "Graphic Design",
      thumbnailUrl: "https://servicesthumbnailbucket.s3.ap-south-1.amazonaws.com/image+82.png",
      serviceProvider: "Talha Qamar",
      rating: "4.2",
      reviews: "574",
      description: "Luxury graphic design services starting at $1000 delivered in 14 days",
      isFeatured: true,
    });


    const data = await Service.find({ isFeatured: true });

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
    return NextResponse.json({ error: "Failed to connect to MongoDB" });
    
  }
}
