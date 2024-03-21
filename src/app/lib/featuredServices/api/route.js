import clientPromise from '../../../../../utils/mongodb';
import { NextResponse } from 'next/server';

export async function GET(req, res) {
  
    try {
      const client = await clientPromise;
      const db = client.db("GigChain"); 

      const featuredServices = await db.collection("Services")
        .find({ isFeatured: true }) 
        .toArray();

      return NextResponse.json(featuredServices);
    } catch (error) {
      return NextResponse.json({ error: error.message });
    }
}
