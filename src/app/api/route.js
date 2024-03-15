import { NextRequest } from 'next/server';
import clientPromise from '../../utils/mongodb';

export async function POST(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db('GigChain'); // Replace 'yourDatabaseName' with the name of your database


    //insert random user data to test the connection
    const newUser = await db.collection('Users').insertOne({
        name: "Zakir Nair",
        email: "naik.zakir@gmail.com",
        password: "Islam@Forever"
    });

    //fetch the user data




   
    const data = await db.collection('Users').find({}).toArray(); 

    if(data.length > 0){
      return new Response(JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
    else{
      return new Response("No data found", {
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }


  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
    res.status(500).json({ message: "Failed to connect to MongoDB", error: error.message });
  }
}
